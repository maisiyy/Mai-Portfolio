'use client';

import React, { useEffect, useState } from 'react';
import { FaMoon, FaSpotify, FaBars, FaTimes } from 'react-icons/fa';
import { navigationItems } from '../src/data/portfolio';
import { scrollToSection } from '../src/lib/scroll';

const Header = ({ onToggleMusic, isMusicOpen, onToggleGalaxy, isGalaxyEnabled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Stop the page scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    if (!isMenuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isMenuOpen]);

  const navigateTo = (id) => {
    setIsMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <button
          type="button"
          className="brand"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <FaMoon className="brand__moon" aria-hidden="true" />
          <span className="brand__name">Mai</span>
          <span className="brand__surname">Mazlan</span>
        </button>

        <div className="nav-desktop">
          {navigationItems.map((item) => (
            <button key={item.target} type="button" className="nav-link" onClick={() => navigateTo(item.target)}>
              {item.label}
            </button>
          ))}
        </div>

        <div className="header-actions">
          <button
            className={`icon-btn ${isGalaxyEnabled ? 'is-on' : ''}`}
            type="button"
            onClick={onToggleGalaxy}
            aria-pressed={isGalaxyEnabled}
            aria-label={isGalaxyEnabled ? 'Turn shimmer effects off' : 'Turn shimmer effects on'}
            title={isGalaxyEnabled ? 'Shimmer effects on' : 'Shimmer effects off'}
          >
            <span aria-hidden="true">✦</span>
          </button>
          <button
            type="button"
            className={`spotify-toggle ${isMusicOpen ? 'is-on' : ''}`}
            onClick={onToggleMusic}
            aria-pressed={isMusicOpen}
            aria-label={isMusicOpen ? 'Hide Spotify player' : 'Show Spotify player'}
          >
            <FaSpotify aria-hidden="true" /> <span className="spotify-toggle__label">Spotify</span>
          </button>
          <button
            type="button"
            className="icon-btn mobile-menu-btn"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            {navigationItems.map((item, i) => (
              <button
                key={item.target}
                type="button"
                className="mobile-menu__link"
                style={{ animationDelay: `${i * 60}ms` }}
                onClick={() => navigateTo(item.target)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
