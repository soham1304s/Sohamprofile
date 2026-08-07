import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  ArrowLeft, 
  Clock, 
  Globe, 
  ShieldCheck,
  MessageSquare,
  Sparkles,
  ExternalLink
} from 'lucide-react';

const serviceOptions = [
  'Full-Stack Web App',
  'Modern Website',
  'Mobile Application',
  'UI/UX Design',
  'Backend & REST APIs',
  'E-Commerce Store',
  'Database & Cloud',
  'Maintenance & Support'
];

const budgetRanges = [
  'Under $1,000',
  '$1,000 - $3,000',
  '$3,000 - $8,000',
  '$8,000+'
];

export default function ContactPage({ onNavigateHome }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    selectedServices: [],
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const handleServiceToggle = (service) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(service);
      if (exists) {
        return {
          ...prev,
          selectedServices: prev.selectedServices.filter((s) => s !== service)
        };
      } else {
        return {
          ...prev,
          selectedServices: [...prev.selectedServices, service]
        };
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        selectedServices: [],
        budget: '',
        message: ''
      });
    }, 1200);
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="contact-page-container">
      {/* Top Banner Navigation Action */}
      <div className="contact-page-topbar">
        <button className="btn-back-home" onClick={onNavigateHome}>
          <ArrowLeft size={18} />
          <span>Back to Portfolio</span>
        </button>
      </div>

      {/* Contact Hero Section */}
      <div className="contact-hero-header">
        <div className="badge-selected-dark">
          <span className="dot-red" />
          <span className="badge-dark-text">Get In Touch</span>
        </div>

        <h1 className="contact-hero-title">
          Let’s start a conversation and build{' '}
          <span className="contact-title-accent">something legendary.</span>
        </h1>

        <p className="contact-hero-subtitle">
          Have an exciting project, a technical problem to solve, or looking to collaborate? 
          Send a message below and I'll respond within 24 hours.
        </p>

        <div className="contact-status-pills">
          <div className="status-pill">
            <span className="status-indicator-green" />
            <span>Available for Q3/Q4 Projects</span>
          </div>
          <div className="status-pill">
            <Clock size={15} />
            <span>Response Time: &lt; 24 hrs</span>
          </div>
          <div className="status-pill">
            <Globe size={15} />
            <span>Remote Worldwide</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Form + Sidebar Info */}
      <div className="contact-grid-layout">
        {/* Left Column: Comprehensive Contact Form */}
        <div className="contact-form-card">
          {isSubmitted ? (
            <div className="contact-success-state">
              <div className="success-icon-box">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="success-title">Message Sent Successfully!</h3>
              <p className="success-desc">
                Thank you for reaching out. Your project details have been received. 
                I will get back to you shortly at your email address.
              </p>
              <button 
                className="btn-send-another"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h2 className="form-card-title">Send a Message</h2>
              <p className="form-card-subtitle">Fill in the form below to get a custom quote and timeline.</p>

              {/* Service Selection Pills */}
              <div className="form-group">
                <label className="form-label">
                  What services do you need? <span className="label-optional">(Select all that apply)</span>
                </label>
                <div className="service-pills-grid">
                  {serviceOptions.map((service) => {
                    const selected = formData.selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        className={`service-select-pill ${selected ? 'active' : ''}`}
                        onClick={() => handleServiceToggle(service)}
                      >
                        {selected && <CheckCircle2 size={14} className="pill-check-icon" />}
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Personal Info Grid */}
              <div className="form-row-two-col">
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. Alex Morgan"
                    className="contact-input-field"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="alex@company.com"
                    className="contact-input-field"
                  />
                </div>
              </div>

              <div className="form-row-two-col">
                <div className="form-group">
                  <label className="form-label">Phone Number <span className="label-optional">(Optional)</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className="contact-input-field"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Company / Brand <span className="label-optional">(Optional)</span></label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Acme Inc."
                    className="contact-input-field"
                  />
                </div>
              </div>

              {/* Budget Selection Pills */}
              <div className="form-group">
                <label className="form-label">Estimated Budget Range</label>
                <div className="budget-pills-list">
                  {budgetRanges.map((range) => (
                    <button
                      type="button"
                      key={range}
                      className={`budget-pill ${formData.budget === range ? 'active' : ''}`}
                      onClick={() => setFormData((prev) => ({ ...prev, budget: range }))}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Details */}
              <div className="form-group">
                <label className="form-label">Project Details & Requirements *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project goals, timeline, key features, or any reference websites..."
                  className="contact-textarea-field"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn-submit-contact"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Project Proposal</span>
                    <Send size={18} />
                  </>
                )}
              </button>

              <div className="privacy-note">
                <ShieldCheck size={16} />
                <span>Your information is 100% secure and will never be shared.</span>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Direct Contact Info & Channels */}
        <div className="contact-sidebar">
          {/* Email Card */}
          <div className="info-card">
            <div className="info-card-header">
              <div className="info-icon-wrapper">
                <Mail size={22} />
              </div>
              <div>
                <span className="info-card-tag">Direct Email</span>
                <h4 className="info-card-heading">hello@soham.studio</h4>
              </div>
            </div>
            <div className="info-card-actions">
              <a href="mailto:hello@soham.studio" className="btn-info-action">
                <span>Send Email</span>
                <ExternalLink size={14} />
              </a>
              <button 
                className="btn-info-copy"
                onClick={() => handleCopy('hello@soham.studio', 'email')}
              >
                {copiedType === 'email' ? 'Copied!' : <Copy size={15} />}
              </button>
            </div>
          </div>

          {/* Phone & WhatsApp Card */}
          <div className="info-card">
            <div className="info-card-header">
              <div className="info-icon-wrapper icon-phone">
                <Phone size={22} />
              </div>
              <div>
                <span className="info-card-tag">Call or WhatsApp</span>
                <h4 className="info-card-heading">+91 98765 43210</h4>
              </div>
            </div>
            <div className="info-card-actions">
              <a href="tel:+919876543210" className="btn-info-action">
                <span>Call Now</span>
                <ExternalLink size={14} />
              </a>
              <button 
                className="btn-info-copy"
                onClick={() => handleCopy('+91 98765 43210', 'phone')}
              >
                {copiedType === 'phone' ? 'Copied!' : <Copy size={15} />}
              </button>
            </div>
          </div>

          {/* Location & Timezone Card */}
          <div className="info-card">
            <div className="info-card-header">
              <div className="info-icon-wrapper icon-location">
                <MapPin size={22} />
              </div>
              <div>
                <span className="info-card-tag">Location & Timezone</span>
                <h4 className="info-card-heading">Kolkata, India</h4>
                <p className="info-card-subtext">IST (UTC+5:30) • Remote Worldwide</p>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="social-profiles-box">
            <h4 className="social-box-title">Connect via Socials</h4>
            <div className="social-links-grid">
              <a 
                href="https://www.linkedin.com/in/soham-mondal-543455294/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-profile-btn"
              >
                <span>LinkedIn</span>
                <ArrowLeft size={14} className="rotate-icon-up" />
              </a>
              <a 
                href="https://github.com/soham1304s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-profile-btn"
              >
                <span>GitHub</span>
                <ArrowLeft size={14} className="rotate-icon-up" />
              </a>
              <a 
                href="https://www.instagram.com/soham.mondal.1304/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-profile-btn"
              >
                <span>Instagram</span>
                <ArrowLeft size={14} className="rotate-icon-up" />
              </a>
              <a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-profile-btn"
              >
                <span>Dribbble</span>
                <ArrowLeft size={14} className="rotate-icon-up" />
              </a>
            </div>
          </div>

          {/* FAQ Accordion Summary */}
          <div className="contact-faq-preview">
            <h4 className="faq-preview-title">
              <Sparkles size={16} />
              <span>What happens next?</span>
            </h4>
            <ul className="faq-steps-list">
              <li>
                <strong>1. Discovery Call:</strong> We discuss your vision, requirements, and technical scope.
              </li>
              <li>
                <strong>2. Proposal & Quote:</strong> I send a detailed milestone timeline and transparent pricing.
              </li>
              <li>
                <strong>3. Kickoff & Build:</strong> Development begins with real-time preview links and updates.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
