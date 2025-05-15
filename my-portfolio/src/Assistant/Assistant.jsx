// src/components/Assistant/Assistant.jsx (updated)
import React, { useState, useRef, useEffect } from 'react';
import useGeminiAPI from '../Hooks/useGeminiAPI';
import './Assistant.css';

const Assistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm your portfolio assistant. Ask me anything about this portfolio or use me to navigate the site.", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  

  const { generateResponse, isLoading, error } = useGeminiAPI();
  
  
  const apiKey ="AIzaSyBdPBk4bQGdwcm0WAqjJMxh0TLfHLZamiQ";
 
console.log("API Key available:", apiKey ? "Yes" : "No");

  const portfolioContext = `
    You are an AI assistant for a portfolio website. Help visitors navigate the site and answer questions about the portfolio owner's projects, skills, and experience.
    The portfolio includes sections for projects, skills, contact information, and an about page.
    When helping with navigation, suggest the relevant page and offer to take the user there.
    Keep responses friendly, professional, and concise.
  `;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    try {
    
      if (!apiKey) {
       
        console.log('not found');
        setTimeout(() => {
          const mockResponses = {
            "project": "I can show you various projects in this portfolio. What type interests you?",
            "contact": "You can find contact information in the Contact section. Would you like to go there?",
            "skills": "The portfolio owner has skills in React, Node.js, and web development.",
            "about": "The About section has information about the portfolio owner's background and interests."
          };
          
          let responseText = "I'm here to help you navigate this portfolio. What would you like to know?";
          
          
          for (const [keyword, response] of Object.entries(mockResponses)) {
            if (inputValue.toLowerCase().includes(keyword)) {
              responseText = response;
              break;
            }
          }
          
          setMessages(prev => [...prev, { text: responseText, sender: 'bot' }]);
        }, 1000);
        return;
      }
      

      const fullPrompt = `${portfolioContext}\n\nUser: ${inputValue}`;

      const response = await generateResponse(fullPrompt, apiKey);
      
      if (response) {
        setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
      } else if (error) {
        setMessages(prev => [...prev, { text: `Sorry, I encountered an error: ${error}`, sender: 'bot' }]);
      }
    } catch (err) {
      console.error("Error with assistant:", err);
      setMessages(prev => [...prev, { text: "Sorry, I encountered an error. Please try again.", sender: 'bot' }]);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="assistant-container">
      {!isOpen ? (
        <button 
          className="assistant-toggle" 
          onClick={() => setIsOpen(true)}
        >
          <span className="assistant-icon">💬</span>
        </button>
      ) : (
        <div className="assistant-chat">
          <div className="assistant-header">
            <h3>Portfolio Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="close-button">×</button>
          </div>
          <div className="messages-container">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="message bot loading">
                <span className="loading-indicator">...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Assistant;