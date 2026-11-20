'use client';

import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaFigma, FaGitAlt, FaBootstrap, FaMobileAlt, FaImage, FaVrCardboard, FaCamera, FaCode } from 'react-icons/fa';
import { SiStreamlit, SiMicrosoftazure, SiGooglecloud, SiAmazonaws, SiUnity, SiAutodesk, SiAdobephotoshop, SiCanva, SiMysql, SiAnaconda, SiJupyter, SiLooker, SiFirebase, SiTailwindcss, SiPhp, SiLaravel, SiSharp, SiMicrosoftsqlserver } from 'react-icons/si';
import { educationYears, skills } from '../src/data/portfolio';
import { asset } from '../src/lib/asset';

const skillIconComponents = {
  react: FaReact, javascript: FaJs, node: FaNodeJs, html: FaHtml5, css: FaCss3Alt,
  tailwind: SiTailwindcss, php: SiPhp, laravel: SiLaravel, csharp: SiSharp, sqlserver: SiMicrosoftsqlserver,
  python: FaPython, figma: FaFigma, git: FaGitAlt, bootstrap: FaBootstrap, mobile: FaMobileAlt,
  camera: FaCamera, streamlit: SiStreamlit, azure: SiMicrosoftazure, googleCloud: SiGooglecloud,
  aws: SiAmazonaws, firebase: SiFirebase, unity: SiUnity, vr: FaVrCardboard, autodesk: SiAutodesk,
  photoshop: SiAdobephotoshop, image: FaImage, canva: SiCanva, mysql: SiMysql, anaconda: SiAnaconda,
  jupyter: SiJupyter, looker: SiLooker,
};

function SkillIcon({ icon }) {
  const Icon = skillIconComponents[icon] ?? FaCode;
  return <Icon />;
}

const Skills = () => {
  const marqueeSkills = [...skills, ...skills];

  return (
    <section id="skills" className="site-section skills-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="eyebrow">What I work with</span>
          <h2>Tech Stack &amp; <span className="shimmer-text">Skills</span></h2>
        </div>

        <div className="skills-marquee">
          <div className="skills-marquee__track" aria-label="Tech stack list">
            {marqueeSkills.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                style={{ '--skill': skill.color }}
                aria-hidden={index >= skills.length ? 'true' : undefined}
              >
                <div className="skill-card__icon">
                  <SkillIcon icon={skill.icon} />
                </div>
                <h3 className="skill-card__name">{skill.name}</h3>
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
                  <img src={asset('/logos/umpsa.png')} alt="UMPSA logo" />
                  <span className="edu-timeline__school">Universiti Malaysia Pahang Al-Sultan Abdullah</span>
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
                <span className="edu-timeline__label">Bachelor of Computer Science (Graphics &amp; Multimedia Technology) with Honors</span>
                <div className="edu-timeline__organization">
                  <img src={asset('/logos/umpsa.png')} alt="UMPSA logo" />
                  <span className="edu-timeline__school">Universiti Malaysia Pahang Al-Sultan Abdullah</span>
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
