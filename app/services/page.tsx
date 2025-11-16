import styles from "./services.module.css";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Our Services</h1>
        <p>
          TCG Consulting provides strategic planning, growth, analysis, and
          implementation support to help organizations succeed.
        </p>
      </div>

      <div className={styles.ctaCard}>
        <h2>Work With Us</h2>
        <p>We partner with organizations to deliver measurable impact.</p>
        <Link href="/contact" className={styles.ctaButton}>
          Contact Us →
        </Link>
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
                  Identify needs and develop a Statement of Work.
                </div>
              </div>
            </li>

            <li className={styles.timelineItem} role="listitem">
              <div className={styles.timelineCircle} aria-hidden="true" />
              <div className={styles.timelineLabel}>
                <strong>Plan</strong>
                <div className={styles.timelineDesc}>
                  Define goals, project timeline and milestones.
                </div>
              </div>
            </li>

            <li className={styles.timelineItem} role="listitem">
              <div className={styles.timelineCircle} aria-hidden="true" />
              <div className={styles.timelineLabel}>
                <strong>Research & Analysis</strong>
                <div className={styles.timelineDesc}>
                  Data-driven research and insights generation.
                </div>
              </div>
            </li>

            <li className={styles.timelineItem} role="listitem">
              <div className={styles.timelineCircle} aria-hidden="true" />
              <div className={styles.timelineLabel}>
                <strong>Delivery</strong>
                <div className={styles.timelineDesc}>
                  Present findings, hand off deliverables, and close engagement.
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>
      {/* end timeline */}

      <section className={styles.servicesSection}>
        <h2>What We Do</h2>

        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h3>Operations and Strategy</h3>
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
            <h3>Market Research</h3>
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

          <div className={styles.serviceCard}>
            <h3>Technology</h3>
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
        </div>
      </section>
    </div>
  );
}
