
function Form() {
  return (
    <form action="" className="msg-form">
      <input type="text"  className="msg-input" id="msg-input" placeholder="Type your message" />
      <button className="msg-btn">
      <svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path d="m27.45 15.11-22-11a1 1 0 0 0 -1.08.12 1 1 0 0 0 -.33 1l2.65 9.77h11.31v2h-11.31l-2.69 9.74a1 1 0 0 0 1 1.26 1 1 0 0 0 .45-.11l22-11a1 1 0 0 0 0-1.78z" fill="##aca8a8"/>
        <path d="m0 0h32v32h-32z" fill="none"/>
      </svg>
   </button>
    </form>
  )
}

export default Form
