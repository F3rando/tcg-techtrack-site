import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/tcg logo.png"
            alt="TCG TechTrack Logo"
            width={140}
            height={60}
            priority
          />
        </Link>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.dropdown}>
            <Link href="/about-us">About</Link>
            <ul className={styles.dropdownMenu}>
              <li>
                <Link href="/meet-the-team">Meet the Team</Link>
              </li>
              <li>
                <Link href="/community-events">Community Events</Link>
              </li>
            </ul>
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
      </nav>
    </header>
  );
}