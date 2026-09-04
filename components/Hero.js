'use client';

import React, { useState, useEffect } from 'react';
import { FaMoon, FaCode, FaPalette, FaGithub, FaLinkedin, FaArrowRight, FaDownload, FaItchIo } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { heroRoles, heroStats, socialLinks } from '../src/data/portfolio';
import { scrollToSection } from '../src/lib/scroll';

const socialIcons = { github: FaGithub, linkedin: FaLinkedin, itch: FaItchIo };
const getSocialIcon = (name) => {
  const Icon = socialIcons[name];
  return <Icon />;
};

const Hero = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeWriter = () => {
      const currentText = heroRoles[textIndex];
      
      if (!isDeleting && charIndex < currentText.length) {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % heroRoles.length);
      }
    };

    const timer = setTimeout(typeWriter, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <motion.section
      id="home"
      className="hero-section"
      // Keep the server-rendered hero visible. An initial opacity of zero makes
      // the entire introduction disappear whenever client hydration is delayed.
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
      minHeight: '100vh',
      padding: '8rem 0 4rem',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="hero-container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        {/* Left Content */}
        <div className="hero-content">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255, 107, 157, 0.1)',
            color: '#ff6b9d',
            padding: '0.8rem 1.5rem',
            borderRadius: '50px',
            fontWeight: '600',
            marginBottom: '2rem',
            border: '1px solid rgba(255, 107, 157, 0.3)'
          }}>
            <span>Hi! I'm</span>
          </div>

          <h1 style={{
            fontSize: '4rem',
            marginBottom: '1rem',
            lineHeight: '1.1'
          }}>
            Siti Nur <span style={{
              background: 'linear-gradient(45deg, #ff6b9d, #A3D9A5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Maisarah</span>
          </h1>

          <h2 style={{
            fontSize: '1.8rem',
            marginBottom: '2rem',
            color: '#4cc9f0',
            minHeight: '3rem'
          }}>
            {text}<span style={{ animation: 'blink 1s infinite' }}>|</span>
          </h2>

          <p style={{
            fontSize: '1.2rem',
            color: '#b0b0b0',
            marginBottom: '3rem',
            lineHeight: '1.8',
            maxWidth: '600px'
          }}>
      <>A Computer Science graduate specializing in Graphic & Multimedia Technology, with hands-on experience in{' '} <span style={{ color: '#82fff2', fontWeight: '600' }}>software development, game development, and networking.</span> 
      {' '}Passionate about building creative, functional, and user-focused digital experiences.
      </>         
      </p>

          {/* Buttons */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            marginBottom: '4rem',
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={() => scrollToSection('projects')}
              style={{
                padding: '1rem 2rem',
                borderRadius: '50px',
                border: 'none',
                background: 'linear-gradient(45deg, #ff6b9d, #A3D9A5)',
                color: 'white',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease'
              }}
              onPointerEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 107, 157, 0.3)';
              }}
              onPointerLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaCode /> View Projects
            </button>
            
            <a 
            href="https://wa.me/601116400484"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '1rem 2rem',
              borderRadius: '50px',
              border: '2px solid #4cc9f0',
              background: 'transparent',
              color: '#4cc9f0',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}
            onPointerEnter={e => {
              e.currentTarget.style.background = '#4cc9f0';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onPointerLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#4cc9f0';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Contact Me <FaArrowRight />
          </a>

            <a
              href="/mai-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '1rem 2rem',
                borderRadius: '50px',
                border: '2px solid rgba(255, 209, 102, 0.3)',
                background: 'transparent',
                color: '#ffd166',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease'
              }}
              onPointerEnter={e => {
                e.currentTarget.style.background = '#ffd166';
                e.currentTarget.style.color = '#1a1a2e';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onPointerLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#ffd166';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <FaDownload /> Download CV
            </a>
          </div>

          {/* Highlights */}
          <div style={{
            display: 'flex',
            gap: '3rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            {heroStats/*[
              { value: '4+', label: 'Years' },
              { value: '15+', label: 'Projects' },
              { value: 'Unity • UI/UX', label: 'Interests' }
            ]*/.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#ff6b9d',
                  marginBottom: '0.5rem'
                }}>{stat.value}</div>
                <div style={{
                  color: '#b0b0b0',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {socialLinks/*[
              { icon: <FaGithub />, color: '#333', url: 'https://github.com/maisiyy' },
              { icon: <FaLinkedin />, color: '#0077b5', url: 'https://www.linkedin.com/in/siti-nur-maisarah-ba225123a/' },
              { icon: <FaItchIo  />, color: '#e4405f', url: 'https://maisiyy.itch.io/' }
            ]*/.map((social, index) => (
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
                  e.currentTarget.style.background = social.color;
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onPointerLeave={e => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side - Your Picture */}
        <div className="profile-container" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          {/* Profile Picture Container */}
          <div className="profile-pic" style={{
            width: '350px',
            height: '350px',
            position: 'relative',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '3px solid transparent',
            background: 'linear-gradient(45deg, #ff6b9c00, #A3D9A500, #4cc9f0) border-box',
            animation: 'float 6s ease-in-out infinite',
            boxShadow: '0 20px 60px rgba(255, 107, 157, 0.3)'
          }}>
            {/* Profile Picture */}
            <img 
              src="/mai-profile.png"
              alt="Siti Nur Maisarah"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '5px solid #1a1a2e'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                // Fallback if image doesn't load
                document.getElementById('profile-fallback').style.display = 'flex';
              }}
            />
            
            {/* Fallback if image doesn't load */}
            <div 
              id="profile-fallback"
              style={{
                width: '100%',
                height: '100%',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #ff6b9d, #A3D9A5)',
                borderRadius: '50%',
                color: 'white',
                fontSize: '4rem',
                fontWeight: 'bold'
              }}
            >
              M
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="hero-floating-tag" style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '80px',
            height: '80px',
            background: 'rgba(255, 107, 157, 0.2)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'float 4s ease-in-out infinite',
            animationDelay: '1s',
            border: '1px solid rgba(255, 107, 157, 0.3)',
            backdropFilter: 'blur(5px)'
          }}>
            <img
              src="https://twemoji.maxcdn.com/v/latest/72x72/1f3a8.png"
              alt="paint palette"
              width="42"
              height="42"
              style={{ width: '42px', height: '42px' }}
            />
          </div>

          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '20px',
            width: '60px',
            height: '60px',
            background: 'rgba(76, 201, 240, 0.2)',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'float 5s ease-in-out infinite',
            animationDelay: '2s',
            border: '1px solid rgba(76, 201, 240, 0.3)',
            backdropFilter: 'blur(5px)'
          }}>
            <img
              src="https://twemoji.maxcdn.com/v/latest/72x72/1f4bb.png"
              alt="laptop"
              width="36"
              height="36"
              style={{ width: '36px', height: '36px' }}
            />
          </div>

          {/* Floating Tag */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '-30px',
            background: 'rgba(76, 201, 240, 0.25)',
            color: 'white',
            padding: '0.8rem 1.5rem',
            borderRadius: '50px',
            fontWeight: '600',
            fontSize: '0.9rem',
            animation: 'bounce 2s infinite',
            border: '2px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 10px 30px rgba(76, 201, 240, 0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span role="img" aria-label="sparkle" style={{ fontSize: '1.2rem' }}>🍓</span>
            <span>People often call me Mai!</span>
            <span role="img" aria-label="matcha" style={{ fontSize: '1.2rem' }}>🍵</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.2); }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .profile-container {
            order: -1;
            margin-bottom: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.3rem;
          }
          
          .profile-pic {
            width: 250px;
            height: 250px;
          }
          
          .floating-tag {
            right: 0;
            bottom: -40px;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default Hero;
