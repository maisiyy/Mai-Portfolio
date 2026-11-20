'use client';

import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaPalette, FaGamepad, FaBrain, FaUnity, FaServer, FaWhatsapp } from 'react-icons/fa';
import { SiMysql, SiPhp, SiPython } from 'react-icons/si';
import { DiFirebase } from 'react-icons/di';
import { projects } from '../src/data/portfolio';
import { asset } from '../src/lib/asset';

const projectIcons = { gamepad: FaGamepad, server: FaServer, brain: FaBrain, code: FaCode };

const techIcons = {
  'Unity': FaUnity,
  'Unity 3D': FaUnity,
  'Unity 2D': FaUnity,
  'PHP': SiPhp,
  'MySQL': SiMysql,
  'Python': SiPython,
  'Google Firebase': DiFirebase,
  'Educational Technology': FaBrain,
  'Game Design': FaGamepad,
  'Pixel Art': FaPalette,
  'VR Development': FaBrain,
  'Oculus SDK': FaGamepad,
  'AI Programming': FaBrain,
};

function ProjectIcon({ name }) {
  const Icon = projectIcons[name] ?? FaCode;
  return <Icon aria-hidden="true" />;
}

function TechIcon({ name }) {
  const Icon = techIcons[name] ?? FaCode;
  return <Icon aria-hidden="true" />;
}

const Projects = () => (
  <section id="projects" className="site-section projects-section">
    <div className="section-container section-container--wide">
      <div className="section-heading">
        <span className="eyebrow"><FaCode aria-hidden="true" /> My work</span>
        <h2>Featured <span className="shimmer-text">Projects</span></h2>
        <p>
          A showcase of my academic and personal projects spanning <strong>Game Development</strong>,{' '}
          <strong>Web Applications</strong>, and <strong>Interactive Multimedia</strong>.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => {
          const hasDemo = project.demo && project.demo !== '#';
          return (
            <article key={project.title} className="project-card" style={{ '--project': project.color }}>
              <div className="project-card__shine" aria-hidden="true"></div>

              <div className="project-card__media">
                <img src={asset(project.screenshot)} alt={`${project.title} screenshot`} loading="lazy" />
                <span className="project-card__type">{project.type}</span>
              </div>

              <div className="project-card__body">
                <div className="project-card__header">
                  <div className="project-card__icon"><ProjectIcon name={project.icon} /></div>
                  <h3>{project.title}</h3>
                </div>

                <p className="project-card__description">{project.description}</p>

                <div className="chip-row">
                  {project.features.map((feature) => (
                    <span key={feature} className="chip chip--feature">{feature}</span>
                  ))}
                </div>

                <div className="chip-row chip-row--tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="chip chip--tech"><TechIcon name={tech} />{tech}</span>
                  ))}
                </div>

                {(project.github || hasDemo) && (
                  <div className="project-card__actions">
                    {project.github && (
                      <a className="btn btn--small btn--ghost" href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub aria-hidden="true" /> Code
                      </a>
                    )}
                    {hasDemo && (
                      <a className="btn btn--small btn--primary" href={project.demo} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt aria-hidden="true" /> {project.demo.includes('itch.io') ? 'Play' : 'Live Demo'}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <div className="projects-cta">
        <h3>Want to see more visuals?</h3>
        <p>
          Check out my GitHub for complete project galleries, code walkthroughs, and development process documentation.
        </p>
        <div className="projects-cta__actions">
          <a className="btn btn--primary" href="https://github.com/maisiyy" target="_blank" rel="noopener noreferrer">
            <FaGithub aria-hidden="true" /> View All Projects
          </a>
          <a className="btn btn--ghost" href="https://wa.me/601116400484" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp aria-hidden="true" /> Request More Screenshots
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
