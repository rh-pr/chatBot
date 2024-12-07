const messageModel = require('../models/messageModel');

const generateAnswerMsg = (msg) => {
    return msg.split('').reverse().join('');
}

const formatDate = (date) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // Для відображення AM/PM
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

const saveMessageToBD = async(req, res) => {
    console.log('sendMsg ,', req.body);
    const {chatId, msg, sender, date } = req.body;
    try {
        const newMessage = new messageModel({chatId, msg, sender, date});
        await newMessage.save();

        setTimeout( async() =>{
            const answer = generateAnswerMsg(msg);
            const date = formatDate(new Date());

            const answerMsg = new messageModel({chatId, msg:answer, sender: "bot", date});

            const response = await answerMsg.save();
            res.status(200).json(response);

        }, 3000)


    } catch(err) {
        console.log(err);
        res.status(500).json(err);
       }
}

const getMessagesByID = async(req, res) => {
    console.log('hi');
    
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

module.exports = {
    getAllMessages,
    saveMessageToBD,
    getMessagesByID,
}