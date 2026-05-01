import useScrollReveal from '../hooks/useScrollReveal';
import { techRow1, techRow2 } from '../data/portfolioData';

function TechCard({ tech }) {
  const style = tech.invert
    ? { filter: 'invert(1) drop-shadow(0 2px 6px rgba(0,0,0,0.3))' }
    : {};
  return (
    <div className="tech-icon-card">
      <img className="tech-icon-img" src={tech.icon} alt={tech.name} style={style} />
      <span className="tech-icon-label">{tech.name}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse }) {
  const doubled = [...items, ...items];
  return (
    <div className="tech-marquee-wrap reveal">
      <div className={`tech-marquee${reverse ? ' reverse' : ''}`}>
        {doubled.map((tech, i) => (
          <TechCard key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default function Technologies() {
  const sectionRef = useScrollReveal();

  return (
    <section id="technologies" ref={sectionRef}>
      <div className="tech-orb tech-orb-1"></div>
      <div className="tech-orb tech-orb-2"></div>
      <div className="tech-orb tech-orb-3"></div>
      <div className="section-inner">
        <div className="section-tag reveal">Stack</div>
        <h2 className="section-title reveal">Technologies I<br />Work With</h2>
        <p className="section-sub reveal">The tools, languages and frameworks I use to bring ideas to life.</p>
        <MarqueeRow items={techRow1} reverse={false} />
        <MarqueeRow items={techRow2} reverse={true} />
      </div>
    </section>
  );
}
