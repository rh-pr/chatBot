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
        const sav = await newMessage.save();

        if (sav) {
            const date = formatDate(new Date());

            const answer = await getResponse(msg);

            const answerMsg = new messageModel({chatId, msg:answer, sender: "bot", date: formatDate(new Date())});

            const response = await answerMsg.save();
            res.status(200).json(response);
        }
        // setTimeout( async() =>{
            

        // }, 3000)


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


const getResponse = async (input) => {
    try {
        const response = await fetch(`https://api-inference.huggingface.co/models/${process.env.HUGGING_FACE_AI_MODEL}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.HUGGING_FACE_TOKEN_KEY}`,
                'Content-Type': 'application/json',        
            }, 
            body: JSON.stringify({
                inputs: `Instruction: Answer concisely.\n\n${input}\n\n`,
              
            })
        })

        if (!response.ok) {
            throw new Error (await response.text())
        }

        const data = await response.json();
        console.log(data[0].generated_text.split('\n\n')[2]);
        
        return data[0].generated_text.split('\n\n')[2] || 'Hmm... I have no mood to talk with you now...'
       
    } catch (e) {
        console.log(e);
        
    }
}


module.exports = {
    getAllMessages,
    saveMessageToBD,
    getMessagesByID,
    deleteMessages
}