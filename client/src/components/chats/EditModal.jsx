import { useState } from "react";
import { useChat } from "../../context/ChatContext";


function EditModal() {
    const { setIsEditModalOpen, selectedChat, setChats, editChat } = useChat();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const closeModal = () => {
        setIsEditModalOpen(false);
    }

    const editChatName = (e) => {
      e.preventDefault();
      const editedData = {
        chatId: selectedChat,
        firstName: firstName,
        lastName: lastName
      }
      editChat(editedData);
      setChats((prevChat) =>
        prevChat.map((chat) =>
          chat.id === selectedChat ? { ...chat, firstName: firstName.trim().length > 0 ? firstName : chat.firstName, lastName: lastName.trim().length > 0 ? lastName : chat.lastName } : chat
        )
      );
      setIsEditModalOpen(false)
    }

  return (
    <div className="modal-bg">
       <form action="" className="modal-form" onSubmit={(e) => editChatName(e)}>
            <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Enter your first name" className="modal-input" />
            <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Enter your last name"  className="modal-input" />
         
            <div className="modal-btns">
                <button className="modal-function modal-btn"  type="submit">Edit</button>
                <button className="modal-close modal-btn" onClick={() => closeModal()}>X</button>
            </div>
        </form>
      </div>
  )
}

export default EditModal
