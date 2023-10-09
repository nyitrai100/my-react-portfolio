// import React from 'react'
// import './Nav.css'
// import {AiOutlineHome} from 'react-icons/ai'
// import {AiOutlineUser} from 'react-icons/ai'
// import {BiBook} from 'react-icons/bi'
// import {RiServiceLine} from 'react-icons/ri'
// import {BiMessageSquareDetail} from 'react-icons/bi'
// import { useState } from 'react'

// const Nav = () => {
//   const [activeNav, setActiveNav] = useState("#")
//   return (
//     <nav>
//       <a href="#"  onClick={() => setActiveNav('#')} className={ activeNav === '#' ? 'active' : ''}> <AiOutlineHome/> </a>
//       <a href="#about" onClick={() => setActiveNav('#about')}  className={ activeNav === '#about' ? 'active' : ''}> <AiOutlineUser/> </a>
//       <a href="#experience" onClick={() => setActiveNav('#experience')}  className={ activeNav === '#experience' ? 'active' : ''}> <BiBook/> </a>
//       <a href="#services" onClick={() => setActiveNav('#services')}  className={ activeNav === '#services' ? 'active' : ''}> <RiServiceLine/> </a>
//       <a href="#contact" onClick={() => setActiveNav('#contact')}  className={ activeNav === '#contact' ? 'active' : ''}> <BiMessageSquareDetail/> </a>
//     </nav>
//   )
// }

// export default Nav

import React, { useState } from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import Portfolio from '../portfolio/Portfolio';
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
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => handleNavClick('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => handleNavClick('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <BiBook />
      </a>
      <a href="#services" onClick={() => handleNavClick('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a href="#portfolio" onClick={() => handleNavClick('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
       < LuGalleryThumbnails/>
      </a>
      {/* <a href="#testimonials" onClick={() => handleNavClick('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}>
       test
      </a> */}
      <a href="#contact" onClick={() => handleNavClick('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
