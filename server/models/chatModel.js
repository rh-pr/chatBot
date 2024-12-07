const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    chatId: {type:String, required: true},
    userId: { type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    lastMessage: {type:String, require: true},
    sendingTime: {type: String, require: true}
}, {
    timestamps: true
})

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
