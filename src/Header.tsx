import { Link } from 'react-scroll';
import './css/Header.css';

function Header() {
  return (
    <div className="headerContainer">
      <li><Link to="Projects" spy={true} smooth={true}>Projects</Link></li>
      <li><Link to="Contact" spy={true} smooth={true}>Contact Me</Link></li>
    </div>
  );
}

export default Header;
