const messageModel = require('../models/messageModel');

const users = [];

const socketControllers = async(io) => {
    io.on('connect', (socket) => {

        socket.on('addNewUser', (userId) => {
            if(!users.includes(userId)) {
                users.push(socket.id)
            };
        })


        socket.on('sendMessage', async (data) => {
           if (data) {
            const newMessage = new messageModel({chatId: data.chatId, msg: data.msg, sender: data.sender, date: data.time});
            await newMessage.save();

            const answer = await getResponse(data.msg);

            if (answer) {
                const date = formatDate(new Date());
                const answerMsg = new messageModel({chatId:data.chatId, msg:answer, sender: "bot", date});
                const response = await answerMsg.save();

                setTimeout(() => {
                    io.emit('newMessage', response)
                }, 3000)
            }
           }
        } )

        socket.on('disconnect', () => {
            const index = users.findIndex(el => el === socket.id);
            if(index !== -1) {
                users.splice(index, 1);
            }
        })
    });
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


module.exports = socketControllers;