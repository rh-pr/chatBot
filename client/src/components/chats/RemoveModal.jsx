import { useChat } from "../../context/ChatContext";
import { useUser } from "../../context/UserContext"


function RemoveModal() {
    const { modalData } = useUser();
    const { setIsRemoveChatOpen } = useChat();

    const closeModal = () => {
        setIsRemoveChatOpen(false)
    }

  return (
    <div className="modal-bg">
        <form action="" className="modal-form">
            <p>{modalData.msg}</p>
            <div className="modal-btns">
                <button className="modal-function modal-btn" onClick={() => modalData.workedFunction()}>{modalData.title}</button>
                <button className="modal-close modal-btn" onClick={() => closeModal()}>X</button>
            </div>
        
        </form>
      </div>
  )
}

export default RemoveModal
