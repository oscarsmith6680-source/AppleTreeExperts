import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from '@/styles/PolicyPage.module.css';

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.heroBanner}>
          <div className={styles.heroPattern} aria-hidden="true" />
          <div className="container">
            <div className={styles.heroInner}>
              <span className={styles.heroBadge}>Legal</span>
              <h1 className={styles.heroTitle}>Cookie Policy</h1>
              <p className={styles.heroUpdated}>Last updated: March 3, 2025</p>
            </div>
          </div>
        </section>
        <div className="container">
          <div className={styles.wrap}>
            <div className={styles.contentCard}>
            <div className={styles.content}>
              <p>AppleTreeExperts uses cookies and similar technologies on our website. This policy explains what cookies are, how we use them, and how you can manage your preferences.</p>

              <h2>What Are Cookies?</h2>
              <p>Cookies are small text files that are stored on your device when you visit a website. They help the site remember your preferences, improve performance, and provide a better experience. They can be &quot;session&quot; cookies (deleted when you close your browser) or &quot;persistent&quot; cookies (stored for a set period).</p>

              <h2>How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul>
                <li><strong>Essential cookies</strong> — Required for the website to function (e.g., security, load balancing). These cannot be disabled.</li>
                <li><strong>Analytics cookies</strong> — Help us understand how visitors use our site (e.g., pages viewed, time on site) so we can improve our content and design.</li>
                <li><strong>Preference cookies</strong> — Remember your settings and choices (e.g., language, region) for future visits.</li>
              </ul>

              <h2>Third-Party Cookies</h2>
              <p>We may allow third-party services (such as analytics providers) to place cookies on our site. These parties have their own privacy and cookie policies. We do not control these cookies and recommend reviewing the third party&apos;s policy if you have concerns.</p>

              <h2>Managing Your Preferences</h2>
              <p>You can control and delete cookies through your browser settings. Most browsers allow you to:</p>
              <ul>
                <li>View and delete existing cookies</li>
                <li>Block cookies from specific or all sites</li>
                <li>Block third-party cookies only</li>
              </ul>
              <p>Please note that blocking or deleting certain cookies may affect how our website works and your user experience.</p>

              <h2>Updates</h2>
              <p>We may update this Cookie Policy from time to time to reflect changes in our practices or applicable law. We will post the updated policy on this page and update the &quot;Last updated&quot; date.</p>

              <h2>More Information</h2>
              <p>For more about how we handle your personal data, see our <Link href="/privacy-policy">Privacy Policy</Link>. If you have questions about our use of cookies, please <Link href="/contact">contact us</Link>.</p>

            </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
