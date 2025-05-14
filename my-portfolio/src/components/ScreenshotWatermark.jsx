import React, { useEffect, useState } from 'react';
import '../styles/ScreenshotWatermark.css';

const ScreenshotWatermark = ({ portfolioUrl = "https://isha-nanda-portfolio-avqx.onrender.com/" }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  
  // Track screenshot attempts
  useEffect(() => {
    // Create invisible watermarks across the entire page
    createWatermarks();
    
    // Detect screenshot attempts using multiple methods
    detectScreenshots();
    
    // Apply CSS that will make elements visible in screenshots
    document.body.classList.add('screenshot-protected');
    
    return () => {
      document.body.classList.remove('screenshot-protected');
      // Clean up any watermark elements
      const watermarks = document.querySelectorAll('.screenshot-watermark');
      watermarks.forEach(mark => mark.remove());
    };
  }, []);

  // Create watermarks across the page that will show up in screenshots
  const createWatermarks = () => {
    // Create a grid of transparent watermarks across the page
    const watermarkCount = 20; // Number of watermarks to place
    
    for (let i = 0; i < watermarkCount; i++) {
      const watermark = document.createElement('div');
      watermark.className = 'screenshot-watermark';
      
      // Position randomly across the viewport
      const topPos = Math.random() * 100;
      const leftPos = Math.random() * 100;
      
      watermark.style.top = `${topPos}%`;
      watermark.style.left = `${leftPos}%`;
      watermark.innerHTML = `
        <div class="watermark-content">
          <span>Visit my portfolio</span>
          <a href="${portfolioUrl}" target="_blank" rel="noopener noreferrer">
            ${new URL(portfolioUrl).hostname}
          </a>
        </div>
      `;
      
      document.body.appendChild(watermark);
    }
  };

  const detectScreenshots = () => {
    // Method 1: Keyboard shortcuts
    const handleKeyDown = (e) => {
      // Windows: Windows+Shift+S, Mac: Command+Shift+3 or Command+Shift+4
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && 
          (e.key === 'S' || e.key === 's' || e.key === '3' || e.key === '4')) {
        setShowOverlay(true);
        setTimeout(() => setShowOverlay(false), 5000);
      }
    };
    
    // Method 2: Detect visibility change
    const handleVisibility = () => {
      if (document.visibilityState === 'hidden') {
        // When the page becomes visible again, show overlay
        const handleVisibilityBack = () => {
          if (document.visibilityState === 'visible') {
            setShowOverlay(true);
            setTimeout(() => setShowOverlay(false), 5000);
            document.removeEventListener('visibilitychange', handleVisibilityBack);
          }
        };
        
        document.addEventListener('visibilitychange', handleVisibilityBack);
      }
    };
    
    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('visibilitychange', handleVisibility);
    
    // Return cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  };

  return (
    <>
      {/* Floating widget that appears when screenshot is detected */}
      {showOverlay && (
        <div className="screenshot-overlay">
          <div className="overlay-content">
            <h3>Screenshot Detected!</h3>
            <p>Check out my full portfolio for more amazing work</p>
            <a 
              href={portfolioUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="portfolio-button"
            >
              Visit Portfolio
            </a>
            <button 
              className="close-button"
              onClick={() => setShowOverlay(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ScreenshotWatermark;