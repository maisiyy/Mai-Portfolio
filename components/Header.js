'use client';

import React, { useState } from 'react';
import { FaMoon, FaSpotify, FaBars } from 'react-icons/fa';
import { navigationItems } from '../src/data/portfolio';
import { scrollToSection } from '../src/lib/scroll';

const Header = ({ onToggleMusic, isMusicOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="site-header" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '1.5rem 0',
      background: 'rgba(10, 10, 15, 0.9)',
      backdropFilter: 'blur(10px)',
      zIndex: 1200,
      borderBottom: '1px solid rgba(255, 107, 157, 0.1)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#4cc9f0',
            cursor: 'pointer'
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FaMoon style={{ 
            color: '#f7f3c8', 
            fontSize: '2rem',
            filter: 'drop-shadow(0 0 8px rgba(255, 246, 196, 0.9))',
            animation: 'moon-glow 3.5s ease-in-out infinite'
          }} />
          <span>MAI</span>
          <span style={{ color: '#ff6b9d', fontSize: '1rem', marginLeft: '5px' }}>Mazlan</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-desktop" style={{
          display: 'flex',
          gap: '2rem'
        }}>
          {navigationItems.map(item => (
            <button
              key={item.target}
              onClick={() => navigateTo(item.target)}
              style={{
                background: 'none',
                border: 'none',
                color: '#b0b0b0',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                transition: 'all 0.3s ease'
              }}
              onPointerEnter={e => {
                e.target.style.color = '#ff6b9d';
                e.target.style.background = 'rgba(255, 107, 157, 0.1)';
              }}
              onPointerLeave={e => {
                e.target.style.color = '#b0b0b0';
                e.target.style.background = 'none';
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center'
        }}>
          <button
            onClick={onToggleMusic}
            aria-pressed={isMusicOpen}
            aria-label={isMusicOpen ? 'Hide Spotify player' : 'Show Spotify player'}
            style={{
            padding: '0.8rem 1.5rem',
            borderRadius: '50px',
            border: 'none',
            background: 'rgba(255, 107, 157, 0.1)',
            color: '#ff6b9d',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'all 0.3s ease'
          }}>
            <FaSpotify /> Spotify
          </button>

          {/* Mobile Menu Button (hidden on desktop) */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#ff6b9d',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="mobile-menu" onClick={e => e.stopPropagation()}>
            {navigationItems.map(item => (
              <button
                key={item.target}
                onClick={() => navigateTo(item.target)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '1rem 1.25rem',
                  border: 'none',
                  background: 'transparent',
                  color: 'white',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  borderRadius: '12px',
                  marginBottom: '0.5rem'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes moon-glow {
          0% { transform: scale(1); filter: drop-shadow(0 0 6px rgba(255, 246, 196, 0.7)); }
          50% { transform: scale(1.08); filter: drop-shadow(0 0 14px rgba(255, 246, 196, 1)); }
          100% { transform: scale(1); filter: drop-shadow(0 0 6px rgba(255, 246, 196, 0.7)); }
        }

        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }

        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 10, 15, 0.85);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1500;
        }

        .mobile-menu {
          width: min(340px, 90%);
          padding: 1.5rem;
          background: rgba(26, 26, 46, 0.95);
          border-radius: 20px;
          border: 1px solid rgba(255, 107, 157, 0.2);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </nav>
  );
};

export default Header;
