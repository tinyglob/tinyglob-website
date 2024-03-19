import './Header.css'
import Logo from "../assets/icons/logo.jpg";

const Header = () => {
  return (
    <header className="header">
    <img src={Logo} width={35} alt='TinyGlob'/>
    <span className="header-title">tinyglob</span>
  </header>
  )
}

export default Header