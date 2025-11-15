import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Contact Us</h1>
        <p>Get in touch with us to discover how Triton Consulting Group can elevate your business.</p>
      </div>

      <div className={styles.contactCard}>
        <h2>Let's Work Together</h2>
        
        <div className={styles.emailInfo}>
          <span className={styles.emailLabel}>Email</span>
          <a href="mailto:board.tcg@gmail.com" className={styles.emailLink}>
            board.tcg@gmail.com
          </a>
        </div>

        <form className={styles.form}>
          <div className={styles.formRow}>
            <input
              type="text"
              placeholder="First & Last Name"
              className={styles.input}
            />
          </div>
          
          <div className={styles.formRow}>
            <input
              type="email"
              placeholder="Email Address"
              className={styles.input}
            />
          </div>
          
          <div className={styles.formRow}>
            <input
              type="tel"
              placeholder="Phone"
              className={styles.input}
            />
          </div>
          
          <div className={styles.formRow}>
            <input
              type="text"
              placeholder="Company"
              className={styles.input}
            />
          </div>
          
          <div className={styles.formRow}>
            <input
              type="text"
              placeholder="Subject"
              className={styles.input}
            />
          </div>
          
          <div className={styles.formRow}>
            <textarea
              placeholder="Message"
              className={styles.textarea}
              rows={6}
            />
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
