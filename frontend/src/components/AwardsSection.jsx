import React from 'react';
import { Trophy, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import fwaImg from '../assets/fwa_recognition.png';
import featurePortraitImg from '../assets/awards_feature_portrait.png';
import avatarImg from '../assets/badge_avatar.png';
import heroImg from '../assets/hero_model.png';
import lumexImg from '../assets/project_lumex.png';
import planzaImg from '../assets/project_planza.png';

export default function AwardsSection() {
  return (
    <section className="awards-section" id="awards">
      {/* Top Header */}
      <div className="awards-header-grid">
        <div className="awards-header-left">
          <div className="badge-selected">
            <span className="dot-red" />
            <span className="badge-selected-text">Awards Nominee</span>
          </div>
        </div>

        <div className="awards-header-right">
          <h2 className="awards-heading-statement">
            Designs Recognized{' '}
            <span className="text-muted-gray">Beyond Boundaries</span>
          </h2>
          <p className="awards-subtitle">
            Celebrating awards and nominations that reflect our commitment to clarity,
            innovation, and timeless minimalism.
          </p>
        </div>
      </div>

      {/* Main Asymmetric Grid */}
      <div className="awards-main-grid">
        {/* Left Column Stack */}
        <div className="awards-left-column">
          {/* Top Large Award Card */}
          <div className="award-card-main">
            <div className="award-main-top">
              <div className="trophy-badge">
                <Trophy size={26} strokeWidth={2} className="trophy-icon" />
              </div>
              <ArrowUpRight size={24} strokeWidth={2} className="award-top-arrow" />
            </div>

            <h3 className="award-main-title">Site of The Year 2024</h3>

            <p className="award-main-description">
              Honored as one of the most impactful digital portfolios, blending
              minimalist design with seamless storytelling. A showcase of
              precision and creativity.
            </p>

            <div className="award-pills-row">
              {/* Pill 1 */}
              <div className="award-pill-dark">
                <CheckCircle2 size={16} className="pill-check-icon" />
                <span>108+ trusted project by all</span>
              </div>

              {/* Pill 2 */}
              <div className="award-pill-dark pill-avatar-group">
                <div className="avatar-stack">
                  <img src={avatarImg} alt="User 1" />
                  <img src={heroImg} alt="User 2" />
                  <img src={lumexImg} alt="User 3" />
                  <img src={stanzaImg(planzaImg)} alt="User 4" />
                </div>
                <span>Followed & trusted by many</span>
              </div>
            </div>
          </div>

          {/* Bottom Split Sub-Cards */}
          <div className="awards-split-grid">
            {/* Sub-Card 1: Text Nominations */}
            <div className="award-subcard-text">
              <div className="nomination-block">
                <h4 className="nomination-title">Best UX Nominee</h4>
                <p className="nomination-desc">
                  Celebrated for crafting intuitive and user-friendly digital experiences.
                </p>
              </div>

              <div className="nomination-block">
                <h4 className="nomination-title">Minimalist Excellence</h4>
                <p className="nomination-desc">
                  Awarded for embracing clarity, setting new benchmarks in design.
                </p>
              </div>

              <a href="#contact" className="award-contact-link">
                <span>Contact Me</span>
                <ArrowUpRight size={15} strokeWidth={2.2} />
              </a>
            </div>

            {/* Sub-Card 2: FWA Image Recognition */}
            <div className="award-subcard-image">
              <h4 className="fwa-title">FWA Recognition 2024/2025</h4>
              <div className="fwa-image-box">
                <img src={fwaImg} alt="FWA Recognition Artwork" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Tall Feature Banner */}
        <div className="awards-right-column">
          <div className="awards-feature-banner">
            <img src={featurePortraitImg} alt="Creative Vision Feature" />
            <div className="feature-overlay-gradient" />
            <p className="feature-statement-text">
              A creative vision acknowledged worldwide, trusted by brands to craft meaningful design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function stanzaImg(img) {
  return img;
}
