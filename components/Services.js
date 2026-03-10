import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Services.module.css';
import { IconBookkeeping, IconTax, IconPayroll, IconChart } from '@/components/icons/ServiceIcons';

const services = [
  { title: 'Bookkeeping & Accounting', description: 'Accurate books and clean records so you always know where your business stands. We handle day-to-day bookkeeping and monthly reporting.', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80', href: '/bookkeeping-accounting', icon: <IconBookkeeping />, iconColor: 'teal' },
  { title: 'Tax Services', description: 'Expert tax preparation and planning so you stay compliant and keep more of what you earn. We handle filings and strategy.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80', href: '/tax-services', icon: <IconTax />, iconColor: 'blue' },
  { title: 'Payroll', description: 'Accurate payroll and timely processing so you can focus on running your business. We handle wages, taxes, and compliance.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80', href: '/payroll', icon: <IconPayroll />, iconColor: 'amber' },
  { title: 'Business Consulting', description: 'Strategic guidance to scale operations and achieve long-term goals with clarity and confidence. We help you plan and grow.', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80', href: '/business-consulting', icon: <IconChart />, iconColor: 'violet' },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.bg}>
        <div className={styles.bgGradient} />
      </div>

      <div className="container position-relative">
        <header className={styles.header}>
          <span className={styles.badge}>What we offer</span>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            Comprehensive business services designed to support growth and simplify operations.
          </p>
        </header>

        <div className="row g-4 g-lg-5 justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6">
              {service.href ? (
                <Link href={service.href} className={styles.cardLink}>
                  <article className={styles.card}>
                    <div className={styles.imageWrap}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={280}
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className={styles.imageOverlay} />
                      <div className={`${styles.iconWrap} ${styles[`iconWrap_${service.iconColor}`]}`}>
                        {service.icon}
                      </div>
                    </div>
                    <div className={styles.body}>
                      <h3 className={styles.cardTitle}>{service.title}</h3>
                      <p className={styles.cardDesc}>{service.description}</p>
                      <span className={styles.readMore}>
                        Read More
                        <span className={styles.arrow} aria-hidden>→</span>
                      </span>
                    </div>
                  </article>
                </Link>
              ) : (
                <article className={styles.card}>
                  <div className={styles.imageWrap}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={280}
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className={styles.imageOverlay} />
                    <div className={`${styles.iconWrap} ${styles[`iconWrap_${service.iconColor}`]}`}>
                      {service.icon}
                    </div>
                  </div>
                  <div className={styles.body}>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDesc}>{service.description}</p>
                    <span className={styles.readMore}>
                      Read More
                      <span className={styles.arrow} aria-hidden>→</span>
                    </span>
                  </div>
                </article>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
