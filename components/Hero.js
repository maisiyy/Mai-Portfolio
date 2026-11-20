'use client';

import React, { useState, useEffect } from 'react';
import { FaCode, FaGithub, FaLinkedin, FaArrowRight, FaDownload, FaItchIo } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { heroRoles, heroStats, socialLinks } from '../src/data/portfolio';
import { scrollToSection } from '../src/lib/scroll';
import { asset } from '../src/lib/asset';

const socialIcons = { github: FaGithub, linkedin: FaLinkedin, itch: FaItchIo };

// Apple-style emoji images, so every device shows the same iPhone look
// instead of its own (Android/Windows) emoji font.
const Emoji = ({ code, size }) => (
  <img className="emoji" src={asset(`/emoji/${code}.png`)} alt="" aria-hidden="true" width={size} height={size} />
);

const Hero = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    const currentText = heroRoles[textIndex];
    let delay = isDeleting ? 50 : 100;
    let step;

    if (!isDeleting && charIndex < currentText.length) {
      step = () => { setText(currentText.substring(0, charIndex + 1)); setCharIndex(charIndex + 1); };
    } else if (isDeleting && charIndex > 0) {
      step = () => { setText(currentText.substring(0, charIndex - 1)); setCharIndex(charIndex - 1); };
    } else if (!isDeleting) {
      delay = 2000;
      step = () => setIsDeleting(true);
    } else {
      step = () => { setIsDeleting(false); setTextIndex((textIndex + 1) % heroRoles.length); };
    }

    const timer = setTimeout(step, delay);
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
    >
      <div className="hero-container">
        <div className="hero-content">
          <span className="eyebrow">Hi! I&apos;m</span>

          <h1 className="hero-title">
            Siti Nur <span className="shimmer-text">Maisarah</span>
          </h1>

          <h2 className="hero-role" aria-live="polite">
            {text}<span className="hero-role__caret" aria-hidden="true">|</span>
          </h2>

          <p className="hero-intro">
            A Computer Science graduate specializing in Graphic &amp; Multimedia Technology, with hands-on experience in{' '}
            <strong>software development, game development, and networking.</strong>{' '}
            Passionate about building creative, functional, and user-focused digital experiences.
          </p>

          <div className="hero-actions">
            <button type="button" className="btn btn--primary" onClick={() => scrollToSection('projects')}>
              <FaCode aria-hidden="true" /> View Projects
            </button>
            <a className="btn btn--ghost" href="https://wa.me/601116400484" target="_blank" rel="noopener noreferrer">
              Contact Me <FaArrowRight aria-hidden="true" />
            </a>
            <a className="btn btn--gold" href={asset('/mai-cv.pdf')} target="_blank" rel="noopener noreferrer">
              <FaDownload aria-hidden="true" /> Download CV
            </a>
          </div>

          <div className="hero-stats">
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <div className="hero-stat__value">{stat.value}</div>
                <div className="hero-stat__label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="hero-social">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="social-link"
                  style={{ '--brand': social.color }}
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="profile-container">
          <div className="profile-halo" aria-hidden="true"></div>
          <div className="profile-pic">
            {imageFailed ? (
              <div className="profile-fallback">M</div>
            ) : (
              <img src={asset('/mai-profile.png')} alt="Siti Nur Maisarah" onError={() => setImageFailed(true)} />
            )}
          </div>

          <div className="hero-chip hero-chip--top" aria-hidden="true"><Emoji code="1f3a8" size={36} /></div>
          <div className="hero-chip hero-chip--left" aria-hidden="true"><Emoji code="1f4bb" size={30} /></div>

          <div className="hero-nickname">
            <Emoji code="1f353" size={20} />
            <span>You can call me Mai!</span>
            <Emoji code="1f375" size={20} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
