import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMusicOpen, setIsMusicOpen] = useState(true);

  const toggleMusicPlayer = () => {
    setIsMusicOpen((prev) => !prev);
  };

  const closeMusicPlayer = () => {
    setIsMusicOpen(false);
  };

  useEffect(() => {
    // Create stars
    const starsContainer = document.querySelector('.stars-container');
    if (starsContainer) {
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
      {/* Night Sky Background */}
      <div className="stars-container"></div>
      <div className="moon" aria-hidden="true"></div>
      
      {/* Music Player */}
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
      
      <Header onToggleMusic={toggleMusicPlayer} isMusicOpen={isMusicOpen} />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
