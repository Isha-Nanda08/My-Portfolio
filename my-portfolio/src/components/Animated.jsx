import React from 'react';

export default function AnimatedPattern() {
  // Create a style object for the animation
  const styleObject = {
    '--s': '100px', /* control the size */
    '--c1': '#101010',
    '--c2': '#333536',
    
    '--_s': 'calc(2*var(--s)) calc(2*var(--s))',
    '--_g': 'var(--_s) conic-gradient(at 40% 40%, #0000 75%, var(--c1) 0)',
    '--_p': 'var(--_s) conic-gradient(at 20% 20%, #0000 75%, var(--c2) 0)',
    
    background: `
      calc(0.9*var(--s)) calc(0.9*var(--s))/var(--_p),
      calc(-0.1*var(--s)) calc(-0.1*var(--s))/var(--_p),
      calc(0.7*var(--s)) calc(0.7*var(--s))/var(--_g),
      calc(-0.3*var(--s)) calc(-0.3*var(--s))/var(--_g),
      conic-gradient(from 90deg at 20% 20%, var(--c2) 25%, var(--c1) 0) 0 0/var(--s) var(--s)
    `,
    animation: 'm 3s infinite',
    
    // Add dimensions to the container
    width: '100%',
    height: '100vh',
  };

  return (
    <div style={styleObject}>
      <style>
        {`
          @keyframes m {
            0% {
              background-position: 
                calc(0.9*var(--s)) calc(0.9*var(--s)),
                calc(-0.1*var(--s)) calc(-0.1*var(--s)),
                calc(0.7*var(--s)) calc(0.7*var(--s)),
                calc(-0.3*var(--s)) calc(-0.3*var(--s)),
                0 0;
            }
            25% {
              background-position: 
                calc(1.9*var(--s)) calc(0.9*var(--s)),
                calc(-1.1*var(--s)) calc(-0.1*var(--s)),
                calc(1.7*var(--s)) calc(0.7*var(--s)),
                calc(-1.3*var(--s)) calc(-0.3*var(--s)),
                0 0;
            }
            50% {
              background-position: 
                calc(1.9*var(--s)) calc(-0.1*var(--s)),
                calc(-1.1*var(--s)) calc(0.9*var(--s)),
                calc(1.7*var(--s)) calc(-0.3*var(--s)),
                calc(-1.3*var(--s)) calc(0.7*var(--s)),
                0 0;
            }
            75% {
              background-position: 
                calc(2.9*var(--s)) calc(-0.1*var(--s)),
                calc(-2.1*var(--s)) calc(0.9*var(--s)),
                calc(2.7*var(--s)) calc(-0.3*var(--s)),
                calc(-2.3*var(--s)) calc(0.7*var(--s)),
                0 0;
            }
            100% {
              background-position: 
                calc(2.9*var(--s)) calc(-1.1*var(--s)),
                calc(-2.1*var(--s)) calc(1.9*var(--s)),
                calc(2.7*var(--s)) calc(-1.3*var(--s)),
                calc(-2.3*var(--s)) calc(1.7*var(--s)),
                0 0;
            }
          }
        `}
      </style>
    </div>
  );
}