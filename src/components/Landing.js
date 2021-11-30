import React from 'react';
import '../styles/Landing.css';

const Landing = () => {
  return (
    <div className='landingWrapper'>
      <img className='background' alt='Sunset background' src='/sunset.jpeg' />
      <div className='landingScreen'>
        <h1>Adam Kopell</h1>
        <h1>Software Engineer</h1>
        <h1>Los Angeles, CA</h1>
      </div>
    </div>
  );
};

export default Landing;
