import { useEffect, useState } from 'react';
import ChatCard from '../chats/ChatCard';
import { useChat } from '../../context/ChatContext';

function ChatList() {
  const { chats } = useChat();
  const [chatsList, setChatsList] = useState(chats);

  useEffect(() => {
    setChatsList(chats);
  },[chats])

  return (
    <div className="chat-list"> 
      <p className='title'>Charts</p>
     <div className='list'>
      {chatsList && chatsList.map((chat, ind) => 
        <ChatCard key={`chat-${ind}`} chat={chat}/>)}
     </div>

    </div>
  )
}

export default ChatList
