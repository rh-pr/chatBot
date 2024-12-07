const express = require('express');
const  { saveMessageToBD, getMessagesByID,getAllMessages, deleteMessages } = require('../controllers/messageController');

const router = express.Router();

// console.log(saveMessageToBD);

router.delete('/delete/:chatId', deleteMessages);
router.get('/', getAllMessages)
router.get('/:chatId', getMessagesByID);
router.post('/sendMsg', saveMessageToBD);


module.exports = router;
