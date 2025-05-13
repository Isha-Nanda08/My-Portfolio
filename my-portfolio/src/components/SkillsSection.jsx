import React, { useEffect, useRef, useState } from 'react';
// import CircuitBoardBackground from './createBoard';
import PortfolioSkillsSection from './skilly';
import SubmarineAnimation from './submarine';
import AnimatedPattern from './Animated';

const ScrollingSkills = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Skills with logos and colors - expanded list from your original
  const skills = [
    { name: "React", color: "#61DAFB", logo: "devicon-react-original colored" },
    { name: "JavaScript", color: "#F7DF1E", logo: "devicon-javascript-plain colored" },
    { name: "HTML", color: "#E34F26", logo: "devicon-html5-plain colored" },
    { name: "CSS", color: "#1572B6", logo: "devicon-css3-plain colored" },
    { name: "Node.js", color: "#339933", logo: "devicon-nodejs-plain colored" },
    { name: "Firebase", color: "#FFCA28", logo: "devicon-firebase-plain colored" },
    { name: "MaterialUI", color: "#0081CB", logo: "devicon-materialui-plain colored" },
    // { name: "Nginx", color: "#009639", logo: "devicon-nginx-original colored" },
    { name: "Stripe", color: "#8C4BFF", logo: "devicon-strapi-plain colored" },
    { name: "MongoDB", color: "#47A248", logo: "devicon-mongodb-plain colored" },
    { name: "Express", color: "#000000", logo: "devicon-express-original" },
    // { name: "TypeScript", color: "#3178C6", logo: "devicon-typescript-plain colored" },
    { name: "Redux", color: "#764ABC", logo: "devicon-redux-original colored" },
    { name: "Tailwind", color: "#06B6D4", logo: "devicon-tailwindcss-plain colored" },
    { name: "Git", color: "#F05032", logo: "devicon-git-plain colored" },
    { name: "PostgreSQL", color: "#336791", logo: "devicon-postgresql-plain colored" },
    { name: "Docker", color: "#2496ED", logo: "devicon-docker-plain colored" },
    { name: "AWS", color: "#FF9900", logo: "devicon-amazonwebservices-original colored" },
    // { name: "Next.js", color: "#000000", logo: "devicon-nextjs-original" },
    // { name: "Sass", color: "#CC6699", logo: "devicon-sass-original colored" },
  ];

  // Duplicate the skills array to create a seamless infinite scroll effect
  const extendedSkills = [...skills, ...skills];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
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
    <section ref={sectionRef} className="skills-section" id="skills">
      <div className="background-wrapper">
        <AnimatedPattern />
        
        <div className="glow-overlay"></div>
      </div>
      
      <div className="skills-container">
        <h2 className={`section-title ${visible ? 'visible' : ''}`}>
          <div className="tech-text">SKILLS</div>
          <SubmarineAnimation/>
        </h2>
        <PortfolioSkillsSection/>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes glow {
          0% { opacity: 0.3; }
          50% { opacity: 0.7; }
          100% { opacity: 0.3; }
        }
        
        @keyframes techTextGlow {
          0% { text-shadow: 0 0 10px #61DAFB, 0 0 20px #61DAFB; }
          50% { text-shadow: 0 0 20px #7B68EE, 0 0 30px #7B68EE; }
          100% { text-shadow: 0 0 10px #61DAFB, 0 0 20px #61DAFB; }
        }
        
        .skills-section {
          position: relative;
          width: 100%;
          padding:60px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          /* overflow: hidden; */
          background-color: #0A0A1A;
        }
        
        .background-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        
        .glow-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(123, 104, 238, 0.2) 0%, rgba(10, 10, 26, 0) 70%);
          animation: glow 8s infinite ease-in-out;
          z-index: 1;
        }
        
        .skills-container {
          position: relative;
          z-index: 10;
          width: 90%%;
          /* max-width: 1200px; */
          padding: 0 32px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color:#2c292956;
          
        }
        
        .section-title {
          color: white;
          font-size: 48px;
          text-align: center;
          margin-bottom: 64px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          text-shadow: 0 0 15px rgba(123, 104, 238, 0.6);
          position: relative;
        }
        
        .tech-text {
          color: #177ad6;
          font-size:4rem;
          font:"Tektur", sans-serif;
          z-index:100;
          /* animation: techTextGlow 3s infinite ease-in-out; */
        }
        
        .section-title.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .skills-scroll-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .skills-scroll-container.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .skills-track {
          display: flex;
          animation: scroll 40s linear infinite;
          width: fit-content;
        }
        
        .skills-scroll-container.paused .skills-track {
          animation-play-state: paused;
        }
        
        .skill-card {
          flex-shrink: 0;
          width: 140px;
          height: 140px;
          margin: 0 20px;
          background: rgba(10, 10, 30, 0.915);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
          position: relative;
        }
        
        .skill-card:hover {
          transform: translateY(-10px) scale(1.05);
          border: 1px solid var(--skill-color);
          box-shadow: 0 0 20px var(--skill-color);
          z-index: 10;
        }
        
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 12px;
          background: radial-gradient(circle at center, var(--skill-color, transparent) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .skill-card:hover::before {
          opacity: 0.2;
        }
        
        .skill-icon-container {
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
        }
        
        .skill-card i {
          font-size: 50px;
          color: var(--skill-color);
          transition: transform 0.3s ease;
        }
        
        .skill-card:hover i {
          transform: scale(1.2);
        }
        
        .skill-name {
          color: white;
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          transition: color 0.3s ease;
        }
        
        .skill-card:hover .skill-name {
          color: var(--skill-color);
        }
        
        @media (max-width: 768px) {
          .section-title {
            font-size: 36px;
            margin-bottom: 40px;
          }
          
          .skills-section {
            padding: 80px 0;
          }
          
          .skill-card {
            width: 120px;
            height: 120px;
            margin: 0 15px;
          }
          
          .skill-icon-container {
            height: 60px;
            margin-bottom: 10px;
          }
          
          .skill-card i {
            font-size: 40px;
          }
          
          .skill-name {
            font-size: 14px;
          }
        }
        
        @media (max-width: 576px) {
          .skill-card {
            width: 100px;
            height: 100px;
            margin: 0 10px;
            padding: 15px;
          }
          
          .skill-icon-container {
            height: 50px;
            margin-bottom: 5px;
          }
          
          .skill-card i {
            font-size: 35px;
          }
          
          .skill-name {
            font-size: 12px;
          }
          
          .section-title {
            font-size: 32px;
            margin-bottom: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default ScrollingSkills;