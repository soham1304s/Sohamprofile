import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function FooterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for reaching out! We'll contact you at ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-full-bleed-wrapper">
        {/* Giant Top Brand Title Cut-off */}
        <div className="footer-brand-header">
          <span className="footer-brand-title">Soham</span>
        </div>

        <div className="footer-inner-container">
          {/* Main 3-Column Content Row */}
          <div className="footer-content-grid">
            {/* Left Column: CTA & Newsletter */}
            <div className="footer-col-cta">
              <div className="badge-selected-dark">
                <span className="dot-red" />
                <span className="badge-dark-text">Let’s work together</span>
              </div>

              <h2 className="footer-cta-heading">
                Available for freelance
                <br />
                projects and collaborations
              </h2>

              <form onSubmit={handleSubmit} className="footer-email-form">
                <div className="footer-input-wrapper">
                  <input
                    type="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="footer-email-input"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-arrow-circle-red"
                  aria-label="Submit Email"
                >
                  <ArrowUpRight size={22} strokeWidth={2.2} />
                </button>
              </form>
            </div>

            {/* Middle Column: Quick Links */}
            <div className="footer-col-links">
              <h3 className="footer-column-title">Quick Links</h3>
              <ul className="footer-nav-list">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            {/* Right Column: Direct Contact Info */}
            <div className="footer-col-info">
              <div className="footer-contact-item">
                <a
                  href="mailto:hello@soham.studio"
                  className="footer-email-link"
                >
                  hello@soham.studio
                </a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-info-text">Kolkata, India</span>
              </div>
              <div className="footer-contact-item">
                <a href="tel:+919876543210" className="footer-phone-link">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Credit Row */}
          <div className="footer-bottom-row">
            <div className="footer-legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>

            <div className="footer-credits">
              <span>Designed & Maintained by Soham Mondal</span>
            </div>

            <div className="footer-cookie-link">
              <a href="#">Cookie Preferences</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
