'use client';


import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaFigma, FaGitAlt, FaBootstrap, FaMobileAlt, FaImage, FaVrCardboard, FaCamera } from 'react-icons/fa';
import { SiStreamlit, SiMicrosoftazure, SiGooglecloud, SiAmazonaws, SiUnity, SiAutodesk, SiAdobephotoshop, SiCanva, SiMysql, SiAnaconda, SiJupyter, SiLooker, SiFirebase } from 'react-icons/si';
import { educationYears, skills } from '../src/data/portfolio';

const skillIconComponents = {
  react: FaReact, javascript: FaJs, node: FaNodeJs, html: FaHtml5, css: FaCss3Alt,
  python: FaPython, figma: FaFigma, git: FaGitAlt, bootstrap: FaBootstrap, mobile: FaMobileAlt,
  camera: FaCamera, streamlit: SiStreamlit, azure: SiMicrosoftazure, googleCloud: SiGooglecloud,
  aws: SiAmazonaws, firebase: SiFirebase, unity: SiUnity, vr: FaVrCardboard, autodesk: SiAutodesk,
  photoshop: SiAdobephotoshop, image: FaImage, canva: SiCanva, mysql: SiMysql, anaconda: SiAnaconda,
  jupyter: SiJupyter, looker: SiLooker,
};

function SkillIcon({ icon }) {
  const Icon = skillIconComponents[icon];
  return <Icon />;
}

const Skills = () => {
  const marqueeSkills = [...skills, ...skills];

  return (
    <section id="skills" className="site-section skills-section" style={{
      padding: '6rem 0',
      scrollMarginTop: '80px' // This helps with fixed header
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
          <span style={{ color: '#ff6b9d' }}></span> Tech Stack & Skills
        </h2>

        <div className="skills-marquee">
          <div className="skills-marquee__track" aria-label="Tech stack list">
            {marqueeSkills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              style={{
                background: 'rgba(26, 26, 46, 0.7)',
                borderRadius: '20px',
                padding: '1.5rem',
                border: '1px solid rgba(255, 107, 157, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                minWidth: '220px'
              }}
              onPointerEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = `0 10px 30px ${skill.color}40`;
              }}
              onPointerLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: `${skill.color}20`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  color: skill.color
                }}>
                  <SkillIcon icon={skill.icon} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    color: 'white',
                    marginBottom: 0
                  }}>
                    {skill.name}
                  </h3>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="edu-timeline">
          <h3 className="edu-timeline__title">Education Timeline</h3>
          <div className="edu-timeline__gantt">
            <div className="edu-timeline__gantt-axis" aria-hidden="true">
              {educationYears.map((year) => (
                <div key={year} className="edu-timeline__tick">
                  <span className="edu-timeline__tick-line"></span>
                  <span className="edu-timeline__tick-label">{year}</span>
                </div>
              ))}
            </div>

            <div className="edu-timeline__row">
              <div className="edu-timeline__row-label">
                <span className="edu-timeline__label">Diploma in Computer Science</span>
                <div className="edu-timeline__organization">
                  <img src="/logos/umpsa.png" alt="UMPSA logo" />
                  <span className="edu-timeline__school">Universiti Malaysia Pahang Al Sultan Abdullah</span>
                </div>
              </div>
              <div className="edu-timeline__row-track">
                <div className="edu-timeline__bar edu-timeline__bar--diploma">
                  <span className="edu-timeline__years">2021 - 2023</span>
                </div>
              </div>
            </div>

            <div className="edu-timeline__row">
              <div className="edu-timeline__row-label">
                <span className="edu-timeline__label">Bachelor of Computer Science (Graphics & Multimedia Technology) with Honors</span>
                <div className="edu-timeline__organization">
                  <img src="/logos/umpsa.png" alt="UMPSA logo" />
                  <span className="edu-timeline__school">Universiti Malaysia Pahang Al Sultan Abdullah</span>
                </div>
              </div>
              <div className="edu-timeline__row-track">
                <div className="edu-timeline__bar edu-timeline__bar--degree">
                  <span className="edu-timeline__years">2023 - 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
