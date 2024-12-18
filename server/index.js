const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Server } = require('socket.io');



const userRoute = require('./routes/userRoute');
const chatRoute = require('./routes/chatRoute');
const messageRoute = require('./routes/messageRoute')
const socketControllers = require('./controllers/socketControllers');

const users = [];

require('dotenv').config();


const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());


const PORT = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.use('/api/users', userRoute);
app.use('/api/chats', chatRoute);
app.use('/api/messages', messageRoute);


const server = app.listen(PORT, () => {
    
    console.log(`server run on this port ${PORT}`)
});


mongoose.connect(uri).then(() => console.log('MongoDB contectes')).catch((error) => {console.log('MongoDB failed conection: ', error.message);});


const io = new Server(server, {
    cors: {
        origin: '*', //here chage to the client address
        methods: ['GET', 'POST']
    }
})

socketControllers(io);