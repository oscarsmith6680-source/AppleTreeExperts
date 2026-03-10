import { useState } from 'react';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or 'empty'

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Only allow numbers in phone field
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check for blank fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('empty');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a question or ready to get started? Send us a message and we’ll
            respond as soon as we can.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}
              {submitStatus === 'empty' && (
                <div className={styles.errorMessage}>
                  <span>Please fill in all required fields before submitting.</span>
                </div>
              )}
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div className="col-12 text-center">
                  <button 
                    type="submit" 
                    className={`btn btn-primary btn-lg ${styles.submitBtn}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
