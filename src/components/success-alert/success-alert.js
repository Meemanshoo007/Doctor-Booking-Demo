import React from 'react';
import './success-alert.css';

const SuccessAlert = ({ title, message }) => {
  return (
    <div className="success-alert">
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
          <path d="M22 11.08V12a10 10 0 1 1-5.93-8.89" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>
      <div className="content-container">
        <h4 className="alert-title">{title}</h4>
        <p className="alert-message">{message}</p>
      </div>
    </div>
  );
};

export default SuccessAlert;