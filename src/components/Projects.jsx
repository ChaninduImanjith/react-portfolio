import useScrollReveal from '../hooks/useScrollReveal';
import { projects } from '../data/portfolioData';

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="project-card reveal">
      <div className="project-img">
        <img src={project.image} alt={project.title} />
        <span className="project-badge">{project.badge}</span>
      </div>
      <div className="project-body">
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="ptag" key={tag}>{tag}</span>
          ))}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
            <GithubIcon />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useScrollReveal();

  return (
    <section id="projects" ref={sectionRef}>
      <div className="section-inner">
        <div className="section-tag reveal">My Work</div>
        <h2 className="section-title reveal">Featured Projects</h2>
        <p className="section-sub reveal">A selection of projects I've built from web apps to open-source tools.</p>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
          {/* More on GitHub card */}
          <div className="project-card reveal" style={{ borderColor: 'rgba(230,57,70,0.2)', background: 'rgba(230,57,70,0.04)' }}>
            <div className="project-img" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(244,162,97,0.1))' }}></div>
            <div className="project-body">
              <div className="project-tags"><span className="ptag">Open Source</span></div>
              <h3>More on GitHub →</h3>
              <p>Explore all my repositories, contributions and open-source work on my GitHub profile.</p>
              <div className="project-links">
                <a href="https://github.com/ChaninduImanjith" target="_blank" rel="noopener noreferrer" className="project-link" style={{ color: 'var(--accent)' }}>
                  Visit GitHub Profile →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
