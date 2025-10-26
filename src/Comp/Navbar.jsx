import React from 'react';
import './Navbar.css';

const Navbar = () => {
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
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/logo.png" alt="TOGETHER Logo" className="logo" />
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <button onClick={() => scrollToSection('home')} className="navbar-link">Home</button>
          </li>
          <li className="navbar-item">
            <button onClick={() => scrollToSection('services')} className="navbar-link">Services</button>
          </li>
          <li className="navbar-item">
            <button onClick={() => scrollToSection('features')} className="navbar-link">Features</button>
          </li>
          <li className="navbar-item">
            <button onClick={() => scrollToSection('cta')} className="navbar-link">Get Started</button>
          </li>
        </ul>
        <div className="navbar-buttons">
          <button className="btn login-btn">LOGIN</button>
          <button className="btn signup-btn">SIGN UP</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;