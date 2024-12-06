import { useChat } from "../../context/ChatContext";
import { useUser } from "../../context/UserContext";

function NewChatModal() {
    const { modalData } = useUser();
    const { setIsCreateChatOpen } = useChat();

    const closeModal = () => {
        setIsCreateChatOpen(false);

    }
  
    return (
      <div className="modal-bg">
        <form action="" className="modal-form">
            <input type="text" placeholder="Enter your first name" className="modal-input" required/>
            <input type="text" placeholder="Enter your last name"  className="modal-input" required/>
            <div className="modal-btns">
                <button className="modal-function modal-btn" onClick={() => modalData.workedFunction()}>{modalData.title}</button>
                <button className="modal-close modal-btn" onClick={() => closeModal()}>X</button>
            </div>
        
        </form>
      </div>
    )
}

export default NewChatModal
