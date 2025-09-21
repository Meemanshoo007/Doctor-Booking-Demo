import React from 'react';
import './error-alert.css';

const ErrorAlert = ({ title, message, onClose }) => {
  return (
    <div className="error-alert">
      <div className="icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="alert-icon"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <div className="content-container">
        <h4 className="alert-title">{title}</h4>
        <p className="alert-message">{message}</p>
      </div>
      {onClose && (
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
};

export default ErrorAlert;