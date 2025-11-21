import styles from "./careers.module.css";
import Image from "next/image";

export default function CareersPage() {
	return (
		<div className={styles.container}>
			<div className={styles.hero}>
				<Image
					src="/Geisel_close.png"
					alt="Careers Header"
					fill
					sizes="(max-width: 1280px) 100vw, 1280px"
					style={{ objectFit: "cover" }}
					priority
				/>
				<div className={styles.heroOverlay} />
				<h1>Careers</h1>
				<p>Discover how Triton Consulting Group alumni excel in their careers and internships.</p>
			</div>

			<section className={styles.sectionHeader}>
				<h2>Full Time Positions 2024</h2>
				<p>Discover the full-time positions our TCG members and alumni have secured</p>
			</section>

			<section className={styles.cardsSection}>
				<div className={styles.cardsGrid}>
					<div className={styles.card}>
						<div className={styles.cardImage} />
					</div>
					<div className={styles.card}>
						<div className={styles.cardImage} />
					</div>
					<div className={styles.card}>
						<div className={styles.cardImage} />
					</div>
				</div>
			</section>

			<section className={styles.sectionHeader}>
				<h2>Internships 2024</h2>
				<p>Meet our TCG members and alumni who have secured impactful internships</p>
			</section>

			<section className={styles.cardsSection}>
				<div className={styles.cardsGrid}>
					<div className={styles.card}>
						<div className={styles.cardImage} />
					</div>
					<div className={styles.card}>
						<div className={styles.cardImage} />
					</div>
					<div className={styles.card}>
						<div className={styles.cardImage} />
					</div>
				</div>
			</section>
            <section className={styles.sectionHeader}>
				<h2>Our Members Impact</h2>
				<p>Our alumni are currently thriving in a wide array of companies, and continue to expand their personal growth create impact across industries</p>
			</section>

			{/* Logo carousel (smaller cards, auto-scroll, and they pause when you hover) */}
			<div className={styles.logoCarousel} aria-label="Companies our members have impacted">
				<div className={styles.logoTrack}>
					{/* First set */}
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>

					{/* Duplicate for seamless loop */}
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>
					<div className={styles.logoCard}><div className={styles.logoMark} /></div>
				</div>
			</div>
		</div>
	);
}

