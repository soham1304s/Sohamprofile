import React from 'react';

const socialPlatforms = [
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/soham.mondal.1304/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3.6c-3.535 0-6.4 2.865-6.4 6.4s2.865 6.4 6.4 6.4 6.4-2.865 6.4-6.4-2.865-6.4-6.4-6.4zm0 2.4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm4.5-1.5a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z"/>
      </svg>
    )
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/soham-mondal-543455294/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z"/>
      </svg>
    )
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.65 6.09c.89 1.13 1.47 2.5 1.63 4-.98-.24-2.8-.57-5.04-.32 1.34-2.11 2.76-3.21 3.41-3.68zM12 3.8c1.69 0 3.23.53 4.49 1.43-.63.48-1.97 1.54-3.26 3.59-2.31-.81-4.73-1.16-7.22-1.04 1.25-2.37 3.45-3.98 5.99-3.98zM4.14 9.4c2.56-.12 5.06.24 7.42 1.08-.26.54-.53 1.1-.79 1.68-3.96-.86-7.79-.31-9.03-.09.34-1.01.88-1.92 1.57-2.7 0 .01.53-.02.83.03zm-2.33 4.67c1.33-.24 4.88-.73 8.68.17.65 1.7 1.18 3.46 1.58 5.15-3.52.88-6.9-.53-8.87-2.61-.88-1.13-1.42-2.52-1.39-4.01l1 1.3zm12.33 6.06c-.44-1.78-.99-3.62-1.68-5.38 2.05-.22 3.73.08 4.63.31-.61 2.21-2.01 4.02-3.95 5.07z"/>
      </svg>
    )
  },
  {
    name: 'Behance',
    url: 'https://behance.net',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-1.5 5.5h-5V7h5v1.5zm-5 5.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5zm3.5-2c-.83 0-1.5.67-1.5 1.5h3c0-.83-.67-1.5-1.5-1.5zM6.5 7H11v3.5H6.5V7zm0 5H11v4.5H6.5V12z"/>
      </svg>
    )
  }
];

// Duplicate items 4 times to ensure seamless infinite looping track
const marqueeItems = [
  ...socialPlatforms,
  ...socialPlatforms,
  ...socialPlatforms,
  ...socialPlatforms
];

export default function SocialLinks() {
  return (
    <section className="social-marquee-container">
      <div className="marquee-track">
        {marqueeItems.map((item, index) => (
          <a
            key={`${item.name}-${index}`}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card marquee-card"
          >
            <span className="social-icon-wrapper">{item.icon}</span>
            <span className="social-name">{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
