import React, { useState } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('home');

  const handleNavClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <>
   
      <div className="main_container">
      <Nav onNavClick={handleNavClick} />
      {activeComponent === 'home' && <Header />}
      {activeComponent === 'about' && <About />}
      {activeComponent === 'experience' && <Experience />}
      {activeComponent === 'portfolio' && <Portfolio />}
      {activeComponent === 'testimonials' && <Testimonials />}
      {activeComponent === 'contact' &&  <Contact /> }
      </div>
    </>
  );
};

export default App;
