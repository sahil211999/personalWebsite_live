import React, { useState } from 'react';
import './Navbar.css';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="top-navbar">
      <div className="top-navbar__brand">Sahil Sashi</div>
      <button
        className={`top-navbar__toggle ${isOpen ? 'top-navbar__toggle--open' : ''}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className="top-navbar__links top-navbar__links--desktop">
        {sections.map((section) => (
          <li
            key={section.id}
            className="top-navbar__item"
            onClick={() => handleScroll(section.id)}
          >
            {section.label}
          </li>
        ))}
      </ul>

      <div className={`top-navbar__drawer ${isOpen ? 'top-navbar__drawer--open' : ''}`}>
        <ul className="top-navbar__links top-navbar__links--mobile">
          {sections.map((section) => (
            <li
              key={section.id}
              className="top-navbar__item"
              onClick={() => handleScroll(section.id)}
            >
              {section.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

