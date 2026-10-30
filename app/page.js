'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { FaArrowUp } from 'react-icons/fa';


export default function Home() {
  const [isMusicOpen, setIsMusicOpen] = useState(true);
  const [isGalaxyEnabled, setIsGalaxyEnabled] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const toggleMusicPlayer = () => {
    setIsMusicOpen((prev) => !prev);
  };

  const closeMusicPlayer = () => {
    setIsMusicOpen(false);
  };

  useEffect(() => {
    document.documentElement.dataset.galaxyTheme = isGalaxyEnabled ? 'active' : 'quiet';
  }, [isGalaxyEnabled]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 450);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const starsContainer = document.querySelector('.stars-container');
    if (starsContainer) {
      starsContainer.replaceChildren();
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
      }
    }
  }, []);

  useEffect(() => {
    let lastTime = 0;
    let framePending = false;
    let lastEvent = null;

    const spawnSparkle = (x, y) => {
      const sparkle = document.createElement('span');
      sparkle.className = 'cursor-sparkle';
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 800);
    };

    const onMove = (e) => {
      lastEvent = e;
      if (framePending) return;
      framePending = true;
      requestAnimationFrame(() => {
        framePending = false;
        const now = performance.now();
        if (now - lastTime < 40 || !lastEvent) return;
        lastTime = now;
        spawnSparkle(lastEvent.clientX, lastEvent.clientY);
      });
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="App">
      <div className="orbit-field" aria-hidden="true">
        <span className="orbit orbit--one"></span>
        <span className="orbit orbit--two"></span>
        <span className="orbit orbit--three"></span>
        <span className="orbit-planet"></span>
      </div>
      <div className="stars-container" aria-hidden="true"></div>
      <div className="moon" aria-hidden="true"></div>

      <div className={`music-player ${isMusicOpen ? 'is-open' : 'is-closed'}`}>
        <div className="music-player__header">
          <div className="music-player__note">Hope you enjoy my song pick.</div>
          <button
            type="button"
            className="music-player__close"
            onClick={closeMusicPlayer}
            aria-label="Close Spotify player"
            title="Close Spotify player"
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
          loading="eager"
          title="Spotify Player"
        ></iframe>
      </div>

      <Header
        onToggleMusic={toggleMusicPlayer}
        isMusicOpen={isMusicOpen}
        onToggleGalaxy={() => setIsGalaxyEnabled((enabled) => !enabled)}
        isGalaxyEnabled={isGalaxyEnabled}
      />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
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
