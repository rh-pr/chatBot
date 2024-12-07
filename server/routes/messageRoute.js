const express = require('express');
const  { saveMessageToBD, getMessagesByID,getAllMessages } = require('../controllers/messageController');

const router = express.Router();

// console.log(saveMessageToBD);

router.get('/', getAllMessages)
router.get('/:chatId', getMessagesByID);
router.post('/sendMsg', saveMessageToBD);


module.exports = router;
