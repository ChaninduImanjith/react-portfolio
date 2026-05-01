import useScrollReveal from '../hooks/useScrollReveal';
import { articles } from '../data/portfolioData';

function ArticleCard({ article }) {
  return (
    <a href={article.link} target="_blank" rel="noopener noreferrer" className="article-card reveal">
      <div className="article-meta">{article.meta}</div>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <div className="article-arrow">→</div>
    </a>
  );
}

export default function Articles() {
  const sectionRef = useScrollReveal();

  return (
    <section id="articles" ref={sectionRef}>
      <div className="section-inner">
        <div className="section-tag reveal">Writing</div>
        <h2 className="section-title reveal">Latest Articles</h2>
        <p className="section-sub reveal">
          I write about web development, software engineering and tech on Medium. Here are some of my recent pieces.
        </p>
        <div className="articles-grid">
          {articles.map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href="https://medium.com/@chanindu.imanjith"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost reveal"
          >
            Read All Articles on Medium →
          </a>
        </div>
      </div>
    </section>
  );
}
