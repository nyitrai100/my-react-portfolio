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
       
        <p className="nav-title" style={{paddingLeft: '8px'}} > <AiOutlineHome  /> Home  </p>
      </a>
      <a href="#about" onClick={() => handleNavClick('#about')} className={activeNav === '#about' ? 'active' : ''}>
       <p className="nav-title" style={{paddingLeft: '8px'}} >  <AiOutlineUser /> About  </p>
      </a>
      <a href="#experience" onClick={() => handleNavClick('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        
        <p className="nav-title" style={{paddingLeft: '13px'}} >  <BiBook />  Skills  </p>
      </a>
      {/* <a href="#services" onClick={() => handleNavClick('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <p className="nav-title">  <RiServiceLine />  Services  </p>
      </a> */}
      <a href="#portfolio" onClick={() => handleNavClick('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <p className="nav-title"> < LuGalleryThumbnails/> Portfolio  </p>
      </a>
      {/* <a href="#testimonials" onClick={() => handleNavClick('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}>
       test
      </a> */}
      <a href="#contact" onClick={() => handleNavClick('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
         <p className="nav-title"> <BiMessageSquareDetail /> Contact  </p>
      </a>
    </nav>
  );
};

export default Nav;
