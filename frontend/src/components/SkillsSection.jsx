import React from 'react';
import { BadgeCheck, Code2, Server } from 'lucide-react';

const frontendSkills = [
  { name: 'HTML', level: 'Intermediate' },
  { name: 'CSS/SCSS', level: 'Intermediate' },
  { name: 'Javascript', level: 'Advanced' },
  { name: 'Flutter', level: 'Advanced' },
  { name: 'Git', level: 'Advanced' },
  { name: 'React', level: 'Advanced' }
];

const backendSkills = [
  { name: 'Node JS', level: 'Advanced' },
  { name: 'Python', level: 'Advanced' },
  { name: 'MySQL', level: 'Advanced' },
  { name: 'PHP', level: 'Intermediate' },
  { name: 'Firebase', level: 'Advanced' },
  { name: 'Mongo DB', level: 'Advanced' }
];

export default function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      {/* Header Section */}
      <div className="skills-header-grid">
        <div className="skills-header-left">
          <div className="badge-selected">
            <span className="dot-red" />
            <span className="badge-selected-text">My Abilities</span>
          </div>
        </div>
        <div className="skills-header-right">
          <h2 className="skills-heading-statement">
            My Technical Experience —{' '}
            <span className="text-muted-gray">
              building robust frontend & backend architectures
            </span>
          </h2>
        </div>
      </div>

      {/* 2-Column Category Grid */}
      <div className="skills-cards-grid">
        {/* FRONTEND CARD */}
        <div className="skills-category-card">
          <div className="category-card-header">
            <div className="category-icon-wrapper">
              <Code2 size={24} strokeWidth={2} />
            </div>
            <h3 className="category-card-title">Frontend Development</h3>
          </div>

          <div className="skills-items-grid">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="skill-item-box">
                <div className="skill-check-icon">
                  <BadgeCheck size={19} strokeWidth={2.2} />
                </div>
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-level">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BACKEND CARD */}
        <div className="skills-category-card">
          <div className="category-card-header">
            <div className="category-icon-wrapper">
              <Server size={24} strokeWidth={2} />
            </div>
            <h3 className="category-card-title">Backend Development</h3>
          </div>

          <div className="skills-items-grid">
            {backendSkills.map((skill, index) => (
              <div key={index} className="skill-item-box">
                <div className="skill-check-icon">
                  <BadgeCheck size={19} strokeWidth={2.2} />
                </div>
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-level">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
