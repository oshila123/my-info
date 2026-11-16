import React from 'react';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader-wrapper" role="status" aria-label="Loading portfolio">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
