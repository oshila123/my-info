import React from 'react';
import './Work.scss';
import { workExperience } from '../../assets/data/portfolioData';

const Work = () => {
  return (
    <section id="work" className="work-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          6+ years building production web and cross-platform mobile software.
        </p>
        <div className="timeline">
          {workExperience.map((job) => (
            <div key={job.id} className="timeline-item">
              <div className="timeline-header">
                <div>
                  <h3>{job.role}</h3>
                  <span className="company">{job.company} • {job.location}</span>
                </div>
                <span className="period">{job.period}</span>
              </div>
              <p className="job-desc">{job.description}</p>
              <ul>
                {job.achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
