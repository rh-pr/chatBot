const express = require('express');
const  { getMessagesByID,getAllMessages, deleteMessages } = require('../controllers/messageController');

const router = express.Router();

router.delete('/delete/:chatId', deleteMessages);
router.get('/', getAllMessages)
router.get('/:chatId', getMessagesByID);


module.exports = router;
