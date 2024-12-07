import ActiveChat from '../components/active/ActiveChat';
import ChatList from '../components/chats/ChatList';
import Nav from '../components/common/Nav';

function Chat() {
  return (
    <div className="chat">
      <div className='main'>
        <Nav />
        <ChatList />
      </div>
      <ActiveChat />
    </div>
  )
}

export default Chat
