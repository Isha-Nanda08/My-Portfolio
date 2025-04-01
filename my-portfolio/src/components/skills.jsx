import React, { useState, useEffect, useRef } from 'react';

// Custom SVG icon components remain unchanged
const ReactIcon = ({ color = "#61DAFB", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1">
    <circle cx="12" cy="12" r="2.5" fill={color} />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke={color} fill="none" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke={color} fill="none" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke={color} fill="none" transform="rotate(-60 12 12)" />
  </svg>
);

const JavaScriptIcon = ({ color = "#F7DF1E", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
    <rect width="24" height="24" fill={color} />
    <path d="M6 18V7h3v11h-3zm7.5 0c-.8 0-1.5-.2-2-.6-.5-.4-.8-1-.9-1.6l2.6-.8c0 .3.1.5.3.7.2.2.4.3.7.3.6 0 .9-.3.9-.8V7h3v8c0 1-.3 1.8-.9 2.4-.6.6-1.5.8-2.7.8z" fill="#000" />
  </svg>
);

const CSSIcon = ({ color = "#1572B6", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
    <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill={color} />
    <path d="M16 6.5H8l.25 3h7.25l-.5 5.5L12 16l-3-1v-2h2.5l.5.5 2-.5 1-5H7L8 13h8l.25-3H8.5l-.25-3.5z" fill="white" />
  </svg>
);

const HTMLIcon = ({ color = "#E34F26", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
    <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill={color} />
    <path d="M17 7H7l.5 6h8l-.5 5.5-3 1-3-1-.25-2.5H6L6.5 19 12 21l5.5-2 .75-8.5H9.75l-.25-3h8z" fill="white" />
  </svg>
);

const NodeIcon = ({ color = "#339933", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
    <path d="M12 21.8c-.5 0-1-.1-1.4-.4L7.1 19c-.7-.4-.3-.5-.1-.6.9-.3 1.1-.4 2-.9.1 0 .2 0 .3.1l2.7 1.6c.1.1.2.1.3 0l10.5-6.1c.1-.1.2-.2.2-.3v-12.1c0-.1-.1-.2-.2-.3L12.3 0.2c-.1-.1-.2-.1-.3 0L1.5 6.3c-.1.1-.2.2-.2.3v12.1c0 .1.1.2.2.3l2.9 1.7c2 1 3.2-.2 3.2-1.3v-11.9c0-.2.2-.4.4-.4h1.3c.2 0 .4.2.4.4v11.9c0 2.6-1.4 4.1-3.9 4.1-.8 0-1.4 0-3.1-.8l-2.8-1.6c-.7-.4-1.1-1.1-1.1-1.9v-12.1c0-.8.4-1.5 1.1-1.9L10.6.2c.7-.4 1.6-.4 2.3 0l10.5 6.1c.7.4 1.1 1.1 1.1 1.9v12.1c0 .8-.4 1.5-1.1 1.9l-10.5 6.1c-.4.3-.9.4-1.4.4" fill={color} />
    <path d="M15.3 14.7c-4.6 0-5.6-2.1-5.6-3.9 0-.2.2-.4.4-.4h1.4c.2 0 .3.1.4.3.3 1.8 1.1 2.7 3.4 2.7 2.1 0 3-.5 3-1.5 0-.6-.2-1.1-3.5-1.4-2.7-.3-4.4-.9-4.4-3.1 0-2 1.7-3.2 4.5-3.2 3.2 0 4.8 1.1 5 3.5 0 .1 0 .2-.1.3-.1.1-.2.1-.3.1h-1.4c-.2 0-.3-.1-.4-.3-.4-1.9-1.4-2.5-2.9-2.5-1.3 0-3 .5-3 1.4 0 .7.3 .9 3.4 1.3 3 .4 4.5.9 4.5 3.2.1 2.2-1.8 3.5-5 3.5" fill={color} />
  </svg>
);

const TypeScriptIcon = ({ color = "#3178C6", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
    <rect width="24" height="24" fill={color} />
    <path d="M18 15v2.4c-.3.2-.7.4-1.2.5-.5.1-1 .2-1.6.2-.9 0-1.6-.2-2.1-.6-.6-.4-.9-1-.9-1.7 0-.4.1-.8.3-1.1.2-.3.5-.5 1-.7.5-.2 1.1-.3 1.8-.3h2.3v-.6c0-.4-.1-.7-.4-.9-.3-.2-.7-.4-1.2-.4-.4 0-.8.1-1.1.2-.3.2-.5.4-.5.7h-2.5c0-.6.2-1.1.5-1.5.3-.4.7-.7 1.3-.9.5-.2 1.2-.3 1.9-.3.7 0 1.3.1 1.8.3.5.2.9.5 1.2.9.3.4.4.9.4 1.5v3zm-2.5-1.1h-1.6c-.4 0-.8.1-1 .2-.2.1-.3.3-.3.6 0 .3.1.5.3.6.2.1.5.2.9.2.3 0 .6 0 .9-.1.3-.1.5-.2.6-.3.1-.2.2-.4.2-.7v-.5zm-5.3-1.5v4.2H7.7V9.4h2.5z" fill="white" />
  </svg>
);

const ReduxIcon = ({ color = "#764ABC", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
    <path d="M16.6 16.6c.9-.9.8-2.3-.1-3.2-.9-.9-2.3-1-3.2-.1-.9.9-.8 2.3.1 3.2.9.9 2.3 1 3.2.1M11.4 18c.9-.9.8-2.3-.1-3.2-.9-.9-2.3-1-3.2-.1-.9.9-.8 2.3.1 3.2.9.9 2.3 1 3.2.1M15.1 13c.9-.9.8-2.3-.1-3.2-.9-.9-2.3-1-3.2-.1-.9.9-.8 2.3.1 3.2.9.9 2.3 1 3.2.1M18.3 10.7c.9.9 2.3.8 3.2-.1.9-.9 1-2.3.1-3.2-.9-.9-2.3-.8-3.2.1-.9.9-1 2.3-.1 3.2M9.9 10.7c.9.9 2.3.8 3.2-.1.9-.9 1-2.3.1-3.2-.9-.9-2.3-.8-3.2.1-.9.9-1 2.3-.1 3.2M5.7 14.9c.9.9 2.3.8 3.2-.1.9-.9 1-2.3.1-3.2-.9-.9-2.3-.8-3.2.1-.9.9-1 2.3-.1 3.2M3.2 10.7c.9.9 2.3.8 3.2-.1.9-.9 1-2.3.1-3.2-.9-.9-2.3-.8-3.2.1-.9.9-1 2.3-.1 3.2" stroke={color} fill="none" strokeWidth="1.5" />
  </svg>
);

const TailwindIcon = ({ color = "#06B6D4", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" fill={color} />
  </svg>
);

const GitIcon = ({ color = "#F05032", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
    <path d="M23.546 10.93L13.067 0.452c-0.604-0.603-1.582-0.603-2.188 0L8.708 2.627l2.76 2.76c0.645-0.215 1.379-0.07 1.889 0.441 0.516 0.515 0.658 1.258 0.438 1.9l2.658 2.66c0.645-0.223 1.387-0.078 1.9 0.435 0.721 0.72 0.721 1.884 0 2.604-0.719 0.719-1.881 0.719-2.6 0-0.539-0.541-0.674-1.337-0.404-1.996L12.86 8.955v6.525c0.176 0.086 0.342 0.203 0.488 0.348 0.713 0.721 0.713 1.883 0 2.6-0.719 0.721-1.889 0.721-2.609 0-0.719-0.719-0.719-1.879 0-2.598 0.182-0.18 0.387-0.316 0.605-0.406V8.835c-0.217-0.091-0.424-0.222-0.6-0.401-0.545-0.545-0.676-1.342-0.396-2.009L7.636 3.7.45 10.881c-0.6.605-.6 1.584 0 2.189l10.48 10.477c0.604 0.604 1.582 0.604 2.186 0l10.43-10.43c0.605-0.603 0.605-1.582 0-2.187" fill={color} />
  </svg>
);

const MongoDBIcon = ({ color = "#47A248", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
    <path d="M12 3c-1.5.6-4.5 2.3-4.5 7.7 0 5.1 3.9 6.3 4.5 6.8v3.9c.7-.3 5.9-2.4 5.9-10.7 0-8.3-5.1-7.5-5.9-7.7m0 15.7c-.2-.4-1.3-.8-1.9-2.9-.5-1.7-.2-4.9-.1-6.7.1-1.8-.1-4.1.1-5.9.4-2.6 2.5-2.8 2.7-2.8-.1 0 .2.3.3.6-.1 3.1-.3 12.1-.2 13.9 0 1.8 0 3-.9 3.8" fill={color} />
  </svg>
);

const NextJSIcon = ({ color = "#000000", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
    <path d="M12,22c5.5,0,10-4.5,10-10S17.5,2,12,2S2,6.5,2,12S6.5,22,12,22z M6.6,14l7.9,4.9C9.6,20,5.3,17.5,4.1,13.4L6.6,14z M17.9,8.5L9.5,3.8c6.2,0.1,11.3,5.5,10.3,11.7L17.9,8.5z M9.5,17.4v-10L17,12L9.5,17.4z" fill={color} />
  </svg>
);

const GraphQLIcon = ({ color = "#E10098", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
    <path d="M12 2L2 6.6v10.8L12 22l10-4.6V6.6L12 2zm5 15.3l-5 2.3-5-2.3V6.7l5-2.3 5 2.3v10.6z" fill={color} />
    <path d="M12 5.5L7 8v8l5 2.5 5-2.5V8l-5-2.5zM7 15l4-7m2 0l4 7M7 9h10" stroke={color} fill="none" strokeWidth=".7" />
    <circle cx="7" cy="9" r="1" fill={color} />
    <circle cx="17" cy="9" r="1" fill={color} />
    <circle cx="12" cy="5" r="1" fill={color} />
    <circle cx="12" cy="19" r="1" fill={color} />
    <circle cx="7" cy="15" r="1" fill={color} />
    <circle cx="17" cy="15" r="1" fill={color} />
  </svg>
);

// Ripple component that will be used inside each skill card
const Ripple = ({ color }) => {
  const [ripples, setRipples] = useState([]);
  const containerRef = useRef(null);

  const addRipple = (event) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    
    // Get mouse position relative to container
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Create a unique ID for this ripple
    const id = Date.now();
    
    // Add the new ripple to state
    setRipples(prev => [...prev, { id, x, y }]);
    
    // Remove the ripple after animation completes
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id));
    }, 1000);
  };

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden" 
      onMouseDown={addRipple}
    >
      {ripples.map(ripple => (
        <span 
          key={ripple.id}
          className="absolute rounded-full pointer-events-none opacity-70 transform -translate-x-1/2 -translate-y-1/2 animate-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            background: color,
            width: '120px',
            height: '120px',
            borderRadius:'20px',
            border:'3px solid white'
          }}
        ></span>
      ))}
    </div>
  );
};

const SkillsGrid = () => {
  // Skills data with custom SVG icons
  const skills = [
    { name: 'React', color: '#61DAFB', icon: ReactIcon },
    { name: 'JavaScript', color: '#F7DF1E', icon: JavaScriptIcon },
    { name: 'CSS', color: '#1572B6', icon: CSSIcon },
    { name: 'HTML', color: '#E34F26', icon: HTMLIcon },
    { name: 'Node.js', color: '#339933', icon: NodeIcon },
    { name: 'TypeScript', color: '#3178C6', icon: TypeScriptIcon },
    { name: 'Redux', color: '#764ABC', icon: ReduxIcon },
    { name: 'Tailwind', color: '#06B6D4', icon: TailwindIcon },
    { name: 'Git', color: '#F05032', icon: GitIcon },
    { name: 'MongoDB', color: '#47A248', icon: MongoDBIcon },
    { name: 'Next.js', color: '#000000', icon: NextJSIcon },
    { name: 'GraphQL', color: '#E10098', icon: GraphQLIcon }
  ];

  // Animation state
  const [animated, setAnimated] = useState([]);

  // Animate skills appearing one by one
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated([]);
      
      skills.forEach((_, index) => {
        setTimeout(() => {
          setAnimated(prev => [...prev, index]);
        }, index * 150);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full p-6 bg-gray-900 rounded-lg">
      <style jsx global>{`
        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.7;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple 1s ease-out forwards;
        }
      `}</style>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          
          return (
            <div 
              key={skill.name}
              className={`transform transition-all duration-500 ${
                animated.includes(index) 
                  ? 'scale-100 opacity-100' 
                  : 'scale-50 opacity-0'
              }`}
            >
              <div 
                className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center cursor-pointer group relative h-32 flex flex-col items-center justify-center overflow-hidden"
              >
                {/* Ripple effect container */}
                <Ripple color={skill.color} />
                
                {/* Icon that floats away on hover */}
                <div className="transition-all duration-700 ease-in-out absolute transform group-hover:-translate-y-40 group-hover:opacity-0 group-hover:scale-150 z-10">
                  <Icon size={40} color={skill.color} />
                </div>
                
                {/* Name that stays in place */}
                <span className="font-medium text-gray-200 transition-colors duration-300 group-hover:text-white relative z-10">
                  {skill.name}
                </span>
                
                {/* Background glow effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                  style={{ 
                    background: `radial-gradient(circle at center, ${skill.color} 0%, transparent 70%)` 
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsGrid;