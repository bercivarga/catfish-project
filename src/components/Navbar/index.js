import { Link } from 'react-router-dom'
import './styles.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/explore" className={'nav-main-link'}>PURRM😻NCE</Link>
      <div className='links'>
        <Link to="explore" className={'nav-link'}>Explore</Link>
        <Link to="matches" className={'nav-link'}>Matches</Link>
        <Link to="profile/me" className={'nav-link'}>Profile</Link>
      </div>
    </nav>
  )
}