// Card3D.js
import React, { useState, useRef, createContext, useContext, useEffect } from 'react';
import '../styles/Card3D.css';

// Context for sharing mouse state
const MouseStateContext = createContext();

// Hook to use mouse state
function useMouseState() {
  const context = useContext(MouseStateContext);
  if (!context) {
    throw new Error("useMouseState must be used within a MouseStateProvider");
  }
  return context;
}

// Utility function to combine class names
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// CardContainer component
export function CardContainer({ children, className, containerClassName }) {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const containerRef = useRef(null);
  
  function handleMouseMove(e) {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  }
  
  function handleMouseEnter() {
    setIsMouseEntered(true);
  }
  
  function handleMouseLeave() {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  }
  
  return (
    <div className={cn('card-container', containerClassName)} style={{ perspective: '1000px' }}>
      <div
        ref={containerRef}
        className={cn('card-container-inner', className)}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <MouseStateContext.Provider value={{ isMouseEntered }}>
          {children}
        </MouseStateContext.Provider>
      </div>
    </div>
  );
}

// CardBody component
export function CardBody({ children, className }) {
  return (
    <div className={cn('card-body', className)}>
      {children}
    </div>
  );
}

// CardItem component
export function CardItem({ 
  as: Component = 'div', 
  children, 
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...props 
}) {
  const ref = useRef(null);
  const { isMouseEntered } = useMouseState();
  
  useEffect(() => {
    if (!ref.current) return;
    
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = 'translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
    }
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);
  
  return (
    <Component ref={ref} className={cn('card-item', className)} {...props}>
      {children}
    </Component>
  );
}

// Example usage component
export function Card3DExample() {
  return (
    <CardContainer>
      <CardBody className="group-card">
        <CardItem
          translateZ={50}
          className="card-title"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ={60}
          className="card-description"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem
          translateZ={100}
          className="card-image-container"
        >
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="card-image"
            alt="thumbnail"
          />
        </CardItem>
        <div className="card-footer">
          <CardItem
            translateZ={20}
            as="a"
            href="https://example.com"
            target="_blank"
            className="card-link"
          >
            Visit →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="card-button"
          >
            Get Started
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default Card3DExample;