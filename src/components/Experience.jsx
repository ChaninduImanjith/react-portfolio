import useScrollReveal from '../hooks/useScrollReveal';
import { timeline } from '../data/portfolioData';

function TimelineItem({ item }) {
  return (
    <div className="timeline-item reveal">
      <div className="timeline-dot"></div>
      <div className="timeline-date">{item.date}</div>
      <div className="timeline-title">{item.title}</div>
      <div className="timeline-company">{item.company}</div>
      <div className="timeline-desc">{item.description}</div>
      {item.skills.length > 0 && (
        <div className="cert-skills" style={{ marginTop: '0.8rem' }}>
          {item.skills.map((skill) => (
            <span className="cert-skill-tag" key={skill}>{skill}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const sectionRef = useScrollReveal();

  return (
    <section id="experience" ref={sectionRef}>
      <div className="section-inner">
        <div className="section-tag reveal">Career</div>
        <h2 className="section-title reveal">Experience &amp;<br />Education</h2>
        <p className="section-sub reveal">My journey building skills, experience and knowledge over the years.</p>
        <div className="timeline">
          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
