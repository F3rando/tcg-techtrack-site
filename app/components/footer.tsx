import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/tcg logo.png"
            alt="TCG TechTrack Logo"
            width={140}
            height={60}
          />
        </Link>
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Facebook" className={styles.iconLink}>
            <FaFacebook />
          </a>
          <a href="#" aria-label="Twitter" className={styles.iconLink}>
            <FaTwitter />
          </a>
          <a href="#" aria-label="LinkedIn" className={styles.iconLink}>
            <FaLinkedin />
          </a>
          <a href="#" aria-label="Instagram" className={styles.iconLink}>
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <Link href="/recruitment" className={styles.joinButton}>
          Join the Team
        </Link>
      </div>
    </footer>
  );
}