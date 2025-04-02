import React, { useEffect, useRef } from "react";
import "../styles/textreveal.css";

const TextReveal = ({ children, color = "#1995ae92", duration = 0.5, delay = 0.25 }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    
    if (!container) return;
    
    // Set animation timing properties with inline styles for dynamic values
    container.style.setProperty('--duration', `${duration}s`);
    container.style.setProperty('--delay', `${delay}s`);
    container.style.setProperty('--reveal-delay', `${delay * 2}s`);
    container.style.setProperty('--reveal-color', color);
    
    // Add animation class after component mounts
    setTimeout(() => {
      container.classList.add('animate');
    }, 10);
    
  }, [color, duration, delay]);
  
  return (
    <div ref={containerRef} className="text-reveal-container">
      <div className="text-content">
        {children}
      </div>
      <div className="reveal-slide"></div>
    </div>
  );
};

export default TextReveal;