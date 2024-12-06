
import './App.css'
import { useUser } from './context/UserContext';
import Chat from './pages/Chat'
import LoginModal from './components/common/LoginModal';
import NewChatModal from './components/chats/NewChatModal';
import { useChat } from './context/ChatContext';
import RemoveModal from './components/chats/RemoveModal';
import EditModal from './components/chats/EditModal';


function App() {
  const { isLoginModalOpen } = useUser();
  const { isCreateChatOpen, isRemoveChatOpen, isEditModalOpen } = useChat();

  return (
    <>
     {isLoginModalOpen && <LoginModal  />}
     {isCreateChatOpen && <NewChatModal />}
     {isRemoveChatOpen &&  <RemoveModal />}
     {isEditModalOpen &&  <EditModal />} 

      <Chat />
    </>
  )
}

export default App
