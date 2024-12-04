import Avarar from './Avatar'
import Correspondence from './Correspondence'
import Form from './Form'
function ActiveChat() {
  return (
    <div className="active-chat">
      <div>
        <Avarar />
      </div>
      <Correspondence />
      <Form />
    </div>
  )
}

export default ActiveChat
