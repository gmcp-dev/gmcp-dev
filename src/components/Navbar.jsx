import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, t, toggleLang } = useLang();

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo">
          <a href="#home" className="gradient-text">
            <span>&lt;</span>gmcp<span className="logo-dot">.</span>dev<span>/&gt;</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links desktop-menu">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="nav-link">
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle Language">
              <Globe size={18} />
              <span>{lang === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="mobile-actions">
          <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle Language">
            <Globe size={18} />
            <span>{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`}>
          <ul className="nav-links-mobile">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
