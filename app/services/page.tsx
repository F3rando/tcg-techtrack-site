'use client';

import styles from "./services.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ServicesPage() {
  const [activeTimeline, setActiveTimeline] = useState<number | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const handleTimelineClick = (index: number) => {
    setActiveTimeline(activeTimeline === index ? null : index);
  };

  const toggleService = (serviceName: string) => {
    setExpandedService(expandedService === serviceName ? null : serviceName);
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
        <h2 className={styles.sectionTitle}>Our Services</h2>

        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 45L25 50L30 55M50 35L40 65M70 45L75 50L70 55" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="20" y="25" width="25" height="15" rx="2" fill="#ffffff" opacity="0.3"/>
                <rect x="55" y="60" width="25" height="15" rx="2" fill="#ffffff" opacity="0.3"/>
                <path d="M35 50C35 45 40 40 45 40L55 40C60 40 65 45 65 50C65 55 60 60 55 60L45 60C40 60 35 55 35 50Z" stroke="#ffffff" strokeWidth="2.5"/>
              </svg>
            </div>
            <div className={styles.serviceContent}>
              <h3>Operations & Strategy</h3>
              <p>
                Our aim is to prepare and grow the organization's presence and image in the marketplace. In order to propel the organization into the future, this service line focuses on product development and management, market sizing, competitive analysis, and a more holistic approach to organizational growth.
              </p>
              <div className={styles.tags}>
                <span className={styles.tag}>Optimization</span>
                <span className={styles.tag}>Automation & Analysis</span>
                <span className={styles.tag}>New Software Integration</span>
                <span className={styles.tag}>Supply Chain Operations</span>
              </div>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="35" stroke="#ffffff" strokeWidth="2.5"/>
                <path d="M50 50L50 20" stroke="#ffffff" strokeWidth="2.5"/>
                <path d="M50 50L70 65" stroke="#ffffff" strokeWidth="2.5"/>
                <path d="M50 50L25 55" stroke="#ffffff" strokeWidth="2.5"/>
                <path d="M50 50 L 70 65 A 35 35 0 0 0 50 20 Z" fill="#ffffff" opacity="0.4"/>
                <path d="M50 50 L 25 55 A 35 35 0 0 0 50 20 Z" fill="#ffffff" opacity="0.2"/>
              </svg>
            </div>
            <div className={styles.serviceContent}>
              <h3>Financial Advisory</h3>
              <p>
                We target the finance business unit within organizations to effectively manage, schedule, and budget organizational capital. These solutions are derived from integrating financial and managerial accounting, corporate finance, and financial modeling into our approach.
              </p>
              <div className={styles.tags}>
                <span className={styles.tag}>Financial Modeling</span>
                <span className={styles.tag}>Industry Analysis</span>
                <span className={styles.tag}>Budget Forecasting</span>
                <span className={styles.tag}>Audit & Advisory</span>
              </div>
            </div>
          </div>

          <div className={styles.serviceCard} onClick={() => toggleService('technology')} style={{ cursor: 'pointer' }}>
            <div className={styles.serviceIcon}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="30" y="35" width="40" height="50" rx="3" stroke="#ffffff" strokeWidth="2.5"/>
                <rect x="35" y="40" width="30" height="35" rx="1" fill="#ffffff" opacity="0.2"/>
                <circle cx="50" cy="80" r="3" fill="#ffffff"/>
                <line x1="40" y1="25" x2="40" y2="35" stroke="#ffffff" strokeWidth="2"/>
                <line x1="60" y1="25" x2="60" y2="35" stroke="#ffffff" strokeWidth="2"/>
                <line x1="35" y1="30" x2="65" y2="30" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className={styles.serviceContent}>
              <h3>Technology</h3>
              <p>
                Through implementing technology-focused solutions, we are able to integrate both business knowledge and technical skill. Success within this service line can be seen through business intelligence strategies, adaptable IT infrastructure capabilities, and data analytics.
              </p>
              <div className={styles.tags}>
                <span className={styles.tag}>Business Analytics</span>
                <span className={styles.tag}>Data Mining & Visualization</span>
                <span className={styles.tag}>Business Intelligence</span>
                <span className={styles.tag}>Tech/Software Startup Advisory Services</span>
              </div>
              <div className={styles.learnMore}>
                {expandedService === 'technology' ? '▲ Click to collapse' : '▼ Click to learn more'}
              </div>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="15" width="60" height="70" rx="2" stroke="#ffffff" strokeWidth="2.5"/>
                <path d="M30 70L40 50L50 60L60 40L70 55" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <circle cx="40" cy="50" r="3" fill="#ffffff"/>
                <circle cx="50" cy="60" r="3" fill="#ffffff"/>
                <circle cx="60" cy="40" r="3" fill="#ffffff"/>
                <circle cx="70" cy="55" r="3" fill="#ffffff"/>
                <circle cx="65" cy="30" r="8" stroke="#ffffff" strokeWidth="2" fill="none"/>
                <circle cx="65" cy="30" r="4" fill="#ffffff" opacity="0.3"/>
              </svg>
            </div>
            <div className={styles.serviceContent}>
              <h3>Market Research</h3>
              <p>
                By performing in-depth competitive analysis, market sizing, and market analysis we are better able to guide future business strategy and highlight opportunities for our clients. Clients utilizing this service line will be provided with a wealth of information from which future decision can be made.
              </p>
              <div className={styles.tags}>
                <span className={styles.tag}>Primary & Secondary Research</span>
                <span className={styles.tag}>Competitive Analysis</span>
                <span className={styles.tag}>Market Sizing</span>
                <span className={styles.tag}>In-depth Market Analysis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Expanded Technology Details - Outside the grid */}
        {expandedService === 'technology' && (
          <div className={styles.expandedSection}>
            <div className={styles.subServiceGrid}>
              <div className={styles.subService}>
                <h4>Data Analytics</h4>
                <div className={styles.subServiceImage}>
                  <Image 
                    src="/data-analytics.jpg" 
                    alt="Data Analytics" 
                    width={300} 
                    height={150} 
                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
                <p>
                  TCG can analyze internal business data to provide relevant insights and strategic recommendations, thereby enabling businesses to make informed decisions.
                </p>
              </div>

              <div className={styles.subService}>
                <h4>Data Mining</h4>
                <div className={styles.subServiceImage}>
                  <Image 
                    src="/data-mining.jpg" 
                    alt="Data Mining" 
                    width={300} 
                    height={150} 
                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
                <p>
                  TCG can extract information from large, raw datasets using advanced data mining techniques to discover patterns and make meaningful predictions that can be leveraged to drive business growth and success.
                </p>
              </div>

              <div className={styles.subService}>
                <h4>Website Development</h4>
                <div className={styles.subServiceImage}>
                  <Image 
                    src="/website-development.jpg" 
                    alt="Website Development" 
                    width={300} 
                    height={150} 
                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
                <p>
                  TCG can employ machine learning algorithms to make accurate predictions which can provide businesses with a competitive edge by informing important business decisions.
                </p>
              </div>

              <div className={styles.subService}>
                <h4>Machine Learning</h4>
                <div className={styles.subServiceImage}>
                  <Image 
                    src="/machine-learning.jpg" 
                    alt="Machine Learning" 
                    width={300} 
                    height={150} 
                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
                <p>
                  TCG can design and build custom websites that can extend reach and provide a seamless user experience. By incorporating cutting-edge web development practices, the organization can create websites that are optimized for success in the digital age.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
