import girl from '../../assets/images/girl1.png';
import Online from '../common/Online';

function Avatar({msg}) {
  return (
    <div className='avatar'>
      <figure>
        <img src={girl} alt="avatar"  />
        <Online />
      </figure>
      <figcaption>
        <p>Alice Freeman</p>
        {msg && <p className='avatar-msg'>{msg}</p>}
      </figcaption>
    </div>
  )
}

export default Avatar
