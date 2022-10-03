const express = require('express');
const router = express.Router();
const model = require('../models/friendModel.js');

//req.query.userId
router.get('/friend', (req, res, next) => {
  model.findFriends(req.query.userId)
  .then(({rows}) => {
    res.status(200).send(rows);
  })
  .catch((error) => res.status(400).send(error));
});


// req.body.user1 - Integer (request sender account id)
// req.body.user2 - Integer (receiver account id)
router.post('/friend', (req, res, next) => {
  let connection = {
    user1: req.body.user1,
    user2: req.body.user2,
  }
  model.createFriend(connection)
    .then((connectionID) => {
      res.status(201).send(`${connectionID}`);
    })
    .catch((error) => console.log(error));
});

//accept friend status
//req.query.connectionId
router.put('/friend', (req, res, next) => {
  model.acceptFriend(req.query.connectionId)
    .then(() => {
      res.sendStatus(202);
    })
    .catch((error) => res.status(400).send(error));
});

//delete friend or deny friend request
//req.query.connectionId
router.delete('/friend', (req, res, next) => {
  model.deleteFriend(req.query.connectionId)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((error) => res.status(400).send(error));
});

module.exports = router;

