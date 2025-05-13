const express = require('express');
const { corsOptions } = require('./corsConfig');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Initialize Express app
const app = express();

// Apply CORS configuration
app.use(cors(corsOptions));

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Isha Nanda Portfolio API is running!' });
});

// Contact form API endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'Please provide name, email, and message.' 
    });
  }

  try {
    // Configure email transporter using the provided environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL || 'ishananda64@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'utwk tlly nkcn abrt',
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL || 'ishananda64@gmail.com',
      to: process.env.RECEIVER_EMAIL || 'ishananda0804@gmail.com',
      subject: `Portfolio Contact from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Success response
    return res.status(200).json({ 
      message: 'Your message has been sent successfully!' 
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      error: 'Failed to send message. Please try again later.' 
    });
  }
});

// Important: Listen on the PORT environment variable provided by Render
// With fallback to 5000 for local development (matching the port in your React code)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});