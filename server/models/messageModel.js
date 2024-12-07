const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    chatId: {type:String, required: true},
    message: {type:String, required: true},
    sender: {type: String, required: true},
    date: {type: String, required: true}
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;