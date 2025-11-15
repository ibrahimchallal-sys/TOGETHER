import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import './RobotPasswordInput.css';

const RobotPasswordInput = ({ value, onChange, id, required, confirmPassword, confirmPasswordValue, showRobotOnly }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    // Call the original onChange handler
    if (onChange) {
      onChange(e);
    }
  };

  // If showRobotOnly is true, only show the robot without password inputs
  if (showRobotOnly) {
    return (
      <div className="robot-password-container">
        {/* Robot Head - moved to top */}
        <div className="robot-head-container">
          <div className="robot-face">
            {/* Antenna */}
            <div className="antenna-stem"></div>
            <div className="antenna-ball"></div>
            
            {/* Eyes Container */}
            <div className="eyes-container">
              {/* Left Eye */}
              <div className="eye">
                {/* Eyelid */}
                <div 
                  className="eyelid"
                  style={{
                    clipPath: showPassword 
                      ? 'polygon(0 0, 100% 0, 100% 0, 0 0)' 
                      : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                  }}
                >
                  <div className="eyelid-line"></div>
                </div>
                {/* Pupil */}
                <div 
                  className="pupil"
                  style={{
                    opacity: showPassword ? 1 : 0,
                    transform: showPassword ? 'scale(1) translateY(4px)' : 'scale(0.3)'
                  }}
                ></div>
              </div>
              
              {/* Right Eye */}
              <div className="eye">
                {/* Eyelid */}
                <div 
                  className="eyelid"
                  style={{
                    clipPath: showPassword 
                      ? 'polygon(0 0, 100% 0, 100% 0, 0 0)' 
                      : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                  }}
                >
                  <div className="eyelid-line"></div>
                </div>
                {/* Pupil */}
                <div 
                  className="pupil"
                  style={{
                    opacity: showPassword ? 1 : 0,
                    transform: showPassword ? 'scale(1) translateY(4px)' : 'scale(0.3)'
                  }}
                ></div>
              </div>
            </div>
            
            {/* Mouth */}
            <div className="mouth"></div>
          </div>
          
          <p className="robot-status">
            {showPassword ? "I can see it ! " : "Shhh... secret mode "}
          </p>
        </div>
      </div>
    );
  }

  // If showRobotOnly is false, show only the password inputs without the robot
  return (
    <div className="password-inputs-container">
      <div className="password-input-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          name={id}
          value={value || ''}
          onChange={handleInputChange}
          className="auth-input black-text"
          required={required}
        />
        <label htmlFor={id} className="auth-label">Password</label>
      </div>

      {confirmPassword && (
        <div className="password-input-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            id={confirmPassword}
            name={confirmPassword}
            value={confirmPasswordValue || ''}
            onChange={handleInputChange}
            className="auth-input black-text"
            required={required}
          />
          <label htmlFor={confirmPassword} className="auth-label">Confirm Password</label>
        </div>
      )}

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="password-toggle"
      >
        {showPassword ? (
          <Eye className="eye-icon" />
        ) : (
          <EyeOff className="eye-icon" />
        )}
      </button>
    </div>
  );
};

export default RobotPasswordInput;