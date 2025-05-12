// Advanced CORS Configuration for Express
const express = require('express');
const cors = require('cors');

const app = express();

// Comprehensive CORS middleware
const corsOptions = {
  // Dynamically set allowed origins
  origin: function (origin, callback) {
    // List of allowed origins - be explicit
    const allowedOrigins = [
      'http://localhost:3000', 
      'https://isha-nanda-portfolio-avqx.onrender.com', 
      // Add any additional domains here
      /\.yourdomain\.com$/ // Regex for subdomains if needed
    ];

    // Check if origin is allowed
    if (!origin || 
        allowedOrigins.some(allowedOrigin => 
          typeof allowedOrigin === 'string' 
            ? allowedOrigin === origin 
            : allowedOrigin.test(origin)
        )
    ) {
      callback(null, true);
    } else {
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

// Apply CORS with detailed options
app.use(cors(corsOptions));

// Debugging middleware to log CORS issues
app.use((req, res, next) => {
  console.log('CORS Debug:');
  console.log('Origin:', req.get('origin'));
  console.log('Host:', req.get('host'));
  console.log('Referer:', req.get('referer'));
  next();
});

// Export for use in main server file
module.exports = { corsOptions };