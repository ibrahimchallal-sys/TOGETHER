import React from 'react';
import './ActionSelector.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ActionSelector = () => {
  useScrollAnimation();
  
  return (
    <section className="action-selector">
      {/* Floating Particles */}
      <div className="floating-particle particle-1"></div>
      <div className="floating-particle particle-2"></div>
      <div className="floating-particle particle-3"></div>
      <div className="floating-particle particle-4"></div>
      <div className="floating-particle particle-5"></div>
      
      <div className="container">
        <div className="section-header fade-in">
          <h2>What do you want to do?</h2>
          <p>Choose the option that best fits your needs</p>
        </div>
        
        <div className="cards-container">
          <div className="action-card find-service-card scale-in stagger-1">
            <div className="card-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>Find a Service</h3>
            <p>Browse and discover digital services from talented professionals around the world.</p>
            <button className="card-btn">Browse Services</button>
          </div>
          
          <div className="action-card post-service-card scale-in stagger-2">
            <div className="card-icon">
              <i className="fas fa-plus-circle"></i>
            </div>
            <h3>Post a Service</h3>
            <p>Offer your digital skills and services to customers looking for your expertise.</p>
            <button className="card-btn">Create Service</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionSelector;