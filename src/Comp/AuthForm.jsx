import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import RobotPasswordInput from './RobotPasswordInput';
import './AuthForm.css';

const AuthForm = ({ isLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  
  const navigate = useNavigate();
  const location = useLocation();

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
    console.log('Form submitted:', formData);
    // For now, just redirect to home
    navigate('/');
  };
  
  const handleClose = (e) => {
    if (e.target.className === 'auth-overlay') {
      navigate('/');
    }
  };
  
  const switchAuthMode = () => {
    navigate(isLogin ? '/signup' : '/login');
  };

  return (
    <div className="auth-overlay" onClick={handleClose}>
      <div className="auth-container floating-animation">
        <div className="auth-close" onClick={() => navigate('/')}>
          ×
        </div>
        <div className="auth-header">
          <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p>{isLogin ? 'Sign in to continue' : 'Join us today'}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          {/* Show robot only on login page */}
          {isLogin && (
            <div className="robot-above-email">
              <RobotPasswordInput
                id="robot-display"
                value=""
                onChange={() => {}}
                required={false}
                showRobotOnly={true}
              />
            </div>
          )}
          
          {!isLogin && (
            <div className="form-group floating-element">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="auth-input black-text"
                required
              />
              <label htmlFor="name" className="auth-label">Full Name</label>
            </div>
          )}
          
          <div className="form-group floating-element">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="auth-input black-text"
              required
            />
            <label htmlFor="email" className="auth-label">Email Address</label>
          </div>
          
          {/* Password field - no robot for signup, robot password input for login */}
          <div className="form-group floating-element">
            {isLogin ? (
              <RobotPasswordInput
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                showRobotOnly={false} // This will show the password input but not display the robot again
              />
            ) : (
              // For signup, use regular password input without robot
              <div className="password-input-wrapper">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="auth-input black-text"
                  required
                />
                <label htmlFor="password" className="auth-label">Password</label>
              </div>
            )}
          </div>
          
          {/* Confirm Password field for signup */}
          {!isLogin && (
            <div className="form-group floating-element">
              <div className="password-input-wrapper">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="auth-input black-text"
                  required
                />
                <label htmlFor="confirmPassword" className="auth-label">Confirm Password</label>
              </div>
            </div>
          )}
          
          <button type="submit" className="auth-button">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        
        <div className="auth-footer">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span onClick={switchAuthMode} className="auth-link">
              {isLogin ? 'Sign Up' : 'Sign In'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;