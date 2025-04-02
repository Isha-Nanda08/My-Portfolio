import React, { useEffect, useRef, useState } from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const [dots, setDots] = useState([]);
  
  useEffect(() => {
    // Text animation for the heading
    const text = textRef.current;
    if (text) {
      let opacity = 0;
      const fadeIn = setInterval(() => {
        if (opacity >= 1) {
          clearInterval(fadeIn);
        } else {
          opacity += 0.05;
          text.style.opacity = opacity.toString();
        }
      }, 100);
    }
    
    // Create floating dots
    const newDots = [];
    for (let i = 0; i < 5; i++) {
      newDots.push({
        id: i,
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 80 + 10}%`,
        delay: `${Math.random() * 5}s`
      });
    }
    setDots(newDots);
    
    return () => {
      // Cleanup
    };
  }, []);

  return (
    <div ref={containerRef} className="about-container">
      {/* Animated Grid Background */}
      <div className="background-grid">
        {/* Horizontal lines */}
        <div className="grid-horizontal"></div>
        
        {/* Vertical lines */}
        <div className="grid-vertical"></div>
      </div>
      
      {/* Floating Dots */}
      {dots.map((dot) => (
        <div 
          key={dot.id}
          className="floating-dot"
          style={{
            left: dot.left,
            top: dot.top,
            animationDelay: dot.delay
          }}
        ></div>
      ))}
      
      {/* Content */}
      <div className="content-wrapper">
        <h1 ref={textRef} className="heading">About Me</h1>
        
        <div className="content-block fade-in">
          <p className="paragraph">
          Prefinal year Information Technology student at Dr. B. R. Ambedkar National Institute of Technology, Jalandhar. Passionate about software development with experience in building scalable web applications.
            I'm a passionate developer focused on creating beautiful, functional, and user-centered digital experiences. With a background in both design and development, I bridge the gap between aesthetics and functionality.
          </p>
        </div>
        
        <div className="content-block fade-in delay-300">
          <h2 className="subheading">Achievements And Positions</h2>
          <p className="paragraph">
           Prefinalist in the Myntra HackkerRamp 2024.
        </p>
        <p className="paragraph">
           Internship Representative of my Department.
        </p>
        <p className="paragraph">
           Web Develper in the IOTA club.
        </p>
        <p className="paragraph">
           Participated in various Hackathons.
        </p>
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
        
        {/* <div className="content-block fade-in delay-900">
          <h2 className="subheading">My Approach</h2>
          <p className="paragraph">
            I believe that great digital products come from understanding user needs, embracing innovation, and paying attention to details. Every project is an opportunity to create something meaningful that solves real problems.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default AboutSection;