import React, { useState } from 'react';
import './Carousel.scss';
import { featuredProjects } from '../../assets/data/portfolioData';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  };

  const current = featuredProjects[activeIndex];

  return (
    <div className="project-carousel">
      <div className="carousel-card">
        <div className="carousel-top">
          <span className="badge">{current.category}</span>
          {current.demoUrl && (
            <a
              href={current.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="demo-link"
            >
              Live Demo ↗
            </a>
          )}
        </div>
        <h3>{current.title}</h3>
        <p>{current.summary}</p>
        <div className="tech-tags">
          {current.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={prevSlide} aria-label="Previous highlight">← Prev</button>
        <div className="dots">
          {featuredProjects.map((_, idx) => (
            <button
              key={idx}
              className={idx === activeIndex ? 'dot active' : 'dot'}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
        <button onClick={nextSlide} aria-label="Next highlight">Next →</button>
      </div>
    </div>
  );
};

export default Carousel;
