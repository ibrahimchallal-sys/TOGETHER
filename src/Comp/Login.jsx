import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import RobotPasswordInput from './RobotPasswordInput';
import LOGO from './logo.png';
import './AuthForm.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
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
    console.log('Login form submitted:', formData);
    // For now, just redirect to home
    navigate('/');
  };
  
  const handlePasswordToggle = () => {
    setShowPassword(prev => !prev);
  };
  
  const goToSignup = () => {
    navigate('/signup');
  };
  
  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // Implement Google login logic here
  };
  
  const handleGithubLogin = () => {
    console.log('GitHub login clicked');
    // Implement GitHub login logic here
  };
  
  return (
    <div className="split-page-auth">
      {/* Left Section */}
      <div className="auth-left-section">
        {/* Particles - Same as CTA section */}
        <div className="auth-particle auth-particle-1"></div>
        <div className="auth-particle auth-particle-2"></div>
        <div className="auth-particle auth-particle-3"></div>
        <div className="auth-particle auth-particle-4"></div>
        <div className="auth-particle auth-particle-5"></div>
        
        <div className="left-content">
          {/* Logo with modern font and bold text */}
          <div className="logo-text-container">
            <img src={LOGO} alt="Together Logo" className="auth-animated-logo" />
            <h1 className="business-text">TO GROW YOUR BUSINESS</h1>
          </div>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="auth-right-section">
        {/* Floating elements for the right section */}
        <div className="right-floating-element right-floating-element-1"></div>
        <div className="right-floating-element right-floating-element-2"></div>
        <div className="right-floating-element right-floating-element-3"></div>
        
        <div className="auth-container floating-animation">
          <div className="auth-header">
            <h2>Welcome Back</h2>
            <p>Sign in to continue</p>
          </div>
          
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="robot-above-email">
              <RobotPasswordInput
                id="robot-display"
                value=""
                onChange={() => {}}
                required={false}
                showRobotOnly={true}
                showPassword={showPassword}
              />
            </div>
            
            {/* Social Login Buttons */}
            <div className="social-login-buttons">
              <button type="button" className="social-button google-button" onClick={handleGoogleLogin}>
                <FcGoogle className="social-icon" />
                <span>Google</span>
              </button>
              <button type="button" className="social-button github-button" onClick={handleGithubLogin}>
                <FaGithub className="social-icon github-icon" />
                <span>GitHub</span>
              </button>
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
            </div>
            
            <div className="form-group floating-element">
              <RobotPasswordInput
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                showRobotOnly={false}
                showPassword={showPassword}
                onTogglePassword={handlePasswordToggle}
                placeholder="Password" // Added placeholder for password input
              />
            </div>
            
            <div className="auth-options">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="#" className="forgot-password">Forgot?</a>
            </div>
            
            {/* Sign up link under forgot password */}
            <div className="signup-under-forgot">
              <span>Don't have an account? </span>
              <span onClick={goToSignup} className="signup-link">Sign up</span>
            </div>
            
            <button type="submit" className="auth-button">
              Sign In
            </button>
          </form>
          
          <div className="auth-footer">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;