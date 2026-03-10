import Image from 'next/image';
import styles from '@/styles/Testimonials.module.css';

const testimonials = [
  {
    quote:
      'AppleTreeExperts took care of our books and taxes so we could focus on our product. Professional, responsive, and easy to work with.',
    name: 'Sarah Chen',
    role: 'CEO, TechStart Inc.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote:
      'We switched to AppleTreeExperts last year and have never looked back. Their advice has saved us time and money.',
    name: 'Michael Torres',
    role: 'Owner, Torres & Co.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote:
      'Clear communication, thorough work, and fair pricing. Exactly what a small business needs in a partner.',
    name: 'Jennifer Walsh',
    role: 'Director, Walsh Consulting',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Hear from businesses that trust us with their financial and
            operational needs.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              id="testimonialsCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="6000"
            >
              <div className="carousel-inner">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className={`carousel-item ${i === 0 ? 'active' : ''}`}
                  >
                    <div className={`card border-0 ${styles.card}`}>
                      <div className="card-body text-center p-4 p-md-5">
                        <p className={styles.quote}>"{t.quote}"</p>
                        <div className={styles.author}>
                          <div className={styles.avatarWrapper}>
                            <Image
                              src={t.avatar}
                              alt={t.name}
                              width={64}
                              height={64}
                              className={styles.avatar}
                            />
                          </div>
                          <div className={styles.authorInfo}>
                            <strong className="d-block">{t.name}</strong>
                            <span className="text-secondary">{t.role}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className={`carousel-control-prev ${styles.control}`}
                type="button"
                data-bs-target="#testimonialsCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className={`carousel-control-next ${styles.control}`}
                type="button"
                data-bs-target="#testimonialsCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
