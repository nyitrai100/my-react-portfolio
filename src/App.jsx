// import React from 'react'
// import Header from './components/header/Header'
// import Nav from './components/nav/Nav'
// import About from './components/about/About'
// import Experience from './components/experience/Experience'
// import Services from './components/services/services'
// import Portfolio from './components/portfolio/Portfolio'
// import Testimonials from './components/testimonials/Testimonials'
// import Contact from './components/contact/Contact'
// import Footer from './components/footer/Footer'

// const App = () => {
//   return (
//    <>
//         <Header/> 
//         <Nav />
//         <About />
//         <Experience />
//         <Services />
//         <Portfolio />
//         <Testimonials />
//         <Contact />
//         <Footer />
//    </>
//   )
// }

// export default App


import React, { useState } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

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
      {/* {activeComponent === 'services' && <Services />} */}
      {activeComponent === 'portfolio' && <Portfolio />}
      {activeComponent === 'testimonials' && <Testimonials />}
      {activeComponent === 'contact' &&  <Contact /> }
      {/* {activeComponent === 'contact' &&  <Footer />} */}
      </div>
    </>
  );
};

export default App;
