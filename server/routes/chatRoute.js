const express = require('express');
const {
    createNewChat,
    getChats,
    updateChat,
    deleteChat
} = require('../controllers/chatController');

const router = express.Router();

router.get('/:userId', getChats);
router.post('/newChat', createNewChat);
router.delete('/deleteChat/:chatId', deleteChat);
router.put('/updateChat', updateChat);

module.exports = router;