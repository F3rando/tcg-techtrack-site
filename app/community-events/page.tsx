import styles from "./community-events.module.css";
import Link from "next/link";
import Image from "next/image";

export default function CommunityEventsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Image
          src="/community-header.png"
          alt="Community Events Header"
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          style={{ objectFit: "cover" }}
          priority
        />
        <div className={styles.heroOverlay} />
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
        {/** CSS-only infinite carousel with 7 event images duplicated for seamless loop */}
        <div className={styles.carousel}>
          <div className={styles.carouselTrack}>
            {(() => {
              const items = [
                { src: "/recruitment-tcg.png", title: "Recruitment" },
                { src: "/mentor-mentee.png", title: "Mentor & Mentee" },
                { src: "/Winter-retreat.png", title: "Winter Retreat" },
                { src: "/Spring banquet tcg.png", title: "Spring Banquet" },
                { src: "/TCG-Ladies-Picnic.png", title: "TCG Ladies Picnic" },
                { src: "/reunion.png", title: "Reunion" },
                { src: "/senior-sunset.png", title: "Senior Sunset" }
              ];
              // duplicate for seamless loop
              const loopItems = items.concat(items);
              return loopItems.map((img, i) => (
                <div className={styles.carouselCard} key={i} aria-label={img.title}>
                  <div className={styles.cardTitle}>{img.title}</div>
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(max-width: 900px) 80vw, 550px"
                    style={{ objectFit: "cover" }}
                    priority={i === 0}
                  />
                </div>
              ));
            })()}
          </div>
        </div>
      </section>
    </div>
  );
}
