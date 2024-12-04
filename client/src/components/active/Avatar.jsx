import girl from '../../assets/images/girl1.png';
import Online from '../common/Online';

function Avatar() {
  return (
    <div className='avatar'>
      <figure>
        <img src={girl} alt="avatar"  />
        <Online />
      </figure>
      <figcaption>
        <p>Alice Freeman</p>
      </figcaption>
    </div>
  )
}

export default Avatar
