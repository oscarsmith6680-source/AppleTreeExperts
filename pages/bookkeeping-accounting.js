import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import FactsService from '@/components/FactsService';
import { IconBank, IconClipboard, IconCard, IconFolder, IconUsers, IconTrendingUp, IconCalendar } from '@/components/icons/ServiceIcons';
import styles from '@/styles/BookkeepingPage.module.css';

const servicesInclude = [
  { title: 'Bank & card reconciliation', icon: <IconBank />, iconColor: 'teal' },
  { title: 'Monthly profit & loss statements', icon: <IconClipboard />, iconColor: 'blue' },
  { title: 'Balance sheet preparation', icon: <IconClipboard />, iconColor: 'amber' },
  { title: 'Accounts payable & receivable', icon: <IconCard />, iconColor: 'violet' },
  { title: 'Expense tracking & categorization', icon: <IconFolder />, iconColor: 'teal' },
  { title: 'Payroll support integration', icon: <IconUsers />, iconColor: 'blue' },
  { title: 'Quarterly reviews & reporting', icon: <IconTrendingUp />, iconColor: 'amber' },
  { title: 'Year-end closing support', icon: <IconCalendar />, iconColor: 'violet' },
];

const teamPoints = [
  { title: 'Licensed professionals', text: 'Experienced bookkeepers and accountants who know small business inside out.' },
  { title: 'Dedicated point of contact', text: 'One person manages your books so you get consistency and clarity.' },
  { title: 'Cloud-based tools', text: 'Secure, real-time access to your numbers when you need them.' },
  { title: 'Scalable support', text: 'From startup to growth stage—we scale our support with you.' },
];

const bookkeepingFaqs = [
  { question: 'What does monthly bookkeeping include?', answer: 'Monthly bookkeeping includes bank and card reconciliation, expense categorization, accounts payable and receivable tracking, profit & loss and balance sheet preparation, and custom reports. We work in your existing software (e.g. QuickBooks, Xero) so your books stay current.' },
  { question: 'How do I share my documents and data?', answer: 'We use a secure client portal and can connect to your accounting software with your permission. You can upload statements, receipts, and documents electronically. We’ll outline the exact process when you sign up.' },
  { question: 'Can you work with my current accountant or CPA?', answer: 'Yes. We coordinate with your CPA or tax preparer as needed. We keep clean, accurate books so year-end tax preparation is straightforward. Many of our clients use us for bookkeeping while their CPA handles tax filing.' },
  { question: 'How quickly can you get started?', answer: 'Typically we can onboard new clients within a few business days. We’ll gather your current software and bank details, set up access, and begin reconciliation. You’ll receive your first set of reports on the agreed monthly schedule.' },
];

export default function BookkeepingPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or 'empty'

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Only allow numbers in phone field
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check for blank fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('empty');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Quote request:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
              alt=""
              fill
              className={styles.heroImage}
              priority
              sizes="100vw"
            />
            <div className={styles.heroOverlay} />
          </div>
          <div className={`container ${styles.heroContent}`}>
            <span className={styles.heroBadge}>Our Services</span>
            <h1 className={styles.heroTitle}>Bookkeeping & Accounting</h1>
            <p className={styles.heroSubtitle}>
              Clean books, clear numbers, and peace of mind. We handle your day-to-day accounting so you can focus on running your business.
            </p>
            <Link href="#quote" className={styles.heroCta}>Request a Free Quote</Link>
          </div>
        </section>

        {/* 2. Monthly Bookkeeping & Accounting */}
        <section className={styles.monthly} id="monthly">
          <div className="container">
            <div className={styles.monthlyWrap}>
              <div className={styles.monthlyContent}>
                <span className={styles.monthlyBadge}>What we deliver</span>
                <h2 className={styles.monthlyTitle}>Monthly Bookkeeping & Accounting</h2>
                <p className={styles.monthlyParagraph}>
                  Stay on top of your finances with consistent, accurate monthly bookkeeping. We reconcile your accounts, categorize transactions, and deliver clear reports every month. Whether you use QuickBooks, Xero, or another platform, we work in your system so you always have up-to-date books.
                </p>
                <p className={styles.monthlyParagraph}>
                  No more backlog, no more guesswork—just clean records you can rely on for decisions and tax time. Our team handles the details so you can focus on running your business with confidence. Get in touch to learn how we can support your business.
                </p>
              </div>
              <div className={styles.monthlyImage}>
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80"
                  alt="Monthly bookkeeping"
                  width={600}
                  height={450}
                  className={styles.monthlyImg}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. This is what our bookkeeping services include */}
        <section className={styles.include}>
          <div className={styles.includeBg} />
          <div className="container position-relative">
            <header className={styles.includeHeader}>
              <span className={styles.includeBadge}>Full-service support</span>
              <h2 className={styles.includeTitle}>This is what our bookkeeping services include</h2>
              <p className={styles.includeSubtitle}>
                Everything you need for accurate, compliant books—all in one place.
              </p>
            </header>
            <div className={styles.includeGrid}>
              {servicesInclude.map((item, i) => (
                <div key={i} className={styles.includeCard}>
                  <span className={`${styles.includeIconWrap} ${styles[`includeIconWrap_${item.iconColor}`]}`}>{item.icon}</span>
                  <span className={styles.includeCardTitle}>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Your Team of Bookkeeping Experts */}
        <section className={styles.team}>
          <div className="container">
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Your Team of Bookkeeping Experts</h2>
              <p className={styles.sectionSubtitle}>
                We&apos;re not just doing data entry—we&apos;re your partners in keeping your business financially clear and compliant.
              </p>
            </header>
            <div className="row g-4">
              {teamPoints.map((item, i) => (
                <div key={i} className="col-md-6">
                  <div className={styles.teamCard}>
                    <h3 className={styles.teamCardTitle}>{item.title}</h3>
                    <p className={styles.teamCardText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FactsService subtitle="Here's what we've achieved together with our clients." />

        {/* FAQ */}
        <FAQ
          title="Bookkeeping & Accounting FAQs"
          subtitle="Common questions about our bookkeeping and accounting services."
          items={bookkeepingFaqs}
        />

        {/* 5. Request a Free Quote */}
        <section className={styles.quote} id="quote">
          <div className={styles.quoteBg} />
          <div className={styles.quoteShade} />
          <div className={styles.quotePattern} aria-hidden="true" />
          <div className="container position-relative">
            <div className={styles.quoteWrap}>
              <div className={styles.quoteContent}>
                <span className={styles.quoteBadge}>Free quote</span>
                <h2 className={styles.quoteTitle}>Request a Free Quote</h2>
                <p className={styles.quoteIntro}>
                  Get a personalized quote for bookkeeping and accounting—no obligation. We&apos;ll respond within 24 hours with clear pricing and next steps.
                </p>
                <ul className={styles.quoteBenefits} aria-label="Why request a quote">
                  <li className={styles.quoteBenefit}>
                    <span className={styles.quoteBenefitIcon} aria-hidden>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    </span>
                    <span>No obligation — free to request</span>
                  </li>
                  <li className={styles.quoteBenefit}>
                    <span className={styles.quoteBenefitIcon} aria-hidden>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    </span>
                    <span>Response within 24 hours</span>
                  </li>
                  <li className={styles.quoteBenefit}>
                    <span className={styles.quoteBenefitIcon} aria-hidden>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10M18 20V4M6 20v9"/></svg>
                    </span>
                    <span>Clear, tailored pricing</span>
                  </li>
                </ul>
              </div>
              <div className={styles.quoteFormWrap}>
                <div className={styles.quoteCard}>
                  <form onSubmit={handleSubmit} className={styles.form} noValidate>
                    {submitStatus === 'success' && (
                      <div className={styles.successMessage}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                        <span>Quote request sent! We&apos;ll be in touch within 24 hours.</span>
                      </div>
                    )}
                    {submitStatus === 'empty' && (
                      <div className={styles.errorMessage}>
                        <span>Please fill in all required fields.</span>
                      </div>
                    )}
                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label htmlFor="bk-name" className={styles.label}>Name</label>
                        <input type="text" id="bk-name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className={styles.input} required />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="bk-email" className={styles.label}>Email</label>
                        <input type="email" id="bk-email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className={styles.input} required />
                      </div>
                      <div className={styles.formGroupFull}>
                        <label htmlFor="bk-phone" className={styles.label}>Phone</label>
                        <input type="tel" id="bk-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 000-0000" className={styles.input} />
                      </div>
                      <div className={styles.formGroupFull}>
                        <label htmlFor="bk-message" className={styles.label}>Tell us about your business</label>
                        <textarea id="bk-message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Business type, monthly transactions, current software..." className={styles.textarea} required />
                      </div>
                      <div className={styles.formGroupFull}>
                        <button 
                          type="submit" 
                          className={styles.submitBtn}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Sending Request...' : 'Get My Free Quote'}
                          {!isSubmitting && <span className={styles.submitArrow} aria-hidden>→</span>}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
