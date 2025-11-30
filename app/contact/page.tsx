import styles from "./contact.module.css";

// Server Component: plain HTML form posts directly to Formspree.
// Formspree will show its default confirmation page (no custom redirect).

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

        <form className={styles.form} action="https://formspree.io/f/mwpgvqdp" method="POST">
          <input type="text" name="_gotcha" style={{ display: "none" }} aria-hidden="true" />
          <div className={styles.formRow}>
            <input
              name="name"
              type="text"
              placeholder="First & Last Name"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formRow}>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formRow}>
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              className={styles.input}
              pattern="[0-9()+\-\s]{7,}"
            />
          </div>
          <div className={styles.formRow}>
            <input
              name="company"
              type="text"
              placeholder="Company"
              className={styles.input}
            />
          </div>
          <div className={styles.formRow}>
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formRow}>
            <textarea
              name="message"
              placeholder="Message"
              className={styles.textarea}
              rows={6}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </div>
  );
}
