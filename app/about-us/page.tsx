import React from "react";
import { Button } from ".././components/button";
import styles from "./about_us.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <div className={styles.container}>
      <section className={styles.hero}>
  <Image
    src="/Geisel_close.png"
    alt="Home Page Hero"
    fill
    sizes="(max-width: 1280px) 100vw, 1280px"
    style={{ objectFit: "cover" }}
    priority
  />
  
  <div className={styles.heroOverlay} />

  <div className={styles.heroContent}>
    <h1>About Us</h1>
    <p>
      We’re UC San Diego’s premier student consulting group, 
      providing services to companies in all stages of business development.
    </p>
  </div>
</section>
</div>

      {/* WORKED ALONGSIDE */}
<section className="section featured">
  <p>Worked Alongside...</p>

  <div className="card-container centered">

    <div className="image-card">
      <img
        src="/deloitte.png"
        alt="Deloitte Logo"
        className="placeholder"
      />
    </div>

    <div className="image-card">
      <img
        src="/bain&company.png"
        alt="Bain & Company Logo"
        className="placeholder"
      />
    </div>

    <div className="image-card">
      <img
        src="/bainbridge.png"
        alt="Bainbridge Logo"
        className="placeholder"
      />
    </div>

  </div>
</section>
    </main>
  );
}
