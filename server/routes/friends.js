const express = require('express');
const router = express.Router();
const friendModel = require('../models/friendModel.js');
const accountModel = require('../models/accountModel.js');
const chatModel = require('../models/chatModel.js');

// GET REQUESTS //

// Get desired languages for a given accountId
// If accountId is not provided, retrieves info for requesting user
router.get('/friend', (req, res, next) => {
  let requesterId = req.query.accountId || req.user.id;
  friendModel.findFriendsInfo(requesterId)
    .then(({rows}) => {
      res.status(200).send(rows);
    })
    .catch((error) => res.sendStatus(404));
});

router.get('/friend/requests', (req, res, next) => {
  let requesterId = req.user.id;
  friendModel.findFriendRequests(requesterId)
    .then(({rows}) => {
      res.status(200).send(rows);
    })
    .catch((error) => res.sendStatus(404));
});

// POST REQUESTS //

// req.body.requestedId - Integer (receiver account id)
router.post('/friend', (req, res, next) => {
  let requesterId = req.user.id;
  accountModel.getAccountTypeById(req.body.requestedId)
    .then((result) => {
      if (!result.rows[0]) { // Checks that the requestedId account exists
        return res.status(400).send({
          message: 'Provided accountId not found'
        });
      }
      if (result.rows[0].is_teacher !== req.user.isTeacher) { // Checks that the requester and requesting are of the same type
        return res.status(403).send({
          message: 'Students and teachers can not be friends!'
        });
      }
      friendModel.requestFriend(requesterId, req.body.requestedId)
        .then((connectionID) => {
          res.status(201).send({
            message: 'Friend request sent',
            connectionID
          });
        })
        .catch((error) => res.sendStatus(400));
    })
    .catch((error) => res.sendStatus(400));

});

// PUT / PATCH REQUESTS //

//accept friend status
//req.query.idToAccept
router.put('/friend', (req, res, next) => {
  let requesterId = req.user.id;
  friendModel.acceptFriend(requesterId, req.query.idToAccept)
    .then(() => friendModel.createFriend(requesterId, req.query.idToAccept))
    .then(() => chatModel.createRoom(requesterId, req.query.idToAccept))
    .then(() => res.status(202))
    .catch((error) => res.sendStatus(400));
});

// DELETE REQUESTS //

//delete friend or deny friend request
//req.query.friend_id
router.delete('/friend', (req, res, next) => {
  let requesterId = req.user.id;
  friendModel.deleteFriend(requesterId, req.query.friend_id)
    .then(res.sendStatus(204))
    .catch((error) => res.sendStatus(400));
});

//req.query.friend_id
router.delete('/friend/request', (req, res, next) => {
  let requesterId = req.user.id;
  friendModel.deletePendingFriend(requesterId, req.query.friend_id)
    .then(res.sendStatus(204))
    .catch((error) => res.sendStatus(400));
});

module.exports = router;
