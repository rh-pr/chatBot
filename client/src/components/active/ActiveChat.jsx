import { useChat } from '../../context/ChatContext'
import Avarar from './Avatar'
import Correspondence from './Correspondence'
import Form from './Form'
import girl from '../../assets/images/girl1.png';

function ActiveChat() {
  const { activeChat } = useChat(); 

  return (
    <div className="active-chat">
      {activeChat ? <>
        <div>
          <Avarar chat={activeChat} img={girl}/>
        </div>
        <Correspondence />
        <Form />
      </> : <p className='welcome-msg'>Welcome to our chat aplication</p>}
    </div>
  )
}

export default ActiveChat
