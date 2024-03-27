import './Header.css'
import Logo from "../../assets/icons/logo.jpg";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className='header-wrapper'>
        <Link to='/'>
          <img src={Logo} width={35} alt='TinyGlob' />
          {/* <span className="header-title">tinyglob</span> */}
        </Link>
        <div className='header-auth'>
          <Link to='/login'>Log In</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
      </div>
    </header>
  )
}

export default Header