const express = require('express');
const router = express.Router();
const model = require('../models/languageModel.js');

// GET REQUESTS //

// Get all languages available
// TODO(?): Instead of returning an array of objects with id & name keys,
// return a singular JSON object with key = id, value = name
// this will make it easier for the client to store and access this data
router.get('/languages', (req, res, next) => {
  model.getAllLanguages()
    .then((result) => {
      let languages = result.rows;
      res.status(200).send(languages);
    })
    .catch((error) => res.sendStatus(404));
});

// Get taught languages for a given accountId
// Querying this with an accountId for a student
// should result in a 404 (nothing will be found)
// If accountId is not provided, retrieves info for requesting user
router.get('/languages/taught', (req, res, next) => {
  let accountId = req.query.accountId || req.user.id;
  model.getTaughtLanguagesByTeacherId(accountId)
    .then((result) => {
      let languages = result.rows;
      res.status(200).send(languages);
    })
    .catch((error) => res.sendStatus(404));
});

// Get a list of accountIds for teachers who teach the provided language
// Expects in query:
//  languageId (INTEGER)
// Will return a list of accounts with these properties:
//  teacher_id (INTEGER)
//  lang_id (INTEGER)
//  taught_level (STRING)
// If required, it is up to the client to request
// extended information on each account (name, email, etc.) from /accounts
router.get('/languages/taught/accounts', (req, res, next) => {
  if (!req.query.languageId) {
    return res.sendStatus(400);
  }
  model.getTeachersByTaughtLanguageId(req.query.languageId)
    .then((result) => {
      let accounts = result.rows;
      res.status(200).send(accounts);
    })
    .catch((error) => res.sendStatus(404));
});

// Get known languages for a given accountId
// Querying this with an accountId for a teacher
// should result in a 404 (nothing will be found)
// If accountId is not provided, retrieves info for requesting user
router.get('/languages/known', (req, res, next) => {
  let accountId = req.query.accountId || req.user.id;
  model.getKnownLanguagesByUserId(accountId)
    .then((result) => {
      let languages = result.rows;
      res.status(200).send(languages);
    })
    .catch((error) => res.sendStatus(404));
});

// Get desired languages for a given accountId
// Querying this with an accountId for a teacher
// should result in a 404 (nothing will be found)
// If accountId is not provided, retrieves info for requesting user
router.get('/languages/desired', (req, res, next) => {
  let accountId = req.query.accountId || req.user.id;
  model.getDesiredLanguagesByUserId(accountId)
    .then((result) => {
      let languages = result.rows;
      res.status(200).send(languages);
    })
    .catch((error) => res.sendStatus(400));
});

// POST REQUESTS //

// Expects in req.body:
//  langId - Integer
//  taughtLevel - String in range ('1', '2', '3', '4', '5', 'AP')
// Meant for teachers, will 403 on request by a student account
router.post('/languages/taught', (req, res, next) => {
  if (!req.user.isTeacher) {
    return res.sendStatus(403);
  }
  let langId = parseInt(req.body.langId);
  let taughtLevel = req.body.taughtLevel.toString();
  // TODO: Figure out how to insert many rather than just one at a time
  model.insertTaughtLanguageById(req.user.id, langId, taughtLevel)
    .then((result) => res.sendStatus(201))
    .catch((error) => res.sendStatus(400));
});

// Expects in req.body:
//  langId - Integer
// Meant for students, will 403 on request by a teacher account
router.post('/languages/known', (req, res, next) => {
  if (req.user.isTeacher) {
    return res.sendStatus(403);
  }
  let langId = parseInt(req.body.langId);
  model.insertKnownLanguageById(req.user.id, langId)
    .then((result) => res.sendStatus(201))
    .catch((error) => res.sendStatus(400));
});

// Expects in req.body:
//  langId - Integer
// Meant for students, will 403 on request by a teacher account
router.post('/languages/desired', (req, res, next) => {
  if (req.user.isTeacher) {
    return res.sendStatus(403);
  }
  let langId = parseInt(req.body.langId);
  model.insertDesiredLanguageById(req.user.id, langId)
    .then((result) => res.sendStatus(201))
    .catch((error) => res.sendStatus(400));
});

module.exports = router;
