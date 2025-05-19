import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Twitter,
} from 'lucide-react';

// Centralized API configuration
const API_CONFIG = {
  development: 'http://localhost:5000/api',
  production: 'https://isha-nanda-portfolio-u8a5.onrender.com/api' // REPLACE WITH YOUR ACTUAL BACKEND URL
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState({
    isLoading: false,
    error: null,
    success: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear any previous errors when user starts typing
    setSubmitStatus(prev => ({ ...prev, error: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset status
    setSubmitStatus({ isLoading: true, error: null, success: false });

    // Determine API URL based on environment
    const API_URL = process.env.NODE_ENV === 'production' 
      ? API_CONFIG.production 
      : API_CONFIG.development;

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Success handling
        setSubmitStatus({ 
          isLoading: false, 
          error: null, 
          success: true 
        });
        alert(data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Error handling
        setSubmitStatus({ 
          isLoading: false, 
          error: data.error || 'Something went wrong.', 
          success: false 
        });
        throw new Error(data.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        isLoading: false, 
        error: error.message || 'There was an issue submitting the form.', 
        success: false 
      });
    }
  };

  return (
    <div className="contact-container" style={{
      // backgroundColor: '#111',
      color: 'white',
      padding: '40px 20px',
      position: 'relative',
      // backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.9) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      backgroundPosition: 'center center',
      minHeight: '100vh',
    }}>
      <div className="contact-title" style={{
        textAlign: 'center',
        position: 'relative',
        marginBottom: '50px'
      }}>
        <h1 style={{
          fontSize: '4rem',
          color: '#5BD0FB',
          margin: '0',
          fontWeight: '300',
        }}>CONTACT</h1>
        <div style={{
          position: 'absolute',
          width: '100px',
          height: '5px',
          backgroundColor: '#B545E5',
          bottom: '-15px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}></div>
      </div>
      
      <div className="contact-content" style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto',
        gap: '30px'
      }}>
        <div className="contact-form-container" style={{
          flex: '1 1 500px',
          backgroundColor: 'rgba(20, 20, 20, 0.8)',
          borderRadius: '8px',
          padding: '30px',
          border: '1px solid rgba(91, 208, 251, 0.3)'
        }}>
          <p className="contact-intro" style={{
            color: '#ccc',
            marginBottom: '25px',
            fontSize: '1rem',
            lineHeight: '1.6'
          }}>
            Let's connect! If you have any questions or want to collaborate on a project, 
            feel free to reach out. I'm always open to new opportunities.
          </p>
          
   
          {submitStatus.error && (
            <div style={{
              backgroundColor: 'rgba(255, 0, 0, 0.1)',
              border: '1px solid red',
              color: 'red',
              padding: '10px',
              marginBottom: '20px',
              borderRadius: '4px'
            }}>
              {submitStatus.error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {/* Name Input */}
            <div className="form-group" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <label htmlFor="name" style={{ color: '#5BD0FB', fontSize: '0.9rem' }}>YOUR NAME</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                style={{
                  backgroundColor: 'rgba(30, 30, 30, 0.8)',
                  border: 'none',
                  borderBottom: '2px solid #5BD0FB',
                  padding: '12px 15px',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>
            
            {/* Email Input */}
            <div className="form-group" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <label htmlFor="email" style={{ color: '#5BD0FB', fontSize: '0.9rem' }}>YOUR EMAIL</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                style={{
                  backgroundColor: 'rgba(30, 30, 30, 0.8)',
                  border: 'none',
                  borderBottom: '2px solid #5BD0FB',
                  padding: '12px 15px',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>
            
            {/* Message Input */}
            <div className="form-group" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <label htmlFor="message" style={{ color: '#5BD0FB', fontSize: '0.9rem' }}>YOUR MESSAGE</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                style={{
                  backgroundColor: 'rgba(30, 30, 30, 0.8)',
                  border: 'none',
                  borderBottom: '2px solid #5BD0FB',
                  padding: '12px 15px',
                  color: 'white',
                  fontSize: '1rem',
                  minHeight: '120px',
                  resize: 'vertical',
                  outline: 'none'
                }}
              />
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={submitStatus.isLoading}
              style={{
                backgroundColor: submitStatus.isLoading ? '#666' : '#B545E5',
                color: 'white',
                border: 'none',
                padding: '12px 25px',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                cursor: submitStatus.isLoading ? 'not-allowed' : 'pointer',
                borderRadius: '4px',
                alignSelf: 'flex-start',
                marginTop: '10px',
                transition: 'all 0.3s ease',
                opacity: submitStatus.isLoading ? 0.5 : 1
              }}
              onMouseOver={(e) => {
                if (!submitStatus.isLoading) {
                  e.currentTarget.style.backgroundColor = '#9532c8';
                }
              }}
              onMouseOut={(e) => {
                if (!submitStatus.isLoading) {
                  e.currentTarget.style.backgroundColor = '#B545E5';
                }
              }}
            >
              {submitStatus.isLoading ? 'SENDING...' : 'SEND MESSAGE'}
              {!submitStatus.isLoading && <Send size={18} />}
            </button>
          </form>
        </div>
        
        <div className="contact-info" style={{
          flex: '1 1 300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px'
        }}>
          <div className="contact-card" style={{
            backgroundColor: 'rgba(20, 20, 20, 0.8)',
            borderRadius: '8px',
            padding: '30px',
            border: '1px solid rgba(181, 69, 229, 0.3)' // Purple border
          }}>
            <h3 style={{ 
              color: '#B545E5', 
              marginTop: '0',
              marginBottom: '20px',
              fontSize: '1.5rem'
            }}>GET IN TOUCH</h3>
            
            <div className="contact-details" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div className="contact-item" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <div style={{
                  backgroundColor: 'rgba(91, 208, 251, 0.2)',
                  borderRadius: '50%',
                  padding: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Mail size={18} color="#5BD0FB" />
                </div>
                <span style={{ color: '#ddd' }}>ishananda0804@gmail.com</span>
              </div>
              
              <div className="contact-item" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <div style={{
                  backgroundColor: 'rgba(91, 208, 251, 0.2)',
                  borderRadius: '50%',
                  padding: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Phone size={18} color="#5BD0FB" />
                </div>
                <span style={{ color: '#ddd' }}>+91 9876905402</span>
              </div>
              
              <div className="contact-item" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <div style={{
                  backgroundColor: 'rgba(91, 208, 251, 0.2)',
                  borderRadius: '50%',
                  padding: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <MapPin size={18} color="#5BD0FB" />
                </div>
                <span style={{ color: '#ddd' }}>Punjab,INDIA</span>
              </div>
            </div>
          </div>
          
          <div className="social-card" style={{
            backgroundColor: 'rgba(20, 20, 20, 0.8)',
            borderRadius: '8px',
            padding: '30px',
            border: '1px solid rgba(91, 208, 251, 0.3)' // Light blue border
          }}>
            <h3 style={{ 
              color: '#5BD0FB', 
              marginTop: '0',
              marginBottom: '20px',
              fontSize: '1.5rem'
            }}>FOLLOW ME</h3>
            
            <div className="social-links" style={{
              display: 'flex',
              gap: '15px',
              flexWrap: 'wrap'
            }}>
              <a href="https://github.com/Isha-Nanda08" style={{
                backgroundColor: 'rgba(181, 69, 229, 0.2)',
                color: '#B545E5',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(181, 69, 229, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(181, 69, 229, 0.2)';
              }}>
                <Github size={20} />
              </a>
              
              <a href="https://www.linkedin.com/in/isha-nanda-a3a531257/" style={{
                backgroundColor: 'rgba(91, 208, 251, 0.2)',
                color: '#5BD0FB',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(91, 208, 251, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(91, 208, 251, 0.2)';
              }}>
                <Linkedin size={20} />
              </a>
              
              <a href=" https://x.com/IshaNanda08?t=7vMvpMNtFtkSAJ7UwtzvMA&s=08" style={{
                backgroundColor: 'rgba(181, 69, 229, 0.2)',
                color: '#B545E5',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(181, 69, 229, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(181, 69, 229, 0.2)';
              }}>
                <Twitter size={20} />
              </a>
              
             
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer" style={{
        textAlign: 'center',
        marginTop: '60px',
        borderTop: '1px solid rgba(91, 208, 251, 0.2)',
        paddingTop: '20px',
        color: '#999'
      }}>
        <p>© {new Date().getFullYear()} Isha Nanda | Made with ❤️</p>
      </div>
      
      {/* Decorative element similar to your home page */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '20px',
        transform: 'translateY(-50%)',
        width: '15px',
        height: '80px',
        borderRadius: '20px',
        backgroundColor: '#B545E5',
        opacity: '0.7'
      }}></div>
      
      {/* Optional scroll-to-top button */}
      <button style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#B545E5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        zIndex: 100,
        transition: 'all 0.3s ease'
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#9532c8'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#B545E5'}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
};

export default ContactSection;