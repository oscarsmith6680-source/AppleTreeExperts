import styles from '@/styles/SmallBusinessSolutions.module.css';

const solutions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
    ),
    title: 'Bookkeeping & Records',
    description: 'Keep your books clean and current so you always know where your business stands.',
    iconColor: 'teal',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>
    ),
    title: 'Tax Preparation & Planning',
    description: 'File on time and plan ahead—minimize surprises and keep more of what you earn.',
    iconColor: 'blue',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    ),
    title: 'Payroll & HR Support',
    description: 'Run payroll smoothly and stay compliant with employment rules—without the headache.',
    iconColor: 'amber',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
    ),
    title: 'Growth & Cash Flow Planning',
    description: 'Forecast cash flow and plan for growth with clear, actionable numbers.',
    iconColor: 'violet',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
    title: 'Compliance & Filings',
    description: 'Stay on top of registrations, renewals, and filings so you stay in good standing.',
    iconColor: 'teal',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
    ),
    title: 'Advisory & Strategy',
    description: 'One-on-one guidance when you need it—from startup setup to scaling up.',
    iconColor: 'blue',
  },
];

export default function SmallBusinessSolutions() {
  return (
    <section className={styles.section} id="small-business-solutions">
      <div className={styles.bg}>
        <div className={styles.bgGradient} />
        <div className={styles.bgGlow1} aria-hidden="true" />
        <div className={styles.bgGlow2} aria-hidden="true" />
      </div>

      <div className="container position-relative">
        <header className={styles.header}>
          <span className={styles.badge}>Built for you</span>
          <h2 className={styles.title}>Services and Solutions for Your Small Business</h2>
          <p className={styles.subtitle}>
            Everything you need to run the back office with confidence—so you can focus on your customers and growth.
          </p>
        </header>

        <div className="row g-4">
          {solutions.map((item, i) => (
            <div key={i} className="col-sm-6 col-lg-4">
              <article className={styles.card}>
                <div className={`${styles.iconWrap} ${styles[`iconWrap_${item.iconColor}`]}`}>
                  {item.icon}
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
