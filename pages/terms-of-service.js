import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from '@/styles/PolicyPage.module.css';

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.heroBanner}>
          <div className={styles.heroPattern} aria-hidden="true" />
          <div className="container">
            <div className={styles.heroInner}>
              <span className={styles.heroBadge}>Legal</span>
              <h1 className={styles.heroTitle}>Terms of Service</h1>
              <p className={styles.heroUpdated}>Last updated: March 3, 2025</p>
            </div>
          </div>
        </section>
        <div className="container">
          <div className={styles.wrap}>
            <div className={styles.contentCard}>
            <div className={styles.content}>
              <p>Welcome to AppleTreeExperts. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our site or services.</p>

              <h2>Description of Services</h2>
              <p>We provide bookkeeping, tax preparation, payroll, and business consulting services. The scope of each engagement will be set out in a separate agreement or statement of work. These terms apply generally to your use of our website and any services we provide unless otherwise agreed in writing.</p>

              <h2>Your Responsibilities</h2>
              <p>You agree to:</p>
              <ul>
                <li>Provide accurate, current, and complete information when requesting quotes or engaging our services</li>
                <li>Maintain the security of any account or login credentials we provide</li>
                <li>Use our services only for lawful purposes and in compliance with applicable laws</li>
                <li>Notify us promptly of any changes to your contact or business information</li>
              </ul>

              <h2>Fees and Payment</h2>
              <p>Fees for our services will be communicated before work begins. Payment terms will be specified in your engagement letter or invoice. You are responsible for paying all amounts due by the stated due date. We may suspend or terminate services for non-payment.</p>

              <h2>Intellectual Property</h2>
              <p>Our website content, branding, and materials are owned by AppleTreeExperts and are protected by copyright and other intellectual property laws. You may not copy, modify, or distribute our content without our prior written consent.</p>

              <h2>Disclaimer</h2>
              <p>Our services are provided for general business support. We do not provide legal, investment, or other professional advice unless explicitly agreed. You are responsible for business decisions made based on our work product.</p>

              <h2>Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services. Our total liability shall not exceed the amount you paid us for the relevant services in the twelve months preceding the claim.</p>

              <h2>Modifications</h2>
              <p>We reserve the right to modify these Terms of Service at any time. We will post the updated terms on this page and update the &quot;Last updated&quot; date. Your continued use of our website or services after changes constitutes acceptance of the revised terms.</p>

              <h2>Governing Law</h2>
              <p>These terms are governed by the laws of the jurisdiction in which we operate. Any disputes shall be resolved in the courts of that jurisdiction.</p>

              <h2>Contact Us</h2>
              <p>For questions about these Terms of Service, please <Link href="/contact">contact us</Link>.</p>

            </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
