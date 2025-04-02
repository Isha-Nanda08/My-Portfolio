import React from "react";
import "../styles/gridf.css";
import TextReveal from "../components/TextReveal"; // Import the new component

const MondrianGrid = () => {
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

  return (
    <div className="grid-container">
      {/* Mondrian Grid */}
      <div className="grid">
        {Array.from({ length: 18 }).map((_, index) => (
          <div key={index} className={`cell cell-${index + 1}`}></div>
        ))}
      </div>
      
      {/* Intro Text Overlay with Text Reveal */}
      <div className="intro-text">
        <TextReveal color="#1995ae92" duration={0.5} delay={0.25}>
          <h1 className="intro-title">Hey, this is <span className="name">Isha Nanda</span></h1>
        </TextReveal>
        
        <TextReveal color="#1995ae92" duration={0.8} delay={0.4}>
          <h2 className="intro-subtitle">A <span className="mern">MERN</span>  Stack Developer</h2>
        </TextReveal>
        
        <TextReveal color="#1995ae92" duration={1} delay={0.55}>
          <p className="intro-description">To know more</p>
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