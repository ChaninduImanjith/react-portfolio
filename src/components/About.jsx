import { useEffect, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { socialLinks, languageSkills, toolSkills } from '../data/portfolioData';
import TagCloud from 'TagCloud';

function SocialIcon({ type }) {
  if (type === 'linkedin') return (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
  );
  if (type === 'github') return (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
  );
  if (type === 'medium') return (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
  );
  return null;
}

export default function About() {
  const sectionRef = useScrollReveal();
  const cloudRef = useRef(null);

  useEffect(() => {
    const container = cloudRef.current;
    if (!container) return;

    container.innerHTML = '';

    const options = {
      radius: 220,
      maxSpeed: 'fast',
      initSpeed: 'normal',
      direction: 135,
      keep: true
    };

    const tc = TagCloud(container, toolSkills, options);

    // Apply professional colors to TagCloud items
    const colors = [
      '#0ea5e9', // Sky/Cyan
      '#8b5cf6', // Violet
      '#38bdf8', // Light Blue
      '#c084fc', // Light Purple
      '#94a3b8', // Muted Slate
      '#f8fafc', // White
      '#0284c7', // Deep Blue
    ];
    
    const items = container.querySelectorAll('.tagcloud--item');
    items.forEach((item, index) => {
      item.style.color = colors[index % colors.length];
      item.style.fontWeight = '600';
    });

    return () => {
      tc.destroy();
    };
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-text reveal">
            <div className="section-tag">About Me</div>
            <h3 className="section-title">Software Engineer | DevOps &amp; Cloud Native Specialist</h3>
            <p>
              Hello! I'm Chanindu Imanjith. I'm a second-year Software Engineering undergraduate
              at the University of Kelaniya, specializing in DevOps, Cloud Computing and MLOps.
              I build scalable CI/CD orchestration, manage AWS infrastructure and write about
              technical architecture on Medium. Driven by a commitment to continuous learning
              and open-source collaboration, I'm always looking to push the boundaries of what
              resilient cloud operations can achieve.
            </p>
            <div className="about-links">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="social-pill">
                  <SocialIcon type={link.icon} />
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="skills-section reveal">
            <div className="section-tag">My Skills</div>
            <h3>Languages &amp; Frameworks</h3>
            {languageSkills.map((skill) => (
              <div className="skill-bar-wrap" key={skill.name}>
                <div className="skill-bar-top">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar-fill" data-width={skill.percent} style={{ width: 0 }}></div>
                </div>
              </div>
            ))}
            <h3 style={{ marginTop: '2.5rem', textAlign: 'center' }}>Tools &amp; Technologies</h3>
            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-color)', opacity: 0.7, marginBottom: '1rem' }}>
              Drag to rotate • Hover for proficiency
            </p>
            <div className="skills-cloud-3d" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '450px', cursor: 'grab' }}>
              <span ref={cloudRef} className="tagcloud" style={{ fontFamily: 'inherit', fontSize: '1.2rem' }}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
