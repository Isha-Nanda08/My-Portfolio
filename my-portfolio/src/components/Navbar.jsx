import React, { useState, useEffect } from 'react';

const RollingNavbar = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const navItems = [ 'About','Projects',  'skills','Contact'];
  
  useEffect(() => {
    // Start animation after component mounts
    setTimeout(() => {
      setAnimationStarted(true);
    }, 500);
  }, []);
  
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        {/* Logo container that will be the destination */}
        <div className="logo-container">
          {/* Logo that rolls in from right to left position */}
          <div className={`logo ${animationStarted ? 'rolling-animation' : ''}`}>
            <span>IN.</span>
          </div>
        </div>
        
        {/* Nav items that get revealed from right */}
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
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <style jsx>{`
        /* Navbar container styles */
        .navbar-container {
          /* position:relative, */
          background-color: #090a0c7d;
          color: white;
          height: 74px;
          width: 100%;
          overflow: hidden;
          position: relative;
          position:fixed;
          z-index:100;
        }
        
        /* Navbar content layout */
        .navbar-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        /* Logo styles */
        .logo-container {
          position: relative;
          height: 48px;
          width: 48px;
        }
        
        .logo {
          width: 50px;
          height: 50px;
          background-color: #23509892;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          position: absolute;
          transform: translateX(100vw);
        }
        
        .logo span {
          font-weight: bold;
          font-size: 24px;
        }
        
        /* Navigation styles */
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
          transition: color 0.3s ease;
          font-size:20px;
          text-transform: uppercase;
          padding-right:10px;
        }
        
        .nav-item a:hover {
          color: #60a5fa;
        }
        
        /* Animation */
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