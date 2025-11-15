import React from 'react';
import './CTASection.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const CTASection = () => {
  useScrollAnimation();
  
  return (
    <section className="cta-section">
      {/* Animated Background Particles */}
      <div className="cta-particle cta-particle-1"></div>
      <div className="cta-particle cta-particle-2"></div>
      <div className="cta-particle cta-particle-3"></div>
      <div className="cta-particle cta-particle-4"></div>
      <div className="cta-particle cta-particle-5"></div>
      <div className="cta-particle cta-particle-6"></div>
      <div className="cta-particle cta-particle-7"></div>
      <div className="cta-particle cta-particle-8"></div>
      
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="fade-in">Ready to Start Selling?</h2>
          <p className="fade-in">Join thousands of successful sellers and start your digital business today. No setup fees, no monthly costs - just start selling and earning.</p>
          <div className="cta-buttons-container">
            <button className="btn btn-primary">Start Selling Now</button>
          </div>
          <div className="cta-features">
            <div className="cta-feature fade-in stagger-1">
              <span className="feature-icon">✓</span>
              <span>Free to join</span>
            </div>
            <div className="cta-feature fade-in stagger-2">
              <span className="feature-icon">✓</span>
              <span>No monthly fees</span>
            </div>
            <div className="cta-feature fade-in stagger-3">
              <span className="feature-icon">✓</span>
              <span>Instant setup</span>
            </div>
          </div>
        </div>
        <div className="cta-visual">
          <div className="floating-card card-1 scale-in stagger-1">
            <div className="card-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <div className="card-text">Web Design</div>
          </div>
          <div className="floating-card card-2 scale-in stagger-2">
            <div className="card-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="card-text">Mobile App</div>
          </div>
          <div className="floating-card card-3 scale-in stagger-3">
            <div className="card-icon">
              <i className="fas fa-paint-brush"></i>
            </div>
            <div className="card-text">Graphic Design</div>
          </div>
          <div className="floating-card card-4 scale-in stagger-4">
            <div className="card-icon">
              <i className="fas fa-edit"></i>
            </div>
            <div className="card-text">Content Writing</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
