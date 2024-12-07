import { useChat } from "../../context/ChatContext";
import { useUser } from "../../context/UserContext"


function RemoveModal() {
    const { modalData } = useUser();
    const { setIsRemoveChatOpen, chats, setChats, selectedChat, deleteChat, removeMessages,setActiveChat } = useChat();

    const closeModal = () => {
        setIsRemoveChatOpen(false)
    }

    const removeChat = () => {
        const fileterd = chats.filter(chat => chat.id !== selectedChat);
        setChats(fileterd);
        deleteChat(selectedChat);
        removeMessages(selectedChat)
        setIsRemoveChatOpen(false)   
        setActiveChat(null)
    }

  return (
    <div className="modal-bg">
        <form action="" className="modal-form" onSubmit={() => removeChat()}>
            <p>{modalData.msg}</p>
            <div className="modal-btns">
                <button className="modal-function modal-btn" type="submit">Delete</button>
                <button className="modal-close modal-btn" onClick={() => closeModal()}>X</button>
            </div>
        
        </form>
      </div>
  )
}

export default RemoveModal
