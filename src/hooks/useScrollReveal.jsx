import { useEffect, useRef } from 'react';

export default function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${i * 0.07}s`;
            entry.target.classList.add('visible');
            // Animate skill bars inside
            entry.target.querySelectorAll('.skill-bar-fill').forEach((bar) => {
              bar.style.width = bar.dataset.width + '%';
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    // observe the node itself
    if (node.classList.contains('reveal')) {
      observer.observe(node);
    }
    // observe children with .reveal
    node.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
