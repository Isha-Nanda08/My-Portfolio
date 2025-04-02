import React, { useEffect, useRef } from "react";
import "../styles/gridf.css";
import TextReveal from "../components/TextReveal";

const MondrianGrid = () => {
  const circleTextRef = useRef(null);
  
  useEffect(() => {
    const circleElement = circleTextRef.current;
    if (!circleElement) return;
    
    let isDragging = false;
    let offsetX, offsetY;
    
    const onMouseDown = (e) => {
      isDragging = true;
      const rect = circleElement.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      circleElement.style.cursor = 'grabbing';
    };
    
    const onMouseMove = (e) => {
      if (!isDragging) return;
      
      circleElement.style.left = `${e.clientX - offsetX}px`;
      circleElement.style.top = `${e.clientY - offsetY}px`;
    };
    
    const onMouseUp = () => {
      isDragging = false;
      circleElement.style.cursor = 'grab';
    };
    
    // Add event listeners
    circleElement.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    
    // Clean up
    return () => {
      circleElement.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    
  }, []);

  // Function to handle scroll down when button is clicked
  const handleScrollDown = () => {
    // Get the viewport height
    const viewportHeight = window.innerHeight;
    
    // Scroll down by one viewport height
    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth'
    });
  };

  // Creating text for the spinning circle
  const text = "learn more · earn more · grow more · ";
  
  return (
    <div className="grid-container">
      {/* Background Grid Lines */}
      <div className="background-grid"></div>
      
      {/* Mondrian Grid */}
      <div className="grid">
        {Array.from({ length: 18 }).map((_, index) => (
          <div key={index} className={`cell cell-${index + 1}`}></div>
        ))}
      </div>
      
      {/* CSS-Only Spinning Text Circle */}
      <div ref={circleTextRef} className="circle-text-container">
        <div className="circle-text">
          {text.split('').map((char, index) => (
            <span 
              key={index} 
              style={{ 
                '--i': index,
                '--total': text.length
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      
      {/* Intro Text Overlay with Text Reveal */}
      <div className="intro-text">
        <TextReveal color="#1995ae92" duration={0.5} delay={0.25}>
          <h1 className="intro-title">Hey, this is <span className="name">Isha Nanda</span></h1>
        </TextReveal>
        
        <TextReveal color="#1995ae92" duration={0.8} delay={0.4}>
          <h2 className="intro-subtitle">A <span className="mern">MERN</span> Stack Developer</h2>
        </TextReveal>
        
        
        
        {/* Cylindrical Button */}
        <div className="button-container">
          <button 
            onClick={handleScrollDown}
            className="scroll-button"
          >
            {/* Dot inside the button */}
            <div className="button-dot"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MondrianGrid;