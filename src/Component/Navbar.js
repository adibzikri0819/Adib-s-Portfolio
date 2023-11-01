import React, {useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';




function Navbar() {
  
  
  const [dropdownToggled, toggleDropdown] = useState(false);
  
const handleClick = () => {
  toggleDropdown(!dropdownToggled);
  
};

  return (

  
    
    <div>

       <nav id="desktop-nav">
      <div className="logo">My Portfolio</div>
      <div>
        <ul className="nav-links">
          <Link smooth to="#about"><li><a>About</a></li></Link>
          <Link smooth to="#experience"><li><a>Experience</a></li></Link>
          <Link smooth to="#project"><li><a>Project</a></li></Link>
          <Link smooth to="#contact"><li><a>Contact</a></li></Link>
        </ul>
      </div>
    </nav>


    <nav id="hamburger-nav" >
      <div className="logo">My Portfolio</div>
      <div className="hamburger-menu">
        <div className="hamburger-icon"  onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="menu-links" >
          <Link smooth to="#about"><li><a>About</a></li></Link>
          <Link smooth to="#experience"><li><a>Experience</a></li></Link>
          <Link smooth to="#project"><li><a>Project</a></li></Link>
          <Link smooth to="#contact"><li><a>Contact</a></li></Link>
        </div>
      </div>
    </nav>

    </div>
    
    
    
    
  );
}
export default Navbar;