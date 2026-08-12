import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SocialLinks from './components/SocialLinks';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import AwardsSection from './components/AwardsSection';
import WorksGallerySection from './components/WorksGallerySection';
import FaqSection from './components/FaqSection';
import FooterSection from './components/FooterSection';
import ContactPage from './components/ContactPage';
import TerminalModal from './components/TerminalModal';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash === '#contact-page' ? 'contact' : 'home';
  });

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const handleNavigate = (page, targetId) => {
    setCurrentPage(page);
    window.location.hash = page === 'contact' ? 'contact-page' : '';

    if (page === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (targetId && targetId !== 'top') {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 40;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#contact-page') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="portfolio-container">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === 'contact' ? (
        <ContactPage onNavigateHome={() => handleNavigate('home')} />
      ) : (
        <>
          <HeroSection />
          <SocialLinks />
          <AboutSection onOpenTerminal={() => setIsTerminalOpen(true)} />
          <SkillsSection />
          <AwardsSection />
          <ServicesSection />
          <WorksGallerySection />
          <FaqSection />
        </>
      )}

      <FooterSection />

      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}

export default App;


