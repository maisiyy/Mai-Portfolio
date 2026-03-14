import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" style={{
      padding: '6rem 0',
      background: 'rgba(10, 10, 15, 0.5)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <h2 style={{
          fontSize: '3rem',
          textAlign: 'center',
          marginBottom: '4rem',
          color: 'white'
        }}>
          <span style={{ color: '#ff6b9d' }}></span> Get In Touch
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem'
        }}>
          {/* Left Column */}
          <div>
            <h3 style={{
              fontSize: '2rem',
              color: 'white',
              marginBottom: '1rem'
            }}>
              Let's Create Something Amazing
            </h3>
            
            <p style={{
              color: '#b0b0b0',
              lineHeight: '1.8',
              marginBottom: '3rem'
            }}>
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>

            {/* Contact Info */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {[
                { icon: <FaEnvelope />, title: 'Email', info: 'maisarahmzn@gmail.com', color: '#FF6B9D' },
                { icon: <FaPhone />, title: 'Phone', info: '+601116400484', color: '#4CC9F0' },
                { icon: <FaMapMarkerAlt />, title: 'Location', info: 'Kelantan, Malaysia', color: '#A3D9A5' }
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '15px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onPointerEnter={e => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateX(10px)';
                  }}
                  onPointerLeave={e => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: `${item.color}20`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: item.color
                  }}>
                    {item.icon}
                  </div>
                  
                  <div>
                    <h4 style={{
                      color: 'white',
                      marginBottom: '0.5rem',
                      fontSize: '1.1rem'
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      color: '#b0b0b0',
                      fontSize: '0.95rem'
                    }}>
                      {item.info}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 style={{
                color: 'white',
                marginBottom: '1.5rem',
                fontSize: '1.2rem'
              }}>
                Connect With Me
              </h4>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                {[
                  { icon: <FaGithub />, color: '#333', url: 'https://github.com/maisiyy' },
                  { icon: <FaLinkedin />, color: '#0077b5', url: 'https://linkedin.com/in/siti-nur-maisarah-ba225123a' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '50px',
                      height: '50px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.2rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onPointerEnter={e => {
                      e.target.style.background = social.color;
                      e.target.style.transform = 'translateY(-5px)';
                    }}
                    onPointerLeave={e => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div style={{
            background: 'rgba(26, 26, 46, 0.7)',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid rgba(255, 107, 157, 0.2)'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              color: 'white',
              marginBottom: '2rem'
            }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  color: 'white',
                  marginBottom: '0.5rem',
                  fontWeight: '500'
                }}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem 1.5rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: 'white',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={e => {
                    e.target.style.borderColor = '#ff6b9d';
                    e.target.style.boxShadow = '0 0 0 3px rgba(255, 107, 157, 0.1)';
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  color: 'white',
                  marginBottom: '0.5rem',
                  fontWeight: '500'
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem 1.5rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: 'white',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={e => {
                    e.target.style.borderColor = '#ff6b9d';
                    e.target.style.boxShadow = '0 0 0 3px rgba(255, 107, 157, 0.1)';
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <label style={{
                  display: 'block',
                  color: 'white',
                  marginBottom: '0.5rem',
                  fontWeight: '500'
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '1rem 1.5rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: 'white',
                    fontSize: '1rem',
                    resize: 'vertical',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={e => {
                    e.target.style.borderColor = '#ff6b9d';
                    e.target.style.boxShadow = '0 0 0 3px rgba(255, 107, 157, 0.1)';
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(45deg, #ff6b9d, #A3D9A5)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  transition: 'all 0.3s ease'
                }}
                onPointerEnter={e => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 10px 30px rgba(255, 107, 157, 0.3)';
                }}
                onPointerLeave={e => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
