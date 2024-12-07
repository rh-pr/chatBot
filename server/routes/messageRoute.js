const express = require('express');
const  { saveMessageToBD, getMessagesFromDB } = require('../controllers/messageController');

const router = express.Router();

// console.log(saveMessageToBD);

router.get('/:chatId', getMessagesFromDB);
router.post('/sendMsg', saveMessageToBD);


module.exports = router;
