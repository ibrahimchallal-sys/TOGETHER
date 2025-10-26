import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/logo.png" alt="TOGETHER Logo" className="logo" />
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="#services" className="navbar-link">Services</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Contact</a>
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