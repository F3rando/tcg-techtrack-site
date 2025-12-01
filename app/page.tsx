import React from "react";
import { Button } from "./components/button";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className = {styles.homeRoot}>
      {/* HERO SECTION */}
      <div className={styles.container}>
      <section className={styles.hero}>
  <Image
    src="/Home_Page_Front.jpg"
    alt="Home Page Hero"
    fill
    sizes="(max-width: 1280px) 100vw, 1280px"
    style={{ objectFit: "cover" }}
    priority
  />
  
  <div className={styles.heroOverlay} />

  <div className={styles.heroContent}>
    <h1>Unlocking the Next Era of Business</h1>
    <p>
      Empowering tomorrow’s leaders with strategic insight and innovative
      solutions.
    </p>

    <div className={styles.heroButtons}>
      <a href="/about-us">
      <Button>Learn More About TCG</Button>
      </a>
      <a href="/contact">
      <Button variant="outline">Work With Us</Button>
      </a>
    </div>
  </div>
</section>
</div>

      {/* OFFERINGS SECTION */}
<section className={styles.offeringsSection}>
  <div className={styles.sectionHeaderRow}>
    <h2>Offerings</h2>
    <a href ="/services">
    <Button>Our Services</Button>
    </a>
  </div>

    <div className={styles.containerWide}>
  <div className={styles.offeringsGrid}>

    <div className={styles.offeringsCard}>
      <div className={styles.offeringsImage}>
        <Image 
          src="/operations.png"
          alt="Offering 1"
          fill
          sizes="280px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3>Operations & Strategy</h3>
      <p>Prepare and grow the organization’s presence and image in the marketplace. </p>
    </div>

    <div className={styles.offeringsCard}>
      <div className={styles.offeringsImage}>
        <Image 
          src="/finance.png"
          alt="Offering 2"
          fill
          sizes="280px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3>Financial Advisory</h3>
      <p>Target the finance business 
          unit within organizations to 
          effectively manage, schedule, 
          and budget 
          organizational capital. </p>
    </div>

    <div className={styles.offeringsCard}>
      <div className={styles.offeringsImage}>
        <Image 
          src="/technology.png"
          alt="Offering 3"
          fill
          sizes="280px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3>Technology</h3>
      <p>Implement solutions to integrate 
        both business knowledge and 
        technical skill.</p>
    </div>

    <div className={styles.offeringsCard}>
      <div className={styles.offeringsImage}>
        <Image 
          src="/market_research.png"
          alt="Offering 4"
          fill
          sizes="280px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3>Market Research</h3>
      <p>Perform in-depth
          competitive analysis, market
          sizing, and market analysis
          to guide strategy. </p>
    </div>
  </div>

  </div>
</section>


      {/* ABOUT SECTION */}
      <section className="section about">
        <div className="about-container">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              We provide investors and innovators with the tools to grow. Triton
              Consulting Group empowers the UC San Diego business community with
              hands-on consulting experience and professional growth
              opportunities.
            </p>
            <a href="/about-us">
            <Button>Learn More About TCG</Button>
            </a>
          </div>
          <img
            className="about-image"
            src = "/About_Us_Home_Page.jpg"
            alt="About Us Image"
          ></img>
        </div>
      </section>

      {/* COMMUNITY EVENTS SECTION */}
<section className="section community">
  <div className="community-container">

    {/* LEFT IMAGE */}
    <div className="community-image">
      <Image
        src="/Community_Events_Home_Page.jpg"
        alt="Community Events"
        fill
        sizes="(max-width: 1280px) 100vw, 600px"
        style={{ objectFit: "cover" }}
      />
    </div>

    {/* RIGHT TEXT */}
    <div className="community-text">
      <h2>Community Events</h2>
      <p>
        We build community by working and thriving together. Engaging with
        our community through dynamic events that foster collaboration,
        growth, and shared success.
      </p>
      <a href="/community-events">
      <Button variant="outline">View All Events</Button>
      </a>
    </div>

  </div>
</section>

      {/* FEATURED PROJECTS SECTION */}
      <section className="section featured">
  <h2>Featured Projects</h2>
  <div className="card-container">

    <div className={styles.imageCard}>
      <Image 
        src="/cari_health.png"
        alt="Project 1"
        width = {300}
        height = {300}
        style={{ objectFit: "contain" }}
      />
    </div>

    <div className={styles.imageCard}>
      <Image 
        src="/tag.png"
        alt="Project 2"
        width = {300}
        height = {300}
        style={{ objectFit: "contain" }}
      />
    </div>

    <div className={styles.imageCard}>
      <Image 
        src="/vektor.png"
        alt="Project 3"
        width = {300}
        height = {300}
        style={{ objectFit: "contain" }}
      />
    </div>

    <div className={styles.imageCard}>
      <Image 
        src="/md_rev.png"
        alt="Project 4"
        width = {300}
        height = {300}
        style={{ objectFit: "contain" }}
      />
    </div>

  </div>
    <a href="/portfolio">
  <Button>Explore Our Portfolio →</Button>
  </a>
</section>


{/* TEAM SECTION */}
<section className="section team">
  <h2>Meet the Team</h2>
  <p>
    Meet the dedicated team behind Triton Consulting Group, where
    collaboration, innovation, and expertise drive impactful solutions for
    our clients and community.
  </p>
    <a href="/meet-the-team">
  <Button>The Team →</Button>
  </a>

  {/* CLICKABLE IMAGE */}
  <Link href="/meet-the-team" className={styles.teamHoverCard}>
    <Image
      src="/community-header.png" 
      alt="Meet the Associates"
      fill
      sizes="(max-width: 1280px) 100vw, 1200px"
      style={{ objectFit: "cover" }}
    />

    <div className={styles.teamHoverOverlay}>
      <span>Meet the Associates →</span>
    </div>
  </Link>
</section>
    </main>
  );
}
