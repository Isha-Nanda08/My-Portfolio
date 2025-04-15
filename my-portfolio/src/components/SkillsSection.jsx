import React, { useEffect, useState, useRef } from 'react';
import CircuitBoardBackground from './createBoard';

const SkillsExplosion = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Updated skills with blue/purple/cyan color scheme
  const skills = [
    { name: "React", level: 90, color: "#61DAFB" }, // Keeping React's cyan
    { name: "JavaScript", level: 85, color: "#7B68EE" }, // Medium slate blue
    { name: "CSS3", level: 80, color: "#1E90FF" }, // Dodger blue
    { name: "HTML5", level: 95, color: "#4169E1" }, // Royal blue
    { name: "Node.js", level: 75, color: "#6A5ACD" }, // Slate blue
    { name: "Express", level: 78, color: "#E6E6FA" }, // Lavender
    { name: "MongoDB", level: 82, color: "#00BFFF" }, // Deep sky blue
    { name: "MySQL", level: 76, color: "#483D8B" }, // Dark slate blue
    { name: "WebSockets", level: 73, color: "#9370DB" }, // Medium purple
    { name: "Redux", level: 80, color: "#8A2BE2" }, // Blue violet
    { name: "Tailwind", level: 85, color: "#00CED1" }, // Dark turquoise
    { name: "Git", level: 75, color: "#6495ED" }, // Cornflower blue
    { name: "Responsive Design", level: 90, color: "#B0C4DE" }, // Light steel blue
    { name: "Material UI", level: 73, color: "#9370DB" }, // Medium purple
    { name: "Stripe", level: 82, color: "#00BFFF" }, // Deep sky blue
    { name: "AWS", level: 76, color: "#483D8B" }, // Dark slate blue
    { name: "Docker", level: 73, color: "#9370DB" }, // Medium purple
    { name: "PostgreSQL", level: 90, color: "#B0C4DE" }, // Light steel blue
    { name: "Postman", level: 85, color: "#00CED1" }, // Dark turquoise
    { name: "Rest APIs", level: 75, color: "#6495ED" }, // Cornflower blue
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When section becomes visible in viewport
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 } // 20% visibility triggers the animation
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="skills-section">
      <div className="background-wrapper">
        <CircuitBoardBackground />
      </div>
      
      <div className="skills-container">
        <h2 className={`section-title ${visible ? 'visible' : ''}`}>
          My Skills
        </h2>
        
        <div className={`skills-grid ${visible ? 'visible' : ''}`}>
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`skill-badge ${visible ? 'visible' : ''}`}
              style={{ 
                '--delay': `${index * 0.1}s`,
                '--color': skill.color,
              }}
            >
              <div className="skill-inner">
                <span className="skill-name">{skill.name}</span>
                
                {/* <span className="skill-percentage">{skill.level}%</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .skills-section {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 900px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #0A0A1A; /* Dark blue-black background */
        }
        
        .background-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        
        .skills-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1200px;
          padding: 32px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .section-title {
          color: white;
          font-size: 48px;
          text-align: center;
          margin-bottom: 64px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          text-shadow: 0 0 15px rgba(123, 104, 238, 0.6); /* Subtle glow effect */
        }
        
        .section-title.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 40px;
          width: 100%;
          max-width: 1000px;
          opacity: 0;
          transition: opacity 0.8s ease;
        }
        
        .skills-grid.visible {
          opacity: 1;
        }
        
        .skill-badge {
          flex: 0 0 auto;
          width: calc(20% - 40px); /* 5 items per row with 40px gap */
          min-width: 180px;
          background: rgba(10, 10, 30, 0.85); /* Dark blue-black background */
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 0 15px var(--color);
          border: 1px solid var(--color);
          opacity: 0;
          transform: scale(0);
          transition: opacity 0.8s cubic-bezier(0.17, 0.89, 0.32, 1.25),
                     transform 0.8s cubic-bezier(0.17, 0.89, 0.32, 1.25);
          transition-delay: calc(0.3s + var(--delay));
        }
        
        .skill-badge.visible {
          opacity: 1;
          transform: scale(1);
        }
        
        .skill-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 8px;
          background: linear-gradient(135deg, var(--color) 0%, transparent 80%);
          opacity: 0.1;
          z-index: -1;
        }
        
        .skill-inner {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
        }
        
        .skill-name {
          color: white;
          font-weight: bold;
          font-size: 18px;
        }
        
        .skill-bar-container {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }
        
        .skill-bar {
          height: 100%;
          background: var(--color);
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 1s ease-out;
          transition-delay: calc(0.8s + var(--delay));
        }
        
        .skill-badge.visible .skill-bar {
          transform: scaleX(1);
        }
        
        .skill-percentage {
          color: var(--color);
          font-size: 14px;
          text-align: right;
        }
        
        @media (max-width: 1200px) {
          .skill-badge {
            width: calc(25% - 40px); /* 4 items per row */
          }
        }
        
        @media (max-width: 992px) {
          .skill-badge {
            width: calc(33.33% - 40px); /* 3 items per row */
          }
        }
        
        @media (max-width: 768px) {
          .skill-badge {
            width: calc(50% - 40px); /* 2 items per row */
          }
        }
        
        @media (max-width: 576px) {
          .skill-badge {
            width: 100%; /* 1 item per row */
            max-width: 300px;
          }
          
          .skills-grid {
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsExplosion;