import React from 'react';
import { Code2, Database, Layout, Smartphone } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLang();

  const skillKeys = ['frontend', 'backend', 'databases', 'responsive'];
  const skillIcons = {
    frontend: <Layout className="skill-icon" size={32} />,
    backend: <Code2 className="skill-icon" size={32} />,
    databases: <Database className="skill-icon" size={32} />,
    responsive: <Smartphone className="skill-icon" size={32} />,
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>

        <div className="about-content">
          <div className="about-text glass animate-slide-up">
            <h3>{t.about.heading}</h3>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>

          <div className="skills-grid">
            {skillKeys.map((key, index) => (
              <div
                key={key}
                className={`skill-card glass animate-slide-up delay-${(index + 1) * 100}`}
              >
                <div className="skill-icon-wrapper">
                  {skillIcons[key]}
                </div>
                <h4>{t.about.skills[key].title}</h4>
                <p>{t.about.skills[key].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
