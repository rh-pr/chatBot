import { useState } from "react";
import { useUser } from "../../context/UserContext";


function LoginModal() {
    const { setIsLoginModalOpen, logIn } = useUser();

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const closeModal = () => {
        setIsLoginModalOpen(false);
    }
  
    const handleLogin = (e) => {
      e.preventDefault();
      const data = {
        email: userEmail,
        password: userPassword
      };
      
      logIn(data);
      setUserEmail('');
      setUserPassword('');
      setIsLoginModalOpen(false);

    }

    return (
      <div className="modal-bg">
        <form action="" className="modal-form" onSubmit={(e) => handleLogin(e)}>
            <input onChange={(e) => setUserEmail(e.target.value)} value={userEmail} type="email" name="modal-email" className="modal-input"  placeholder="Email" required/>
            <input onChange={(e) => setUserPassword(e.target.value)} value={userPassword} type="password"  className="modal-input" placeholder="Password" required/>
            <div className="modal-btns">
                <button className="modal-function modal-btn" type="submit">Log In</button>
                <button className="modal-close modal-btn" onClick={() => closeModal()}>X</button>
            </div>
        
        </form>
      </div>
    )
}

export default LoginModal;

