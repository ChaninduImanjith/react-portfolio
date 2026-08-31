import useScrollReveal from '../hooks/useScrollReveal';
import { projects } from '../data/portfolioData';

/* ── Icons ────────────────────────────────────────────────── */
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

/* ── Category icon map ─────────────────────────────────────── */
const CATEGORY_ICONS = {
  'AI Platform / Microservices / Cloud Native': '🤖',
  'DevOps / AWS / Kubernetes': '☁️',
  'Full Stack / Spring Boot / React': '⚙️',
  'Docker / CI-CD / DevOps': '🐳',
  'Java / Desktop / Database': '☕',
  'Full Stack / PHP / MySQL': '🛒',
  'AI / Real-Time / TypeScript': '⚡',
  'Team Project / PHP / MySQL': '👥',
};

/* ── Project card placeholder gradient map ─────────────────── */
const CARD_GRADIENTS = {
  talynza:         'linear-gradient(135deg, rgba(14,165,233,0.18) 0%, rgba(139,92,246,0.14) 100%)',
  'devops-platform': 'linear-gradient(135deg, rgba(249,115,22,0.16) 0%, rgba(14,165,233,0.14) 100%)',
  'research-tracker': 'linear-gradient(135deg, rgba(34,197,94,0.14) 0%, rgba(14,165,233,0.12) 100%)',
  'docker-calculator': 'linear-gradient(135deg, rgba(14,165,233,0.16) 0%, rgba(99,102,241,0.12) 100%)',
  sams:            'linear-gradient(135deg, rgba(245,158,11,0.16) 0%, rgba(239,68,68,0.10) 100%)',
  'spare-parts':   'linear-gradient(135deg, rgba(139,92,246,0.14) 0%, rgba(59,130,246,0.10) 100%)',
  debatex:         'linear-gradient(135deg, rgba(239,68,68,0.14) 0%, rgba(139,92,246,0.14) 100%)',
  petcare:         'linear-gradient(135deg, rgba(34,197,94,0.14) 0%, rgba(245,158,11,0.12) 100%)',
};

/* ── Single Project Card ───────────────────────────────────── */
function ProjectCard({ project }) {
  const isDualRepo = project.github && typeof project.github === 'object';
  const emoji = CATEGORY_ICONS[project.category] || '💻';
  const gradient = CARD_GRADIENTS[project.id] || 'linear-gradient(135deg, var(--surface), #1a2035)';

  return (
    <article
      className={`project-card reveal ${project.featured ? 'project-card--featured' : ''}`}
      aria-label={project.title}
    >
      {/* Card visual header */}
      <div className="project-img project-img--placeholder" style={{ background: gradient }}>
        <span className="project-placeholder-emoji" aria-hidden="true">{emoji}</span>

        {/* Featured badge */}
        {project.featured && (
          <span className="project-featured-badge">
            <StarIcon />
            Featured
          </span>
        )}

        {/* Team project indicator */}
        {project.teamProject && (
          <span className="project-team-badge">
            <TeamIcon />
            Team Project
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="project-body">
        {/* Category label */}
        <div className="project-category">{project.category}</div>

        {/* Title */}
        <h3 className="project-title">{project.title}</h3>

        {/* Description */}
        <p className="project-desc">{project.shortDescription}</p>

        {/* Tech badges */}
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="ptag" key={tag}>{tag}</span>
          ))}
        </div>

        {/* GitHub links */}
        <div className="project-links">
          {isDualRepo ? (
            <>
              <a
                href={project.github.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-link--github"
                aria-label={`${project.title} Frontend on GitHub`}
              >
                <GithubIcon />
                Frontend
              </a>
              <a
                href={project.github.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-link--github"
                aria-label={`${project.title} Backend on GitHub`}
              >
                <GithubIcon />
                Backend
              </a>
            </>
          ) : (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link--github"
              aria-label={`${project.title} on GitHub`}
            >
              <GithubIcon />
              View Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ── Projects Section ──────────────────────────────────────── */
export default function Projects() {
  const sectionRef = useScrollReveal();

  return (
    <section id="projects" ref={sectionRef}>
      <div className="section-inner">
        <div className="section-tag reveal">My Work</div>
        <h2 className="section-title reveal">Featured Projects</h2>
        <p className="section-sub reveal">
          A curated selection of projects across AI platforms, DevOps, cloud engineering, and full-stack development.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* More on GitHub */}
          <article className="project-card project-card--more reveal" aria-label="More projects on GitHub">
            <div
              className="project-img project-img--placeholder"
              style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.12), rgba(244,162,97,0.08))' }}
            >
              <span className="project-placeholder-emoji" aria-hidden="true">→</span>
            </div>
            <div className="project-body">
              <div className="project-category">Open Source</div>
              <h3 className="project-title">More on GitHub</h3>
              <p className="project-desc">
                Explore all my repositories, contributions and open-source work on my GitHub profile.
              </p>
              <div className="project-links" style={{ marginTop: 'auto' }}>
                <a
                  href="https://github.com/ChaninduImanjith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  style={{ color: 'var(--accent)', fontWeight: 600 }}
                  aria-label="Visit GitHub Profile"
                >
                  Visit GitHub Profile →
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
