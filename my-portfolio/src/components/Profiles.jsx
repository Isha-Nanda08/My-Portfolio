import React from 'react';
import '../styles/Profiles.css';

export default function Profile() {
  const mountainsChars = ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'];
  
  return (
    <div className="concept-five">
      {/* Floating Circle Links */}
      <div className="floating-circles">
        <a href="https://www.linkedin.com/in/isha-nanda-a3a531257/" target="_blank" rel="noopener noreferrer" className="floating-circle" id="circle1">
          <span>Linkedin</span>
        </a>
        <a href="https://github.com/Isha-Nanda08" target="_blank" rel="noopener noreferrer" className="floating-circle" id="circle2">
          <span>Github</span>
        </a>
        <a href="https://leetcode.com/u/Isha__nanda/" target="_blank" rel="noopener noreferrer" className="floating-circle" id="circle3">
          <span>Leetcode</span>
        </a>
        <a href="https://x.com/IshaNanda08?t=7vMvpMNtFtkSAJ7UwtzvMA&s=08" target="_blank" rel="noopener noreferrer" className="floating-circle" id="circle4">
          <span>𝕏</span>
        </a>
      </div>

      {/* Developer Text */}
      <h1 className="word">
        {mountainsChars.map((char, index) => (
          <span key={index} className="char">
            {char}
          </span>
        ))}
      </h1>
      
      {/* Original Social Links */}
      <div className="social-links-profile">
        <a href="https://x.com/IshaNanda08?t=7vMvpMNtFtkSAJ7UwtzvMA&s=08" target="_blank" rel="noopener noreferrer" className="social-link">
          <span className="icon">𝕏</span>
        </a>
        <a href="https://github.com/Isha-Nanda08" target="_blank" rel="noopener noreferrer" className="social-link">
          <span className="icon">GH</span>
        </a>
        <a href="https://leetcode.com/u/Isha__nanda/" target="_blank" rel="noopener noreferrer" className="social-link">
          <span className="icon">LC</span>
        </a>
        <a href="https://www.linkedin.com/in/isha-nanda-a3a531257/" target="_blank" rel="noopener noreferrer" className="social-link">
          <span className="icon">LI</span>
        </a>
      </div>
    </div>
  );
}