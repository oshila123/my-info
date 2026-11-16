import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Oshila Ishitha Gunerathne. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/oshila123" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#about">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
