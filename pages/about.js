import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { IconShield, IconStar, IconUsers, IconCheck } from '@/components/icons/ServiceIcons';
import styles from '@/styles/AboutPage.module.css';

const coreValues = [
  { icon: <IconShield />, title: 'Integrity', desc: 'We do the right thing, even when no one is watching.', iconColor: 'teal' },
  { icon: <IconStar />, title: 'Excellence', desc: 'We deliver accurate, timely work you can rely on.', iconColor: 'blue' },
  { icon: <IconUsers />, title: 'Partnership', desc: 'Your success is our success—we grow together.', iconColor: 'amber' },
  { icon: <IconCheck />, title: 'Clarity', desc: 'No jargon. Clear communication and transparent pricing.', iconColor: 'violet' },
];

const benefits = [
  { title: 'Licensed professionals', text: 'Experienced CPAs and advisors on your side.' },
  { title: 'Transparent pricing', text: 'No hidden fees. Clear quotes from day one.' },
  { title: 'One point of contact', text: 'One team for books, tax, and strategy.' },
  { title: 'Scalable support', text: 'From startup to growth stage—we scale with you.' },
];

const history = [
  { year: '2010', title: 'Founded', text: 'AppleTreeExperts opened its doors to serve local small businesses.' },
  { year: '2014', title: 'Expanded team', text: 'Grew to a full-service firm with bookkeeping, tax, and advisory.' },
  { year: '2018', title: '500+ clients', text: 'Reached a milestone of 500 businesses trusting us with their finances.' },
  { year: 'Today', title: 'Growing with you', text: 'Continuing to help businesses plan, comply, and grow with confidence.' },
];

const testimonials = [
  { quote: 'Working with AppleTreeExperts feels like having a dedicated finance team. They understand our business.', name: 'Sarah Chen', role: 'CEO, TechStart Inc.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face' },
  { quote: 'Professional, responsive, and they actually explain things in plain English. Highly recommend.', name: 'Michael Torres', role: 'Owner, Torres & Co.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
  { quote: 'From day one they made us feel like a priority. Our books have never been in better shape.', name: 'Jennifer Walsh', role: 'Director, Walsh Consulting', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
              alt=""
              fill
              className={styles.heroImage}
              priority
              sizes="100vw"
            />
            <div className={styles.heroOverlay} />
          </div>
          <div className={`container ${styles.heroContent}`}>
            <span className={styles.heroBadge}>About us</span>
            <h1 className={styles.heroTitle}>About Us</h1>
            <p className={styles.heroSubtitle}>
              We&apos;re the team behind the numbers—helping small businesses thrive with clarity and confidence.
            </p>
            <Link href="/#contact" className={styles.heroCta}>Get in touch</Link>
          </div>
        </section>

        {/* 2. Who we are */}
        <section className={styles.whoWeAre} id="who-we-are">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className={styles.whoImageWrap}>
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                    alt="Team at work"
                    width={600}
                    height={400}
                    className={styles.whoImage}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h2 className={styles.sectionTitle}>Who We Are</h2>
                <p className={styles.lead}>
                  AppleTreeExperts is a full-service accounting and advisory firm built for small businesses and growing companies.
                </p>
                <p className={styles.body}>
                  We combine deep expertise in tax, bookkeeping, and strategic planning with a personal approach. Whether you&apos;re just starting out or scaling up, we provide the clarity and support you need to make confident decisions.
                </p>
                <p className={styles.body}>
                  Our team is licensed, experienced, and committed to being more than your accountant—we&apos;re your partner in growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core values */}
        <section className={styles.coreValues} id="core-values">
          <div className={styles.coreBg} />
          <div className="container position-relative">
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Our Core Values</h2>
              <p className={styles.sectionSubtitle}>
                The principles that guide everything we do for our clients.
              </p>
            </header>
            <div className="row g-4">
              {coreValues.map((v, i) => (
                <div key={i} className="col-sm-6 col-lg-3">
                  <div className={styles.valueCard}>
                    <span className={`${styles.valueIcon} ${styles[`valueIcon_${v.iconColor}`]}`}>{v.icon}</span>
                    <h3 className={styles.valueTitle}>{v.title}</h3>
                    <p className={styles.valueDesc}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Benefits */}
        <section className={styles.benefits} id="benefits">
          <div className="container">
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Why Work With Us</h2>
              <p className={styles.sectionSubtitle}>
                Benefits that make a real difference for your business.
              </p>
            </header>
            <div className="row g-4">
              {benefits.map((b, i) => (
                <div key={i} className="col-md-6">
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitNumber}>{String(i + 1).padStart(2, '0')}</div>
                    <div>
                      <h3 className={styles.benefitTitle}>{b.title}</h3>
                      <p className={styles.benefitText}>{b.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. History */}
        <section className={styles.history} id="history">
          <div className={styles.historyBg} />
          <div className="container position-relative">
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>AppleTreeExperts History</h2>
              <p className={styles.sectionSubtitle}>
                Key milestones in our journey.
              </p>
            </header>
            <div className={styles.timeline}>
              {history.map((h, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineCard}>
                    <span className={styles.timelineYear}>{h.year}</span>
                    <h3 className={styles.timelineTitle}>{h.title}</h3>
                    <p className={styles.timelineText}>{h.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Testimonials */}
        <section className={styles.testimonials} id="testimonials">
          <div className="container">
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
              <p className={styles.sectionSubtitle}>
                Hear from businesses that trust us.
              </p>
            </header>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div id="aboutTestimonialsCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="6000">
                  <div className="carousel-inner">
                    {testimonials.map((t, i) => (
                      <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                        <div className={styles.testimonialCard}>
                          <p className={styles.testimonialQuote}>"{t.quote}"</p>
                          <div className={styles.testimonialAuthor}>
                            <Image src={t.avatar} alt={t.name} width={56} height={56} className={styles.testimonialAvatar} />
                            <div>
                              <strong>{t.name}</strong>
                              <span>{t.role}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className={`carousel-control-prev ${styles.carouselControl}`} type="button" data-bs-target="#aboutTestimonialsCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className={`carousel-control-next ${styles.carouselControl}`} type="button" data-bs-target="#aboutTestimonialsCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </button>
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
