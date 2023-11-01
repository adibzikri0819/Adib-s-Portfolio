import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './Footer.css';



function Footer() {
 

  return (
    <nav className='footer_container'>
    <div>
      <ul class="nav-links">
        <Link smooth to="#about"><li><a>About</a></li></Link>
        <Link smooth to="#experience"><li><a>Experience</a></li></Link>
        <Link smooth to="#project"><li><a>Project</a></li></Link>
        <Link smooth to="#contact"><li><a>Contact</a></li></Link>
      </ul>
    </div>
  </nav>
    
    
    
  );
}
export default Footer;