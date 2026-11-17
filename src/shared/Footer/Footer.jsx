import React from 'react';
import './Footer.scss';
import { profileData } from '../../assets/data/portfolioData';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Oshila Ishitha Gunerathne. All rights reserved.</p>
        <div className="footer-links">
          <a href={profileData.contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profileData.contact.email}`}>
            {profileData.contact.email}
          </a>
          <a href="#about">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
