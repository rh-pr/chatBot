import { useEffect } from 'react';
import ChatCard from '../chats/ChatCard';
import { useChat } from '../../context/ChatContext';

function ChatList() {

  const context = useChat()
  useEffect(() => {
    console.log('log ', context.defaultChats);
  },[])
  return (
    <div className="chat-list"> 
      <p className='title'>Charts</p>
     <div className='list'>
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
     </div>

    </div>
  )
}

export default ChatList
