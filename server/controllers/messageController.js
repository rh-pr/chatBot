const messageModel = require('../models/messageModel');
const io = require('../index').io;

const users = [];

const generateAnswerMsg = (msg) => {
    return msg.split('').reverse().join('');
}

const getMessagesByID = async(req, res) => {
    const { chatId } = req.params;

    try {
        if (!chatId) {
            res.status(400).json({ error: 'UserId is required' });
        } else {
            const messages = await messageModel.find({
                chatId: chatId
            })

            res.status(200).json(messages);
        }

   } catch(err) {
    console.log(err);
    res.status(500).json(err);
   }
}

const getAllMessages = async(req, res) => {

    try {
        const messages = await messageModel.find({})

        res.status(200).json(messages);

   } catch(err) {
    console.log(err);
    res.status(500).json(err);
   }
}

const deleteMessages = async(req, res) => {
    const { chatId } = req.params;

    try {
        if (!chatId) {
            res.status(400).json({ error: 'UserId is required' });
        } else {
            const messages = await messageModel.deleteMany({
                chatId: chatId
            })

            res.status(200).json(messages);
        }
    }catch(err) {
    console.log(err);
    res.status(500).json(err);
   }
}

module.exports = {
    getAllMessages,
    getMessagesByID,
    deleteMessages
}