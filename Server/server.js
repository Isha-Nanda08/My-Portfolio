const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware with specific CORS configuration
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(bodyParser.json());

// Route to handle contact form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }
  
  try {
    // Check if environment variables are present
    if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD || !process.env.RECEIVER_EMAIL) {
      console.error('Missing environment variables for email configuration');
      return res.status(500).json({ 
        error: 'Server configuration error. Please contact the administrator.' 
      });
    }
    
    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email provider
      auth: {
        user: process.env.EMAIL, // Your email
        pass: process.env.EMAIL_PASSWORD, // Your email password or app password
      },
    });
    
    // Email options - sending from YOUR email, not the user's email (to avoid spoofing)
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email, // So you can reply directly to the user
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    
    res.status(200).json({ message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    // More specific error messages based on the error type
    if (error.code === 'EAUTH') {
      return res.status(500).json({ 
        error: 'Authentication error. Please check email credentials.' 
      });
    } else if (error.code === 'ESOCKET') {
      return res.status(500).json({ 
        error: 'Network error. Please check your internet connection.' 
      });
    }
    res.status(500).json({ 
      error: 'There was an issue sending your message. Please try again later.' 
    });
  }
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});