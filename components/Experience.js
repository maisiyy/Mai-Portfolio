'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaCheck } from 'react-icons/fa';
import { experiences } from '../src/data/portfolio';
import styles from './Experience.module.css';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section id="experience" className={`site-section ${styles.section}`}>
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <span className={styles.eyebrow}><FaBriefcase /> EXPERIENCE</span>
          <h2>Where I’ve <span>grown</span></h2>
          <p>A look at my professional learning journey.</p>
        </motion.div>

        <div className={styles.timeline}>
          <motion.div
            className={styles.line}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            aria-hidden="true"
          />

          {experiences.map((experience, index) => (
            <motion.article
              className={styles.card}
              key={`${experience.company}-${experience.period}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={reveal}
              transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
            >
              <span className={styles.marker} aria-hidden="true"><FaBriefcase /></span>
              <div className={styles.cardHeader}>
                <p className={styles.period}><FaCalendarAlt /> {experience.period}</p>
                <h3>{experience.role}</h3>
                <div className={styles.companyLine}>
                  <p className={styles.company}>
                    <img
                      className={styles.companyLogo}
                      src={experience.logos[0].src}
                      alt={experience.logos[0].alt}
                    />
                    {experience.company}
                  </p>
                </div>
              </div>
              <p className={styles.summary}>{experience.summary}</p>
              <ul className={styles.responsibilities}>
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility}><FaCheck aria-hidden="true" /> {responsibility}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}