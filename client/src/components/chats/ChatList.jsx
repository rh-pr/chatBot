import { useEffect, useState } from 'react';
import ChatCard from '../chats/ChatCard';
import { useChat } from '../../context/ChatContext';

function ChatList() {
  const { chats, findingChat } = useChat();
  const [chatsList, setChatsList] = useState(chats);

  useEffect(() => {
    setChatsList(chats);
  },[chats])

  useEffect(() => {
    const filtered = chats.filter(chat => chat.firstName.includes(findingChat) || chat.lastName.includes(findingChat));
    setChatsList(filtered);
  },[findingChat])

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
