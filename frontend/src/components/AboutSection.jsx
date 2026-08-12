import React from 'react';
import { Award, FolderCheck, Headphones, ArrowUpRight, Sparkles, Download, Terminal } from 'lucide-react';
import aboutImg from '../assets/badge_avatar.png';
import cvFile from '../Soham Mondal CV.pdf';

export default function AboutSection({ onOpenTerminal }) {
  return (
    <section className="about-section" id="about">
      {/* Header Section */}
      <div className="about-header-grid">
        <div className="about-header-left">
          <div className="badge-selected">
            <span className="dot-red" />
            <span className="badge-selected-text">My Intro</span>
          </div>
        </div>
        <div className="about-header-right">
          <h2 className="about-heading-statement">
            About Me — <span className="text-muted-gray">Versatile Full-Stack Developer</span>
          </h2>
        </div>
      </div>

      {/* Main Grid: Left Portrait + Right Info & Cards */}
      <div className="about-main-grid">
        {/* Left Column: Portrait Card */}
        <div className="about-image-card">
          <img src={aboutImg} alt="Soham Mondal Developer Portrait" className="about-bg-img" />
          <div className="about-image-overlay" />
          <div className="about-floating-badge">
            <Sparkles size={16} className="sparkle-icon" />
            <span>Crafting Digital Experiences</span>
          </div>
        </div>

        {/* Right Column: Key Stats & Biography */}
        <div className="about-content-col">
          {/* 3 Metric Cards */}
          <div className="about-stats-grid">
            {/* Card 1: Experience */}
            <div className="about-stat-card">
              <div className="stat-icon-box">
                <Award size={22} strokeWidth={2} />
              </div>
              <h3 className="stat-title">Experience</h3>
              <p className="stat-value">4+ Years Working</p>
            </div>

            {/* Card 2: Completed */}
            <div className="about-stat-card">
              <div className="stat-icon-box">
                <FolderCheck size={22} strokeWidth={2} />
              </div>
              <h3 className="stat-title">Completed</h3>
              <p className="stat-value">30+ Projects</p>
            </div>

            {/* Card 3: Support */}
            <div className="about-stat-card">
              <div className="stat-icon-box">
                <Headphones size={22} strokeWidth={2} />
              </div>
              <h3 className="stat-title">Support</h3>
              <p className="stat-value">Online 24/7</p>
            </div>
          </div>

          {/* Bio Text */}
          <div className="about-text-box">
            <p className="about-bio-paragraph">
              As a versatile developer, I craft seamless digital experiences. My expertise spans both frontend and backend, building robust and intuitive web applications from concept to deployment.
            </p>
          </div>

          {/* Action Row */}
          <div className="about-cta-row">
            <a
              href={cvFile}
              download="Soham_Mondal_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-download-cv"
              title="Download Soham Mondal's Professional CV"
            >
              <Download size={17} strokeWidth={2.2} />
              <span>Download CV</span>
            </a>

            <button
              type="button"
              className="btn-about-contact"
              onClick={onOpenTerminal}
              title="Open Interactive Developer Terminal"
            >
              <Terminal size={16} style={{ marginRight: '6px' }} />
              Open In Terminal
            </button>
            <button
              type="button"
              className="btn-arrow-circle"
              aria-label="Open In Terminal"
              onClick={onOpenTerminal}
              title="Open Interactive Developer Terminal"
            >
              <ArrowUpRight size={22} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
