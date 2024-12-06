// ChatContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { defaultChats, dumMsgs} from '../constatns/default';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [chats, setChats] = useState(defaultChats);
    const [isCreateChatOpen, setIsCreateChatOpen] = useState(false);
    const [activeChat, setActiveChat] = useState(null);
    const [isRemoveChatOpen, setIsRemoveChatOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen ] = useState(false);
    // const [messagesList, setMsgsList] = useState(null);
    const [messagesList, setMsgsList] = useState(dumMsgs);
    const [findingChat, setFindingChat] = useState('');
    const [selectedChat, setSelectedChat] = useState('');


    const [testing, setTesting] = useState('');

    const addNewChat = (chat) => {
        setChats(prev => [...prev,chat]);
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

    useEffect(() => {
        const savedChats = window.sessionStorage.getItem('chats');
        if( savedChats ) { setChats(JSON.parse(savedChats))};
    },[])

    useEffect(() => {
        window.sessionStorage.setItem('chats', JSON.stringify(chats));
    },[chats])

    useEffect(() => {
        console.log('testing',testing)
    },[testing])

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
            formatDate
        }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);
