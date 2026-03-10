import styles from '@/styles/RightWaySection.module.css';

const wrongWayPoints = [
  { text: 'Doing your own books and losing time', sub: 'Spreadsheets and guesswork' },
  { text: 'Chasing your accountant for answers', sub: 'Delayed replies, missed deadlines' },
  { text: 'Juggling bookkeeper, CPA, and advisor', sub: 'Fragmented advice' },
  { text: 'Reactive tax prep & surprises', sub: 'Higher bills, more stress' },
];

const appletreeWayPoints = [
  { text: 'Clear, clean bookkeeping every month', sub: 'You always know your numbers' },
  { text: 'Proactive strategy built for growth', sub: 'Planned, not panicked' },
  { text: 'One expert team in your corner', sub: 'Single point of contact' },
  { text: 'Cash flow and tax planning together', sub: 'No surprises at year-end' },
];

export default function RightWaySection() {
  return (
    <section className={styles.section} id="right-way">
      <div className={styles.bg}>
        <div className={styles.bgGradient} />
        <div className={styles.bgBlob1} aria-hidden="true" />
        <div className={styles.bgBlob2} aria-hidden="true" />
        <div className={styles.bgBlob3} aria-hidden="true" />
        <div className={styles.bgPattern} />
      </div>

      <div className="container position-relative">
        <header className={styles.header}>
          <span className={styles.badge}>The difference</span>
          <h2 className={styles.title}>
            Accounting <span className={styles.highlight}>Done Right</span>
          </h2>
          <p className={styles.tagline}>
            Stop juggling. Start growing. Here&apos;s how we do it differently.
          </p>
        </header>

        <div className="row g-4 align-items-stretch mb-5">
          <div className="col-12 col-lg-5">
            <article className={styles.cardWrong}>
              <div className={styles.cardHeader}>
                <span className={styles.cardLabel}>Avoid this</span>
                <h3 className={styles.cardTitle}>The Wrong Way</h3>
                <p className={styles.cardIntro}>
                  When accounting is an afterthought, growth gets harder.
                </p>
              </div>
              <ul className={styles.list}>
                {wrongWayPoints.map((item, i) => (
                  <li key={i} className={styles.listItem}>
                    <span className={styles.iconWrong}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    </span>
                    <div className={styles.itemText}>
                      <strong>{item.text}</strong>
                      <span>{item.sub}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="col-12 col-lg-2 d-flex justify-content-center align-items-center">
            <span className={styles.vsText}>vs</span>
          </div>

          <div className="col-12 col-lg-5">
            <article className={styles.cardRight}>
              <div className={styles.cardHeader}>
                <span className={styles.cardLabel}>Choose this</span>
                <h3 className={styles.cardTitle}>The AppleTreeExperts Way</h3>
                <p className={styles.cardIntro}>
                  One team, clear processes, and numbers you can trust.
                </p>
              </div>
              <ul className={styles.list}>
                {appletreeWayPoints.map((item, i) => (
                  <li key={i} className={styles.listItem}>
                    <span className={styles.iconRight}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                    </span>
                    <div className={styles.itemText}>
                      <strong>{item.text}</strong>
                      <span>{item.sub}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className={styles.ctaBlock}>
          <a href="#contact" className={styles.cta}>
            <span className={styles.ctaText}>Let&apos;s get your accounting done right</span>
            <span className={styles.ctaArrow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
