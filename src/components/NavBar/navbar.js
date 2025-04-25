import './navbar.css';
import menu from '../../assets/menu.png';
import { Link } from 'react-scroll';
import React, { useState } from 'react';
import logo from '../../assets/Logo.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
   <nav className="navbar">
    <img src={logo} alt="Logo" className='logo'/>

    <div className="desktopMenu">
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
      <Link activeClass='active' to='background' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About us</Link>
      <Link activeClass='active' to='members' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Member</Link>
      <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Project</Link>
      <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} spyThreshold={0.3} className="desktopMenuListItem">Contact</Link>
    </div>
  
            
            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='background' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About us</Link>
                <Link activeClass='active' to='members' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Member</Link>
                <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Project</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} spyThreshold={0.3} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
   </nav>
  );
};

export default Navbar;