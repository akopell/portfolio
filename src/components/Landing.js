import React from 'react';
import '../styles/Landing.css';

const Landing = () => {
  return (
    <div className='landingScreen'>
      <img className='portrait' alt='Adam portrait' src='/Adam.PNG' />
      <h1>My name is</h1>
      <h1 className='highlight'>Adam</h1>
      <h1>and I am a</h1>
      <h1>Software</h1>
      <h1>Developer!</h1>
    </div>
  );
};

export default Landing;
