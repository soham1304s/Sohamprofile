import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import lottie from 'lottie-web';
import webDevAnimation from '../lottie/web_dev.json';
import websiteDevAnimation from '../lottie/website_dev.json';
import designerAnimation from '../lottie/designer.json';
import mobileAppAnimation from '../lottie/mobile_app_showcase.json';
import databaseAnimation from '../lottie/database.json';
import dataArchAnimation from '../lottie/data.json';
import websitesAnimation from '../lottie/websites.json';
import singleWebsiteAnimation from '../lottie/website.json';
import ecommerceAnimation from '../lottie/E-commerce Shop Online.json';
import insightsDashboardAnimation from '../lottie/Insights Dashboard.json';
import fingerprintAnimation from '../lottie/Fingerprint.json';
import noDownloadsAnimation from '../lottie/No Downloads.json';
import underMaintenanceAnimation from '../lottie/Under Maintenance.json';

function LottieAnimation({ animationData }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let anim = null;
    try {
      anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData || webDevAnimation
      });
    } catch (err) {
      console.warn('Lottie animation render fallback:', err);
    }

    return () => {
      if (anim) anim.destroy();
    };
  }, [animationData]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}

const servicesData = [
  {
    id: '01',
    number: '01',
    title: 'Full-Stack Web Development',
    category: 'Full-Stack & Web',
    lottieData: webDevAnimation,
    description:
      'Build complete, production-ready web applications from frontend to backend with modern tech stacks.',
    tags: [
      'React / Next.js',
      'Vite Apps',
      'Node.js / Express',
      'REST APIs',
      'Auth & RBAC',
      'Admin Dashboards',
      'Real-Time Apps',
      'Database Integration',
      'Third-Party APIs',
      'Payment Gateways'
    ]
  },
  {
    id: '02',
    number: '02',
    title: 'Modern Website Development',
    category: 'Full-Stack & Web',
    lottieData: websiteDevAnimation,
    description:
      'Create modern, responsive and high-performance websites for businesses, agencies, and personal brands.',
    tags: [
      'Business Websites',
      'Corporate',
      'Portfolio Sites',
      'Landing Pages',
      'Agencies',
      'E-Commerce',
      'Dynamic Sites',
      'Booking Sites'
    ]
  },

  {
    id: '04',
    number: '04',
    title: 'Mobile App Development',
    category: 'Full-Stack & Web',
    lottieData: mobileAppAnimation,
    description:
      'Develop high-performance mobile applications with modern cross-platform technologies.',
    tags: [
      'Android Apps',
      'iOS Apps',
      'Cross-Platform',
      'API-Connected',
      'Authentication',
      'Push Notifications',
      'Payment Integration'
    ]
  },
  {
    id: '05',
    number: '05',
    title: 'Backend & API Development',
    category: 'Backend & DevOps',
    lottieData: databaseAnimation,
    description:
      'Build secure, scalable, and high-concurrency backend systems and API architectures.',
    tags: [
      'Node.js Backend',
      'Express.js APIs',
      'REST APIs',
      'Auth APIs',
      'CRUD APIs',
      'Payment APIs',
      'Webhooks',
      'RBAC Control'
    ]
  },
  {
    id: '06',
    number: '06',
    title: 'Database Architecture & Integration',
    category: 'Backend & DevOps',
    lottieData: dataArchAnimation,
    description:
      'Design and optimize relational and NoSQL databases for high-speed query performance.',
    tags: [
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Schema Design',
      'Relationships',
      'Query Indexing',
      'Validation',
      'Backups'
    ]
  },
  {
    id: '07',
    number: '07',
    title: 'Hosting & Deployment',
    category: 'Backend & DevOps',
    lottieData: websitesAnimation,
    description:
      'Production-ready server deployment, domain setup, SSL security, and cloud infrastructure management.',
    tags: [
      'Vercel & VPS',
      'Cloud Deploy',
      'Domain Connection',
      'DNS & SSL/HTTPS',
      'CI/CD Setup',
      'Server Configuration'
    ]
  },
  {
    id: '08',
    number: '08',
    title: 'Domain & DNS Setup',
    category: 'Backend & DevOps',
    lottieData: singleWebsiteAnimation,
    description:
      'Help clients configure domain nameservers, DNS records, subdomains, and SSL certificates.',
    tags: [
      'Domain Config',
      'Nameservers',
      'A/CNAME/MX Records',
      'SSL Config',
      'Subdomains',
      'Email DNS'
    ]
  },
  {
    id: '09',
    number: '09',
    title: 'E-Commerce Development',
    category: 'Full-Stack & Web',
    lottieData: ecommerceAnimation,
    description:
      'Build complete online stores with product catalogs, shopping carts, and automated payment gateways.',
    tags: [
      'Product Catalog',
      'Search & Filters',
      'Cart & Checkout',
      'Online Payments',
      'Orders',
      'Admin Dashboard',
      'Inventory'
    ]
  },
  {
    id: '10',
    number: '10',
    title: 'Admin Dashboard Development',
    category: 'Full-Stack & Web',
    lottieData: insightsDashboardAnimation,
    description:
      'Build powerful, intuitive administrative dashboards for managing users, revenue, and system settings.',
    tags: [
      'User Management',
      'Product Control',
      'Order Management',
      'Analytics',
      'Revenue Reports',
      'Role Permissions'
    ]
  },
  {
    id: '11',
    number: '11',
    title: 'Authentication & Security',
    category: 'Optimization & Security',
    lottieData: fingerprintAnimation,
    description:
      'Implement enterprise-grade authentication, OAuth, JWT session security, and role-based permissions.',
    tags: [
      'Email/Password',
      'OTP & Phone Auth',
      'Google OAuth',
      'JWT Sessions',
      'Protected Routes',
      'Email Verification'
    ]
  },

  {
    id: '14',
    number: '14',
    title: 'Real-Time Web Applications',
    category: 'AI & Real-Time',
    lottieData: noDownloadsAnimation,
    description:
      'Build live interactive applications with WebSockets for instant chat, notifications, and collaborative tools.',
    tags: [
      'WebSockets / Socket.IO',
      'Live Chat',
      'Real-Time Alerts',
      'Live Dashboards',
      'Presence System',
      'Multiplayer'
    ]
  },
  {
    id: '15',
    number: '15',
    title: 'Website Maintenance & Support',
    category: 'Optimization & Security',
    lottieData: underMaintenanceAnimation,
    description:
      'Ongoing technical maintenance, bug fixes, security updates, and performance monitoring.',
    tags: [
      'Bug Fixing',
      'Security Patches',
      'Performance Tuning',
      'DB Maintenance',
      'Backups',
      'Server Monitoring'
    ]
  },

];

const categories = [
  'All',
  'Full-Stack & Web',
  'Backend & DevOps',
  'AI & Real-Time',
  'Optimization & Security'
];

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(true);

  const filteredServices = servicesData.filter((service) => {
    if (selectedCategory === 'All') return true;
    return service.category === selectedCategory;
  });

  const displayedServices = showAll ? filteredServices : filteredServices.slice(0, 6);

  return (
    <section className="services-section" id="services">
      <div className="services-card-container">
        {/* Top Header */}
        <div className="services-header">
          <div className="services-header-left">
            <div className="badge-selected-dark">
              <span className="dot-red" />
              <span className="badge-dark-text">{servicesData.length} Specialized Services</span>
            </div>
            <h2 className="services-heading-statement">
              Comprehensive web, backend & cloud engineering solutions{' '}
              <span className="text-muted-dark">crafted with precision</span>
            </h2>
          </div>

          <div className="services-header-right">
            <button
              className="btn-explore-services"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Featured Services' : `Explore All ${servicesData.length} Services`}
            </button>
            <button
              className="btn-arrow-circle-red"
              aria-label="Explore Services"
              onClick={() => setShowAll(!showAll)}
            >
              <ArrowUpRight size={22} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="services-filter-bar">
          <div className="filter-label">
            <Filter size={15} />
            <span>Filter Category:</span>
          </div>
          <div className="filter-pills-list">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`filter-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
                {cat === 'All' ? ` (${servicesData.length})` : ''}
              </button>
            ))}
          </div>
        </div>

        {/* Services Rows List */}
        <div className="services-list">
          {displayedServices.map((service, index) => (
            <div key={service.id} className="service-row">
              <div className="service-col-title">
                <div className="service-number-badge">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>

              <div className="service-col-desc">
                <p className="service-description">{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag, idx) => (
                    <span key={idx} className="service-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="service-col-img">
                <LottieAnimation animationData={service.lottieData} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
