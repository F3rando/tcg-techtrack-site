'use client';

import styles from "./portfolio.module.css";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioPage() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - (window.innerHeight / 2) + (target.clientHeight / 2);
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Portfolio</h1>
        <p>Explore the impact and innovation from our consulting projects.</p>
      </div>

      <section className={styles.portfolioSection}>
        <h2 className={styles.sectionTitle}>Previous Projects</h2>
        <p className={styles.sectionDescription}>
          With over 100 client engagements, the TCG team brings unmatched value to our portfolio.
        </p>

        {/* Carousel of clients (auto-scroll) — only 4 unique clients duplicated for a seamless loop */}
        <div className={styles.carousel}>
          <div className={styles.carouselTrack}>
            <a 
              href="#tag-biosciences" 
              className={styles.carouselCard}
              onClick={(e) => handleSmoothScroll(e, '#tag-biosciences')}
            >
              <div className={styles.cardInner}>
                <Image src="/tag-biosciences-logo.png" alt="TAG Biosciences" width={200} height={80} style={{ objectFit: 'contain' }} />
              </div>
            </a>

            <a 
              href="#vektor-medical" 
              className={styles.carouselCard}
              onClick={(e) => handleSmoothScroll(e, '#vektor-medical')}
            >
              <div className={styles.cardInner}>
                <Image src="/vektor-medical-logo.png" alt="Vektor Medical" width={200} height={80} style={{ objectFit: 'contain' }} />
              </div>
            </a>

            <a 
              href="#cari-health" 
              className={styles.carouselCard}
              onClick={(e) => handleSmoothScroll(e, '#cari-health')}
            >
              <div className={styles.cardInner}>
                <Image src="/cari-health-logo.png" alt="Cari Health" width={200} height={80} style={{ objectFit: 'contain' }} />
              </div>
            </a>

            <a 
              href="#md-revolution" 
              className={styles.carouselCard}
              onClick={(e) => handleSmoothScroll(e, '#md-revolution')}
            >
              <div className={styles.cardInner}>
                <Image src="/md-revolution-logo.png" alt="MD Revolution" width={200} height={80} style={{ objectFit: 'contain' }} />
              </div>
            </a>

            {/* duplicates for seamless loop */}
            <a 
              href="#tag-biosciences" 
              className={styles.carouselCard}
              onClick={(e) => handleSmoothScroll(e, '#tag-biosciences')}
            >
              <div className={styles.cardInner}>
                <Image src="/tag-biosciences-logo.png" alt="TAG Biosciences" width={200} height={80} style={{ objectFit: 'contain' }} />
              </div>
            </a>
            <a 
              href="#vektor-medical" 
              className={styles.carouselCard}
              onClick={(e) => handleSmoothScroll(e, '#vektor-medical')}
            >
              <div className={styles.cardInner}>
                <Image src="/vektor-medical-logo.png" alt="Vektor Medical" width={200} height={80} style={{ objectFit: 'contain' }} />
              </div>
            </a>
            <a 
              href="#cari-health" 
              className={styles.carouselCard}
              onClick={(e) => handleSmoothScroll(e, '#cari-health')}
            >
              <div className={styles.cardInner}>
                <Image src="/cari-health-logo.png" alt="Cari Health" width={200} height={80} style={{ objectFit: 'contain' }} />
              </div>
            </a>
            <a 
              href="#md-revolution" 
              className={styles.carouselCard}
              onClick={(e) => handleSmoothScroll(e, '#md-revolution')}
            >
              <div className={styles.cardInner}>
                <Image src="/md-revolution-logo.png" alt="MD Revolution" width={200} height={80} style={{ objectFit: 'contain' }} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={styles.caseStudies}>
        {/* TAG Biosciences - Image Right */}
        <div id="tag-biosciences" className={styles.caseStudyItem}>
          <div className={styles.caseContent}>
            <div className={styles.caseLogo}>
              <Image src="/tag-biosciences-logo.png" alt="TAG Biosciences" width={180} height={60} style={{ objectFit: 'contain' }} />
            </div>
            <h3 className={styles.caseTitle}>TAG Biosciences</h3>
            <p className={styles.caseDescription}>
              Developed a comprehensive go-to-market strategy for TAG Biosciences' innovative protein degradation platform, helping them position their technology in the competitive biotechnology landscape and identify key partnership opportunities.
            </p>
          </div>
          <div className={styles.caseImage}>
            <Image src="/tag-biosciences-case.jpg" alt="TAG Biosciences Case Study" width={500} height={400} style={{ objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>

        {/* Vektor Medical - Content Right, Image Left */}
        <div id="vektor-medical" className={`${styles.caseStudyItem} ${styles.reverse}`}>
          <div className={styles.caseContent}>
            <div className={styles.caseLogo}>
              <Image src="/vektor-medical-logo.png" alt="Vektor Medical" width={180} height={60} style={{ objectFit: 'contain' }} />
            </div>
            <h3 className={styles.caseTitle}>Vektor Medical</h3>
            <p className={styles.caseDescription}>
              Conducted market analysis and competitive intelligence for Vektor Medical's cardiac mapping technology, providing strategic insights that informed their product development roadmap and commercialization strategy for electrophysiology solutions.
            </p>
          </div>
          <div className={styles.caseImage}>
            <Image src="/vektor-medical-case.jpg" alt="Vektor Medical Case Study" width={500} height={400} style={{ objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>

        {/* Cari Health - Content Left, Image Right */}
        <div id="cari-health" className={styles.caseStudyItem}>
          <div className={styles.caseContent}>
            <div className={styles.caseLogo}>
              <Image src="/cari-health-logo.png" alt="Cari Health" width={180} height={60} style={{ objectFit: 'contain' }} />
            </div>
            <h3 className={styles.caseTitle}>Cari Health</h3>
            <p className={styles.caseDescription}>
              Designed a digital health engagement strategy for Cari Health's platform, analyzing user behavior patterns and recommending features to improve patient outcomes and increase platform adoption among healthcare providers.
            </p>
          </div>
          <div className={styles.caseImage}>
            <Image src="/cari-health-case.jpg" alt="Cari Health Case Study" width={500} height={400} style={{ objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>

        {/* MD Revolution - Content Right, Image Left */}
        <div id="md-revolution" className={`${styles.caseStudyItem} ${styles.reverse}`}>
          <div className={styles.caseContent}>
            <div className={styles.caseLogo}>
              <Image src="/md-revolution-logo.png" alt="MD Revolution" width={180} height={60} style={{ objectFit: 'contain' }} />
            </div>
            <h3 className={styles.caseTitle}>MD Revolution</h3>
            <p className={styles.caseDescription}>
              Created a comprehensive business expansion plan for MD Revolution's preventive care programs, identifying new market segments and developing partnership strategies to scale their impact in transforming healthcare delivery.
            </p>
          </div>
          <div className={styles.caseImage}>
            <Image src="/md-revolution-case.jpg" alt="MD Revolution Case Study" width={500} height={400} style={{ objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>
      </section>
    </div>
  );
}
