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
				<div className={styles.cardWrapper}>
					<div className={styles.card}>
						<div className={styles.cardImage}>
							<Image src="/alise-fulltime.png" alt="Alise - Full Time Position" fill sizes="280px" style={{ objectFit: "cover" }} />
						</div>
					</div>
					<div className={styles.cardInfo}>
						<h3 className={styles.cardName}>Alise Bruevich</h3>
						<div className={styles.infoBubbles}>
							<span className={styles.bubble}>Data Engineer</span>
							<span className={styles.bubble}>Meta</span>
						</div>
					</div>
				</div>
				<div className={styles.cardWrapper}>
					<div className={styles.card}>
						<div className={styles.cardImage}>
							<Image src="/roberto-fulltime.png" alt="Roberto - Full Time Position" fill sizes="280px" style={{ objectFit: "cover" }} />
						</div>
					</div>
					<div className={styles.cardInfo}>
						<h3 className={styles.cardName}>Roberto Valles Cué</h3>
						<div className={styles.infoBubbles}>
							<span className={styles.bubble}>Data Analyst</span>
							<span className={styles.bubble}>J.P Morgan Chase</span>
						</div>
					</div>
				</div>
				<div className={styles.cardWrapper}>
					<div className={styles.card}>
						<div className={styles.cardImage}>
							<Image src="/yash-fulltime.png" alt="Yash - Full Time Position" fill sizes="280px" style={{ objectFit: "cover" }} />
						</div>
					</div>
					<div className={styles.cardInfo}>
						<h3 className={styles.cardName}>Yash Potdar</h3>
						<div className={styles.infoBubbles}>
							<span className={styles.bubble}>Software Engineer</span>
							<span className={styles.bubble}>Rivian</span>
						</div>
					</div>
				</div>
				</div>
			</section>

			<section className={styles.sectionHeader}>
				<h2>Internships 2024</h2>
				<p>Meet our TCG members and alumni who have secured impactful internships</p>
			</section>

			<section className={styles.cardsSection}>
			<div className={styles.cardsGrid}>
				<div className={styles.cardWrapper}>
					<div className={styles.card}>
						<div className={styles.cardImage}>
							<Image src="/kelly-intern.png" alt="Kelly - Internship" fill sizes="280px" style={{ objectFit: "cover" }} />
						</div>
					</div>
					<div className={styles.cardInfo}>
						<h3 className={styles.cardName}>Kelly Yu</h3>
						<div className={styles.infoBubbles}>
							<span className={styles.bubble}>Business Intelligence Engineer Intern</span>
							<span className={styles.bubble}>Roku</span>
						</div>
					</div>
				</div>
				<div className={styles.cardWrapper}>
					<div className={styles.card}>
						<div className={styles.cardImage}>
							<Image src="/kimberly-intern.png" alt="Kimberly - Internship" fill sizes="280px" style={{ objectFit: "cover" }} />
						</div>
					</div>
					<div className={styles.cardInfo}>
						<h3 className={styles.cardName}>Kimberly Luga</h3>
						<div className={styles.infoBubbles}>
							<span className={styles.bubble}>Supply Chain Management Analyst</span>
							<span className={styles.bubble}>Boeing</span>
						</div>
					</div>
				</div>
				<div className={styles.cardWrapper}>
					<div className={styles.card}>
						<div className={styles.cardImage}>
							<Image src="/winston-intern.png" alt="Winston - Internship" fill sizes="280px" style={{ objectFit: "cover" }} />
						</div>
					</div>
					<div className={styles.cardInfo}>
						<h3 className={styles.cardName}>Winston Fan</h3>
						<div className={styles.infoBubbles}>
							<span className={styles.bubble}>Operations Manager Intern</span>
							<span className={styles.bubble}>Amazon</span>
						</div>
					</div>
				</div>
				</div>
			</section>
            <section className={styles.sectionHeader}>
				<h2>Our Members Impact</h2>
				<p>Our alumni are currently thriving in a wide array of companies, and continue to expand their personal growth create impact across industries</p>
			</section>

			{/* Logo carousel (smaller cards, auto-scroll, and they pause when you hover) */}
			{(() => {
				const impactLogos = [
					{ src: '/googlefix-logo.png', alt: 'Google' },
					{ src: '/amazon-logo.jpg', alt: 'Amazon' },
					{ src: '/tesla-logo.png', alt: 'Tesla' },
					{ src: '/capitalone-logo.png', alt: 'Capital One' },
					{ src: '/goldman-logo.png', alt: 'Goldman Sachs' },
					{ src: '/salesforce-logo.png', alt: 'Salesforce' },
					{ src: '/deloitte.png', alt: 'Deloitte' },
					{ src: '/bain&company.png', alt: 'Bain & Company' },
					{ src: '/bainbridge.png', alt: 'Bainbridge' },
					{ src: '/kaiserfix.png', alt: 'Kaiser' },
					{ src: '/gofundme-logo.png', alt: 'GoFundMe' },
					{ src: '/imb-logo.png', alt: 'IMB' }
				];
				const loop = impactLogos.concat(impactLogos); // duplicate for seamless scroll
				return (
					<div className={styles.logoCarousel} aria-label="Companies our members have impacted">
						<div className={styles.logoTrack}>
							{loop.map((logo, i) => {
								const isGoogle = logo.alt === 'Google';
								return (
									<div className={styles.logoCard} key={i}>
										<Image
											src={logo.src}
											alt={logo.alt}
											width={isGoogle ? 48 : 56}
											height={isGoogle ? 48 : 56}
											style={{ objectFit: 'contain' }}
											priority={i === 0}
										/>
									</div>
								);
							})}
						</div>
					</div>
				);
			})()}
		</div>
	);
}

