import styles from '@/styles/IndustriesSection.module.css';

const svg = (path, paths = []) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={path} />
    {paths.map((p, i) => (
      <path key={i} d={p} />
    ))}
  </svg>
);

const industries = [
  { name: 'Medical', icon: svg('M12 2v6l4 4-4 4v6', ['M4 12h16']), iconColor: 'teal' },
  { name: 'Dental', icon: svg('M12 6c-2 0-3 2-3 4v8h6V10c0-2-1-4-3-4z', ['M9 10h6']), iconColor: 'blue' },
  { name: 'Veterinary', icon: svg('M12 10a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2z', ['M8 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z', 'M12 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z', 'M16 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z']), iconColor: 'amber' },
  { name: 'Legal', icon: svg('M4 20h16', ['M6 20V8l4-4 4 4v12', 'M10 8h4']), iconColor: 'violet' },
  { name: 'HVAC', icon: svg('M12 2v4', ['M12 18v4', 'M4.93 4.93l2.83 2.83', 'M16.24 16.24l2.83 2.83', 'M2 12h4', 'M18 12h4', 'M4.93 19.07l2.83-2.83', 'M16.24 7.76l2.83-2.83', 'M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0']), iconColor: 'teal' },
  { name: 'Engineering', icon: svg('M12 6v12', ['M6 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z', 'M18 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z', 'M6 12h12']), iconColor: 'blue' },
  { name: 'Construction', icon: svg('M2 18h20', ['M4 18v-6h4v6', 'M10 18V10h4v8', 'M16 18v-4h4v4', 'M4 12L12 4l8 8']), iconColor: 'amber' },
  { name: 'Consulting', icon: svg('M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'), iconColor: 'violet' },
  { name: 'IT', icon: svg('M4 4h16v12H4z', ['M4 8h16', 'M8 20h8']), iconColor: 'teal' },
  { name: 'Security', icon: svg('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'), iconColor: 'blue' },
  { name: 'Plumbing', icon: svg('M5 9l3 3-3 3', ['M9 5l3 3 3 3', 'M12 3v18']), iconColor: 'amber' },
  { name: 'Distributors', icon: svg('M16.5 9.4L7.55 4.24', ['M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z', 'M3.27 6.96L12 12l8.73-5.04', 'M12 22V12']), iconColor: 'violet' },
  { name: 'Content Creators', icon: svg('M4 4h16v12H4z', ['M10 9l5 3-5 3V9z']), iconColor: 'teal' },
  { name: 'Landscaping', icon: svg('M12 22v-8', ['M8 14l4-6 4 6', 'M5 10c2 0 3-1.5 3-3S7 4 5 4s-3 1.5-3 3 1 3 3 3z', 'M19 10c2 0 3-1.5 3-3s-1.5-3-3-3-3 1.5-3 3 1 3 3 3z']), iconColor: 'blue' },
  { name: 'Moving Services', icon: svg('M16 3h5v5', ['M8 3H3v5', 'M21 3l-7 7', 'M3 21l7-7', 'M12 12l2-2']), iconColor: 'amber' },
  { name: 'Marketing & Advertising', icon: svg('M3 12h4l2 6 2-12 4 18', ['M14 6h4']), iconColor: 'violet' },
  { name: 'Automotive', icon: svg('M5 17h14', ['M5 17l-2-5 2-4h4l1 3h4l1-3h4l2 4-2 5', 'M5 17v2', 'M19 17v2']), iconColor: 'teal' },
  { name: 'Software Development', icon: svg('M16 18l6-6-6-6', ['M8 6l-6 6 6 6']), iconColor: 'blue' },
  { name: 'Web Design', icon: svg('M4 4h16v12H4z', ['M4 8h16', 'M9 12h6']), iconColor: 'amber' },
];

export default function IndustriesSection() {
  return (
    <section className={styles.section} id="industries">
      <div className={styles.bg} aria-hidden="true" />
      <div className="container position-relative">
        <header className={styles.header}>
          <span className={styles.badge}>Who we serve</span>
          <h2 className={styles.title}>
            These are just some of the industries we work with
          </h2>
          <p className={styles.subtitle}>
            From healthcare and trades to tech and creative—we support businesses across sectors with tailored bookkeeping, tax, and advisory.
          </p>
        </header>
        <div className={styles.grid}>
          {industries.map((item, i) => (
            <div key={i} className={styles.item}>
              <div className={`${styles.iconWrap} ${styles[`iconWrap_${item.iconColor}`]}`}>
                {item.icon}
              </div>
              <span className={styles.label}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
