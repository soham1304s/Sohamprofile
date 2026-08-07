import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import heroImg from '../assets/hero_model.png';
import avatarImg from '../assets/badge_avatar.png';

export default function HeroSection() {
  const [timeStr, setTimeStr] = useState({
    time: '08:16:54',
    period: 'PM'
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const formattedHours = String(hours).padStart(2, '0');

      setTimeStr({
        time: `${formattedHours}:${minutes}:${seconds}`,
        period: period
      });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-card">
      <img
        src={heroImg}
        alt="Soham Portfolio Hero Artwork"
        className="hero-bg-img"
      />

      {/* Atmospheric Overlay */}
      <div className="hero-overlay-gradient" />

      {/* Top Left Floating Badge */}
      <div className="hero-badge-container">
        <div className="badge-avatar-box">
          <img src={avatarImg} alt="Soham Creator" />
        </div>
        <div className="badge-info-pill">
          <span className="badge-title">Soham 2025<sup>®</sup></span>
          <span className="badge-subtitle">Project design approved annually</span>
        </div>
      </div>

      {/* Top Right Clock Widget */}
      <div className="hero-time-widget">
        <span className="time-label">Local<br />time</span>
        <div className="time-clock-icon">
          <Clock size={24} strokeWidth={1.6} />
        </div>
        <div className="time-value">
          <span>{timeStr.time}</span>
          <span>{timeStr.period}</span>
        </div>
      </div>

      {/* Giant Bottom Brand Title */}
      <div className="hero-brand-overlay">
        <h1 className="hero-brand-text">Soham</h1>
      </div>
    </section>
  );
}
