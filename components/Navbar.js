import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import { IconBookkeeping, IconTax, IconPayroll, IconChart } from '@/components/icons/ServiceIcons';

const servicesMega = [
  { title: 'Bookkeeping & Accounting', desc: 'Clean books and accurate records', href: '/bookkeeping-accounting', icon: <IconBookkeeping />, iconColor: 'teal' },
  { title: 'Tax Services', desc: 'Preparation and planning', href: '/tax-services', icon: <IconTax />, iconColor: 'blue' },
  { title: 'Payroll', desc: 'Payroll and employment support', href: '/payroll', icon: <IconPayroll />, iconColor: 'amber' },
  { title: 'Business Consulting', desc: 'Strategy and growth advisory', href: '/business-consulting', icon: <IconChart />, iconColor: 'violet' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${styles.navbar} ${
        scrolled ? styles.scrolled : ''
      }`}
    >
      <div className="container">
        <Link href="/" className={`navbar-brand ${styles.brand}`}>
          AppleTreeExperts
        </Link>
        <button
          className={`navbar-toggler ${styles.toggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded={navbarExpanded}
          aria-label="Toggle navigation"
          onClick={() => setNavbarExpanded(!navbarExpanded)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className={`navbar-nav ms-auto align-items-lg-center ${styles.navList}`}>
            <li className="nav-item">
              <Link href="/" className={`nav-link ${styles.navLink}`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className={`nav-link ${styles.navLink}`}>About</Link>
            </li>

            <li
              className={`nav-item dropdown ${styles.dropdownWrap}`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/#services"
                className={`nav-link dropdown-toggle ${styles.navLink} ${styles.dropdownToggle}`}
                onClick={(e) => {
                  if (window.innerWidth < 992) {
                    e.preventDefault();
                    setServicesOpen(!servicesOpen);
                  }
                }}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
              </Link>
              <div
                className={`dropdown-menu ${styles.megamenu} ${servicesOpen ? styles.megamenuOpen : ''}`}
              >
                <div className={styles.megamenuInner}>
                  <div className="row g-3">
                    {servicesMega.map((item, i) => (
                      <div key={i} className="col-md-6">
                        <Link href={item.href} className={styles.megamenuItem} onClick={() => setServicesOpen(false)}>
                          <span className={`${styles.megamenuIcon} ${styles[`megamenuIcon_${item.iconColor}`]}`}>{item.icon}</span>
                          <div className={styles.megamenuItemContent}>
                            <span className={styles.megamenuItemTitle}>{item.title}</span>
                            <span className={styles.megamenuItemDesc}>{item.desc}</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link href="/testimonials" className={`nav-link ${styles.navLink}`}>Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className={`nav-link ${styles.navLink}`}>Contact</Link>
            </li>

            <li className="nav-item ms-lg-3">
              <Link href="/contact" className={`btn btn-primary ${styles.ctaBtn}`}>
                Schedule an Appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
