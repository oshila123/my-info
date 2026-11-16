import React from 'react';
import './About.scss';
import { profileData } from '../../assets/data/portfolioData';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-main">
          <span className="eyebrow">{profileData.location} • Available for Architecture & Lead Roles</span>
          <h1>{profileData.name}</h1>
          <h2>{profileData.role}</h2>
          <p className="summary">{profileData.summary}</p>
          <div className="cta-group">
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="btn-secondary"
            >
              {profileData.contact.email}
            </a>
          </div>
        </div>
        <div className="about-card">
          <h3>Core Focus Areas</h3>
          <ul>
            {profileData.highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div className="edu-box">
            <span className="edu-label">Education</span>
            <strong>{profileData.education.degree}</strong>
            <p>{profileData.education.institution}</p>
            <small>{profileData.education.graduated}</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
