// ChatContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { defaultChats} from '../constatns/default';
import { useUser } from './UserContext';
import { getRequest, postRequest, deleteRequest, updateRequest } from "../services/httpRequst";
// import { getChats } from "../../../server/controllers/chatController";
// import { postRequest } from '../services/httpRequst';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    
    const { user } = useUser();
    const [chats, setChats] = useState(defaultChats);
    const [isCreateChatOpen, setIsCreateChatOpen] = useState(false);
    const [activeChat, setActiveChat] = useState(null);
    const [isRemoveChatOpen, setIsRemoveChatOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen ] = useState(false);
    // const [messagesList, setMsgsList] = useState(null);
    const [messagesList, setMsgsList] = useState([]);
    const [findingChat, setFindingChat] = useState('');
    const [selectedChat, setSelectedChat] = useState('');


    const [testing, setTesting] = useState('');

    const addNewChatToDB = async(chat, user) => {
        const newChat = {
            chatId: chat.id,
            userId: user.id,
            firstName: chat.firstName,
            lastName: chat.lastName,
            lastMessage: chat.lastMsg,
            sendingTime: chat.lastMsgTime,
        }
        
        const url = `${import.meta.env.VITE_BASE_URL}/chats/newChat`;
        await postRequest(url, newChat);
    }

    const getChatsFromDB = async(userId) => {
        const updatedChats = await getRequest(`${import.meta.env.VITE_BASE_URL}/chats/${userId}`);
        if (!updatedChats) return [];
        const newChatsList = updatedChats.map(chat => {
             return {
                id: chat.chatId,
                userId: chat.userId,
                firstName: chat.firstName,
                lastName: chat.lastName,
                lastMsg: chat.lastMessage,
                lastMsgTime: chat.sendingTime,
            }});

        console.log('data from database', newChatsList);
        setChats(newChatsList);
    }

    const addNewChat = async (chat) => {
       if (user) {
        addNewChatToDB(chat, user);
       } 
        setChats(prev => [...prev, chat]);
    }

    const deleteChat = async(chatId) => {
        const url = `${import.meta.env.VITE_BASE_URL}/chats/deleteChat/${chatId}`;
        const res = await deleteRequest(url);
        console.log('deleted', res)
    }

    const editChat = async(editedData) => {
        const url = `${import.meta.env.VITE_BASE_URL}/chats/updateChat`;
        const response = await updateRequest(url, editedData);
        console.log('edited ', response); 
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

    const saveMsgToDB = async(msg) => {
        const url = `${import.meta.env.VITE_BASE_URL}/messages/sendMsg`;
        const newMsg = {
            chatId: msg.chatId,
            msg: msg.msg,
            sender: msg.sender,
            date: msg.time
        }
        console.log('url', url);
        console.log('newMsg', newMsg);


        const response = await postRequest(url, newMsg);
        if (!response) return -1;
        setMsgsList(prev => [...prev, {
            id: response._id,
            chatId: response.chatId,
            msg: response.msg,
            sender: response.sender,
            time: response.date
        }])
    }
    
    const getMessagesFromDB = async(chatId) => {
        if (user) {
            const url = `${import.meta.env.VITE_BASE_URL}/messages/${chatId}`;
            const response = await getRequest(url);
            // if (!response) {
            //     return -1;
            // }
            updateLastMessage(response.msg, response.date);
            
            setMsgsList({
                id: response._id,
                chatId: response.chatId,
                msg: response.msg,
                sender: response.sender,
                time: response.date
            });
        }
    }

    const removeMessages = async ( chatId ) => {
        const url = `${import.meta.env.VITE_BASE_URL}/messages/delete/${chatId}`;
        const response = await deleteRequest(url);

        console.log('delete message',response);
    }
    const updateMsgList = (newMsg) => {
        setMsgsList(prevMsg => [...prevMsg, newMsg])
    }

    const updateLastMessage = (msg, time, chatId) => {
        console.log('lalala', msg, time,chatId);
        
        setChats((prev) => prev.map((el => el.id === chatId ? {...el, lastMsg: msg, lastMsgTime: time} : el)));
    }

    useEffect(() => {
        const msg = messagesList[messagesList.length - 1];
        msg && updateLastMessage(msg.msg, msg.time, msg.chatId)

    },[messagesList])
    
    useEffect(() => {
        window.sessionStorage.setItem('chats', JSON.stringify(chats));
    },[chats])

    useEffect(() => {
        console.log('testing',testing)
    },[testing])


    useEffect(() => {
        if (!user) {
            setChats(defaultChats);
        } else {
            const updatedCatsList = async () => {
                await Promise.all(chats.map(async (chat) => addNewChatToDB(chat,user)));
                getChatsFromDB(user.id);

            };
            updatedCatsList();
        }
       
    },[user])

    return (
        <ChatContext.Provider value={{ 
            testing,
            setTesting,
            chats, 
            setChats, 
            isCreateChatOpen,
            setIsCreateChatOpen,
            activeChat,
            setActiveChat,
            messagesList,
            setMsgsList,
            isRemoveChatOpen,
            setIsRemoveChatOpen,
            isEditModalOpen,
            setIsEditModalOpen,
            findingChat,
            setFindingChat,
            selectedChat,
            setSelectedChat,

            addNewChat,
            formatDate,
            updateMsgList,
            deleteChat,
            editChat,
            saveMsgToDB,
            getMessagesFromDB,
            updateLastMessage,
            removeMessages
        }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);
