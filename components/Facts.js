import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/Facts.module.css';
import { IconStar, IconUsers, IconCheck, IconHeart } from '@/components/icons/ServiceIcons';

const facts = [
  { value: 15, suffix: '+', label: 'Years Experience', icon: <IconStar />, iconColor: 'teal' },
  { value: 1200, suffix: '+', label: 'Happy Clients', icon: <IconUsers />, iconColor: 'blue' },
  { value: 3500, suffix: '+', label: 'Projects Completed', icon: <IconCheck />, iconColor: 'amber' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: <IconHeart />, iconColor: 'violet' },
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

function FactCard({ item, count, index }) {
  return (
    <div className={styles.card} style={{ animationDelay: `${index * 0.1}s` }}>
      <div className={`${styles.iconWrap} ${styles[`iconWrap_${item.iconColor}`]}`}>
        <span className={styles.icon}>{item.icon}</span>
      </div>
      <div className={styles.number}>
        <span className={styles.value}>{count}</span>
        <span className={styles.suffix}>{item.suffix}</span>
      </div>
      <p className={styles.label}>{item.label}</p>
    </div>
  );
}

function FactCardWithCounter({ item, index, start }) {
  const count = useCountUp(item.value, 2000, start);
  return <FactCard item={item} count={count} index={index} />;
}

export default function Facts() {
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
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className="container position-relative">
        <div className="text-center mb-5">
          <h2 className={styles.title}>By The Numbers</h2>
          <p className={styles.subtitle}>
            Trusted by businesses nationwide. Here&apos;s what we&apos;ve achieved together.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {facts.map((item, index) => (
            <div key={index} className="col-6 col-lg-3">
              <FactCardWithCounter
                item={item}
                index={index}
                start={startCount}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
