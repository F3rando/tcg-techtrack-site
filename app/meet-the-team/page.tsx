"use client";

import React, { useState } from "react";
import styles from "./meet-the-team.module.css";

export default function TeamPage() {
  const [active, setActive] = useState<'executive' | 'associates'>('executive');

  return (
    <main>
      <div className={styles.container}>

        {/* ================= HERO SECTION ================= */}
        <section
          className={styles.teamHero}
          style={{
            backgroundImage: "url('/images/team-hero.jpg')",
          }}
        >
          <div className={styles.teamHeroOverlay}>
            <h1>Meet The Team</h1>
            <p>
              Meet the dedicated and dynamic team behind Triton Consulting Group.
            </p>
            {/* buttons moved below the intro section */}
          </div>
        </section>

      </div>

      

      {/* ================= TEAM INTRO SECTION ================= */}
      <section className={`${styles.section}`}>
        <div className={styles.teamIntroLeft}>
          <h2>Meet the Triton Consulting Group Team</h2>
          <p>
            At Triton Consulting Group, a diverse team of driven students from
            35 disciplines undergoes rigorous training in consulting frameworks
            to deliver top-tier services in operations, strategy, financial
            advisory, technology, and market research. With over 100 successful
            client engagements, we are committed to delivering unparalleled
            value and upholding a legacy of excellence and innovation.
          </p>
        </div>
        <div className={styles.sectionButtons}>
          <button
            className={`${styles.navButton} ${active === 'executive' ? styles.active : ''}`}
            onClick={() => setActive('executive')}
          >
            Executive Board
          </button>

          <button
            className={`${styles.navButton} ${active === 'associates' ? styles.active : ''}`}
            onClick={() => setActive('associates')}
          >
            Associates
          </button>
        </div>
      </section>

      {/* ================= EXECUTIVE BOARD SECTION ================= */}
      {active === 'executive' && (
        <section className={`${styles.section} ${styles.teamGrid}`}>
          <h2 id="executive-board" className={styles.teamSectionTitle}>Executive Board</h2>
          <div className={styles.teamPhotoGrid}>
            {/* MEMBER CARD */}
            <div className={styles.memberCard}>
              <div className={`${styles.memberPhoto} ${styles.placeholder}`} />
              <h3>First Last</h3>
              <p>Position Title</p>
            </div>

            <div className={styles.memberCard}>
              <div className={`${styles.memberPhoto} ${styles.placeholder}`} />
              <h3>First Last</h3>
              <p>Position Title</p>
            </div>

            <div className={styles.memberCard}>
              <div className={`${styles.memberPhoto} ${styles.placeholder}`} />
              <h3>First Last</h3>
              <p>Position Title</p>
            </div>

            <div className={styles.memberCard}>
              <div className={`${styles.memberPhoto} ${styles.placeholder}`} />
              <h3>First Last</h3>
              <p>Position Title</p>
            </div>
          </div>
        </section>
      )}

      {/* ================= ASSOCIATES SECTION ================= */}
      {active === 'associates' && (
        <section className={`${styles.section} ${styles.teamGrid}`}>
          <h2 id="associates" className={styles.teamSectionTitle}>Associates</h2>
          <div className={styles.groupGrid}>
            {/* Group photo cards for associates with caption text underneath */}
            <div className={styles.groupCard}>
              <div className={styles.groupPhoto} style={{backgroundImage: "url('/images/associates-group-1.jpg')"}} />
              <div className={styles.groupCaption}>
                <h3>Group Name / Batch</h3>
                <p>Short description or list of members can go here.</p>
              </div>
            </div>

            <div className={styles.groupCard}>
              <div className={styles.groupPhoto} style={{backgroundImage: "url('/images/associates-group-2.jpg')"}} />
              <div className={styles.groupCaption}>
                <h3>Group Name / Batch</h3>
                <p>Short description or list of members can go here.</p>
              </div>
            </div>

            <div className={styles.groupCard}>
              <div className={styles.groupPhoto} style={{backgroundImage: "url('/images/associates-group-3.jpg')"}} />
              <div className={styles.groupCaption}>
                <h3>Group Name / Batch</h3>
                <p>Short description or list of members can go here.</p>
              </div>
            </div>
          </div>
        </section>
      )}

    </main>
  );
}