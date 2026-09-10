import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <a href="#home">SA</a>
        </div>
        
        <div className="desktop-menu">
          <ul className="nav-links">
            {navLinks.map((link, i) => (
              <li key={link.name}>
                <a href={link.href}>
                  <span className="text-accent">0{i + 1}.</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href={`${import.meta.env.BASE_URL}Santo_Kabir_Ahmed_CV.pdf`} target="_blank" rel="noopener noreferrer" className="btn-primary resume-btn">
            Resume
          </a>
        </div>

        <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link, i) => (
            <li key={link.name} onClick={() => setMobileMenuOpen(false)}>
              <a href={link.href}>
                <span className="text-accent">0{i + 1}.</span> {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a 
          href={`${import.meta.env.BASE_URL}Santo_Kabir_Ahmed_CV.pdf`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary resume-btn-mobile"
          onClick={() => setMobileMenuOpen(false)}
        >
          Resume
        </a>
      </div>
    </header>
  );
};

export default Navbar;
