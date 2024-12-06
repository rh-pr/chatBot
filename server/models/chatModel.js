const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    userId: { type: String, require: true},
    firstName: {type: String, require: true},
    lastName: {type: String, require: true}
}, {
    timestamps: true
})

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
