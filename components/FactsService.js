import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/FactsService.module.css';

const facts = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 1200, suffix: '+', label: 'Happy Clients' },
  { value: 3500, suffix: '+', label: 'Projects Completed' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

function useCountUp(end, duration, start) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }
    startRef.current = performance.now();
    const tick = (now) => {
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      setCount(Math.round(eased * end));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration, start]);
  return count;
}

function StatItem({ item, count, index }) {
  return (
    <div className={styles.stat} style={{ animationDelay: `${index * 0.06}s` }}>
      <div className={styles.number}>
        <span className={styles.value}>{count}</span>
        <span className={styles.suffix}>{item.suffix}</span>
      </div>
      <p className={styles.label}>{item.label}</p>
    </div>
  );
}

function StatWithCounter({ item, index, start }) {
  const count = useCountUp(item.value, 2000, start);
  return <StatItem item={item} count={count} index={index} />;
}

export default function FactsService({
  badge = 'By the numbers',
  title = 'Trusted by Businesses Nationwide',
  subtitle,
}) {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStartCount(true);
      },
      { threshold: 0.2, rootMargin: '0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="facts" ref={sectionRef}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />
      <div className="container position-relative">
        <header className={styles.header}>
          <span className={styles.badge}>{badge}</span>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>
        <div className={styles.statsRow}>
          {facts.map((item, index) => (
            <StatWithCounter key={index} item={item} index={index} start={startCount} />
          ))}
        </div>
      </div>
    </section>
  );
}
