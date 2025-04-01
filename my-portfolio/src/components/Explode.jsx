// Explode.jsx
import React, { useEffect } from "react";
import "../styles/explode.css";
import IconCloud from "./IconCloud"; // Import your IconCloud component

const Explode = () => {
  useEffect(() => {
    // Get the elements we need to manipulate
    const explodeContainer = document.querySelector('.particle-deconstruct-container');
    const iconCloudContainer = document.querySelector('.icon-cloud-container');
    
    // Add click event to the explode element
    const explodeElement = document.querySelector('.particle-deconstruct-element');
    
    if (explodeElement) {
      explodeElement.addEventListener('click', () => {
        // Add the exploded class to trigger animation
        explodeElement.classList.add('exploded');
        
        // Add the fade-out class to the container
        explodeContainer.classList.add('fade-out');
        
        // After 2 seconds, show the IconCloud
        setTimeout(() => {
          explodeContainer.style.display = 'none';
          iconCloudContainer.classList.add('visible');
        }, 2000);
      });
    }
  }, []);

  return (
    <div className="page-wrapper">
      
      <div className="particle-deconstruct-container">
        <div className="particle-deconstruct-element">
          <h2>EXPLODE</h2>
        </div>
      </div>
      
      <div className="icon-cloud-container">
        <IconCloud />
      </div>
    </div>
  );
};

export default Explode;