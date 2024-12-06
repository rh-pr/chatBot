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


    useEffect(() => {
        const savedChats = window.sessionStorage.getItem('chats');
        if(savedChats) {
            setChats(JSON.parse(savedChats))
        } else {
            window.sessionStorage.setItem('chats', JSON.stringify(chats));
        }
    },[chats])

    return (
        <ChatContext.Provider value={{ 
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
            setIsEditModalOpen
        }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);
