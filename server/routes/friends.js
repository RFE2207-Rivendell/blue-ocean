const express = require('express');
const router = express.Router();
const model = require('../models/friendModel.js');

router.get('/friend', (req, res, next) => {
  let requesterId = req.user.id;
  model.findFriends(requesterId)
  .then(({rows}) => {
    res.status(200).send(rows);
  })
  .catch((error) => res.status(400).send(error));
});


// req.body.user1 - Integer (request sender account id)
// req.body.user2 - Integer (receiver account id)
router.post('/friend', (req, res, next) => {
  let requesterId = req.user.id;
  model.requestFriend(requesterId, req.body.user2)
    .then((connectionID) => {
      res.status(201).send(`${connectionID}`);
    })
    .catch((error) => console.log(error));
});

//accept friend status
//req.query.idToAccept
router.put('/friend', (req, res, next) => {
  let requesterId = req.user.id;
  model.acceptFriend(requesterId, req.query.idToAccept)
    .then(() => {
      model.createFriend(requesterId, req.query.idToAccept)
      .then((connectionID) => {
        res.status(202).send(`${connectionID}`)
      })
    })
    .catch((error) => res.status(400).send(error));
});

//delete friend or deny friend request
//req.query.friend_id
router.delete('/friend', (req, res, next) => {
  let requesterId = req.user.id;
  model.deleteFriend(requesterId, req.query.friend_id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((error) => res.status(400).send(error));
});

module.exports = router;


