import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/styles/TestimonialsPage.module.css';

const reviews = [
  { quote: 'AppleTreeExperts took care of our books and taxes so we could focus on our product. Professional, responsive, and easy to work with.', name: 'Sarah Chen', role: 'CEO, TechStart Inc.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face', rating: 5 },
  { quote: 'We switched to AppleTreeExperts last year and have never looked back. Their advice has saved us time and money.', name: 'Michael Torres', role: 'Owner, Torres & Co.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', rating: 5 },
  { quote: 'Clear communication, thorough work, and fair pricing. Exactly what a small business needs in a partner.', name: 'Jennifer Walsh', role: 'Director, Walsh Consulting', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face', rating: 5 },
  { quote: 'From startup formation to our first audit, AppleTreeExperts guided us every step. Couldn\'t ask for a better team.', name: 'David Park', role: 'Founder, Park Innovations', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face', rating: 5 },
  { quote: 'They don\'t just do the numbers—they explain what they mean and how we can improve. True advisors.', name: 'Emily Ross', role: 'CFO, Ross Manufacturing', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face', rating: 5 },
  { quote: 'Tax season used to stress me out. Now I hand everything to AppleTreeExperts and breathe easy. Highly recommend.', name: 'James Mitchell', role: 'Owner, Mitchell Plumbing', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face', rating: 5 },
  { quote: 'Responsive, knowledgeable, and they actually return calls. A rarity in this industry. Thank you, AppleTreeExperts!', name: 'Amanda Foster', role: 'Managing Director, Foster & Associates', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face', rating: 5 },
  { quote: 'We\'ve worked with several firms over the years. AppleTreeExperts is the first that feels like an extension of our team.', name: 'Robert Kim', role: 'CEO, Kim Digital', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face', rating: 5 },
  { quote: 'Their payroll and bookkeeping setup saved us countless hours. Everything runs smoothly month to month.', name: 'Lisa Nguyen', role: 'Operations Manager, Nguyen Foods', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face', rating: 5 },
  { quote: 'Transparent pricing, no surprises. They helped us plan for growth and we hit our targets ahead of schedule.', name: 'Thomas Wright', role: 'Owner, Wright Construction', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face', rating: 5 },
  { quote: 'Professional from day one. They took time to understand our business and tailored their approach perfectly.', name: 'Nicole Martinez', role: 'Director, Martinez Design Studio', avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=150&h=150&fit=crop&crop=face', rating: 5 },
  { quote: 'Best decision we made was switching to AppleTreeExperts. Our books are clean and we finally understand our numbers.', name: 'Kevin O\'Brien', role: 'Founder, O\'Brien Logistics', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', rating: 5 },
  { quote: 'They helped us through a difficult audit with patience and expertise. We\'re grateful for their support.', name: 'Rachel Green', role: 'Owner, Green Earth Café', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face', rating: 5 },
  { quote: 'Cash flow planning with AppleTreeExperts gave us the confidence to hire and expand. Game changer for our growth.', name: 'Daniel Lee', role: 'CEO, Lee Tech Solutions', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face', rating: 5 },
  { quote: 'Friendly, efficient, and always on top of deadlines. They make the administrative side of business easy.', name: 'Sandra Phillips', role: 'Managing Partner, Phillips & Co.', avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face', rating: 5 },
];

function StarRating({ count = 5 }) {
  return (
    <span className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className={styles.star} aria-hidden>★</span>
      ))}
    </span>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
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
            <span className={styles.heroBadge}>Testimonials</span>
            <h1 className={styles.heroTitle}>What Our Clients Say</h1>
            <p className={styles.heroSubtitle}>
              Real stories from businesses that trust AppleTreeExperts for their accounting, tax, and advisory needs.
            </p>
            <div className={styles.heroStats}>
              <span className={styles.heroStat}><strong>15+</strong> Reviews</span>
              <span className={styles.heroStat}><strong>5.0</strong> Average Rating</span>
            </div>
            <Link href="/#contact" className={styles.heroCta}>Get in touch</Link>
          </div>
        </section>

        {/* Reviews grid */}
        <section className={styles.reviewsSection}>
          <div className="container">
            <div className="row g-4">
              {reviews.map((review, i) => (
                <div key={i} className="col-12 col-md-6 col-lg-4">
                  <article className={styles.card}>
                    <StarRating count={review.rating} />
                    <blockquote className={styles.quote}>"{review.quote}"</blockquote>
                    <div className={styles.author}>
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={56}
                        height={56}
                        className={styles.avatar}
                      />
                      <div className={styles.authorInfo}>
                        <cite className={styles.name}>{review.name}</cite>
                        <span className={styles.role}>{review.role}</span>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
            <div className={styles.ctaWrap}>
              <Link href="/#contact" className={styles.cta}>Get in touch</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
