import { useEffect } from 'react';
import ActiveChat from '../components/active/ActiveChat';
import ChatList from '../components/chats/ChatList';
import Nav from '../components/common/Nav';

import { io } from "socket.io-client";
import { useChat } from '../context/ChatContext';
import { useUser } from '../context/UserContext';



function Chat() {

  const socket = io(`${import.meta.env.VITE_BASE_URL}`, {
    transports: ['websocket'],
    withCredentials: true, 
  });

  const {sendingMsg, updateMsgList, updateLastMessage, setNewNotification } = useChat();
  const { generateUnicID } = useUser();

  useEffect(() => {
    const userId = generateUnicID();
    socket.on("connect", () => {
      socket.emit('addNewUser', userId)
    });


    return () => socket.disconnect();
  },[])

  useEffect(() => {

    socket.emit('sendMessage',sendingMsg);
    socket.on('newMessage', async (data) => {
      updateLastMessage(data.msg, data.time);
      updateMsgList(data);
      setNewNotification(data.chatId)
    } )

    return () => socket.disconnect();

  },[sendingMsg]);

  return (
    <div className="chat">
      <div className='main'>
        <Nav />
        <ChatList />
      </div>
      <ActiveChat />
    </div>
  )
}

export default Chat
