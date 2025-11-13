import React from "react";
import { Button } from "./components/button";

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Unlocking the Next Era of Business</h1>
        <p>
          Empowering tomorrow’s leaders with strategic insight and innovative
          solutions.
        </p>
        <div>
          <Button>Learn More About TCG</Button>
          <Button variant="outline">Work With Us</Button>
        </div>
      </section>

      {/* OFFERINGS SECTION */}
      <section className="section offerings">
        <h2>Offerings</h2>
        <div className="card-container">
          <div className="card">
            <div className="placeholder" />
            <h3>Operations & Strategy</h3>
            <p>
              Prepare and grow the organization’s presence and image in the
              marketplace.
            </p>
          </div>

          <div className="card">
            <div className="placeholder" />
            <h3>Financial Advisory</h3>
            <p>
              Target the finance business unit to effectively manage, schedule,
              and budget organizational capital.
            </p>
          </div>

          <div className="card">
            <div className="placeholder" />
            <h3>Technology</h3>
            <p>
              Implement solutions to integrate both business knowledge and
              technical skill.
            </p>
          </div>

          <div className="card">
            <div className="placeholder" />
            <h3>Market Research</h3>
            <p>
              Perform in-depth competitive analysis, market sizing, and market
              analysis to guide strategy.
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
          <div className="placeholder about-image" />
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
