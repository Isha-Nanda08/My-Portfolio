import React, { useState, useEffect } from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isDecoding, setIsDecoding] = useState(false);
  const [decodingComplete, setDecodingComplete] = useState(false);

  const toggleContent = () => {
    if (!isContentVisible) {
      setIsDecoding(true);
      // After decoding animation completes, show the actual content
      setTimeout(() => {
        setDecodingComplete(true);
        setTimeout(() => {
          setIsContentVisible(true);
          setIsDecoding(false);
        }, 500);
      }, 3000); // 3 seconds for the decoding animation
    } else {
      setIsContentVisible(false);
      setDecodingComplete(false);
    }
  };

  // LaTeX versions of the content
  const latexAboutMe = `
\\documentclass{article}
\\usepackage{lipsum}
\\begin{document}
\\section{About Me}
Prefinal year Information Technology student at Dr. B. R. Ambedkar National Institute of Technology, Jalandhar. Passionate about software development with experience in building scalable web applications.
I'm a passionate developer focused on creating beautiful, functional, and user-centered digital experiences. With a background in both design and development, I bridge the gap between aesthetics and functionality.
\\end{document}
  `;

  const latexAchievements = `
\\begin{itemize}
  \\item \\textbf{Myntra HackkerRamp 2024} - Prefinalist in the competition
  \\item \\textbf{Department Representative} - Internship Representative of my Department
  \\item \\textbf{IOTA Club} - Web Developer in the IOTA club
  \\item \\textbf{Hackathons} - Participated in various Hackathons
\\end{itemize}
  `;

  return (
    <div className="container-about">
      {/* Grid background */}
      
      {/* SVG animation that serves as a clickable button */}
      <div 
        className={`svg-container ${isContentVisible || isDecoding ? 'active' : ''}`}
        onClick={toggleContent}
      >
          {/* Arrow hint pointing to the cube instead of text - hidden during decoding or when content is visible */}
          {!isDecoding && !isContentVisible && (
            <div className="left-arrow-hint">
              <div className="arrow-line"></div>
              <div className="arrow-head"></div>
              <div className="hint-text">Click to decode LaTeX</div>
            </div>
          )}

        <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200">
          <g style={{ order: '-1' }}>
            <polygon
              transform="rotate(45 100 100)"
              strokeWidth="1"
              stroke="#9810d3"
              fill="none"
              points="70,70 148,50 130,130 50,150"
              id="bounce"
            ></polygon>
            <polygon
              transform="rotate(45 100 100)"
              strokeWidth="1"
              stroke="#9810d3"
              fill="none"
              points="70,70 148,50 130,130 50,150"
              id="bounce2"
            ></polygon>
            <polygon
              transform="rotate(45 100 100)"
              strokeWidth="2"
              stroke=""
              fill="#9810d3"
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
              fill="#10acd3"
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
                <stop style={{ stopColor: '#10d3c953', stopOpacity: 1 }} offset="20%"></stop>
                <stop
                  style={{ stopColor: '#10d3c953', stopOpacity: 1 }}
                  offset="100%"
                  id="animatedStop"
                ></stop>
              </linearGradient>
            </defs>
            <polygon
              transform="rotate(180 100 100) translate(20, 20)"
              strokeWidth="2"
              stroke=""
              fill="#10acd3"
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
                <stop style={{ stopColor: '#10d3c953', stopOpacity: 1 }} offset="20%"></stop>
                <stop
                  style={{ stopColor: '#10d3c943', stopOpacity: 1 }}
                  offset="100%"
                  id="animatedStop"
                ></stop>
              </linearGradient>
            </defs>
            <polygon
              transform="rotate(45 100 100) translate(80, 95)"
              strokeWidth="2"
              stroke=""
              fill="#10acd3"
              points="5,0 5,5 0,5 0,0"
              id="particles"
            ></polygon>
            <polygon
              transform="rotate(45 100 100) translate(80, 55)"
              strokeWidth="2"
              stroke=""
              fill="#10acd3"
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
      
      {!isContentVisible ? (
        <div className="latex-content-wrapper">
          {!isDecoding ? (
            <>
              <div className="latex-code">
                <h1 className="latex-heading">About Me</h1>
                <pre>{latexAboutMe}</pre>
                
                <h2 className="latex-subheading">Achievements And Positions</h2>
                <pre>{latexAchievements}</pre>
              </div>
              
            </>
          ) : (
            <div className={`decoding-container ${decodingComplete ? "complete" : ""}`}>
              <div className="binary-overlay"></div>
              <div className="decoding-text">
                <div className="terminal">
                  <div className="terminal-header">
                    <div className="terminal-buttons">
                      <span className="terminal-button terminal-red"></span>
                      <span className="terminal-button terminal-yellow"></span>
                      <span className="terminal-button terminal-green"></span>
                    </div>
                    <div className="terminal-title">LaTeX Parser</div>
                  </div>
                  <div className="terminal-body">
                    {!decodingComplete ? (
                      <>
                        <div className="typing-effect">
                          <span className="prompt">$</span> LaTeX_Parser --decode --file=about.tex
                        </div>
                        <div className="processing-text">
                          <div className="progress-line">Analyzing LaTeX structure... <span className="status">DONE</span></div>
                          <div className="progress-line">Parsing document classes... <span className="status">DONE</span></div>
                          <div className="progress-line">Extracting content... <span className="status">DONE</span></div>
                          <div className="progress-line">Converting to HTML... <span className="status">IN PROGRESS</span></div>
                          <div className="progress-line">Applying styles... <span className="status-pending">PENDING</span></div>
                          <div className="progress-bar">
                            <div className="progress-fill"></div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="success-message">
                        <div className="checkmark">✓</div>
                        <span>Decoding complete! Rendering content...</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="content-wrapper-about visible">
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
        </div>
      )}
    </div>
  );
};

export default AboutSection;