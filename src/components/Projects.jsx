import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import './Projects.css';

const Projects = () => {
  const { t } = useLang();

  const projectMeta = [
    {
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
      tags: ['Vite', 'Tailwind CSS', 'Chart.js', 'Firebase'],
      github: '#',
      demo: '#',
    },
    {
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=600',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">{t.projects.title}</h2>

        <div className="projects-grid">
          {t.projects.items.map((project, index) => (
            <div key={index} className={`project-card glass animate-slide-up delay-${(index + 1) * 100}`}>
              <div className="project-image">
                <img src={projectMeta[index].image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={projectMeta[index].github} className="project-link" aria-label="Source Code">
                      <FaGithub size={24} />
                    </a>
                    <a href={projectMeta[index].demo} className="project-link" aria-label="Live Demo">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {projectMeta[index].tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="more-projects">
          <a href="https://github.com/gmcpdev" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            {t.projects.moreOnGithub}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
