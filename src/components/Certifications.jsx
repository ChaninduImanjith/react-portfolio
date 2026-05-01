import useScrollReveal from '../hooks/useScrollReveal';
import { certifications } from '../data/portfolioData';

function CertCard({ cert }) {
  return (
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="cert-card reveal"
    >
      <div className="cert-icon">
        <img src={cert.logo} alt={cert.issuer} className="cert-logo-img" />
      </div>
      <div className="cert-body">
        <div className="cert-name">{cert.name}</div>
        <div className="cert-issuer">{cert.issuer}</div>
        <div className="cert-date">{cert.date}</div>
        <div className="cert-skills">
          {cert.skills.map((skill) => (
            <span className="cert-skill-tag" key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Certifications() {
  const sectionRef = useScrollReveal();

  return (
    <section id="certifications" ref={sectionRef}>
      <div className="section-inner">
        <div className="section-tag reveal">Credentials</div>
        <h2 className="section-title reveal">Licenses &amp;<br />Certifications</h2>
        <p className="section-sub reveal">
          Professional certifications earned across cloud, programming, AI and IT service management — verified on LinkedIn.
        </p>
        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <CertCard key={i} cert={cert} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href="https://www.linkedin.com/in/chanindu-imanjith-72814431b/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost reveal"
          >
            View All on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}
