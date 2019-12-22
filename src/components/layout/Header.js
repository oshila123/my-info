import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <Fragment>
      <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'></div>
      <header className='masthead mb-auto text-center'>
        <div className='inner'>
          <Link to='/'>
            <h3 className='masthead-brand'>OZi</h3>
          </Link>
          <Link to='/'>
            <img
              src='logo.png'
              alt=''
              className='img-fluid'
              style={{ width: '50px' }}
            />
          </Link>
          <nav className='nav nav-masthead justify-content-center'>
            <NavLink exact className='nav-link' to='/'>
              Home
            </NavLink>
            <NavLink exact className='nav-link' to='/work'>
              Work
            </NavLink>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
