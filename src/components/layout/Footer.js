import React from 'react';

import Time from './Time';

const Footer = () => {
  return (
    <div>
      <p className='text-center'>
        <a
          href='https://twitter.com/oshila123'
          rel='noopener noreferrer'
          target='_blank'
          className='text-decoration-none mr-3'>
          <i className='fab fa-twitter'> </i>
        </a>{' '}
        <a
          href='https://www.linkedin.com/in/oshila123'
          rel='noopener noreferrer'
          target='_blank'
          className='text-decoration-none'>
          <i className='fab fa-linkedin-in'> </i>
        </a>
      </p>
      
       <Time  />
    </div>
  );
};

export default Footer;
