const express = require('express');
const cors = require('cors');

// Get frontend URL from environment variables
const frontendUrl = process.env.FRONTEND_URL || 'https://isha-nanda-portfolio-avqx.onrender.com';

// Comprehensive CORS middleware configuration
const corsOptions = {
  // Dynamically set allowed origins
  origin: function (origin, callback) {
    // List of allowed origins - be explicit
    const allowedOrigins = [
      'http://localhost:3000',
      frontendUrl,
      'https://isha-nanda-portfolio-avqx.onrender.com',
      
      // Add any additional portfolio frontend domains here
    ];
    
    // Check if origin is allowed or if it's undefined (like for same-origin requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log(`Origin ${origin} not allowed by CORS`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Origin',
    'X-Requested-With',
    'Accept'
  ],
  credentials: true,
  maxAge: 3600, // Preflighted requests are valid for 1 hour
  optionsSuccessStatus: 200
};

// Debugging middleware for CORS issues
const corsDebugMiddleware = (req, res, next) => {
  console.log('CORS Debug:');
  console.log('Origin:', req.get('origin'));
  console.log('Host:', req.get('host'));
  console.log('Referer:', req.get('referer'));
  next();
};

// Export for use in main server file
module.exports = { corsOptions, corsDebugMiddleware };