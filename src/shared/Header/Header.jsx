import React from 'react';
import './Header.scss';
import Timer from '../Timer/Timer';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#about" className="brand">
          Oshila<span>.dev</span>
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#technology">Stack</a>
        </nav>
        <Timer />
      </div>
    </header>
  );
};

export default Header;
