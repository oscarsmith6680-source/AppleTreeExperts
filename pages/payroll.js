import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { submitContactForm } from '@/lib/submitContactForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import FactsService from '@/components/FactsService';
import { IconDollar, IconClipboard, IconBank, IconFileText, IconClock, IconCheck, IconUser, IconTrendingUp } from '@/components/icons/ServiceIcons';
import styles from '@/styles/PayrollPage.module.css';

const payrollServicesInclude = [
  { title: 'Payroll processing', icon: <IconDollar />, iconColor: 'teal' },
  { title: 'Tax withholding & filing', icon: <IconClipboard />, iconColor: 'blue' },
  { title: 'Direct deposit', icon: <IconBank />, iconColor: 'amber' },
  { title: 'W-2 & 1099 preparation', icon: <IconFileText />, iconColor: 'violet' },
  { title: 'Time tracking support', icon: <IconClock />, iconColor: 'teal' },
  { title: 'Compliance management', icon: <IconCheck />, iconColor: 'blue' },
  { title: 'Employee self-service', icon: <IconUser />, iconColor: 'amber' },
  { title: 'Year-end reporting', icon: <IconTrendingUp />, iconColor: 'violet' },
];

const whyChoosePayroll = [
  { title: 'Accuracy guaranteed', text: 'We ensure correct calculations, tax withholdings, and timely filings so you stay compliant.' },
  { title: 'Save time', text: 'Focus on your business while we handle pay runs, deposits, and reporting every cycle.' },
  { title: 'Scalable solution', text: 'From a few employees to a growing team—our payroll scales with you.' },
  { title: 'Dedicated support', text: 'A single point of contact for questions, changes, and peace of mind.' },
];

const howItWorks = [
  { step: 1, title: 'Share employee & pay data', text: 'Provide hours, rates, and any changes through our secure portal or simple upload.' },
  { step: 2, title: 'We process payroll', text: 'We calculate wages, taxes, and deductions and run direct deposit or prepare checks.' },
  { step: 3, title: 'You approve & we file', text: 'Review the pay run, approve, and we handle deposits and tax filings on your behalf.' },
];

const keyFeatures = [
  { title: 'On-time pay runs', desc: 'Consistent, reliable payroll every cycle—weekly, biweekly, or monthly.' },
  { title: 'Tax compliance', desc: 'Federal, state, and local withholding and filing handled for you.' },
  { title: 'Direct deposit', desc: 'Fast, secure payments to your employees\' accounts.' },
  { title: 'Reporting & records', desc: 'Clear reports and organized records for audits and year-end.' },
];

const benefits = [
  { title: 'Reduce errors', text: 'Professional processing minimizes mistakes and costly corrections.' },
  { title: 'Stay compliant', text: 'Keep up with changing payroll and employment tax rules.' },
  { title: 'Save hours', text: 'No more manual calculations or last-minute pay run stress.' },
  { title: 'One partner', text: 'Payroll, taxes, and support—all from AppleTreeExperts.' },
];

const payrollFaqs = [
  { question: 'What is included in your payroll service?', answer: 'We handle full-cycle payroll: wage calculation, tax withholding, direct deposit or check preparation, and federal/state/local tax filings. We also prepare W-2s and 1099s and provide reporting and records for your business.' },
  { question: 'How often can I run payroll?', answer: 'We support weekly, biweekly, semimonthly, and monthly pay runs. We\'ll work with you to set a schedule that fits your business and ensure every run is accurate and on time.' },
  { question: 'Do you handle tax filings and deposits?', answer: 'Yes. We calculate and withhold the correct taxes and handle deposits and required filings (federal, state, and local) so you stay compliant. We keep you informed of due dates and any changes.' },
  { question: 'Can you integrate with my time-tracking or HR software?', answer: 'We can work with common time-tracking and HR tools. Share your current setup when you request a quote and we\'ll confirm compatibility and the best way to sync data.' },
];

export default function PayrollPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [apiError, setApiError] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('empty');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await submitContactForm(formData);
      if (!result.ok) {
        setSubmitStatus('error');
        setApiError(result.error);
        return;
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch {
      setSubmitStatus('error');
      setApiError('Network error. Check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
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
            <h1 className={styles.heroTitle}>Payroll</h1>
            <p className={styles.heroSubtitle}>
              Reliable, compliant payroll so you can focus on your team and your business. We handle pay runs, tax withholding, and filings—all online.
            </p>
            <Link href="#quote" className={styles.heroCta}>Request a Free Quote</Link>
          </div>
        </section>

        {/* 2. Monthly Online Payroll Services */}
        <section className={styles.monthly} id="monthly">
          <div className="container">
            <div className={styles.monthlyWrap}>
              <div className={styles.monthlyContent}>
                <span className={styles.monthlyBadge}>Full-service</span>
                <h2 className={styles.monthlyTitle}>Monthly Online Payroll Services</h2>
                <p className={styles.monthlyParagraph}>
                  Run payroll with confidence every month. We process wages, calculate taxes, manage direct deposit, and file required reports—so you don&apos;t have to worry about deadlines or compliance.
                </p>
                <p className={styles.monthlyParagraph}>
                  Whether you have a handful of employees or a growing team, we tailor our online payroll services to your schedule and needs. One dedicated contact, clear reporting, and peace of mind.
                </p>
              </div>
              <div className={styles.monthlyImage}>
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80"
                  alt="Payroll and team"
                  width={600}
                  height={450}
                  className={styles.monthlyImg}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why Choose Online Payroll Services? */}
        <section className={styles.whyChoose}>
          <div className={styles.whyBg} />
          <div className="container position-relative">
            <header className={styles.centerHeaderLight}>
              <span className={styles.whyBadge}>Why choose us</span>
              <h2 className={styles.whyTitle}>Why Choose Online Payroll Services?</h2>
              <p className={styles.whySubtitle}>
                We combine accuracy, ease, and support so payroll is one less thing on your plate.
              </p>
            </header>
            <div className={styles.whyGrid}>
              {whyChoosePayroll.map((item, i) => (
                <div key={i} className={styles.whyCard}>
                  <h3 className={styles.whyCardTitle}>{item.title}</h3>
                  <p className={styles.whyCardText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How Our Online Payroll Services Work? */}
        <section className={styles.howItWorks} id="how-it-works">
          <div className="container">
            <header className={styles.centerHeader}>
              <span className={styles.sectionBadge}>Simple process</span>
              <h2 className={styles.sectionTitle}>How Our Online Payroll Services Work?</h2>
              <p className={styles.sectionSubtitle}>
                Three straightforward steps from timesheets to paid employees.
              </p>
            </header>
            <div className={styles.stepsGrid}>
              {howItWorks.map((item) => (
                <div key={item.step} className={styles.stepCard}>
                  <span className={styles.stepNumber}>{item.step}</span>
                  <h3 className={styles.stepTitle}>{item.title}</h3>
                  <p className={styles.stepText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Key Features of Our Online Payroll Services */}
        <section className={styles.keyFeatures}>
          <div className={styles.keyFeaturesBg} />
          <div className="container position-relative">
            <header className={styles.centerHeader}>
              <span className={styles.sectionBadge}>Key features</span>
              <h2 className={styles.sectionTitle}>Key Features of Our Online Payroll Services</h2>
              <p className={styles.sectionSubtitle}>
                Everything you need to pay your team correctly and stay compliant.
              </p>
            </header>
            <div className={styles.keyFeaturesGrid}>
              {keyFeatures.map((item, i) => (
                <div key={i} className={styles.keyFeatureCard}>
                  <h3 className={styles.keyFeatureTitle}>{item.title}</h3>
                  <p className={styles.keyFeatureDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. This is what our payroll services includes */}
        <section className={styles.include}>
          <div className={styles.includeBg} />
          <div className="container position-relative">
            <header className={styles.includeHeader}>
              <span className={styles.includeBadge}>Full-service support</span>
              <h2 className={styles.includeTitle}>This is what our payroll services includes</h2>
              <p className={styles.includeSubtitle}>
                From processing to reporting and compliance—we cover the full payroll cycle.
              </p>
            </header>
            <div className={styles.includeGrid}>
              {payrollServicesInclude.map((item, i) => (
                <div key={i} className={styles.includeCard}>
                  <span className={`${styles.includeIconWrap} ${styles[`includeIconWrap_${item.iconColor}`]}`}>{item.icon}</span>
                  <span className={styles.includeCardTitle}>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Benefits of Using AppleTreeExperts */}
        <section className={styles.benefits}>
          <div className="container">
            <header className={styles.centerHeader}>
              <span className={styles.sectionBadge}>Benefits</span>
              <h2 className={styles.sectionTitle}>Benefits of Using AppleTreeExperts</h2>
              <p className={styles.sectionSubtitle}>
                More than just payroll—we help you run a compliant, stress-free operation.
              </p>
            </header>
            <div className={styles.benefitsGrid}>
              {benefits.map((item, i) => (
                <div key={i} className={styles.benefitCard}>
                  <h3 className={styles.benefitCardTitle}>{item.title}</h3>
                  <p className={styles.benefitCardText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Manage Your Payroll Online Efficiently */}
        <section className={styles.manageCta} id="manage">
          <div className="container">
            <div className={styles.manageCard}>
              <div className={styles.manageContent}>
                <h2 className={styles.manageTitle}>Manage Your Payroll Online Efficiently</h2>
                <p className={styles.manageIntro}>
                  Stop juggling spreadsheets and deadlines.<br />
                  Let AppleTreeExperts handle pay runs, taxes, and reporting so you can focus on your business.
                </p>
                <Link href="#quote" className={styles.manageCtaBtn}>
                  Request a Free Quote
                  <span className={styles.manageArrow} aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FactsService subtitle="Here's what we've achieved together with businesses like yours." />

        {/* FAQ */}
        <FAQ
          title="Payroll FAQs"
          subtitle="Common questions about our payroll processing and compliance services."
          items={payrollFaqs}
        />

        {/* 9. Request a Free Quote */}
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
                  Get a personalized quote for payroll services—no obligation. We&apos;ll respond within 24 hours with clear pricing and next steps.
                </p>
                <ul className={styles.quoteBenefits} aria-label="Why request a quote">
                  <li className={styles.quoteBenefit}>
                    <span className={styles.quoteBenefitIcon} aria-hidden>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                    </span>
                    <span>No obligation — free to request</span>
                  </li>
                  <li className={styles.quoteBenefit}>
                    <span className={styles.quoteBenefitIcon} aria-hidden>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    </span>
                    <span>Response within 24 hours</span>
                  </li>
                  <li className={styles.quoteBenefit}>
                    <span className={styles.quoteBenefitIcon} aria-hidden>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10M18 20V4M6 20v9"/></svg>
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
                    {submitStatus === 'error' && apiError && (
                      <div className={styles.errorMessage}>
                        <span>{apiError}</span>
                      </div>
                    )}
                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label htmlFor="payroll-name" className={styles.label}>Name</label>
                        <input type="text" id="payroll-name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className={styles.input} required />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="payroll-email" className={styles.label}>Email</label>
                        <input type="email" id="payroll-email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className={styles.input} required />
                      </div>
                      <div className={styles.formGroupFull}>
                        <label htmlFor="payroll-phone" className={styles.label}>Phone</label>
                        <input type="tel" id="payroll-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 000-0000" className={styles.input} />
                      </div>
                      <div className={styles.formGroupFull}>
                        <label htmlFor="payroll-message" className={styles.label}>Tell us about your payroll needs</label>
                        <textarea id="payroll-message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Number of employees, pay frequency, current setup..." className={styles.textarea} required />
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
