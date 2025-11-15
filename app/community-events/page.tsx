import styles from "./community-events.module.css";
import Link from "next/link";

export default function CommunityEventsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Our Community</h1>
        <p>Get an inside look into TCG's vibrant community</p>
      </div>
      
      <div className={styles.ctaCard}>
        <h2>Meet The Team</h2>
        <p>A large part of what sets TCG apart is our vibrant and strong community.</p>
        <Link href="/recruitment" className={styles.ctaButton}>
          Join TCG today →
        </Link>
      </div>
      
      <section className={styles.eventsSection}>
        <h2>Our Events</h2>
        
        <div className={styles.carousel}>
          <div className={styles.carouselTrack}>
            <div className={styles.carouselCard}></div>
            <div className={styles.carouselCard}></div>
            <div className={styles.carouselCard}></div>
            <div className={styles.carouselCard}></div>
            <div className={styles.carouselCard}></div>
            <div className={styles.carouselCard}></div>
            {/* Duplicate for seamless loop */}
            <div className={styles.carouselCard}></div>
            <div className={styles.carouselCard}></div>
            <div className={styles.carouselCard}></div>
            <div className={styles.carouselCard}></div>
            <div className={styles.carouselCard}></div>
            <div className={styles.carouselCard}></div>
          </div>
        </div>
      </section>
    </div>
  );
}
