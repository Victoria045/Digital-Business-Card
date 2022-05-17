import profile from '../assets/profile.png';

export default function Header() {
  return (
    <div className="main-header">
          <div className="header">
            <img src={profile} />
            <h1>Laura Smith</h1>
            <p>Frontend Developer</p>
            <small>laurasmith.website</small>
            <div className='socials'>
                <button className='white-btn'><i className="fa fa-envelope" aria-hidden="true"></i> Email</button>
                <button className='blue-btn'><i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</button>
            </div>
          </div>
    </div>
    
  )
}