import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import brandIdentityImg from '../assets/gallery_brand_identity.png';
import productUiImg from '../assets/gallery_product_ui.png';
import essenzaImg from '../assets/gallery_essenza.png';
import creativeShowcaseImg from '../assets/gallery_creative_showcase.png';
import experimentalImg from '../assets/gallery_experimental.png';

export default function WorksGallerySection() {
  return (
    <section className="works-gallery-section" id="gallery">
      {/* Top Header Grid */}
      <div className="works-header-grid">
        <div className="works-header-left">
          <div className="badge-selected">
            <span className="dot-red" />
            <span className="badge-selected-text">Works in gallery</span>
          </div>
        </div>

        <div className="works-header-right">
          <h2 className="works-heading-statement">
            A curated collection of projects across web, identity, and visual
            design —{' '}
            <span className="text-muted-gray">minimalist yet purposeful</span>
          </h2>
        </div>
      </div>

      {/* 3-Column Asymmetric Cards Grid */}
      <div className="works-cards-grid">
        {/* LEFT COLUMN: 2 Stacked Cards */}
        <div className="works-column-stacked">
          {/* Card 01: GlamSneha (Clickable link to glamsneha.com) */}
          <a
            href="https://glamsneha.com"
            target="_blank"
            rel="noopener noreferrer"
            className="works-card-standard works-card-link"
          >
            <div className="works-card-header">
              <div className="works-badge-number">01</div>
              <div className="works-card-title-group">
                <h3 className="works-card-title">GlamSneha</h3>
                <span className="works-card-category">glamsneha.com</span>
              </div>
              <div className="works-card-arrow">
                <ArrowUpRight size={20} strokeWidth={2.2} />
              </div>
            </div>
            <div className="works-card-image-box">
              <img src={brandIdentityImg} alt="GlamSneha Project Showcase" />
            </div>
          </a>

          {/* Card 02: ELVOORIQ (Clickable link to https://www.elvooriq.com/) */}
          <a
            href="https://www.elvooriq.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="works-card-standard works-card-link"
          >
            <div className="works-card-header">
              <div className="works-badge-number">02</div>
              <div className="works-card-title-group">
                <h3 className="works-card-title">ELVOORIQ</h3>
                <span className="works-card-category">elvooriq.com</span>
              </div>
              <div className="works-card-arrow">
                <ArrowUpRight size={20} strokeWidth={2.2} />
              </div>
            </div>
            <div className="works-card-image-box">
              <img src={productUiImg} alt="ELVOORIQ Project Showcase" />
            </div>
          </a>
        </div>

        {/* MIDDLE COLUMN: Tall Featured Card */}
        <div className="works-column-middle">
          <div className="works-card-tall">
            <div className="works-tall-header">
              <div className="works-card-title-group">
                <h3 className="works-card-title-large">Soham Portfolio</h3>
                <span className="works-card-category">Web Design</span>
              </div>
              <div className="works-tall-arrow">
                <ArrowUpRight size={22} strokeWidth={2.2} />
              </div>
            </div>

            <div className="works-tall-image-box">
              <img src={essenzaImg} alt="Soham Portfolio" />
            </div>

            <p className="works-tall-caption">
              A minimalist portfolio site with sharp typography and subtle
              interactions.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: 2 Stacked Cards */}
        <div className="works-column-stacked">
          {/* Card 03: Onevoo (Clickable link to https://www.onevoo.in/) */}
          <a
            href="https://www.onevoo.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="works-card-standard works-card-link"
          >
            <div className="works-card-header">
              <div className="works-badge-number">03</div>
              <div className="works-card-title-group">
                <h3 className="works-card-title">Onevoo</h3>
                <span className="works-card-category">onevoo.in</span>
              </div>
              <div className="works-card-arrow">
                <ArrowUpRight size={20} strokeWidth={2.2} />
              </div>
            </div>
            <div className="works-card-image-box">
              <img src={creativeShowcaseImg} alt="Onevoo Project Showcase" />
            </div>
          </a>

          {/* Card 04 */}
          <div className="works-card-standard">
            <div className="works-card-header">
              <div className="works-badge-number">04</div>
              <div className="works-card-title-group">
                <h3 className="works-card-title">Experimental Layouts</h3>
                <span className="works-card-category">Exploration</span>
              </div>
              <div className="works-card-arrow">
                <ArrowUpRight size={20} strokeWidth={2.2} />
              </div>
            </div>
            <div className="works-card-image-box">
              <img src={experimentalImg} alt="Experimental Layouts" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Actions */}
      <div className="works-cta-row">
        <button className="btn-lead-more">Lead More</button>
        <button className="btn-arrow-circle" aria-label="Lead More Projects">
          <ArrowUpRight size={22} strokeWidth={2.2} />
        </button>
      </div>
    </section>
  );
}
