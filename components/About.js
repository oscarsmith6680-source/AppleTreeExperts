import Image from 'next/image';
import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className={styles.imageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                width={600}
                height={400}
                className={styles.image}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="section-title">About Us</h2>
            <p className={styles.lead}>
              For over a decade, AppleTreeExperts has been helping
              businesses of all sizes navigate complexity and grow with
              confidence.
            </p>
            <p className="text-secondary">
              We combine deep expertise in accounting, compliance, and
              strategic consulting with a personal touch. Whether you&apos;re a
              startup or an established company, we provide tailored solutions
              that fit your needs and goals.
            </p>
            <ul className={styles.list}>
              <li>Licensed and experienced professionals</li>
              <li>Transparent pricing and clear communication</li>
              <li>Proven track record across industries</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
