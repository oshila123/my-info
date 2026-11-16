import React from 'react';
import './Projects.scss';
import { featuredProjects } from '../../assets/data/portfolioData';
import Carousel from '../Carousel/Carousel';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Architecture & Projects</h2>
        <p className="section-subtitle">
          Key production migrations, mobile transformations, and enterprise systems.
        </p>
        <Carousel />
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <span className="category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="tags">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
