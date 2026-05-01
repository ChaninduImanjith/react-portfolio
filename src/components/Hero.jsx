import { useRef, useEffect } from 'react';
import useTypewriter from '../hooks/useTypewriter';
import useScrollReveal from '../hooks/useScrollReveal';
import { roles, heroStats } from '../data/portfolioData';

export default function Hero() {
  const roleText = useTypewriter(roles, 90, 60, 2000);
  const sectionRef = useScrollReveal();
  const profileRef = useRef(null);

  // Profile tilt on mouse
  useEffect(() => {
    const el = profileRef.current;
    if (!el) return;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      el.style.transform = `perspective(700px) rotateX(${dy * -14}deg) rotateY(${dx * 14}deg) scale(1.03)`;
    };
    const handleLeave = () => {
      el.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)';
    };
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section id="hero" ref={sectionRef}>
      <div className="hero-bg-blob blob1"></div>
      <div className="hero-bg-blob blob2"></div>
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-eyebrow">Available for Work</div>
          <h1 className="hero-name">
            Chanindu<br /><span className="accent">Imanjith</span>
          </h1>
          <p className="hero-role">{roleText}<span className="cursor-blink">|</span></p>
          <p className="hero-desc">
            Passionate about architecting scalable infrastructure and automating the ML lifecycle.
            Specializing in DevOps and MLOps to bridge the gap between intelligent models and
            production ready systems. Based in Sri Lanka.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View My Work →
            </a>
            <a href="#contact" className="btn-ghost" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,12 2,6" />
              </svg>
              Get in Touch
            </a>
          </div>
          <div className="hero-stats">
            {heroStats.map((stat, i) => (
              <div className="stat" key={i}>
                <div className="stat-val">{stat.value}<span>{stat.suffix}</span></div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-image-wrap">
          <div className="profile-ring-outer" ref={profileRef}>
            <div className="profile-ring-spinner"></div>
            <div className="profile-ring-inner">
              <img src="/images/portfolio_dp.png" alt="Chanindu Imanjith" className="profile-photo" />
            </div>
          </div>
          <div className="profile-orbit">
            <div className="orbit-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
