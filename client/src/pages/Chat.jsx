import ActiveChat from '../components/active/ActiveChat';
import ChatList from '../components/chats/ChatList';
import Nav from '../components/common/Nav';
import ToastNotification from '../components/common/ToastNotification';

function Chat() {
  return (
    <div className="chat">
      <ToastNotification />
      <div className='main'>
        <Nav />
        <ChatList />
      </div>
      <ActiveChat />
    </div>
  )
}

export default Chat
