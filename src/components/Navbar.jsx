import { useState, useEffect, useCallback } from 'react';
import { navLinks } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleSmoothScroll = useCallback((e, id) => {
    e.preventDefault();
    closeMobile();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [closeMobile]);

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          CI<span>.</span>
        </a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={(e) => handleSmoothScroll(e, link.id)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta" onClick={(e) => handleSmoothScroll(e, 'contact')}>
          Hire Me →
        </a>
        <div
          className={`hamburger${mobileOpen ? ' active' : ''}`}
          id="hamburger"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span></span><span></span><span></span>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`} id="mobileMenu">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={(e) => handleSmoothScroll(e, link.id)}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
