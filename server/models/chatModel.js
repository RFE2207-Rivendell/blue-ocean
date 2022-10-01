const query = require('../db/db.js').poolQuery;

module.exports.getRoomsByAccountId = (accountId, sort='room_id DESC') => {
  return query(`
    SELECT room_id
      FROM participants
      WHERE part_account_id=${accountId}
    ORDER BY ${sort}
  `);
};

// Verifies that the requesting account (accountId) has permission to read from this room's messages
// By only returning messages from rooms for which the accountId is a participant
module.exports.getMessagesByRoomId = (roomId, accountId, sort='created_at DESC') => {
  return query(`
    SELECT
      account_message.message_id,
      account_message.account_id,
      account_message.message,
      account_message.created_at
        FROM account_message, participants
        WHERE account_message.room_id=${roomId}
          AND participants.part_account_id = ${accountId}
          AND account_message.room_id = participants.room_id
    ORDER BY ${sort}
  `);
};

// TODO: Should first verify that the two participants are connected, work with Gus on this
module.exports.createRoom = (participantOneId, participantTwoId) => {
  return query(`
    INSERT INTO account_room
    VALUES (DEFAULT)
    RETURNING room_id
  `)
    .then((createRes) => {
      if (createRes.name === 'error') {
        throw new Error(createRes.message);
      }
      let roomId = createRes.rows[0].room_id;
      return Promise.all([roomId,
        query(`
          INSERT INTO participants(
            part_account_id,
            room_id
          ) VALUES (
            ${participantOneId},
            ${roomId}
          )
        `),
        query(`
          INSERT INTO participants(
            part_account_id,
            room_id
          ) VALUES (
            ${participantTwoId},
            ${roomId}
          )
        `)
      ]);
    })
    .then((result) => {
      let roomId = result[0]
      return roomId;
    })
};

module.exports.postMessage = (roomId, accountId, message) => {
  return query(`
    INSERT INTO account_message(
      room_id,
      account_id,
      message
    ) VALUES (
      ${roomId},
      ${accountId},
      '${message}'
    )
  `);
};