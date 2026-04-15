import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { submitContactForm } from '@/lib/submitContactForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import FactsService from '@/components/FactsService';
import { IconClipboard, IconTrendingUp, IconShield, IconCalendar, IconFileStack, IconClock, IconEdit, IconBuilding, IconPackage, IconLandmark, IconUsers } from '@/components/icons/ServiceIcons';
import styles from '@/styles/TaxServicesPage.module.css';

const taxServicesInclude = [
  { title: 'Business tax preparation', icon: <IconClipboard />, iconColor: 'teal' },
  { title: 'Personal tax returns', icon: <IconClipboard />, iconColor: 'blue' },
  { title: 'Tax planning & strategy', icon: <IconTrendingUp />, iconColor: 'amber' },
  { title: 'IRS representation', icon: <IconShield />, iconColor: 'violet' },
  { title: 'Quarterly estimates', icon: <IconCalendar />, iconColor: 'teal' },
  { title: 'State & federal filing', icon: <IconFileStack />, iconColor: 'blue' },
  { title: 'Extension filing', icon: <IconClock />, iconColor: 'amber' },
  { title: 'Prior year amendments', icon: <IconEdit />, iconColor: 'violet' },
];

const onlineFeatures = [
  { title: 'Secure client portal for documents', icon: <IconShield />, iconColor: 'teal' },
  { title: 'Flexible scheduling and communication', icon: <IconClock />, iconColor: 'blue' },
  { title: 'Same expertise as in-person firms', icon: <IconUsers />, iconColor: 'amber' },
];

const howToFileSteps = [
  { step: 1, title: 'Share your documents', text: 'Upload tax documents securely through our portal or share during a brief call.' },
  { step: 2, title: 'We prepare your return', text: 'Our team reviews your information and prepares an accurate, optimized return.' },
  { step: 3, title: 'Review & file', text: 'You review the return, ask questions, and we file on your behalf once approved.' },
];

const whyChooseUs = [
  { title: 'Expert tax professionals', text: 'Licensed preparers who stay current on tax law and small business regulations.' },
  { title: 'Transparent pricing', text: 'Clear quotes with no hidden fees. You know the cost before we start.' },
  { title: 'Secure & confidential', text: 'Bank-level security and strict confidentiality for all your financial data.' },
  { title: 'Year-round support', text: 'Not just tax season—we’re here for planning, estimates, and questions anytime.' },
];

const taxFaqs = [
  { question: 'Do you prepare both business and personal tax returns?', answer: 'Yes. We prepare business returns (Schedule C, 1120, 1120-S, 1065) and personal returns (1040), including multi-state and federal filing. We can handle your business and personal taxes together for a unified approach.' },
  { question: 'How does the process work?', answer: 'You share your documents securely through our portal or during a call. We prepare your return and send it for your review. Once you approve, we file on your behalf. We\'re available for questions at every step.' },
  { question: 'What if I need help with an IRS notice or audit?', answer: 'We offer IRS representation support. If you receive a notice or face an audit, we can help you respond, gather documentation, and communicate with the IRS on your behalf.' },
  { question: 'When should I contact you for tax planning?', answer: 'Anytime. We recommend touching base at least once a year (e.g. mid-year or before year-end) to plan for deductions, estimated payments, and entity structure. We\'re here year-round, not just at filing time.' },
];

export default function TaxServicesPage() {
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
            <h1 className={styles.heroTitle}>Tax Services</h1>
            <p className={styles.heroSubtitle}>
              Expert preparation and planning for business and personal taxes. Stay compliant, minimize liability, and focus on what matters most.
            </p>
            <Link href="#quote" className={styles.heroCta}>Request a Free Quote</Link>
          </div>
        </section>

        {/* 2. Business and Personal Taxes */}
        <section className={styles.businessPersonal} id="business-personal">
          <div className="container">
            <div className={styles.splitWrap}>
              <div className={styles.splitContent}>
                <span className={styles.sectionBadge}>Full-service</span>
                <h2 className={styles.sectionTitle}>Business and Personal Taxes</h2>
                <p className={styles.sectionParagraph}>
                  Whether you run a sole proprietorship, LLC, S-corp, or need personal tax filing, we handle it all. Our team prepares accurate returns, identifies deductions and credits, and helps you plan ahead for next year.
                </p>
                <p className={styles.sectionParagraph}>
                  We combine deep tax knowledge with clear communication—no jargon, no surprises. You get a dedicated point of contact and a straightforward process from start to finish.
                </p>
              </div>
              <div className={styles.splitImage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
                  alt="Tax preparation and business documents"
                  className={styles.splitImg}
                  width={800}
                  height={600}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Small Business Online Tax Accountant */}
        <section className={styles.onlineAccountant}>
          <div className={styles.onlineBg} />
          <div className="container position-relative">
            <div className={styles.onlineWrap}>
              <div className={styles.onlineMedia}>
                <div className={styles.onlineMediaInner}>
                  <span className={styles.onlineMediaBadge}>Online-first</span>
                  <h2 className={styles.onlineHeading}>Small Business Online Tax Accountant</h2>
                  <p className={styles.onlineTagline}>We handle the complexity so you can focus on your business.</p>
                </div>
              </div>
              <div className={styles.onlineBody}>
                <p className={styles.onlineIntro}>
                  Work with a dedicated small business tax accountant without the overhead of a traditional firm. We operate entirely online—secure document sharing, video calls when you need them, and clear deadlines so you&apos;re never left wondering.
                </p>
                <div className={styles.onlineFeatures}>
                  {onlineFeatures.map((feature, i) => (
                    <div key={i} className={styles.onlineFeature}>
                      <span className={`${styles.onlineFeatureIcon} ${styles[`onlineFeatureIcon_${feature.iconColor}`]}`}>
                        {feature.icon}
                      </span>
                      <span className={styles.onlineFeatureText}>{feature.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Online Tax Services Tailored to Your Business */}
        <section className={styles.tailored}>
          <div className="container">
            <header className={styles.centerHeader}>
              <span className={styles.sectionBadge}>Tailored to you</span>
              <h2 className={styles.sectionTitle}>Online Tax Services Tailored to Your Business</h2>
              <p className={styles.sectionSubtitle}>
                Every business is different. We customize our approach to your structure, industry, and goals—so you get the right level of service and the best outcome.
              </p>
            </header>
            <div className={styles.tailoredGrid}>
              <div className={styles.tailoredCard}>
                <span className={`${styles.tailoredIcon} ${styles.tailoredIcon_teal}`}><IconBuilding /></span>
                <h3 className={styles.tailoredCardTitle}>Sole proprietors & freelancers</h3>
                <p className={styles.tailoredCardText}>Schedule C, deductions, and quarterly estimates tailored to your income and expenses.</p>
              </div>
              <div className={styles.tailoredCard}>
                <span className={`${styles.tailoredIcon} ${styles.tailoredIcon_blue}`}><IconPackage /></span>
                <h3 className={styles.tailoredCardTitle}>LLCs & partnerships</h3>
                <p className={styles.tailoredCardText}>Form 1065, K-1s, and state filings with clear explanations and on-time delivery.</p>
              </div>
              <div className={styles.tailoredCard}>
                <span className={`${styles.tailoredIcon} ${styles.tailoredIcon_amber}`}><IconLandmark /></span>
                <h3 className={styles.tailoredCardTitle}>S-corps & C-corps</h3>
                <p className={styles.tailoredCardText}>Corporate returns, shareholder reporting, and tax planning that scales with your growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. This is what our tax services includes */}
        <section className={styles.include}>
          <div className={styles.includeBg} />
          <div className="container position-relative">
            <header className={styles.includeHeader}>
              <span className={styles.includeBadge}>Full-service support</span>
              <h2 className={styles.includeTitle}>This is what our tax services includes</h2>
              <p className={styles.includeSubtitle}>
                From preparation to planning and representation—we cover the full spectrum of tax needs.
              </p>
            </header>
            <div className={styles.includeGrid}>
              {taxServicesInclude.map((item, i) => (
                <div key={i} className={styles.includeCard}>
                  <span className={`${styles.includeIconWrap} ${styles[`includeIconWrap_${item.iconColor}`]}`}>{item.icon}</span>
                  <span className={styles.includeCardTitle}>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. How to File Small Business Tax Returns */}
        <section className={styles.howToFile} id="how-to-file">
          <div className="container">
            <header className={styles.centerHeader}>
              <span className={styles.sectionBadge}>Simple process</span>
              <h2 className={styles.sectionTitle}>How to File Small Business Tax Returns</h2>
              <p className={styles.sectionSubtitle}>
                Three straightforward steps from documents to filed return.
              </p>
            </header>
            <div className={styles.stepsGrid}>
              {howToFileSteps.map((item) => (
                <div key={item.step} className={styles.stepCard}>
                  <span className={styles.stepNumber}>{item.step}</span>
                  <h3 className={styles.stepTitle}>{item.title}</h3>
                  <p className={styles.stepText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Why Choose Online Tax Services from AppleTreeExperts */}
        <section className={styles.whyChoose}>
          <div className={styles.whyChooseBg} />
          <div className="container position-relative">
            <header className={styles.centerHeaderLight}>
              <span className={styles.whyBadge}>Why AppleTreeExperts</span>
              <h2 className={styles.whyTitle}>Why Choose Online Tax Services from AppleTreeExperts?</h2>
              <p className={styles.whySubtitle}>
                We combine expertise, transparency, and security so you can file with confidence.
              </p>
            </header>
            <div className={styles.whyGrid}>
              {whyChooseUs.map((item, i) => (
                <div key={i} className={styles.whyCard}>
                  <h3 className={styles.whyCardTitle}>{item.title}</h3>
                  <p className={styles.whyCardText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FactsService subtitle="Here's what we've achieved together with businesses like yours." />

        {/* FAQ */}
        <FAQ
          title="Tax Services FAQs"
          subtitle="Common questions about our tax preparation and planning services."
          items={taxFaqs}
        />

        {/* Request a Free Quote */}
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
                  Get a personalized quote for tax preparation and planning—no obligation. We&apos;ll respond within 24 hours with clear pricing and next steps.
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
                        <label htmlFor="tax-name" className={styles.label}>Name</label>
                        <input type="text" id="tax-name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className={styles.input} required />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="tax-email" className={styles.label}>Email</label>
                        <input type="email" id="tax-email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className={styles.input} required />
                      </div>
                      <div className={styles.formGroupFull}>
                        <label htmlFor="tax-phone" className={styles.label}>Phone</label>
                        <input type="tel" id="tax-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 000-0000" className={styles.input} />
                      </div>
                      <div className={styles.formGroupFull}>
                        <label htmlFor="tax-message" className={styles.label}>Tell us about your tax needs</label>
                        <textarea id="tax-message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Business type, entity, prior year filing..." className={styles.textarea} required />
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
