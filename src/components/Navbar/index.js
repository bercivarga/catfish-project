import { Link } from 'react-router-dom';
import useAppContext from '../../context';
import './styles.css';

export default function Navbar() {
  const { userState, setUserState  } = useAppContext();
  
  return (
    <nav className='navbar'>
      <Link to={userState ? "explore" : "signup"} className={'nav-main-link'}>😻~CATFISH~🐠</Link>
      { localStorage.getItem('catuserdata') && <div className='links'>
        <Link to="explore" className={'nav-link'}>Explore</Link>
        <Link to="matches" className={'nav-link'}>Matches</Link>
        <Link to="profile/me" className={'nav-link'}>Profile</Link>
        <Link
          to="signup"
          className={'nav-link'}
          onClick={() => {
            setUserState(undefined);
            localStorage.removeItem('catuserdata');
          }}
        >
          Stop catfishing
        </Link>
      </div>}
    </nav>
  )
}