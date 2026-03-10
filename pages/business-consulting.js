import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import FactsService from '@/components/FactsService';
import { IconTrendingUp, IconClock, IconDollar } from '@/components/icons/ServiceIcons';
import styles from '@/styles/BusinessConsultingPage.module.css';

const challenges = [
  { title: 'Limited time to focus on strategy', text: 'Day-to-day operations leave little room for planning and growth initiatives.' },
  { title: 'Unclear financial picture', text: 'Without clear numbers, it\'s hard to make confident decisions about pricing, hiring, or scaling.' },
  { title: 'Scaling without a roadmap', text: 'Growing quickly can lead to inefficiency, cash flow gaps, or compliance issues.' },
  { title: 'Wearing too many hats', text: 'You need trusted advisors who understand your business and can help prioritize.' },
];

const consultantBenefits = [
  { title: 'Grow faster', text: 'Strategic guidance to identify opportunities, streamline operations, and scale with confidence.', icon: <IconTrendingUp />, iconColor: 'teal' },
  { title: 'Save time', text: 'We help you focus on what matters most—delegating, automating, and making processes efficient.', icon: <IconClock />, iconColor: 'blue' },
  { title: 'Improve profitability', text: 'Better pricing, cost control, and financial clarity so you keep more of what you earn.', icon: <IconDollar />, iconColor: 'amber' },
];

const industries = [
  { name: 'Professional services', desc: 'Consultants, agencies, and service-based businesses.' },
  { name: 'Retail & e-commerce', desc: 'Inventory, margins, and multi-channel growth.' },
  { name: 'Healthcare & wellness', desc: 'Billing, compliance, and practice management.' },
  { name: 'Construction & trades', desc: 'Job costing, contracts, and cash flow.' },
  { name: 'Restaurants & hospitality', desc: 'Labor, food cost, and seasonal planning.' },
  { name: 'Nonprofits & associations', desc: 'Grants, reporting, and sustainable operations.' },
];

const consultingFaqs = [
  { question: 'What does business consulting with AppleTreeExperts involve?', answer: 'We work alongside you on strategy, operations, and growth: clarifying financials, improving processes, pricing, scaling plans, and prioritization. Engagements can be project-based or ongoing, depending on your goals.' },
  { question: 'Is this separate from bookkeeping and tax?', answer: 'Consulting can stand alone or complement our bookkeeping and tax services. Many clients use us for all three—clean books and tax compliance plus strategic advice—so you have one trusted partner.' },
  { question: 'How do we get started?', answer: 'Share your goals and challenges (e.g. scaling, profitability, cash flow). We\'ll propose a scope and approach, then schedule a kickoff. Most work is done remotely with calls and shared documents as needed.' },
  { question: 'Who will I work with?', answer: 'You\'ll have a dedicated consultant who gets to know your business. We keep the team small so you get consistency and someone who understands your numbers and objectives.' },
];

export default function BusinessConsultingPage() {
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
      console.log('Consulting quote request:', formData);
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
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
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
            <h1 className={styles.heroTitle}>Business Consulting</h1>
            <p className={styles.heroSubtitle}>
              Strategy and growth advisory for small business owners. We work alongside you to grow faster, save time, and improve profitability.
            </p>
            <Link href="#quote" className={styles.heroCta}>Request a Free Quote</Link>
          </div>
        </section>

        {/* 2. Challenges You Face as a Small Business Owner */}
        <section className={styles.challenges} id="challenges">
          <div className={styles.challengesBg} />
          <div className="container position-relative">
            <header className={styles.centerHeaderLight}>
              <span className={styles.sectionBadgeLight}>We understand</span>
              <h2 className={styles.sectionTitleLight}>Challenges You Face as a Small Business Owner</h2>
              <p className={styles.sectionSubtitleLight}>
                Running a small business is rewarding—and demanding. Here are the challenges we help you tackle.
              </p>
            </header>
            <div className={styles.challengesGrid}>
              {challenges.map((item, i) => (
                <div key={i} className={styles.challengeCard}>
                  <span className={styles.challengeNumber}>{i + 1}</span>
                  <h3 className={styles.challengeTitle}>{item.title}</h3>
                  <p className={styles.challengeText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. AppleTreeExperts Consultants Work Alongside You */}
        <section className={styles.consultants} id="consultants">
          <div className="container">
            <header className={styles.centerHeader}>
              <span className={styles.sectionBadge}>How we help</span>
              <h2 className={styles.sectionTitle}>AppleTreeExperts Consultants Work Alongside You to Grow Faster, Save Time, & Improve Profitability</h2>
              <p className={styles.sectionSubtitle}>
                We don&apos;t just advise—we partner with you to implement solutions that move the needle.
              </p>
            </header>
            <div className={styles.benefitsGrid}>
              {consultantBenefits.map((item, i) => (
                <div key={i} className={styles.benefitCard}>
                  <span className={`${styles.benefitIcon} ${styles[`benefitIcon_${item.iconColor}`]}`}>{item.icon}</span>
                  <h3 className={styles.benefitCardTitle}>{item.title}</h3>
                  <p className={styles.benefitCardText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Industries We Serve */}
        <section className={styles.industries} id="industries">
          <div className={styles.industriesBg} />
          <div className="container position-relative">
            <header className={styles.centerHeader}>
              <span className={styles.sectionBadge}>Industries</span>
              <h2 className={styles.sectionTitle}>Industries We Serve</h2>
              <p className={styles.sectionSubtitle}>
                We work with small businesses across sectors—each with unique needs and opportunities.
              </p>
            </header>
            <div className={styles.industriesGrid}>
              {industries.map((item, i) => (
                <div key={i} className={styles.industryCard}>
                  <h3 className={styles.industryName}>{item.name}</h3>
                  <p className={styles.industryDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Ready to Streamline Your Business Processes? */}
        <section className={styles.readyCta} id="ready">
          <div className="container">
            <div className={styles.readyCard}>
              <div className={styles.readyContent}>
                <h2 className={styles.readyTitle}>Ready to Streamline Your Business Processes?</h2>
                <p className={styles.readyIntro}>
                  Let AppleTreeExperts consultants help you grow with confidence.<br />
                  Get a free, no-obligation conversation about your goals<br />
                  and how we can support you.
                </p>
                <Link href="#quote" className={styles.readyCtaBtn}>
                  Request a Free Quote
                  <span className={styles.readyArrow} aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FactsService subtitle="Here's what we've achieved together with businesses like yours." />

        {/* FAQ */}
        <FAQ
          title="Business Consulting FAQs"
          subtitle="Common questions about our strategy and growth advisory services."
          items={consultingFaqs}
        />

        {/* 6. Request a Free Quote */}
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
                  Tell us about your business and goals. We&apos;ll respond within 24 hours with next steps and a no-obligation quote.
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
                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label htmlFor="consulting-name" className={styles.label}>Name</label>
                        <input type="text" id="consulting-name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className={styles.input} required />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="consulting-email" className={styles.label}>Email</label>
                        <input type="email" id="consulting-email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className={styles.input} required />
                      </div>
                      <div className={styles.formGroupFull}>
                        <label htmlFor="consulting-phone" className={styles.label}>Phone</label>
                        <input type="tel" id="consulting-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 000-0000" className={styles.input} />
                      </div>
                      <div className={styles.formGroupFull}>
                        <label htmlFor="consulting-message" className={styles.label}>Tell us about your business and goals</label>
                        <textarea id="consulting-message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Industry, size, main challenges, what you'd like to achieve..." className={styles.textarea} required />
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
