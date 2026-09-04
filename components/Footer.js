import React from 'react';
import { FaMoon, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer" style={{
      padding: '4rem 0 2rem',
      borderTop: '1px solid rgba(255, 107, 157, 0.1)',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          fontSize: '2rem',
          fontWeight: '700',
          color: 'white',
          marginBottom: '1.5rem'
        }}>
          <FaMoon style={{ 
            color: '#f7f3c8',
            filter: 'drop-shadow(0 0 8px rgba(255, 246, 196, 0.9))',
            animation: 'moon-glow 3.5s ease-in-out infinite'
          }} />
          <span>Mai</span>
          <span style={{ color: '#ff6b9d', fontSize: '1rem' }}>Mazlan</span>
        </div>
        
        <p style={{ color: '#b0b0b0', marginBottom: '1rem' }}>
          © 2026 Mai. All rights reserved.
        </p>
        
      </div>
      
      <style>{`
        @keyframes moon-glow {
          0% { transform: scale(1); filter: drop-shadow(0 0 6px rgba(255, 246, 196, 0.7)); }
          50% { transform: scale(1.08); filter: drop-shadow(0 0 14px rgba(255, 246, 196, 1)); }
          100% { transform: scale(1); filter: drop-shadow(0 0 6px rgba(255, 246, 196, 0.7)); }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
