import styles from './recruitment.module.css';
import Link from 'next/link';
// InstagramFeed is a client component used previously; to ensure thumbnails
// are visible immediately we render server-side placeholders here.

export const metadata = {
  title: 'Recruitment - TCG',
};

export default function RecruitmentPage() {
  // create initial placeholder images server-side so the client can render immediately
  const handle = 'tcgatucsd';
  const profileUrl = `https://www.instagram.com/${encodeURIComponent(handle)}/?hl=en`;
  // Instagram examples removed — no initial images
  
  // const initialImages = Array.from({ length: 8 }).map((_, i) => ({
  //   id: `${handle}-img-${i}`,
  //   thumbnail: `https://via.placeholder.com/300x300?text=${encodeURIComponent(handle)}+${i+1}`,
  //   full: `https://via.placeholder.com/1200x1200?text=${encodeURIComponent(handle)}+${i+1}`,
  //   caption: `${handle} example image ${i + 1}`,
  //   link: profileUrl,
  // });

  return (
    <main>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay}>
            <h1>Recruitment</h1>
            <p>Unlock your potential and shape the future of consulting with Triton Consulting Group</p>
            <button className={styles.applyButton}>Apply Now</button>
          </div>
        </section>
      </div>

      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div
            className={styles.cardImage}
            style={{ backgroundImage: "url('https://via.placeholder.com/720x360?text=Group+Photo')" }}
            aria-hidden
          />

          <div>
            <h2>Become a Part of Triton Consulting Group</h2>
            <p className={styles.lead}>
              Elevate your career with us at Triton Consulting Group. Join us to tackle impactful
              projects, collaborate with top professionals, and access unparalleled growth
              opportunities. At TCG, you'll be part of a forward-thinking team dedicated to
              excellence. Explore this page to learn more about our recruitment process and join
              today!
            </p>
            <Link href="/about-us" className={styles.applyButton} style={{ marginTop: 18 }}>Learn More about TCG</Link>
    
          </div>
        </div>

        <div className={styles.twoCol} style={{ alignItems: 'start' }}>
          <div
            className={styles.cardImage}
            style={{ backgroundImage: "url('https://via.placeholder.com/560x360?text=Info+Night')" }}
            aria-hidden
          />

          <div>
            <h2>Recruitment Overview</h2>
            <p className={styles.lead}>
              We welcome students from all majors, no prior consulting experience required. Our
              recruitment process typically takes place during the Fall and Winter Quarters,
              around weeks 2 and 3. Interested students can attend our Info Night to meet active
              members, interact with the board, and learn more about TCG.
            </p>

            <p className={styles.lead}>
              Accepted members will join our Analyst Program, an onboarding curriculum designed to
              equip you with consulting fundamentals, professional skills, and case interview
              preparation.
            </p>
          </div>
        </div>

        
        {/* Placeholder examples for dress code: Business Professional / Business Casual */}
        <section className={styles.section}>
          <h2 className={styles.lead} style={{ fontSize: '1.5rem', color: '#111827' }}>Examples: Dress & Presentation</h2>

          <div className={styles.photoGrid}>
            <div className={styles.photoCard}>
              <img className={styles.photoImage} src="https://via.placeholder.com/400x300?text=Business+Professional+1" alt="Business Professional example 1" />
              <div className={styles.photoCaption}><strong>Business Professional</strong><div>Men and Women</div></div>
            </div>

            <div className={styles.photoCard}>
              <img className={styles.photoImage} src="https://via.placeholder.com/400x300?text=Business+Professional+2" alt="Business Professional example 2" />
              <div className={styles.photoCaption}><strong>Business Professional</strong><div>Alternate example</div></div>
            </div>

            <div className={styles.photoCard}>
              <img className={styles.photoImage} src="https://via.placeholder.com/400x300?text=Business+Casual" alt="Business Casual example" />
              <div className={styles.photoCaption}><strong>Business Casual</strong><div>Men and Women</div></div>
            </div>
          </div>
        </section>

        <div className={styles.timeline}>
          <h2>Recruitment Timeline</h2>
          <div className={styles.timelineBar} />

          <div className={styles.timelineGrid}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineNumber}>01.</div>
              <div className={styles.timelineTitle}>Info Night</div>
              <div className={styles.timelineDesc}>Learn about TCG and meet our team.</div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineNumber}>02.</div>
              <div className={styles.timelineTitle}>Case Study Night</div>
              <div className={styles.timelineDesc}>Participate in group interviews.</div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineNumber}>03.</div>
              <div className={styles.timelineTitle}>Coffee Chat</div>
              <div className={styles.timelineDesc}>Meet with associates through scheduled coffee chats.</div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineNumber}>04.</div>
              <div className={styles.timelineTitle}>Social Night</div>
              <div className={styles.timelineDesc}>Meet the associates in a casual setting.</div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineNumber}>05.</div>
              <div className={styles.timelineTitle}>Individual Interviews</div>
              <div className={styles.timelineDesc}>Invite only. Final step in the selection process.</div>
            </div>
          </div>
        </div>

        <div className={styles.instagramSection}>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 8 }}>
              <div className={styles.instaPlaceholder}>Instagram</div>
              {/* Instagram feed removed per request — example images disabled */}
            </div>
          </div>

          <div>
            <h3>Stay Updated: Follow Our Recruitment Process & Timeline on Instagram</h3>
            <p className={styles.lead}>
              Stay up-to-date with every step of our recruitment process by following us on
              Instagram! From application deadlines to key milestones and behind-the-scenes
              glimpses into our team culture, we’ll keep you informed and engaged every step of
              the way. Don’t miss out on important updates—follow us now to ensure you’re always
              in the loop!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
