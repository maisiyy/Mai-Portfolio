'use client';


import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaPalette, FaGamepad, FaBrain, FaUnity, FaServer } from 'react-icons/fa';
import { SiMysql, SiPhp, SiPython } from 'react-icons/si';
import { DiFirebase } from 'react-icons/di';

const Projects = () => {
  const projects = [
    
    {
      title: "MY-HYGIENE: 2D Educational Game of Personal Hygiene",
      description: "2D educational game that uses real-time image processing with interactive2D educational game that uses real-time image processing to teach young learners essential personal hygiene practices such as handwashing, tooth brushing, and nail trimming through interactive, game-based learning.",
      tech: ["Unity", "C#", "Image Processing", "Mediapipe"],
      icon: <FaGamepad />,
      color: "#FF6B9D",
      type: "Final Year Project",
      features: ["Interactive Learning", "Image Signal Processing", "Child-friendly UI"],
      github: "https://github.com/maisiyy",
      demo: "#",
      screenshot: "/project-screenshots/hygiene-game.png" // Add your screenshot path
    },
    {
      title: "AEGIS: Escape Protocol",
      description: "3D Game with interactive maps, AI enemies, mission objectives, and custom gameplay systems",
      tech: ["Unity 3D", "C#", "AI Programming", "Game Design"],
      icon: <FaGamepad />,
      color: "#4CC9F0",
      type: "Game Development",
      features: ["3D Environment", "AI Enemies", "Custom Mechanics", "Mission System"],
      github: "https://maisiyy.itch.io/aegis-escape-protocol",
      demo: "#",
      screenshot: "/project-screenshots/aegis-game.png"
    },
    {
      title: "E-Blood Donation System",
      description: "Web-based system to assist people in registering as blood donors and ease the donation process",
      tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      icon: <FaServer />,
      color: "#A3D9A5",
      type: "Diploma Final Project",
      features: ["Database Management", "User Registration", "Admin Dashboard", "Donation Tracking"],
      github: "https://github.com/maisiyy/E-Blood-Donation.git",
      demo: "#",
      screenshot: "/project-screenshots/blood-donation.png"
    },
    {
      title: "Language Learning VR App",
      description: "VR Application for language learning with object interaction, compatible with Oculus devices",
      tech: ["Unity", "VR Development", "C#", "Oculus SDK"],
      icon: <FaBrain />,
      color: "#FFD166",
      type: "VR Application",
      features: ["Immersive Learning", "Hand Interaction", "Multi-language", "Oculus Compatible"],
      github: "https://github.com/maisiyy/VR_Vocabulary-Exploration-in-Classroom.git",
      demo: "#",
      screenshot: "/project-screenshots/vr-app.JPG"
    },
    {
      title: "Badang: Multiversal Destiny",
      description: "2D action-adventure game that takes players on a thrilling journey through multiple universes",
      tech: ["Unity 2D", "C#", "Game Design", "Pixel Art"],
      icon: <FaGamepad />,
      color: "#06D6A0",
      type: "Game Development",
      features: ["Multi-universe Gameplay", "Action Mechanics", "Story-driven", "Immersive World"],
      github: "https://github.com/maisiyy/2D-Game-Badang-Multiversal-Destiny.git",
      demo: "#",
      screenshot: "/project-screenshots/badang-game.png"
    },
    {
      title: "Personal Portfolio Website",
      description: "Responsive portfolio website showcasing multimedia projects and technical skills",
      tech: ["React", "JavaScript", "CSS3", "Responsive Design"],
      icon: <FaCode />,
      color: "#EF476F",
      type: "Web Development",
      features: ["Responsive Design", "Interactive UI", "Project Showcase", "Modern Design"],
      github: "https://github.com/maisiyy/portfolio",
      demo: "#",
      screenshot: "/project-screenshots/portfolioo.JPG"
    }
  ];

  const getTechIcon = (techName) => {
    const icons = {
      'Unity': <FaUnity />,
      'Unity 3D': <FaUnity />,
      'Unity 2D': <FaUnity />,
      'C#': <FaCode />,
      'PHP': <SiPhp />,
      'MySQL': <SiMysql />,
      'Python': <SiPython />,
      'React': <FaCode />,
      'JavaScript': <FaCode />,
      'HTML/CSS': <FaCode />,
      'HTML': <FaCode />,
      'CSS': <FaCode />,
      'CSS3': <FaCode />,
      'Google Firebase': <DiFirebase />,
      'Image Processing': <FaCode />,
      'Educational Technology': <FaBrain />,
      'Game Design': <FaGamepad />,
      'Pixel Art': <FaPalette />,
      'VR Development': <FaBrain />,
      'Oculus SDK': <FaGamepad />,
      'AI Programming': <FaBrain />,
      'Responsive Design': <FaCode />
    };
    return icons[techName] || <FaCode />;
  };

  return (
    <section id="projects" style={{
      padding: '6rem 0',
      background: 'linear-gradient(to bottom, rgba(10, 10, 15, 0.9), rgba(15, 12, 41, 0.95))',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '50px',
        right: '50px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255, 107, 157, 0.1) 0%, rgba(255, 107, 157, 0) 70%)',
        borderRadius: '50%',
        filter: 'blur(20px)'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '100px',
        left: '50px',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(76, 201, 240, 0.1) 0%, rgba(76, 201, 240, 0) 70%)',
        borderRadius: '50%',
        filter: 'blur(15px)'
      }}></div>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '5rem'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255, 107, 157, 0.1)',
            color: '#ff6b9d',
            padding: '0.8rem 1.5rem',
            borderRadius: '50px',
            fontWeight: '600',
            marginBottom: '1.5rem',
            border: '1px solid rgba(255, 107, 157, 0.3)',
            fontSize: '0.9rem'
          }}>
            <FaCode /> MY WORK
          </div>
          
          <h2 style={{
            fontSize: '3.5rem',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #ffffff, #ff6b9d, #A3D9A5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Featured <span style={{ fontWeight: '800' }}>Projects</span>
          </h2>
          
          <p style={{
            color: '#b0b0b0',
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            A showcase of my academic and personal projects spanning <span style={{ color: '#4cc9f0', fontWeight: '600' }}>Game Development</span>, 
            <span style={{ color: '#ff6b9d', fontWeight: '600' }}> Web Applications</span>, and 
            <span style={{ color: '#ffd166', fontWeight: '600' }}> Interactive Multimedia</span>.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2.5rem'
        }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{
                background: 'rgba(26, 26, 46, 0.7)',
                borderRadius: '25px',
                padding: '0', // Remove padding from card container
                border: `1px solid ${project.color}30`,
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
              onPointerEnter={e => {
                e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                e.currentTarget.style.boxShadow = `
                  0 25px 50px ${project.color}20,
                  inset 0 1px 0 ${project.color}15
                `;
                e.currentTarget.style.border = `1px solid ${project.color}50`;
              }}
              onPointerLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.border = `1px solid ${project.color}30`;
              }}
            >
              <div className="project-card__shine" aria-hidden="true"></div>
              {/* Project Screenshot */}
              <div style={{
                position: 'relative',
                height: '200px',
                width: '100%',
                overflow: 'hidden',
                borderTopLeftRadius: '25px',
                borderTopRightRadius: '25px'
              }}>
                <img 
                  src={project.screenshot} 
                  alt={`${project.title} Screenshot`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onPointerEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onPointerLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                
                {/* Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(to bottom, transparent 50%, rgba(26, 26, 46, 0.9) 100%)`,
                  borderTopLeftRadius: '25px',
                  borderTopRightRadius: '25px'
                }}></div>
                
                {/* Project Type Badge - Now on screenshot */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  padding: '0.4rem 1rem',
                  background: `${project.color}20`,
                  color: project.color,
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  border: `1px solid ${project.color}30`,
                  backdropFilter: 'blur(5px)',
                  zIndex: 2
                }}>
                  {project.type}
                </div>
              </div>

              {/* Project Content */}
              <div style={{
                padding: '2.5rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Project Header with Icon */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)`,
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: project.color,
                    border: `1px solid ${project.color}20`
                  }}>
                    {project.icon}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      color: 'white',
                      marginBottom: '0.5rem',
                      fontWeight: '700'
                    }}>
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Description */}
                <p style={{
                  color: '#b0b0b0',
                  lineHeight: '1.7',
                  marginBottom: '1.5rem',
                  fontSize: '1rem',
                  flex: 1
                }}>
                  {project.description}
                </p>

                {/* Features List */}
                <div style={{
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        style={{
                          padding: '0.3rem 0.8rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: project.color,
                          borderRadius: '15px',
                          fontSize: '0.8rem',
                          fontWeight: '500',
                          border: `1px solid ${project.color}20`
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div style={{
                  marginBottom: '2rem'
                }}>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        style={{
                          padding: '0.4rem 0.8rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: '#b0b0b0',
                          borderRadius: '12px',
                          fontSize: '0.8rem',
                          fontFamily: 'monospace',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  marginTop: 'auto'
                }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      padding: '0.8rem 1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      color: '#b0b0b0',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                    onPointerEnter={e => {
                      e.currentTarget.style.background = '#333';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onPointerLeave={e => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.color = '#b0b0b0';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <FaGithub /> Code
                  </a>
                  
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        padding: '0.8rem 1rem',
                        background: 'linear-gradient(45deg, #ff6b9d, #A3D9A5)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.6rem',
                        color: 'white',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease'
                      }}
                      onPointerEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(255, 107, 157, 0.3)';
                      }}
                      onPointerLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '6rem',
          padding: '3rem',
          background: 'linear-gradient(135deg, rgba(255, 107, 157, 0.05), rgba(76, 201, 240, 0.05))',
          borderRadius: '30px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{
            fontSize: '2rem',
            color: 'white',
            marginBottom: '1rem'
          }}>
            Want to see more visuals?
          </h3>
          <p style={{
            color: '#b0b0b0',
            fontSize: '1.1rem',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Check out my GitHub for complete project galleries, code walkthroughs, and development process documentation.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href="https://github.com/maisiyy"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '1rem 2.5rem',
                background: 'linear-gradient(45deg, #ff6b9d, #A3D9A5)',
                color: 'white',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.3s ease'
              }}
              onPointerEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(255, 107, 157, 0.4)';
              }}
              onPointerLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaGithub /> View All Projects
            </a>
            <a
              href="#contact"
              style={{
                padding: '1rem 2.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#4cc9f0',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(76, 201, 240, 0.3)'
              }}
              onPointerEnter={e => {
                e.currentTarget.style.background = 'rgba(76, 201, 240, 0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onPointerLeave={e => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <FaExternalLinkAlt /> Request More Screenshots
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Image Loading Animation */
        .project-image {
          animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .projects-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .projects-container {
            grid-template-columns: 1fr;
          }
          
          .section-header h2 {
            font-size: 2.5rem;
          }
          
          .project-card {
            padding: 0;
          }
          
          .project-content {
            padding: 2rem;
          }
          
          .screenshot-container {
            height: 180px;
          }
        }

        @media (max-width: 480px) {
          .section-header h2 {
            font-size: 2rem;
          }
          
          .screenshot-container {
            height: 150px;
          }
          
          .project-content {
            padding: 1.5rem;
          }
          
          .tech-stack span {
            font-size: 0.75rem;
            padding: 0.3rem 0.6rem;
          }
          
          .action-buttons {
            flex-direction: column;
          }
          
          .action-buttons a {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
