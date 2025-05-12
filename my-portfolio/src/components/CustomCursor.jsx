import React, { useState, useEffect } from 'react';

const GlobalCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show cursor when component mounts (with slight delay to ensure DOM is ready)
    const showTimer = setTimeout(() => setIsVisible(true), 100);
    
    // Track cursor position
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    // Track when mouse leaves/enters the window
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    
    // Add all event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Add hover listeners to interactive elements
    const addHoverListeners = () => {
      // Find all interactive elements
      const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"], .interactive');
      
      // Add hoverable class to all interactive elements
      interactiveElements.forEach(el => {
        if (!el.classList.contains('hoverable')) {
          el.classList.add('hoverable');
        }
      });
      
      // Set up hover listeners
      const hoverables = document.querySelectorAll('.hoverable');
      
      // Add event listeners
      const handleMouseEnterHoverable = () => setIsHovering(true);
      const handleMouseLeaveHoverable = () => setIsHovering(false);
      
      hoverables.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnterHoverable);
        el.addEventListener('mouseleave', handleMouseLeaveHoverable);
      });
      
      // Return cleanup function
      return () => {
        hoverables.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnterHoverable);
          el.removeEventListener('mouseleave', handleMouseLeaveHoverable);
        });
      };
    };
    
    // Add hover listeners with a slight delay to ensure DOM is fully loaded
    const hoverListenersTimer = setTimeout(addHoverListeners, 500);
    
    // Clean up all event listeners when component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(showTimer);
      clearTimeout(hoverListenersTimer);
    };
  }, []);
  
  return (
    <>
      {/* Custom cursor elements */}
      <div 
        id="global-cursor-container"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 2147483647, // Maximum possible z-index
          visibility: isVisible ? 'visible' : 'hidden',
        }}
      >
        {/* Outer circle - grows on hover */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            transform: `translate(${position.x - 20}px, ${position.y - 20}px) scale(${isHovering ? 2.5 : 1})`,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid white',
            backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
            mixBlendMode: 'difference',
            transition: 'transform 0.3s ease-out, background-color 0.3s ease-out',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
          }}
        />
        
        {/* Inner dot - always stays small */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            transform: `translate(${position.x - 5}px, ${position.y - 5}px)`,
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'white',
            mixBlendMode: 'difference',
            transition: 'width 0.2s, height 0.2s',
          }}
        />
      </div>
      
      {/* Global styles to hide default cursor */}
      <style jsx global>{`
        html, body, * {
          cursor: none !important;
        }
        
        .hoverable {
          cursor: none !important;
          transition: transform 0.2s ease;
        }
        
        .hoverable:hover {
          transform: translateY(-1px);
        }
      `}</style>
    </>
  );
};

export default GlobalCursor;