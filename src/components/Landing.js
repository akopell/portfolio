import React from 'react';
import '../styles/Landing.css';
import { LandingHelper } from '.';

const Landing = () => {
  return (
    <div className='landingWrapper background'>
      {/* <img className='background' alt='Sunset background' src='/sunset.jpeg' /> */}
      <div className='landingScreen'>
        <LandingHelper />
      </div>
    </div>
  );
};

export default Landing;
