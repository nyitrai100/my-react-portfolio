import React, { useState } from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi';
import {LuGalleryThumbnails} from 'react-icons/lu'

const Nav = ({ onNavClick }) => {
  const [activeNav, setActiveNav] = useState('#');

  const handleNavClick = (navId) => {
    setActiveNav(navId);
    onNavClick(navId.substring(1)); 
  };

  return (
    <nav>
      <a href="home" onClick={() => handleNavClick('#home')} className={activeNav === '#home' ? 'active' : ''}>
       
        <p className="nav-title" style={{paddingLeft: '8px'}} > <AiOutlineHome  /> Home  </p>
      </a>
      <a href="#about" onClick={() => handleNavClick('#about')} className={activeNav === '#about' ? 'active' : ''}>
       <p className="nav-title" style={{paddingLeft: '8px'}} >  <AiOutlineUser /> About  </p>
      </a>
      <a href="#experience" onClick={() => handleNavClick('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        
        <p className="nav-title" style={{paddingLeft: '13px'}} >  <BiBook />  Skills  </p>
      </a>
      <a href="#portfolio" onClick={() => handleNavClick('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <p className="nav-title"> < LuGalleryThumbnails/> Portfolio  </p>
      </a>
      <a href="#contact" onClick={() => handleNavClick('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
         <p className="nav-title"> <BiMessageSquareDetail /> Contact  </p>
      </a>
    </nav>
  );
};

export default Nav;
