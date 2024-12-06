const chatModel = require("../models/chatModel");

const createNewChat = async( req, res ) => {
    const { userId, firstName, lastName} = req.body;
    try {
        const chat = await chatModel.findOne({
            userId, 
            firstName,
            lastName
        }, {
            timestamp: true
        })

        if (chat) {
            return res.status(200).json(chat);
        } else {
            const newChat = new chatModel({userId, firstName, lastName});
            console.log('cansel', newChat);
            const response = await newChat.save();

            res.status(200).json(response);
        }
        
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const getChats = async( req, res) => {
    const { userId } = req.body;

   try {
        if (!userId) {
            res.status(400).json({ error: 'UserId is required' });
        } else {
            const chats = await chatModel.find({
                userId: userId
            })

            res.status(200).json(chats);
        }

   } catch(err) {
    console.log(err);
    res.status(500).json(err);
   }
}

const updateChat = async(req, res) => {
    const { chatId, firstName, lastName } = req.body;

   try {
    if( !chatId ) {
        res.status(400).json({error: 'ChatId is reqired'})
    } else {
        const updatedChat = await chatModel.findOneAndUpdate({
            _id: chatId,
            firstName: firstName,
            lastName: lastName
        });
    
        if (!updatedChat) {
            res.status(400).json({error: 'Chat not founded'})
        } else {
            res.status(200).json(updatedChat)
        } 
    }
   } catch (err) {
    console.log(err);
    res.status(500).json(err);
   }
}

const deleteChat = async(req, res) => {
    const { chatId } = req.body;

    try {
        if( !chatId) {
            res.status(400).json({error: 'ChatId is reqired'})
        } else {
            const deletedChat = await chatModel.findOneAndDelete({
                _id: chatId
            })

            if( !deletedChat) {
                res.status(400).json({error: 'This chat cant'})
            } else {
                res.status(200).json(deletedChat)
            }
        }

    } catch (err) {
    console.log(err);
    res.status(500).json(err);
   }
}


module.exports = {
    createNewChat,
    getChats,
    updateChat,
    deleteChat
}