import React from 'react';
import '../styles/Landing.css';

const Landing = () => {
  return (
    <div className='landingWrapper'>
      <img className='background' alt='Sunset background' src='/sunset.jpeg' />
      <div className='landingScreen'>
        <span className='landingSpinner'>
          <span className='char' style={{ '--char-index': 0 }}>
            <div className='back'></div>A
          </span>
          <span className='char' style={{ '--char-index': 1 }}>
            d
          </span>
          <span className='char' style={{ '--char-index': 2 }}>
            a
          </span>
          <span className='char' style={{ '--char-index': 3 }}>
            m
          </span>
          <span className='char' style={{ '--char-index': 4 }}>
            -
          </span>
          <span className='char' style={{ '--char-index': 5 }}>
            K
          </span>
          <span className='char' style={{ '--char-index': 6 }}>
            o
          </span>
          <span className='char' style={{ '--char-index': 7 }}>
            p
          </span>
          <span className='char' style={{ '--char-index': 8 }}>
            e
          </span>
          <span className='char' style={{ '--char-index': 9 }}>
            l
          </span>
          <span className='char' style={{ '--char-index': 10 }}>
            l
          </span>
          <span className='char' style={{ '--char-index': 11 }}>
            -
          </span>
          <span className='char' style={{ '--char-index': 12 }}>
            S
          </span>
          <span className='char' style={{ '--char-index': 13 }}>
            o
          </span>
          <span className='char' style={{ '--char-index': 14 }}>
            f
          </span>
          <span className='char' style={{ '--char-index': 15 }}>
            t
          </span>
          <span className='char' style={{ '--char-index': 16 }}>
            w
          </span>
          <span className='char' style={{ '--char-index': 17 }}>
            a
          </span>
          <span className='char' style={{ '--char-index': 18 }}>
            r
          </span>
          <span className='char' style={{ '--char-index': 19 }}>
            e
          </span>
          <span className='char' style={{ '--char-index': 20 }}>
            -
          </span>
          <span className='char' style={{ '--char-index': 21 }}>
            E
          </span>
          <span className='char' style={{ '--char-index': 22 }}>
            n
          </span>
          <span className='char' style={{ '--char-index': 23 }}>
            g
          </span>
          <span className='char' style={{ '--char-index': 24 }}>
            i
          </span>
          <span className='char' style={{ '--char-index': 25 }}>
            n
          </span>
          <span className='char' style={{ '--char-index': 26 }}>
            e
          </span>
          <span className='char' style={{ '--char-index': 27 }}>
            e
          </span>
          <span className='char' style={{ '--char-index': 28 }}>
            r
          </span>
          <span className='char' style={{ '--char-index': 29 }}>
            -
          </span>
        </span>
      </div>
    </div>
  );
};

export default Landing;
