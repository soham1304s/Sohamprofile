import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sun, Moon } from 'lucide-react';

export default function Navbar({ currentPage = 'home', onNavigate }) {
  const [activeNav, setActiveNav] = useState('');
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setActiveNav(targetId);

    if (targetId === 'contact') {
      if (onNavigate) onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentPage !== 'home' && onNavigate) {
      onNavigate('home', targetId);
      return;
    }

    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 40;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });

      targetElement.classList.remove('section-scroll-highlight');
      void targetElement.offsetWidth;
      targetElement.classList.add('section-scroll-highlight');
    }
  };

  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const sections = ['projects', 'about', 'services', 'awards', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  return (
    <header className="navbar">
      {/* Brand Logo */}
      <a href="#" onClick={(e) => handleNavClick(e, 'top')} className="nav-brand">
        soham
      </a>

      {/* Navigation Links */}
      <nav>
        <ul className="nav-menu">
          <li>
            <a
              href="https://github.com/soham1304s"
              target="_blank"
              rel="noopener noreferrer"
              className={`nav-link ${activeNav === 'projects' ? 'active' : ''}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className={`nav-link ${activeNav === 'about' ? 'active' : ''}`}
            >
              About<sup>®</sup>
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className={`nav-link ${activeNav === 'services' ? 'active' : ''}`}
            >
              Services
            </a>
          </li>
        </ul>
      </nav>

      {/* Action Buttons & Theme Switcher */}
      <div className="nav-actions">
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <div className="theme-toggle-content">
            {isDark ? (
              <>
                <Sun size={16} className="theme-icon sun-icon" />
                <span className="theme-toggle-label">Light</span>
              </>
            ) : (
              <>
                <Moon size={16} className="theme-icon moon-icon" />
                <span className="theme-toggle-label">Dark</span>
              </>
            )}
          </div>
        </button>

        <button
          className={`btn-contact ${currentPage === 'contact' ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Contact Me
        </button>
        <button
          className="btn-arrow-circle"
          aria-label="Quick Action"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          <ArrowUpRight size={22} strokeWidth={2.2} />
        </button>
      </div>
    </header>
  );
}

