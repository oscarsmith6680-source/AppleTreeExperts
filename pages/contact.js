import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/styles/ContactPage.module.css';

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="m22 6-10 7L2 6" /></svg>
    ),
    title: 'Email',
    value: 'hello@appletreeexperts.com',
    href: 'mailto:hello@appletreeexperts.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
    ),
    title: 'Phone',
    value: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
    ),
    title: 'Office',
    value: '123 Business Ave, Suite 100, City, ST 12345',
    href: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
    ),
    title: 'Hours',
    value: 'Mon – Fri: 9:00 AM – 6:00 PM',
    href: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'empty', or 'error'
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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || 'Not provided',
          message: formData.message.trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        setSubmitStatus('error');
        setApiError(data.error || 'Something went wrong. Please try again.');
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
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image
              src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1920&q=80"
              alt=""
              fill
              className={styles.heroImage}
              priority
              sizes="100vw"
            />
            <div className={styles.heroOverlay} />
          </div>
          <div className={`container ${styles.heroContent}`}>
            <span className={styles.heroBadge}>Get in touch</span>
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <p className={styles.heroSubtitle}>
              Have a question or ready to get started? We&apos;d love to hear from you. Send a message and we&apos;ll respond as soon as we can.
            </p>
            <Link href="#contact-form" className={styles.heroCta}>Send a message</Link>
          </div>
        </section>

        {/* Contact info cards */}
        <section className={styles.infoSection}>
          <div className="container">
            <div className={styles.infoGrid}>
              {contactInfo.map((item, i) => (
                <div key={i} className={styles.infoCard}>
                  {item.href ? (
                    <a href={item.href} className={styles.infoCardLink}>
                      <span className={styles.infoIcon}>{item.icon}</span>
                      <h3 className={styles.infoTitle}>{item.title}</h3>
                      <span className={styles.infoValue}>{item.value}</span>
                    </a>
                  ) : (
                    <>
                      <span className={styles.infoIcon}>{item.icon}</span>
                      <h3 className={styles.infoTitle}>{item.title}</h3>
                      <span className={styles.infoValue}>{item.value}</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form + side note */}
        <section className={styles.formSection} id="contact-form">
          <div className="container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-7">
                <div className={styles.formCard}>
                  <h2 className={styles.formTitle}>Send a Message</h2>
                  <p className={styles.formIntro}>
                    Fill out the form below and we&apos;ll get back to you within one business day.
                  </p>
                  <form onSubmit={handleSubmit} className={styles.form} noValidate>
                    {submitStatus === 'success' && (
                      <div className={styles.successMessage}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                        <span>Thank you! Your message has been sent successfully.</span>
                      </div>
                    )}
                    {submitStatus === 'empty' && (
                      <div className={styles.errorMessage}>
                        <span>Please fill in all required fields before submitting.</span>
                      </div>
                    )}
                    {submitStatus === 'error' && apiError && (
                      <div className={styles.errorMessage}>
                        <span>{apiError}</span>
                      </div>
                    )}
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="contact-name" className={styles.label}>Name</label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={styles.input}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="contact-email" className={styles.label}>Email</label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={styles.input}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="contact-phone" className={styles.label}>Phone</label>
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 000-0000"
                          className={styles.input}
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="contact-message" className={styles.label}>Message</label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your needs..."
                          className={styles.textarea}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <button 
                          type="submit" 
                          className={styles.submitBtn}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                          {!isSubmitting && <span className={styles.submitArrow} aria-hidden>→</span>}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-5">
                <div className={styles.sideCard}>
                  <h3 className={styles.sideTitle}>Why reach out?</h3>
                  <ul className={styles.sideList}>
                    <li>Get a free consultation for your business needs</li>
                    <li>Clear answers about our services and pricing</li>
                    <li>No obligation—we&apos;re here to help you decide</li>
                  </ul>
                  <p className={styles.sideNote}>
                    Prefer to talk? Call us at{' '}
                    <a href="tel:+15551234567" className={styles.sideLink}>(555) 123-4567</a> or email{' '}
                    <a href="mailto:hello@appletreeexperts.com" className={styles.sideLink}>hello@appletreeexperts.com</a>.
                  </p>
                  <Link href="/" className={styles.backLink}>← Back to home</Link>
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
