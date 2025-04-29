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

// CardBody component with side-by-side layout
export function CardBody({ children, className }) {
  return (
    <div className={cn('card-body side-by-side-layout', className)}>
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

// New component for left side (code and preview)
export function CardLeftSide({ children, className }) {
  return (
    <div className={cn('card-left-side', className)}>
      {children}
    </div>
  );
}

// New component for right side (description)
export function CardRightSide({ children, className }) {
  return (
    <div className={cn('card-right-side', className)}>
      {children}
    </div>
  );
}

// Example usage component with side-by-side layout
export function Card3DExample() {
  return (
    <CardContainer containerClassName="side-by-side-container">
      <CardBody className="group-card">
        {/* Left side with code and preview */}
        <CardLeftSide>
          <CardItem
            translateZ={50}
            className="card-title"
          >
            Make things float in air
          </CardItem>
          
          <CardItem
            translateZ={100}
            className="card-image-container"
          >
            <img
              src="/api/placeholder/400/300"
              className="card-image"
              alt="preview video placeholder"
            />
          </CardItem>
          
          <CardItem
            translateZ={40}
            className="card-code-container"
          >
            <pre className="card-code">
              {`// Example code
const floatingEffect = () => {
  // Your animation code here
};`}
            </pre>
          </CardItem>
        </CardLeftSide>
        
        {/* Right side with description */}
        <CardRightSide>
          <CardItem
            as="div"
            translateZ={60}
            className="card-description"
          >
            <h3>3D Card Effect</h3>
            <p>
              This component creates an interactive 3D effect that responds to mouse 
              movement. When users hover over the card, elements appear to float at 
              different depths creating a parallax effect.
            </p>
            <p>
              The effect uses CSS perspective transformations and React state to 
              track mouse position and apply the appropriate rotations and translations 
              to create a realistic 3D appearance.
            </p>
            <p>
              Each element can be configured with different Z-depths to control how 
              much they "pop out" when the card is hovered.
            </p>
          </CardItem>
          
          <div className="card-footer">
            <CardItem
              translateZ={20}
              as="a"
              href="https://example.com"
              target="_blank"
              className="card-link"
            >
              Learn More →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="card-button"
            >
              Get Started
            </CardItem>
          </div>
        </CardRightSide>
      </CardBody>
    </CardContainer>
  );
}

export default Card3DExample;