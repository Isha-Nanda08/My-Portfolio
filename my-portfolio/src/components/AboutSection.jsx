import React, { useState } from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="container-about">
      {/* Grid background */}
      <div className="background-grid">
        <div className="grid-horizontal"></div>
        <div className="grid-vertical"></div>
        
        {/* Add more grid lines */}
        <div className="grid-line horizontal" style={{ top: '30%' }}></div>
        <div className="grid-line horizontal" style={{ top: '40%' }}></div>
        <div className="grid-line horizontal" style={{ top: '50%' }}></div>
        <div className="grid-line horizontal" style={{ top: '60%' }}></div>
        <div className="grid-line horizontal" style={{ top: '70%' }}></div>
        
        <div className="grid-line vertical" style={{ left: '10%' }}></div>
        <div className="grid-line vertical" style={{ left: '20%' }}></div>
        <div className="grid-line vertical" style={{ left: '40%' }}></div>
        <div className="grid-line vertical" style={{ left: '50%' }}></div>
        <div className="grid-line vertical" style={{ left: '60%' }}></div>
        <div className="grid-line vertical" style={{ left: '80%' }}></div>
        <div className="grid-line vertical" style={{ left: '90%' }}></div>
      </div>
      
      {/* Floating dots */}
      <div className="floating-dot dot1"></div>
      <div className="floating-dot dot2"></div>
      <div className="floating-dot dot3"></div>
      <div className="floating-dot dot4"></div>
      <div className="floating-dot dot5"></div>
      
      {/* Hero section */}
      {/* <div className="hero">
        <h1>John Doe</h1>
        <h2>Software Developer</h2>
      </div> */}

      {/* SVG animation that serves as a clickable button */}
      <div 
        className={`svg-container ${isContentVisible ? 'active' : ''}`}
        onClick={toggleContent}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200">
          <g style={{ order: '-1' }}>
            <polygon
              transform="rotate(45 100 100)"
              strokeWidth="1"
              stroke="#d3a410"
              fill="none"
              points="70,70 148,50 130,130 50,150"
              id="bounce"
            ></polygon>
            <polygon
              transform="rotate(45 100 100)"
              strokeWidth="1"
              stroke="#d3a410"
              fill="none"
              points="70,70 148,50 130,130 50,150"
              id="bounce2"
            ></polygon>
            <polygon
              transform="rotate(45 100 100)"
              strokeWidth="2"
              stroke=""
              fill="#414750"
              points="70,70 150,50 130,130 50,150"
            ></polygon>
            <polygon
              strokeWidth="2"
              stroke=""
              fill="url(#gradiente)"
              points="100,70 150,100 100,130 50,100"
            ></polygon>
            <defs>
              <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente">
                <stop style={{ stopColor: '#1e2026', stopOpacity: 1 }} offset="20%"></stop>
                <stop style={{ stopColor: '#414750', stopOpacity: 1 }} offset="60%"></stop>
              </linearGradient>
            </defs>
            <polygon
              transform="translate(20, 31)"
              strokeWidth="2"
              stroke=""
              fill="#b7870f"
              points="80,50 80,75 80,99 40,75"
            ></polygon>
            <polygon
              transform="translate(20, 31)"
              strokeWidth="2"
              stroke=""
              fill="url(#gradiente2)"
              points="40,-40 80,-40 80,99 40,75"
            ></polygon>
            <defs>
              <linearGradient y2="100%" x2="0%" y1="-17%" x1="10%" id="gradiente2">
                <stop style={{ stopColor: '#d3a51000', stopOpacity: 1 }} offset="20%"></stop>
                <stop
                  style={{ stopColor: '#d3a51054', stopOpacity: 1 }}
                  offset="100%"
                  id="animatedStop"
                ></stop>
              </linearGradient>
            </defs>
            <polygon
              transform="rotate(180 100 100) translate(20, 20)"
              strokeWidth="2"
              stroke=""
              fill="#d3a410"
              points="80,50 80,75 80,99 40,75"
            ></polygon>
            <polygon
              transform="rotate(0 100 100) translate(60, 20)"
              strokeWidth="2"
              stroke=""
              fill="url(#gradiente3)"
              points="40,-40 80,-40 80,85 40,110.2"
            ></polygon>
            <defs>
              <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente3">
                <stop style={{ stopColor: '#d3a51000', stopOpacity: 1 }} offset="20%"></stop>
                <stop
                  style={{ stopColor: '#d3a51054', stopOpacity: 1 }}
                  offset="100%"
                  id="animatedStop"
                ></stop>
              </linearGradient>
            </defs>
            <polygon
              transform="rotate(45 100 100) translate(80, 95)"
              strokeWidth="2"
              stroke=""
              fill="#ffe4a1"
              points="5,0 5,5 0,5 0,0"
              id="particles"
            ></polygon>
            <polygon
              transform="rotate(45 100 100) translate(80, 55)"
              strokeWidth="2"
              stroke=""
              fill="#ccb069"
              points="6,0 6,6 0,6 0,0"
              id="particles"
            ></polygon>
            <polygon
              transform="rotate(45 100 100) translate(70, 80)"
              strokeWidth="2"
              stroke=""
              fill="#fff"
              points="2,0 2,2 0,2 0,0"
              id="particles"
            ></polygon>
            <polygon
              strokeWidth="2"
              stroke=""
              fill="#292d34"
              points="29.5,99.8 100,142 100,172 29.5,130"
            ></polygon>
            <polygon
              transform="translate(50, 92)"
              strokeWidth="2"
              stroke=""
              fill="#1f2127"
              points="50,50 120.5,8 120.5,35 50,80"
            ></polygon>
          </g>
        </svg>
      </div>
      
      {!isContentVisible && <div className="click-hint">Click the cube to learn more</div>}

      {/* Content that appears when SVG is clicked */}
      <div className={`content-wrapper-about ${isContentVisible ? 'visible' : ''}`}>
        <h1 className="heading">About Me</h1>
        
        <div className="content-block fade-in">
          <p className="paragraph">
            Prefinal year Information Technology student at Dr. B. R. Ambedkar National Institute of Technology, Jalandhar. Passionate about software development with experience in building scalable web applications.
            I'm a passionate developer focused on creating beautiful, functional, and user-centered digital experiences. With a background in both design and development, I bridge the gap between aesthetics and functionality.
          </p>
        </div>
        
        <div className="content-block fade-in delay-300">
          <h2 className="subheading">Achievements And Positions</h2>
          <div className="achievements-grid">
            <div className="achievement-item">
              <h3 className="achievement-title">Myntra HackkerRamp 2024</h3>
              <p className="paragraph">Prefinalist in the competition</p>
            </div>
            <div className="achievement-item">
              <h3 className="achievement-title">Department Representative</h3>
              <p className="paragraph">Internship Representative of my Department</p>
            </div>
            <div className="achievement-item">
              <h3 className="achievement-title">IOTA Club</h3>
              <p className="paragraph">Web Developer in the IOTA club</p>
            </div>
            <div className="achievement-item">
              <h3 className="achievement-title">Hackathons</h3>
              <p className="paragraph">Participated in various Hackathons</p>
            </div>
          </div>
        </div>
        
        <div className="content-block fade-in delay-600">
          <h2 className="subheading">My Skills</h2>
          <div className="skills-container">
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">UI/UX Design</span>
            <span className="skill-tag">Responsive Design</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;