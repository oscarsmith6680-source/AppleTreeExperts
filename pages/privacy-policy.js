import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from '@/styles/PolicyPage.module.css';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.heroBanner}>
          <div className={styles.heroPattern} aria-hidden="true" />
          <div className="container">
            <div className={styles.heroInner}>
              <span className={styles.heroBadge}>Legal</span>
              <h1 className={styles.heroTitle}>Privacy Policy</h1>
              <p className={styles.heroUpdated}>Last updated: March 3, 2025</p>
            </div>
          </div>
        </section>
        <div className="container">
          <div className={styles.wrap}>
            <div className={styles.contentCard}>
            <div className={styles.content}>
              <p>AppleTreeExperts (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. This policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>

              <h2>Information We Collect</h2>
              <p>We may collect information that you provide directly to us, including:</p>
              <ul>
                <li>Name, email address, phone number, and mailing address when you contact us or request a quote</li>
                <li>Business name and details when you sign up for bookkeeping, tax, payroll, or consulting services</li>
                <li>Communications and correspondence you send to us</li>
              </ul>
              <p>We may also automatically collect certain information when you visit our website, such as your IP address, browser type, device information, and pages visited. See our <Link href="/cookie-policy">Cookie Policy</Link> for more details.</p>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver our services, including bookkeeping, tax preparation, payroll, and business consulting</li>
                <li>Send you updates, invoices, or service-related communications</li>
                <li>Improve our website, services, and user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>

              <h2>Sharing of Information</h2>
              <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
              <ul>
                <li>With trusted service providers who assist us in operating our business (e.g., hosting, email) under strict confidentiality</li>
                <li>When required by law or to protect our rights, safety, or property</li>
                <li>With your consent or at your direction</li>
              </ul>

              <h2>Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

              <h2>Your Rights</h2>
              <p>Depending on your location, you may have the right to access, correct, or delete your personal information, or to object to or restrict certain processing. To exercise these rights, please <Link href="/contact">contact us</Link>.</p>

              <h2>Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page and updating the &quot;Last updated&quot; date.</p>

              <h2>Contact Us</h2>
              <p>If you have questions about this Privacy Policy or our practices, please <Link href="/contact">contact us</Link>.</p>

            </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
