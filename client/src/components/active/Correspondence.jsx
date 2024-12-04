import girl from '../../assets/images/girl1.png';


function Correspondence() {

  return (
    <div className="corresp">
        {/* chagne msg-recieve for top */}
     <div className="msg-container msg-recieve">
     <figure>
        <img src={girl} alt="avatar"  />
      </figure>
        <div className=" msg">
            <p className={`msg-content`}>Hi, how are you?</p> 
            <p className="msg-time">8/17/2022, 7:43AM</p>
        </div>
     </div>

     <div className="msg-container msg-sende">
        <div className=" msg">
            <p className={`msg-content`}>Not bad, what about you?</p> 
            <p className="msg-time">8/17/2022, 7:45AM</p>
      </div>
     </div>

     <div className="msg-container msg-sende">
      <div className=" msg">
        <p className={`msg-content`}>How was your meeting?</p> 
        <p className="msg-time">8/17/2022, 7:45AM</p>
      </div>
     </div>

    </div>
  )
}

export default Correspondence
