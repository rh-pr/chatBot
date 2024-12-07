/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import girl from '../../assets/images/girl1.png';
import { useChat } from '../../context/ChatContext';


function Correspondence() {
  const { messagesList, activeChat } = useChat();
  const [filteredMsg, setFilteredMsg] = useState(messagesList);

  useEffect(() => {
    if (!messagesList || !activeChat) return;
    const filtered = messagesList.filter(msg => msg.chatId === activeChat.id);
    setFilteredMsg(filtered);
  },[messagesList, activeChat])

  return (
    <div className="corresp">
      {filteredMsg && filteredMsg.map((msg) => 
      <div className={`msg-container ${msg.sender === 'user' ? 'msg-sende' :  'msg-recieve'}`} key={msg.id}>
       {msg.sender === 'bot' && <figure>
         <img src={girl} alt="avatar"  />
       </figure>}
         <div className=" msg">
             <p className={`msg-content`}>{msg.msg}</p> 
             <p className="msg-time">{msg.time}</p>
         </div>
      </div>)}
    </div>
  )
}

export default Correspondence
