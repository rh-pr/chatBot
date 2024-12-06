import { useUser } from "../../context/UserContext";


function LoginModal() {
    const { setIsLoginModalOpen, modalData } = useUser();

    const closeModal = () => {
        setIsLoginModalOpen(false);
    }
  
    return (
      <div className="modal-bg">
        <form action="" className="modal-form">
            <input type="text" placeholder="Enter your first name" className="modal-input" required/>
            <input type="text" placeholder="Enter your last name"  className="modal-input" required/>
            <input type="email" name="modal-email" className="modal-input"  placeholder="Email"/>
            <input type="password"  className="modal-input" placeholder="Password"/>
            <div className="modal-btns">
                <button className="modal-function modal-btn" onClick={() => modalData.workedFunction()}>{modalData.title}</button>
                <button className="modal-close modal-btn" onClick={() => closeModal()}>X</button>
            </div>
        
        </form>
      </div>
    )
}

export default LoginModal;

