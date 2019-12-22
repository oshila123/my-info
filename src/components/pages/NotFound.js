import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = props => {
  const path = props.location.pathname;

  return (
    <div className='text-center mb-5'>
      <h1 className='display-2 m-5'>
        <span className='text-danger'>404 </span>
      </h1>
      <div className='display-2 m-5'>
        <div className=''>Page Not Found</div>
      </div>

      <div className='h6 mt-4'>
        <div>
          <p className='text-capitalize text-danger'>
            The page you entered{' '}
            <span
              className='badge badge-warning'
              style={{ textTransform: 'none' }}>
              {' '}
              {path}{' '}
            </span>{' '}
            is invalid.
          </p>
          <p>
            Please visit{' '}
            <Link to='/' className='badge badge-secondary text-decoration-none'>
              {' '}
              Home Page
            </Link>{' '}
            {' . '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
