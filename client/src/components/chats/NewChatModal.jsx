import { useState } from "react";
import { useChat } from "../../context/ChatContext";
import { useUser } from "../../context/UserContext";

function NewChatModal() {
    const { generateUnicID } = useUser();
    const { setIsCreateChatOpen, addNewChat } = useChat();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')

    const closeModal = () => {
        setIsCreateChatOpen(false);
    }

    const createNewChat = (e) => {
      e.preventDefault();
      const newChat = { 
        id: generateUnicID(),
        firstName: firstName,
        lastName: lastName,
        lastMsg: '',
        lastMsgTime: ''
      }
      addNewChat(newChat);

      setFirstName('');
      setLastName('');
      setIsCreateChatOpen(false)
    }
  
    return (
      <div className="modal-bg">
        <form action="" className="modal-form" onSubmit={(e) => createNewChat(e)}>
            <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Enter your first name" className="modal-input" required/>
            <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Enter your last name"  className="modal-input" required/>
            <div className="modal-btns">
                <button className="modal-function modal-btn" type="submit">Create</button>
                <button className="modal-close modal-btn" onClick={() => closeModal()}>X</button>
            </div>
        
        </form>
      </div>
    )
}

export default NewChatModal
