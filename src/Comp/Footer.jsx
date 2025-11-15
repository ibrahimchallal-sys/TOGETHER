import React from 'react';
import './Footer.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Footer = () => {
  useScrollAnimation();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section fade-in">
            <div className="footer-logo">
              <img src="/logo2.png" alt="TOGETHER Logo" className="logo" />
            </div>
            <p>Your premier destination for digital products and services. Connect with creators and entrepreneurs worldwide.</p>
          </div>
          
          <div className="footer-section fade-in stagger-1">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('home')} className="footer-link">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="footer-link">Popular Services</button></li>
              <li><button onClick={() => scrollToSection('features')} className="footer-link">Features</button></li>
              <li><button onClick={() => scrollToSection('cta')} className="footer-link">Get Started</button></li>
            </ul>
          </div>
          
          <div className="footer-section fade-in stagger-2">
            <h4>Categories</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Web Development</a></li>
              <li><a href="#" className="footer-link">Digital Marketing</a></li>
              <li><a href="#" className="footer-link">Graphic Design</a></li>
              <li><a href="#" className="footer-link">Content Writing</a></li>
            </ul>
          </div>
          
          <div className="footer-section fade-in stagger-3">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Help Center</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom fade-in">
          <p>&copy; 2025 Together. All rights reserved.</p>
          <p>Made by Ibrahim Challal </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
