'use client';

import styles from "./services.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ServicesPage() {
  const [activeTimeline, setActiveTimeline] = useState<number | null>(null);

  const handleTimelineClick = (index: number) => {
    setActiveTimeline(activeTimeline === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Our Services</h1>
        <p>
          TCG Consulting provides strategic planning, growth, analysis, and
          implementation support to help organizations succeed.
        </p>
      </div>

      {/* Inserted: horizontal project process timeline */}
      <section className={styles.processSection} aria-labelledby="process-title">
        <h2 id="process-title">The Project Process</h2>

        <div className={styles.timeline} role="list" aria-label="Project process timeline">
          <ol className={styles.timelineList}>
            <li className={styles.timelineItem} role="listitem">
              <div className={styles.timelineCircle} aria-hidden="true" />
              <div className={styles.timelineLabel}>
                <strong>First Client Interaction</strong>
                <div className={styles.timelineDesc}>
                  Identify client's needs and establish clear communication channel by developing a Statement of Work
                </div>
              </div>
            </li>

            <li className={styles.timelineItem} role="listitem">
              <div className={styles.timelineCircle} aria-hidden="true" />
              <div className={styles.timelineLabel}>
                <strong>Plan</strong>
                <div className={styles.timelineDesc}>
                  Define micro and macro goals and integrate into project timeline
                </div>
              </div>
            </li>

            <li className={styles.timelineItem} role="listitem">
              <div className={styles.timelineCircle} aria-hidden="true" />
              <div className={styles.timelineLabel}>
                <strong>Research & Analysis</strong>
                <div className={styles.timelineDesc}>
                  Develop findings based on data driven analysis and research
                </div>
              </div>
            </li>

            <li className={styles.timelineItem} role="listitem">
              <div className={styles.timelineCircle} aria-hidden="true" />
              <div className={styles.timelineLabel}>
                <strong>Delivery</strong>
                <div className={styles.timelineDesc}>
                  Present findings, give deliverables, and conclude engagement
                </div>
              </div>
            </li>
          </ol>
        </div>
        
        <p className={styles.processDescription}>
          Each project team is led by a Project Manager and overseen by the VP of Consulting, with associates who complete a 10-week workshop before developing deliverables in close collaboration with clients.
        </p>
      </section>
      {/* end timeline */}

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>What We Do</h2>

        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h3>Operations and Strategy</h3>
            <div className={styles.serviceImage}>
              <Image 
                src="/operations-strategy.jpg" 
                alt="Operations and Strategy" 
                width={300} 
                height={100} 
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
            <p>
              Operational planning, corporate strategy, organizational
              optimization, and process improvement support.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>Strategic Analysis</span>
              <span className={styles.tag}>Growth Optimization</span>
              <span className={styles.tag}>Org Development</span>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <h3>Technology</h3>
            <div className={styles.serviceImage}>
              <Image 
                src="/technology.jpg" 
                alt="Technology" 
                width={300} 
                height={100} 
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
            <p>
              Data analytics, software development, emerging tech, and systems
              integration solutions.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>Data Analytics</span>
              <span className={styles.tag}>Machine Learning</span>
              <span className={styles.tag}>Website Development</span>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <h3>Financial Advisory</h3>
            <div className={styles.serviceImage}>
              <Image 
                src="/financial-advisory.jpg" 
                alt="Financial Advisory" 
                width={300} 
                height={100} 
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
            <p>
              Financial modeling, budget forecasting, reporting, and strategic
              financial planning.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>Budget Forecasting</span>
              <span className={styles.tag}>Audit & Advisory</span>
              <span className={styles.tag}>Financial Modeling</span>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <h3>Market Research</h3>
            <div className={styles.serviceImage}>
              <Image 
                src="/market-research.jpg" 
                alt="Market Research" 
                width={300} 
                height={100} 
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
            <p>
              Industry research, competitor analysis, and insights that support
              client decision-making.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>Market Sizing</span>
              <span className={styles.tag}>Industry Analysis</span>
              <span className={styles.tag}>Competitor Analysis</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
