import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Fragment>
      <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'></div>
      <header className='masthead mb-auto text-center'>
        <div className='inner'>
          <h3 className='masthead-brand'>OZi</h3>
          <img
            src='logo.png'
            alt=''
            className='img-fluid'
            style={{ width: '50px' }}
          />
          <nav className='nav nav-masthead justify-content-center'>
            <Link className='nav-link' to='/'>
              Home
            </Link>

            <Link className='nav-link' to='/Work'>
              Work
            </Link>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
