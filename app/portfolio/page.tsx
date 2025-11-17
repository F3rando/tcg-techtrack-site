import styles from "./portfolio.module.css";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Portfolio</h1>
        <p>Explore the impact and innovation from our consulting projects.</p>
      </div>

      <div className={styles.ctaCard}>
        <h2>See Our Work</h2>
        <p>Browse a curated selection of client engagements and case studies.</p>
        <Link href="/services" className={styles.ctaButton}>
          View Services →
        </Link>
      </div>

      <section className={styles.portfolioSection}>
        <h2>Previous Projects</h2>
        <p style={{ color: '#4b5563', maxWidth: '880px' }}>
          With over 100 client engagements, the TCG team brings unmatched value to our portfolio.
        </p>

        {/* Carousel of clients (auto-scroll) — only 4 unique clients duplicated for a seamless loop */}
        <div className={styles.carousel}>
          <div className={styles.carouselTrack}>
            <div className={styles.carouselCard}>
              <div className={styles.cardInner}>Client A</div>
              <div className={styles.cardOverlay}>
                <div className={styles.overlayText}>
                  {/* Overlay content removed as requested */}
                </div>
              </div>
            </div>

            <div className={styles.carouselCard}>
              <div className={styles.cardInner}>Client B</div>
              <div className={styles.cardOverlay}>
                <div className={styles.overlayText}>
                  {/* Overlay content removed as requested */}
                </div>
              </div>
            </div>

            <div className={styles.carouselCard}>
              <div className={styles.cardInner}>Client C</div>
              <div className={styles.cardOverlay}>
                <div className={styles.overlayText}>
                  {/* Overlay content removed as requested */}
                </div>
              </div>
            </div>

            <div className={styles.carouselCard}>
              <div className={styles.cardInner}>Client D</div>
              <div className={styles.cardOverlay}>
                <div className={styles.overlayText}>
                  {/* Overlay content removed as requested */}
                </div>
              </div>
            </div>

            {/* duplicates for seamless loop */}
            <div className={styles.carouselCard}>
              <div className={styles.cardInner}>Client A</div>
            </div>
            <div className={styles.carouselCard}>
              <div className={styles.cardInner}>Client B</div>
            </div>
            <div className={styles.carouselCard}>
              <div className={styles.cardInner}>Client C</div>
            </div>
            <div className={styles.carouselCard}>
              <div className={styles.cardInner}>Client D</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
