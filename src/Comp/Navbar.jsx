import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src="./logo2.png" alt="TOGETHER Logo" className="logo" />
          </div>
          
          {/* Hamburger menu button for mobile */}
          <div className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          {/* Desktop menu */}
          <ul className="navbar-menu desktop-menu">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/services" className="navbar-link">Services</Link>
            </li>
            <li className="navbar-item">
              <Link to="/features" className="navbar-link">Features</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="navbar-link">Contact</Link>
            </li>
          </ul>
          
          <div className="navbar-buttons">
            <Link to="/login" className="btn login-btn">LOGIN</Link>
            <Link to="/signup" className="btn signup-btn">SIGN UP</Link>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu dropdown - outside navbar to prevent layout issues */}
      {isMenuOpen && (
        <div className="mobile-menu-dropdown">
          <ul className="mobile-menu">
            <li className="mobile-menu-item">
              <Link to="/" className="mobile-menu-link" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="mobile-menu-item">
              <Link to="/services" className="mobile-menu-link" onClick={toggleMenu}>Services</Link>
            </li>
            <li className="mobile-menu-item">
              <Link to="/features" className="mobile-menu-link" onClick={toggleMenu}>Features</Link>
            </li>
            <li className="mobile-menu-item">
              <Link to="/contact" className="mobile-menu-link" onClick={toggleMenu}>Contact</Link>
            </li>
            <li className="mobile-menu-item">
              <Link to="/login" className="mobile-menu-link" onClick={toggleMenu}>LOGIN</Link>
            </li>
            <li className="mobile-menu-item">
              <Link to="/signup" className="mobile-menu-link signup-link" onClick={toggleMenu}>SIGN UP</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;