import React, { useEffect, useState } from 'react';
import './AnimatedBackground.css';
import LOGO from './/logo.png';

const AnimatedBackground = () => {
  // Create state for particles
  const [particles, setParticles] = useState([]);

  // Initialize particles on component mount
  useEffect(() => {
    const initialParticles = [];
    for (let i = 0; i < 25; i++) { // Increased to 25 particles
      initialParticles.push({
        id: i,
        size: Math.floor(Math.random() * 30) + 10, // Random size between 10-40px
        top: Math.random() * 100, // Random top position 0-100%
        left: Math.random() * 100, // Random left position 0-100%
        duration: Math.floor(Math.random() * 4) + 2, // Even faster: Random duration 2-6s
        delay: Math.random() * 2, // Even faster: Random delay 0-2s
        borderRadius: Math.random() > 0.5 ? '50%' : Math.random() > 0.5 ? '0' : '10px',
        opacity: Math.random() * 0.5 + 0.5, // Random opacity 0.5-1
        // Add movement direction properties
        xDirection: Math.random() > 0.5 ? 1 : -1, // Horizontal direction
        yDirection: Math.random() > 0.5 ? 1 : -1  // Vertical direction
      });
    }
    setParticles(initialParticles);
  }, []);

  return (
    <div className="animated-header">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span className='highlight'><img className='logo-image' height={150} width={350} src={LOGO}/></span>
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
      
      {/* Dynamically generated floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            borderRadius: particle.borderRadius,
            opacity: particle.opacity,
            background: `rgba(255, 255, 255, ${particle.opacity})`,
            boxShadow: `0 0 ${10 + particle.size/2}px rgba(255, 255, 255, ${particle.opacity * 0.7})`
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;