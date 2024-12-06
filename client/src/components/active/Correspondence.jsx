/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import girl from '../../assets/images/girl1.png';
import { useChat } from '../../context/ChatContext';


function Correspondence() {
  const { messagesList, activeChat } = useChat();
  const [filteredMsg, setFilteredMsg] = useState(messagesList);

  useEffect(() => {
    if (!messagesList || !activeChat) return;
    console.log('active chat' , activeChat)
    const filtered = messagesList.filter(msg => msg.chatId === activeChat.id);
    setFilteredMsg(filtered);
  },[messagesList, activeChat])

  return (
    <div className="corresp">
      {filteredMsg && filteredMsg.map((msg) => 
      <div className={`msg-container ${msg.sender === 'user' ? 'msg-sende' :  'msg-recieve'}`} key={msg.id}>
        <figure>
         <img src={girl} alt="avatar"  />
       </figure>
         <div className=" msg">
             <p className={`msg-content`}>{msg.msg}</p> 
             <p className="msg-time">{msg.time}</p>
         </div>
      </div>)}
    
        {/* chagne msg-recieve for top */}
     {/* <div className="msg-container msg-recieve">
     <figure>
        <img src={girl} alt="avatar"  />
      </figure>
        <div className=" msg">
            <p className={`msg-content`}>Hi, how are you?</p> 
            <p className="msg-time">8/17/2022, 7:43AM</p>
        </div>
     </div>

     <div className="msg-container msg-sende">
        <div className=" msg">
            <p className={`msg-content`}>Not bad, what about you?</p> 
            <p className="msg-time">8/17/2022, 7:45AM</p>
      </div>
     </div>

     <div className="msg-container msg-sende">
      <div className=" msg">
        <p className={`msg-content`}>How was your meeting?</p> 
        <p className="msg-time">8/17/2022, 7:45AM</p>
      </div>
     </div> */}

    </div>
  )
}

export default Correspondence
