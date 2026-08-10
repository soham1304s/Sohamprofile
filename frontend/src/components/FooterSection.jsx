import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import cvFile from '../Soham Mondal CV.pdf';

export default function FooterSection() {
  const [email, setEmail] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '8be60e60-b0eb-47ca-8b5f-dbd39057f730',
          subject: `Portfolio Footer Email Submission from ${email}`,
          email: email,
          message: `Newsletter / Contact request from portfolio footer: ${email}`
        })
      });
      const result = await response.json();
      if (result.success) {
        alert(`Thank you for reaching out! We'll contact you at ${email}`);
        setEmail('');
      } else {
        alert(result.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
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
                  disabled={isSubmitting}
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
                  <a
                    href={cvFile}
                    download="Soham_Mondal_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
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
                  href="mailto:sohammondal1304@gmail.com"
                  className="footer-email-link"
                >
                  sohammondal1304@gmail.com
                </a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-info-text">Kolkata, India</span>
              </div>
              <div className="footer-contact-item">
                <a href="tel:+919083861312" className="footer-phone-link">
                  +91 9083861312
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
