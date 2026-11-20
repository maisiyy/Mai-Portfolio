'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { FaArrowUp } from 'react-icons/fa';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// A small golden star sparkle.
function spawnSparkle(x, y, { drift = false } = {}) {
  const sparkle = document.createElement('span');
  sparkle.className = 'cursor-sparkle';
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  sparkle.style.setProperty('--hue', `${40 + Math.random() * 20}`);
  if (drift) {
    const angle = Math.random() * Math.PI * 2;
    const distance = 18 + Math.random() * 38;
    sparkle.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
    sparkle.style.setProperty('--dy', `${Math.sin(angle) * distance}px`);
  }
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 900);
}

export default function Home() {
  // null = "auto": open on desktop, closed on phones (decided by CSS, so the
  // player never flashes open on a phone before the page's JS loads).
  const [isMusicOpen, setIsMusicOpen] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isGalaxyEnabled, setIsGalaxyEnabled] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 768px)');
    const update = () => setIsSmallScreen(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  const musicVisible = isMusicOpen ?? !isSmallScreen;
  const musicClass = isMusicOpen === null ? 'is-auto' : isMusicOpen ? 'is-open' : 'is-closed';

  useEffect(() => {
    document.documentElement.dataset.galaxyTheme = isGalaxyEnabled ? 'active' : 'quiet';
  }, [isGalaxyEnabled]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 450);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Stars plus a few shimmering four-point glints.
  useEffect(() => {
    const starsContainer = document.querySelector('.stars-container');
    if (!starsContainer) return;
    starsContainer.replaceChildren();
    const isSmall = window.matchMedia('(max-width: 768px)').matches;
    const starCount = isSmall ? 160 : 280;
    const glintCount = isSmall ? 14 : 28;
    const shootingCount = isSmall ? 2 : 3;
    const tints = ['#ffffff', '#ffffff', '#ffffff', '#cfe6ff', '#fff4d6', '#ffd9e8'];
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      // Roughly 1 in 8 stars is a bright one with a soft glow.
      const bright = Math.random() < 0.12;
      star.className = bright ? 'star star--bright' : 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      const size = bright ? Math.random() * 1.6 + 2 : Math.random() * 1.3 + 0.5;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.setProperty('--tint', tints[Math.floor(Math.random() * tints.length)]);
      star.style.animationDuration = `${2 + Math.random() * 4}s`;
      star.style.animationDelay = `${Math.random() * -6}s`;
      fragment.appendChild(star);
    }

    for (let i = 0; i < shootingCount; i++) {
      const shooting = document.createElement('div');
      shooting.className = 'shooting-star';
      shooting.style.left = `${30 + Math.random() * 70}%`;
      shooting.style.top = `${Math.random() * 45}%`;
      shooting.style.animationDuration = `${9 + Math.random() * 8}s`;
      shooting.style.animationDelay = `${2 + i * 5 + Math.random() * 4}s`;
      fragment.appendChild(shooting);
    }
    starsContainer.appendChild(fragment);

    for (let i = 0; i < glintCount; i++) {
      const glint = document.createElement('div');
      glint.className = 'glint';
      glint.style.left = `${Math.random() * 100}%`;
      glint.style.top = `${Math.random() * 100}%`;
      const size = Math.random() * 10 + 6;
      glint.style.width = `${size}px`;
      glint.style.height = `${size}px`;
      glint.style.animationDuration = `${4 + Math.random() * 6}s, ${18 + Math.random() * 14}s`;
      glint.style.animationDelay = `${Math.random() * -10}s, ${Math.random() * -30}s`;
      starsContainer.appendChild(glint);
    }
  }, []);

  // Cursor trail on desktop, a sparkle burst on tap for touch screens.
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    let lastTime = 0;
    let framePending = false;
    let lastEvent = null;
    const effectsOn = () => document.documentElement.dataset.galaxyTheme !== 'quiet';

    const onMove = (e) => {
      if (e.pointerType !== 'mouse' || !effectsOn()) return;
      lastEvent = e;
      if (framePending) return;
      framePending = true;
      requestAnimationFrame(() => {
        framePending = false;
        const now = performance.now();
        if (now - lastTime < 45 || !lastEvent) return;
        lastTime = now;
        spawnSparkle(lastEvent.clientX, lastEvent.clientY);
      });
    };

    const onTap = (e) => {
      if (e.pointerType === 'mouse' || !effectsOn()) return;
      for (let i = 0; i < 7; i++) spawnSparkle(e.clientX, e.clientY, { drift: true });
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onTap, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onTap);
    };
  }, []);

  return (
    <div className="App">
      <div className="night-sky" aria-hidden="true">
      <div className="orbit-field">
        <span className="orbit orbit--one"></span>
        <span className="orbit orbit--two"></span>
        <span className="orbit orbit--three"></span>
        <span className="orbit-planet"></span>
      </div>
      <div className="stars-container"></div>
      <div className="moon"></div>
      </div>

      <div className={`music-player ${musicClass}`} aria-hidden={!musicVisible}>
        <div className="music-player__header">
          <div className="music-player__note">Hope you enjoy my song pick.</div>
          <button
            type="button"
            className="music-player__close"
            onClick={() => setIsMusicOpen(false)}
            aria-label="Close Spotify player"
            title="Close Spotify player"
            tabIndex={musicVisible ? 0 : -1}
          >
            ×
          </button>
        </div>
        <iframe
          src="https://open.spotify.com/embed/playlist/1XyDEQPzCV9RGhlYGrYPUT?utm_source=generator&theme=0&autoplay=1"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Player"
          tabIndex={musicVisible ? 0 : -1}
        ></iframe>
      </div>

      <Header
        onToggleMusic={() => setIsMusicOpen(!musicVisible)}
        isMusicOpen={musicVisible}
        onToggleGalaxy={() => setIsGalaxyEnabled((enabled) => !enabled)}
        isGalaxyEnabled={isGalaxyEnabled}
      />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
      <button
        type="button"
        className={`back-to-top ${showBackToTop ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        title="Back to top"
        tabIndex={showBackToTop ? 0 : -1}
      >
        <FaArrowUp aria-hidden="true" />
      </button>
    </div>
  );
}
