import React from 'react';
import './Technology.scss';
import { techCategories } from '../../assets/data/portfolioData';

const Technology = () => {
  return (
    <section id="technology" className="tech-section">
      <div className="container">
        <h2 className="section-title">Technology Stack</h2>
        <p className="section-subtitle">
          Tools, frameworks, and platforms used across web, mobile, and infrastructure.
        </p>
        <div className="tech-grid">
          {techCategories.map((cat) => (
            <div key={cat.title} className="tech-card">
              <h3>{cat.title}</h3>
              <div className="pill-list">
                {cat.items.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
