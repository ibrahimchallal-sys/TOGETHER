import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-header">
      <h1 className="animated-text">Welcome to <span className='highlight'>TOGETHER</span></h1>
      <label htmlFor="search-bar" className="search-label">Search :</label>
      <div className="search-container">
        <input 
          type="text" 
          id="search-bar"
          className="search-bar" 
          placeholder="ex: web development"
        />
        <button type="submit" className="search-button">Search</button>
      </div>
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="particle particle-5"></div>
      <div className="particle particle-6"></div>
      <div className="particle particle-7"></div>
      <div className="particle particle-8"></div>
      <div className="particle particle-9"></div>
      <div className="particle particle-10"></div>
    </div>
  );
};

export default AnimatedBackground;