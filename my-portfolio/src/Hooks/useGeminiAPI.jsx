// src/hooks/useGeminiAPI.js (fixed)
import { useState } from 'react';

const useGeminiAPI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // This function will make the actual API call to Gemini
  const generateResponse = async (prompt, apiKey) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // URL with API key as query parameter
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // Removed the Authorization header since we're using the key in the URL
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      setIsLoading(false);
      
      // Added better error handling for response parsing
      if (data.candidates && 
          data.candidates[0] && 
          data.candidates[0].content && 
          data.candidates[0].content.parts && 
          data.candidates[0].content.parts[0]) {
        return data.candidates[0].content.parts[0].text;
      } else {
        console.log("API Response structure:", JSON.stringify(data));
        throw new Error('Unexpected response format from Gemini API');
      }
    } catch (err) {
      console.error("API Error:", err);
      setError(err.message);
      setIsLoading(false);
      return null;
    }
  };

  return { generateResponse, isLoading, error };
};

export default useGeminiAPI;