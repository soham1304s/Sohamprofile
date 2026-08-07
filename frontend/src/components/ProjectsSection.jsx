import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import lumexImg from '../assets/project_lumex.png';
import horizonImg from '../assets/project_horizon.png';
import neurosyncImg from '../assets/project_neurosync.png';
import planzaImg from '../assets/project_planza.png';

const projects = [
  {
    id: 1,
    title: 'LumeX SaaS Dashboard',
    category: 'Web / UI-UX',
    image: lumexImg,
    link: '#'
  },
  {
    id: 2,
    title: 'Horizon Atlas Travel',
    category: 'Branding & Web',
    image: horizonImg,
    link: '#'
  },
  {
    id: 3,
    title: 'NeuroSync Healthcare App',
    category: 'App / UI Design',
    image: neurosyncImg,
    link: '#'
  },
  {
    id: 4,
    title: 'Planza Portfolio Website',
    category: 'Personal Branding',
    image: planzaImg,
    link: '#'
  }
];

export default function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      {/* Top Section Header */}
      <div className="projects-header-grid">
        <div className="projects-header-left">
          <div className="badge-selected">
            <span className="dot-red" />
            <span className="badge-selected-text">Selected projects</span>
          </div>
          <div className="projects-cta-row">
            <button className="btn-view-all-projects">View All Project</button>
            <button className="btn-arrow-circle" aria-label="View All Projects">
              <ArrowUpRight size={22} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        <div className="projects-header-right">
          <h2 className="projects-heading-statement">
            Every project is a dialogue between design and purpose,{' '}
            <span className="text-muted-gray">
              turning vision into meaningful digital experiences
            </span>
          </h2>
        </div>
      </div>

      {/* 2x2 Showcase Grid */}
      <div className="projects-card-grid">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            className="project-card"
          >
            <div className="project-image-box">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-card-footer">
              <h3 className="project-card-title">{project.title}</h3>
              <div className="project-card-tag">
                <span>{project.category}</span>
                <ArrowUpRight size={15} strokeWidth={2.5} className="tag-arrow" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
