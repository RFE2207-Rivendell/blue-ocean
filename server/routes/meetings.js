const express = require('express');
const router = express.Router();
const meetingsModel = require('../models/meetingsModel.js');

router.get('/meetings', (req, res, next) => {
  let requesterId = req.user.id;
  //console.log(req);
  meetingsModel.findMeetings(requesterId)
  .then(({rows}) => {
    res.status(200).send(rows);
  })
  .catch((error) => res.status(400).send(error))
})

router.get('/meetings/requests', (res, req, next) => {
  let receiverId = req.user.id;
  meetingsModel.findMeetingsRequests(receiverId)


})

router.post('/meetings', (req, res, next) => {
  console.log(req.body)
  let requesterId = req.user.id;
  let receiverId = req.body.receiverId;
  let dateTime = req.body.dateTime;
  // let dateTime = 'October 15 04:05:06 2022 EST';
  meetingsModel.requestMeeting(requesterId, receiverId, dateTime)
  .then(({rows}) => {
    console.log(rows);
    res.status(201).send(rows)
  })
  .catch((error) => res.status(400).send(error))
})


router.put('/meetings', (req, res, next) => {
  let requesterId = req.user.id;
  let receiverId = req.user.id;
  let meetingDateTime = req.meeting.meetingDateTime;
})

// router.delete('/meetings', (req, res, next) => {
//   let requesterId = req.user.id;
//   let receiverId = req.user.id;
//   let meetingDateTime = req.meeting.meetingDateTime;
// })


module.exports = router;