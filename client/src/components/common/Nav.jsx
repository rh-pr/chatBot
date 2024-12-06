import Online from './Online';
import girl from '../../assets/images/girl1.png';
import defaultUser from '../../assets/images/user.png';
import Button from '../common/Button';
import { useUser } from '../../context/UserContext';
import { useChat } from '../../context/ChatContext';

function Nav() {
  const { setIsLoginModalOpen, setModalData, user } = useUser();
  const { setIsCreateChatOpen, setFindingChat } = useChat();

  const logIn = () => {
    console.log('login')
  }

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setModalData({
      msg: 'Log In',
      title: 'Log In',
      workedFunction: logIn
    })
  }

  const createNewChatModal = () => {
    setIsCreateChatOpen(true);
  }

  const findChat = (e) => {
    setFindingChat(e.target.value);
  }

  return (
    <div className="nav">
      <div className='header'>
      <figure >
       <img src={user ? girl : defaultUser} alt="avatar"  />
        {user && <Online />} 
      </figure>
      <div className='nav-btn'>
        <Button title='New Chat' btnFunction={createNewChatModal}/>
        <Button title='Log In' btnFunction={openLoginModal}/>
      </div>
      </div>
      <form action="" className='search-form'>
        <input onChange={(e) => findChat(e)} type="text" className='search-input' name='sr-input' id='sr-input' placeholder='Search or create new Chat' />
        <button className='search-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30">
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
          </svg>
        </button>
      </form>
      
    </div>
  )
}

export default Nav
