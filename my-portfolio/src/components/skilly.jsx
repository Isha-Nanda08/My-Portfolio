import { useState } from 'react';
import { 
  LogIn, // React (hook symbol)
  FileCode, // JavaScript (replacing FileJs which doesn't exist)
  Palette, // CSS
  Server, // Node.js
  FileCode2, // Python
  LayoutDashboard, // UI/UX
  Database, // GraphQL
  FileType, // TypeScript
  GitBranch // Git
} from 'lucide-react';

export default function PortfolioSkillsSection() {
  // Define your skills with gradient colors that match the front page theme
  const skills = [
    { name: "React", gradient: "linear-gradient(135deg, #61dafb, #2d8eb8)", icon: <LogIn size={32} color="#61dafb" /> },
    { name: "JavaScript", gradient: "linear-gradient(135deg, #1ef7d7, #01aec9)", icon: <FileCode size={32} color="#f7df1e" /> },
    { name: "CSS", gradient: "linear-gradient(135deg, #61dafb, #2d8eb8)", icon: <Palette size={32} color="#61dafb" /> },
    { name: "Node.js", gradient: "linear-gradient(135deg, #e5e1d6, #dfe5d8)", icon: <Server size={32} color="#83cd29" /> },
    { name: "Python", gradient: "linear-gradient(135deg, #9C27B0, #7B1FA2)", icon: <FileCode2 size={32} color="#9C27B0" /> },
    { name: "UI/UX", gradient: "linear-gradient(135deg, #9C27B0, #7B1FA2)", icon: <LayoutDashboard size={32} color="#9C27B0" /> },
    { name: "GraphQL", gradient: "linear-gradient(135deg, #9C27B0, #7B1FA2)", icon: <Database size={32} color="#9C27B0" /> },
    { name: "TypeScript", gradient: "linear-gradient(135deg, #61dafb, #2d8eb8)", icon: <FileType size={32} color="#61dafb" /> },
    { name: "Git", gradient: "linear-gradient(135deg, #F5F5F5, #E0E0E0)", icon: <GitBranch size={32} color="#F5F5F5" /> }
  ];

  return (
    <div className="skills-section">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Hover over a skill to see details</p>
      
      <nav className="skills-grid">
        {skills.map((skill, index) => (
          <a 
            key={index} 
            href="#" 
            className="skill-block" 
            style={{ '--bg': skill.gradient }}
          >
            <div className="skill-block-item">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          </a>
        ))}
      </nav>

      <style jsx>{`
        .skills-section {
          --lerp-0: 1;
          --lerp-1: 0.5625;
          --lerp-2: 0.25;
          --lerp-3: 0.0625;
          --lerp-4: 0;
          padding: 4rem 2rem;
          box-sizing: border-box;
          font-family: 'Google Sans', sans-serif, system-ui;
          background: #121212; /* Dark background to match front page */
          text-align: center;
          color: #F5F5F5;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: #61dafb; /* Light blue color from front page */
          font-weight: 300;
        }

        .section-subtitle {
          font-size: 1rem;
          margin-bottom: 3rem;
          color: #F5F5F5; /* Off-white text to match front page */
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          border-radius: 16px;
          background: rgba(30, 30, 30, 0.5); /* Dark background with transparency */
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(97, 218, 251, 0.1); /* Light blue border */
        }

        .skills-grid:hover {
          --show: 1;
        }

        .skill-block {
          width: 120px;
          height: 120px;
          display: grid;
          place-items: center;
          align-content: center;
          transition: all 0.3s;
          flex: calc(0.2 + (var(--lerp, 0) * 1.5));
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          text-decoration: none;
          outline: none;
        }

        .skill-block:after {
          content: '';
          width: 5%;
          aspect-ratio: 1;
          background: rgba(255, 255, 255, 0.3);
          position: absolute;
          bottom: 10%;
          left: 50%;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .skill-block:before {
          content: '';
          position: absolute;
          width: calc(100% + 16px);
          bottom: 0;
          aspect-ratio: 1 / 2;
          left: 50%;
          transition: transform 0.3s;
          transform-origin: 50% 100%;
          transform: translateX(-50%) scaleY(var(--show, 0));
          z-index: -1;
        }

        .skill-block .skill-block-item {
          transition: all 0.3s;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .skill-block:hover .skill-block-item,
        .skill-block:focus-visible .skill-block-item {
          box-shadow: 0 8px 24px rgba(97, 218, 251, 0.3); /* Light blue glow on hover */
          border: 1px solid rgba(97, 218, 251, 0.3);
        }

        .skill-block-item {
          width: 100%;
          height: 100%;
          aspect-ratio: 1;
          border-radius: 12px;
          background: var(--bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s;
          transform-origin: 50% 100%;
          position: relative;
          transform: translateY(calc(var(--lerp) * -25%));
          color: white;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }

        .skill-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-weight: 500;
          font-size: 1rem;
        }

        .skill-block:hover,
        .skill-block:focus-visible {
          --lerp: var(--lerp-0);
          z-index: 5;
          transform: scale(1.05);
        }

        .skill-block:has(+ .skill-block:hover),
        .skill-block:has(+ .skill-block:focus-visible),
        .skill-block:hover + .skill-block,
        .skill-block:focus-visible + .skill-block {
          --lerp: var(--lerp-1);
          z-index: 4;
        }

        .skill-block:has(+ .skill-block + .skill-block:hover),
        .skill-block:has(+ .skill-block + .skill-block:focus-visible),
        .skill-block:hover + .skill-block + .skill-block,
        .skill-block:focus-visible + .skill-block + .skill-block {
          --lerp: var(--lerp-2);
          z-index: 3;
        }

        .skill-block:has(+ .skill-block + .skill-block + .skill-block:hover),
        .skill-block:has(+ .skill-block + .skill-block + .skill-block:focus-visible),
        .skill-block:hover + .skill-block + .skill-block + .skill-block,
        .skill-block:focus-visible + .skill-block + .skill-block + .skill-block {
          --lerp: var(--lerp-3);
          z-index: 2;
        }

        .skill-block:has(+ .skill-block + .skill-block + .skill-block + .skill-block:hover),
        .skill-block:has(+ .skill-block + .skill-block + .skill-block + .skill-block:focus-visible),
        .skill-block:hover + .skill-block + .skill-block + .skill-block + .skill-block,
        .skill-block:focus-visible + .skill-block + .skill-block + .skill-block + .skill-block {
          --lerp: var(--lerp-4);
          z-index: 1;
        }

        @media (max-width: 768px) {
          .skills-grid {
            gap: 1rem;
            padding: 1rem;
          }
          
          .skill-block {
            width: 90px;
            height: 90px;
          }
          
          .skill-icon {
            transform: scale(0.75);
          }
          
          .skill-name {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}