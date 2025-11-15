import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="./public/logo2.png" alt="TOGETHER Logo" className="logo" />
        </div>
        <ul className="navbar-menu">
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
          <button className="btn login-btn">LOGIN</button>
          <button className="btn signup-btn">SIGN UP</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;