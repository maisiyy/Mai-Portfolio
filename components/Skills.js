'use client';


import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaFigma, FaGitAlt, FaBootstrap, FaMobileAlt, FaImage, FaVrCardboard, FaCamera } from 'react-icons/fa';
import { SiStreamlit, SiMicrosoftazure, SiGooglecloud, SiAmazonaws, SiUnity, SiAutodesk, SiAdobephotoshop, SiCanva, SiMysql, SiAnaconda, SiJupyter, SiLooker, SiFirebase } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: <FaReact />, name: 'React', color: '#61DAFB' },
    { icon: <FaJs />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
    { icon: <FaHtml5 />, name: 'HTML5', color: '#E34F26' },
    { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572B6' },
    { icon: <FaPython />, name: 'Python', color: '#3776AB' },
    { icon: <FaFigma />, name: 'Figma', color: '#F24E1E' },
    { icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
    { icon: <FaBootstrap />, name: 'Bootstrap', color: '#7952B3' },
    { icon: <FaMobileAlt />, name: 'React Native', color: '#61DAFB' },
    { icon: <FaCamera />, name: 'Mediapipe', color: '#ff8fab' },
    { icon: <SiStreamlit />, name: 'Streamlit', color: '#ff4b4b' },
    { icon: <SiMicrosoftazure />, name: 'Azure', color: '#0078d4' },
    { icon: <SiGooglecloud />, name: 'Google Cloud', color: '#4285f4' },
    { icon: <SiAmazonaws />, name: 'AWS', color: '#ff9900' },
    { icon: <SiFirebase />, name: 'Firebase', color: '#ffca28' },
    { icon: <SiUnity />, name: 'Unity', color: '#bdbdbd' },
    { icon: <FaVrCardboard />, name: 'Pano2VR', color: '#b388ff' },
    { icon: <SiAutodesk />, name: 'Autodesk Maya', color: '#00bcd4' },
    { icon: <SiAdobephotoshop />, name: 'Photoshop', color: '#31a8ff' },
    { icon: <FaImage />, name: 'PhotoScape', color: '#f48fb1' },
    { icon: <SiCanva />, name: 'Canva', color: '#7c4dff' },
    { icon: <SiMysql />, name: 'MySQL', color: '#00758f' },
    { icon: <SiAnaconda />, name: 'Anaconda Navigator', color: '#44a833' },
    { icon: <SiJupyter />, name: 'Jupyter Notebook', color: '#f37626' },
    { icon: <SiLooker />, name: 'Looker Studio', color: '#4fc3f7' },
  ];

  const marqueeSkills = [...skills, ...skills];

  return (
    <section id="skills" style={{
      padding: '6rem 0',
      background: 'rgba(10, 10, 15, 0.5)',
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
                e.target.style.transform = 'translateY(-10px)';
                e.target.style.boxShadow = `0 10px 30px ${skill.color}40`;
              }}
              onPointerLeave={e => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
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
                  {skill.icon}
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
              {['2021', '2022', '2023', '2024', '2025', '2026'].map((year) => (
                <div key={year} className="edu-timeline__tick">
                  <span className="edu-timeline__tick-line"></span>
                  <span className="edu-timeline__tick-label">{year}</span>
                </div>
              ))}
            </div>

            <div className="edu-timeline__row">
              <div className="edu-timeline__row-label">
                <span className="edu-timeline__label">Diploma in Computer Science</span>
                <span className="edu-timeline__school">Universiti Malaysia Pahang Al Sultan Abdullah</span>
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
                <span className="edu-timeline__school">Universiti Malaysia Pahang Al Sultan Abdullah</span>
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
