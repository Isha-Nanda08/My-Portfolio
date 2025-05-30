import { useState, useEffect } from 'react';
import '../styles/SiteTimer.css';

const SiteTimer = () => {
    const [timeSpent, setTimeSpent] = useState(0);
    const [totalVisitors, setTotalVisitors] = useState(0);
    
    // Format seconds into MM:SS format
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
    
    useEffect(() => {
      // Check if there's a stored visitor count in localStorage
      const storedVisitorCount = localStorage.getItem('totalVisitors');
      
      if (storedVisitorCount) {
        // If exists, parse and increment by 1
        const parsedCount = parseInt(storedVisitorCount, 10);
        setTotalVisitors(parsedCount + 1);
        localStorage.setItem('totalVisitors', parsedCount + 1);
      } else {
        // If not exists, start with 0
        setTotalVisitors(0);
        localStorage.setItem('totalVisitors', 0);
      }
      
      // Start the timer
      const timer = setInterval(() => {
        setTimeSpent(prevTime => prevTime + 1);
      }, 1000);
      
      // Clean up interval on unmount
      return () => {
        clearInterval(timer);
      };
    }, []);
    
    return (
      <div className="site-timer">
        
        
        <div className="timer-item time-spent">
          <div className="timer-icon time-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16.2 16.2L11 13V7H12.5V12.2L17 14.9L16.2 16.2Z" fill="currentColor"/>
            </svg>
          </div>
          <span className="timer-value">Time Spent: {formatTime(timeSpent)}</span>
        </div>
      </div>
    );
  };
  
  export default SiteTimer;