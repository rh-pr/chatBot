
import Online from '../common/Online';

function Avatar({chat, img}) {


  return (
    <div className='avatar'>
      <figure>
        <img src={img} alt="avatar"  />
        <Online />
      </figure>
      {chat && <figcaption>
        <p>{chat.firstName} {chat.lastName}</p>
         {chat.lastMsg && <p className='avatar-msg'>{chat.lastMsg}</p>}
      </figcaption>}
    </div>
  )
}

export default Avatar
