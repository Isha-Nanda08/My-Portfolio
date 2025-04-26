import React, { useState, useEffect } from 'react';

const RollingNavbar = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const navItems = ['About', 'Projects', 'Skills','Education','Profiles', 'Contact'];

  useEffect(() => {
    // Start animation after component mounts
    setTimeout(() => {
      setAnimationStarted(true);
    }, 500);
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        {/* Logo container */}
        <div className="logo-container">
          <div className={`logo ${animationStarted ? 'rolling-animation' : ''}`}>
            <span>IN.</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="navigation">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li 
                key={item}
                className={`nav-item ${animationStarted ? 'nav-item-visible' : ''}`}
                style={{ 
                  transitionDelay: `${animationStarted ? (navItems.length - index - 1) * 150 + 400 : 0}ms`
                }}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Styles */}
      <style jsx>{`
        /* Navbar fixed at top */
        .navbar-container {
          background-color: rgba(9, 10, 12, 0.8); /* Semi-transparent */
          color: white;
          height: 74px;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999; /* Increased z-index to ensure it stays above all content */
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px); /* Blurred background */
        }
        
        /* Navbar layout */
        .navbar-content {
          max-width: 1550px;
          margin: 0 auto;
          padding: 0 24px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo */
        .logo-container {
          position: relative;
          height: 48px;
          width: 48px;
        }
        
        .logo {
          width: 50px;
          height: 50px;
          background-color: #1995ae92;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          transform: translateX(100vw);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .logo span {
          font-weight: bold;
          font-size: 24px;
        }
        
        /* Navigation */
        .navigation {
          display: flex;
          align-items: center;
          height: 100%;
        }
        
        .nav-list {
          display: flex;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-item {
          margin-left: 34px;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .nav-item-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .nav-item a {
          color: white;
          text-decoration: none;
          font-size: 20px;
          text-transform: uppercase;
          padding-right: 10px;
          transition: color 0.3s ease;
        }
        
        .nav-item a:hover {
          color: #60a5fa;
        }

        /* Rolling animation for logo */
        @keyframes rolling {
          0% {
            transform: translateX(calc(100vw - 48px)) rotate(0deg);
          }
          100% {
            transform: translateX(0) rotate(720deg);
          }
        }
        
        .rolling-animation {
          animation: rolling 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default RollingNavbar;