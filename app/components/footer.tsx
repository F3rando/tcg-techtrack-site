import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <Link href="/" className={styles.logoContainer}>
            <Image
              src="/tcg logo.png"
              alt="TCG TechTrack Logo"
              width={40}
              height={40}
            />
            <div>
              <h3>TCG TechTrack</h3>
              <p>Empowering businesses with technology solutions.</p>
            </div>
          </Link>
        </div>
        <div className={styles.section}>
          <h4>Links</h4>
          <ul>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/meet-the-team">Team</Link>
            </li>
            <li>
              <Link href="/community-events">Events</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2025 TCG TechTrack. All rights reserved.</p>
      </div>
    </footer>
  );
}