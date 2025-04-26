import React from 'react';
import { useState, useEffect } from 'react';
// import SocialIcons from './socialIcons';
import ContactSection from './ContactSection';

const RollingTextContact = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Create marquee content with duplicated text for seamless looping
  const createMarqueeContent = () => {
    const phrases = [];
    for (let i = 0; i < 10; i++) {
      phrases.push("GET IN TOUCH ");
    }
    return phrases.join("");
  };

  const styles = `
    .container {
      background-color: #000;
      color: #fff;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    
    .gallery-container {
      width: 100%;
      position: relative;
    }
    
    .image-gallery {
      width: 100%;
      height: 400px;
      background-color: #1a1a1a;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .image-container {
      width: 320px;
      height: 320px;
      position: relative;
    }
    
    .gallery-image {
      object-fit: contain;
      height: 100%;
      width: auto;
      margin: 0 auto;
    }
    
    .scroll-container {
      overflow: hidden;
      margin: 32px 0;
    }
    
    @keyframes scrollLeft {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    @keyframes scrollRight {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    
    .scroll-left {
      display: inline-block;
      white-space: nowrap;
      animation: scrollLeft 15s linear infinite;
      font-size: 80px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -2px;
    }
    
    .scroll-right {
      display: inline-block;
      white-space: nowrap;
      animation: scrollRight 15s linear infinite;
      font-size: 80px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -2px;
    }
    
    .footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 40px;
    }
    
    .footer-column {
      margin-bottom: 32px;
    }
    
    .footer-title {
      color: #777;
      margin-bottom: 16px;
      font-size: 18px;
    }
    
    .footer-link {
      display: block;
      color: white;
      text-decoration: none;
      font-size: 20px;
      margin-bottom: 12px;
    }
    
    .footer-link:hover {
      color: #ccc;
    }
    
    .designer-credit {
      padding: 40px;
      color: #666;
    }
    
    @media (max-width: 768px) {
      .footer {
        flex-direction: column;
      }
      
      .scroll-left, .scroll-right {
        font-size: 60px;
      }
      
      .image-gallery {
        height: 300px;
      }
      
      .image-container {
        width: 250px;
        height: 250px;
      }
    }
  `;

  return (
    <div className="container">
      {mounted && <style>{styles}</style>}
      <div className="gallery-container">

        <div className="scroll-container">
          <div className="scroll-left">
            {createMarqueeContent()}
          </div>
        </div>
        <div className="scroll-container">
          <div className="scroll-right">
            {createMarqueeContent()}
          </div>
        </div>
      </div>
      {/* <SocialIcons/> */}
      <ContactSection/>
      
    </div>
  );
};

export default RollingTextContact;