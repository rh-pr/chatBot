// ChatContext.js
import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [chats, setChats] = useState(null);
    const defaultChats = ['chat 1', 'chat 2'];

    return (
        <ChatContext.Provider value={{ chats, setChats, defaultChats }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);
