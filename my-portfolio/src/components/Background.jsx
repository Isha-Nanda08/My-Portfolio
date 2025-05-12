import React, { useState, useEffect } from 'react';
import '../styles/GridBackground.css';

const GridBackground = () => {
  const [zoom, setZoom] = useState(1);
  const [controlsVisible, setControlsVisible] = useState(true);
  
  // Apply zoom level directly to the document root
  useEffect(() => {
    document.documentElement.style.setProperty('--grid-zoom', zoom);
  }, [zoom]);
  
  // Auto-hide controls after 5 seconds of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      setControlsVisible(false);
    }, 5000);
    
    // Reset timer when zoom changes
    return () => clearTimeout(timer);
  }, [zoom]);
  
  // Show controls when mouse moves
  useEffect(() => {
    const handleMouseMove = () => {
      setControlsVisible(true);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const zoomIn = () => {
    const newZoom = Math.min(zoom + 0.1, 2.5);
    setZoom(newZoom);
    console.log('Zooming in:', newZoom);
    setControlsVisible(true);
  };
  
  const zoomOut = () => {
    const newZoom = Math.max(zoom - 0.1, 0.5);
    setZoom(newZoom);
    console.log('Zooming out:', newZoom);
    setControlsVisible(true);
  };
  
  return (
    <>
      <div className="grid-background-wrapper">
        <div className="background-grid" />
      </div>
      
      <div className={`zoom-control-top ${controlsVisible ? 'visible' : 'hidden'}`}>
        <button 
          className="zoom-control-btn" 
          onClick={zoomOut}
          aria-label="Zoom out"
        >
          −
        </button>
        <div className="zoom-level">{zoom.toFixed(1)}x</div>
        <button 
          className="zoom-control-btn" 
          onClick={zoomIn}
          aria-label="Zoom in"
        >
          +
        </button>
      </div>
    </>
  );
};
  
export default GridBackground;