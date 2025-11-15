import React from 'react';
import './AnimatedBackground.css';
import LOGO from './logo.png';

const AnimatedBackground = () => {
  return (
    <div className="animated-header">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span className='highlight'><img height={150} width={390} src={LOGO}/></span>
        </h1>
        <p className="hero-subtitle">
          Join thousands of creators and entrepreneurs selling digital products, courses, and services on the world's leading marketplace
        </p>
        <div className="search-container">
          <input 
            type="text" 
            id="search-bar"
            className="search-bar" 
            placeholder="Search for services, products, or skills..."
          />
          <button type="submit" className="search-button">Search</button>
        </div>
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