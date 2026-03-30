import React from 'react';
import { Briefcase } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import './Experience.css';

const Experience = () => {
  const { t } = useLang();

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">{t.experience.title}</h2>

        <div className="timeline">
          {t.experience.items.map((exp, index) => (
            <div key={index} className={`timeline-item animate-slide-up delay-${index * 100}`}>
              <div className="timeline-dot">
                <Briefcase size={20} />
              </div>
              <div className="timeline-content glass">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
