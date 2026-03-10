import Image from 'next/image';
import styles from '@/styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.imageWrapper}>
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Professional business workspace"
          fill
          priority
          className={styles.image}
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>
      <div className={`container ${styles.content}`}>
        <div className="row justify-content-center">
          <div className="col-lg-9 text-center">
            <h1 className={styles.headline}>
              Your Success Is Our Business
            </h1>
            <p className={styles.subtitle}>
              Trusted business solutions that help you grow. From consulting to
              compliance, we deliver results that matter.
            </p>
            <div className={styles.ctaWrapper}>
              <span className={`btn btn-primary btn-lg ${styles.ctaBtn}`}>
                Get Started Today
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
