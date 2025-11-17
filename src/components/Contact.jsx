import { useState, useEffect } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);

      setFormStatus({ 
        type: "success", 
        message: "Message sent successfully! I'll contact you soon." 
      });

      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        const box = document.getElementById("formResponse");
        if (box) {
          box.classList.add(styles.fadeOut);
          setTimeout(() => setFormStatus(null), 500);
        }
      }, 8000);

    } catch (error) {
      setFormStatus({ 
        type: "error", 
        message: "Something went wrong. Please try again." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const dismissMessage = () => {
    const box = document.getElementById("formResponse");
    if (box) box.classList.add(styles.fadeOut);
    setTimeout(() => setFormStatus(null), 500);
  };

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <section id="contact" className={styles.contact}>
      
      {/* Decorative elements (his design) */}
      <div className={`${styles.decorElement} ${styles.decorElement1}`}></div>
      <div className={`${styles.decorElement} ${styles.decorElement2}`}></div>

      <h2 className={styles.sectionTitle}>Get in Touch</h2>
      <p className={styles.sectionSubtitle}>
        Have a question or want to work together? Let's make it happen.
      </p>

      {/* ⭐ Your contact info (added without affecting his design) */}
      <div className={styles.contactInfoBox}>
        <p><strong>Name:</strong> Paggilla Saketh</p>
        <p><strong>Email:</strong> sakethdsnr.362715@gmail.com</p>
        <p><strong>Phone:</strong> 7330946389</p>
        <p><strong>Location:</strong> Hyderabad, Telangana</p>
      </div>

      {/* HIS contact form — unchanged */}
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        
        <div className={`${styles.formGroup} ${styles.floatingLabel}`}>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="name">Your Name</label>
        </div>

        <div className={`${styles.formGroup} ${styles.floatingLabel}`}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="email">Email Address</label>
        </div>

        <div className={`${styles.formGroup} ${styles.floatingLabel}`}>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder=" "
            required
          ></textarea>
          <label htmlFor="message">Your Message</label>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {formStatus && (
          <div
            id="formResponse"
            className={`${styles.formResponse} ${styles[formStatus.type]}`}
          >
            {formStatus.message}
            <button
              type="button"
              className={styles.closeButton}
              onClick={dismissMessage}
              aria-label="Dismiss message"
            >
              ×
            </button>
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
