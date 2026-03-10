import { useState } from 'react';
import styles from '@/styles/FAQ.module.css';

const defaultItems = [
  {
    question: 'What services does AppleTreeExperts offer?',
    answer: 'We offer bookkeeping & accounting, tax preparation and planning, payroll processing, and business consulting. Each service is designed to support small business owners with accurate records, compliance, and strategic growth.',
  },
  {
    question: 'How do I get started or request a quote?',
    answer: 'You can request a free quote from any service page or the Contact page. Fill out the short form with your name, email, and a few details about your business. We respond within 24 hours with clear pricing and next steps—no obligation.',
  },
  {
    question: 'Do you work with my accounting software?',
    answer: 'Yes. We work with popular platforms including QuickBooks, Xero, and others. We can use your existing system so you keep one set of books and have real-time visibility into your numbers.',
  },
  {
    question: 'Are your services available online?',
    answer: 'Yes. We operate online with secure document sharing, video calls when needed, and clear communication. You get the same expertise as an in-person firm with the flexibility of remote support.',
  },
  {
    question: 'Who will I work with?',
    answer: 'You get a dedicated point of contact for your account. Our team includes licensed professionals who specialize in small business—so you get consistency, clarity, and someone who knows your situation.',
  },
];

export default function FAQ({ title = 'Frequently Asked Questions', subtitle, items = defaultItems }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.bg} aria-hidden="true" />
      <div className="container position-relative">
        <header className={styles.header}>
          <span className={styles.badge}>FAQ</span>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>

        <div className={styles.list} role="list">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
                role="listitem"
              >
                <button
                  type="button"
                  className={styles.trigger}
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className={styles.question}>{item.question}</span>
                  <span className={styles.icon} aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  aria-hidden={!isOpen}
                  className={styles.answerWrap}
                >
                  <div className={styles.answer}>{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
