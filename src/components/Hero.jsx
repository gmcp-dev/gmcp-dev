import React from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLang } from '../context/LanguageContext';
import imgLogoSrc from '../assets/logo.png';
import './Hero.css';

const Hero = () => {
  const { t } = useLang();

  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <div className="hero-text animate-slide-up">
          <p className="greeting">{t.hero.greeting}</p>
          <h1 className="name">
            gmcp<span className="gradient-text">.dev</span>
          </h1>
          <h2 className="role">{t.hero.role}</h2>
          <p className="description">{t.hero.description}</p>

          <div className="hero-buttons delay-200">
            <a href="#projects" className="btn btn-primary">
              {t.hero.viewProjects}
            </a>
            <a href="#contact" className="btn btn-outline">
              {t.hero.contactMe}
            </a>
          </div>

          <div className="social-links delay-300">
            <a href="https://github.com/gmcpdev" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:tuemail@ejemplo.com" className="social-icon">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper animate-fade-in delay-200">
          <div className="logo-container">
            <img
              src={imgLogoSrc}
              alt="GMCP Logo"
              className="hero-logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Ccircle cx='150' cy='150' r='140' fill='%23161b22' stroke='%23f1c40f' stroke-width='4'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle' fill='%23f1c40f'%3ELogo%3C/text%3E%3C/svg%3E";
              }}
            />
            <div className="glow-effect"></div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <a href="#about" aria-label="Scroll Down">
          <ArrowDown size={28} className="bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
