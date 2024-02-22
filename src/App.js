import React, { useState, useEffect } from 'react';
import MobileMenus from './components/mobileMenus';
import SideBarProfile from './components/sideBarProfile';
import NavBar from './components/navBar';
import Introduce from './components/introduce';
import About from './components/about';
import Services from './components/services';
import Skills from './components/skills';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Certificates from './components/certificates';
import Testimonial from './components/testimonial';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="App">
      <div class="relative pt-10 minfo__app max-xl:pt-20">
        <div className={`menu-overlay fixed top-0 left-0 w-full h-full bg-black/60 transition-all duration-200 z-999 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        </div>
        <div class="max-lg:px-4">
          <MobileMenus toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
          <SideBarProfile />
          <NavBar />
          <div class="relative mx-auto minfo__contentBox max-w-container xl:max-2xl:max-w-65rem">
            <Introduce />
            <About />
            <Services />
            <Skills />
            <Resume />
            <Portfolio />
            <Certificates />
            <Testimonial />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
