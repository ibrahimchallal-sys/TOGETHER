import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Signup form submitted:', formData);
    // For now, just redirect to home
    navigate('/');
  };
  
  const goToLogin = () => {
    navigate('/login');
  };
  
  return (
    <div className="full-page-auth">
      <div className="auth-background">
        <div className="auth-floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="auth-container-wrapper">
        <div className="auth-container floating-animation">
          <div className="auth-header">
            <h1>Create Account</h1>
            <p>Join us today and get started</p>
          </div>
          
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group floating-element">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="auth-input black-text"
                placeholder="Full Name"
                required
              />
              <label htmlFor="name" className="auth-label">Full Name</label>
            </div>
            
            <div className="form-group floating-element">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="auth-input black-text"
                placeholder="Email Address"
                required
              />
              <label htmlFor="email" className="auth-label">Email Address</label>
            </div>
            
            <div className="form-group floating-element">
              <div className="password-input-wrapper">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="auth-input black-text"
                  placeholder="Password"
                  required
                />
                <label htmlFor="password" className="auth-label">Password</label>
              </div>
            </div>
            
            <div className="form-group floating-element">
              <div className="password-input-wrapper">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="auth-input black-text"
                  placeholder="Confirm Password"
                  required
                />
                <label htmlFor="confirmPassword" className="auth-label">Confirm Password</label>
              </div>
            </div>
            
            <div className="auth-options">
              <label className="checkbox-container">
                <input type="checkbox" required />
                <span className="checkmark"></span>
                I agree to the Terms & Conditions
              </label>
            </div>
            
            <button type="submit" className="auth-button">
              Sign Up
            </button>
          </form>
          
          <div className="auth-footer">
            <p>
              Already have an account? 
              <span onClick={goToLogin} className="auth-link">
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;