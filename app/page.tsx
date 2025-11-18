import React from "react";
import { Button } from "./components/button";

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <h1 className = "white-text-bold"><strong>Unlocking the Next Era of Business</strong></h1>
          <div className="white-text"><p>Empowering tomorrow’s leaders with strategic insight and innovative
          solutions.</p></div>
        <div>
          <Button>Learn More About TCG</Button>
          <Button variant="outline">Work With Us</Button>
        </div>
      </section>

      {/* OFFERINGS SECTION */}
      <section className="section offerings">
        <h2>Offerings</h2> 
        <div className = 'button-align-right'>
          <Button>Our Services</Button>
        </div>
        <div className="card-container">

        <div className="card-wrapper">
        <h3 className="card-title">Title Here</h3>
        <div className="image-card">
        <div className="placeholder" />
        </div>
        <p className="card-description">
          This is a small descriptive paragraph about the card.
        </p>
       </div>

        <div className="card-wrapper">
          <h3 className="card-title">Title Here</h3>
          <div className="image-card">
            <div className="placeholder" />
          </div>
          <p className="card-description">
            This is a small descriptive paragraph about the card.
          </p>
        </div>

  <div className="card-wrapper">
    <h3 className="card-title">Title Here</h3>
    <div className="image-card">
      <div className="placeholder" />
    </div>
    <p className="card-description">
      This is a small descriptive paragraph about the card.
    </p>
  </div>

  <div className="card-wrapper">
    <h3 className="card-title">Title Here</h3>
    <div className="image-card">
      <div className="placeholder" />
    </div>
    <p className="card-description">
      This is a small descriptive paragraph about the card.
    </p>
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
            <Button>Learn More About TCG</Button>
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
          <div className="placeholder community-image" />
          <div className="community-text">
            <h2>Community Events</h2>
            <p>
              We build community by working and thriving together. Engaging with
              our community through dynamic events that foster collaboration,
              growth, and shared success.
            </p>
            <Button variant="outline">View All Events</Button>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section className="section featured">
  <p>Featured Projects</p>
  <div className="card-container">
    <div className="image-card">
      <div className="placeholder" />
    </div>

    <div className="image-card">
      <div className="placeholder" />
    </div>

    <div className="image-card">
      <div className="placeholder" />
    </div>

    <div className="image-card">
      <div className="placeholder" />
    </div>
  </div>

  <Button>Explore Our Portfolio →</Button>
</section>


      {/* TEAM SECTION */}
      <section className="section team">
        <h2>Meet the Team</h2>
        <p>
          Meet the dedicated team behind Triton Consulting Group, where
          collaboration, innovation, and expertise drive impactful solutions for
          our clients and community.
        </p>
        <Button>The Team →</Button>
        <div className="placeholder team-image" />
      </section>
    </main>
  );
}
