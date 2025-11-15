import React from "react";
import { Button } from "../components/button";

export default function TeamPage() {
  return (
    <main>

      {/* ================= HERO SECTION ================= */}
      <section
        className="team-hero"
        style={{
          backgroundImage: "url('/images/team-hero.jpg')",
        }}
      >
        <div className="team-hero-overlay">
          <h1>Meet The Team</h1>
          <p>
            Meet the dedicated and dynamic team behind Triton Consulting Group.
          </p>
        </div>
      </section>

      {/* ================= TEAM INTRO SECTION ================= */}
      <section className="section team-intro">
        <div className="team-intro-left">
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
      </section>

      {/* ================= EXECUTIVE BOARD SECTION ================= */}
      <section className="section team-grid">
        <h2 className="team-section-title">Executive Board</h2>
        <div className="team-photo-grid">
          {/* MEMBER CARD */}
          <div className="member-card">
            <div className="member-photo placeholder" />
            <h3>First Last</h3>
            <p>Position Title</p>
          </div>

          <div className="member-card">
            <div className="member-photo placeholder" />
            <h3>First Last</h3>
            <p>Position Title</p>
          </div>

          <div className="member-card">
            <div className="member-photo placeholder" />
            <h3>First Last</h3>
            <p>Position Title</p>
          </div>

          <div className="member-card">
            <div className="member-photo placeholder" />
            <h3>First Last</h3>
            <p>Position Title</p>
          </div>
        </div>

        {/* ================= ASSOCIATES SECTION ================= */}
        <h2 className="team-section-title">Associates</h2>
        <div className="team-photo-grid">
          {/* Duplicate this block for all associates */}
          <div className="member-card">
            <div className="member-photo placeholder" />
            <h3>Associate Name</h3>
            <p>Associate</p>
          </div>

          <div className="member-card">
            <div className="member-photo placeholder" />
            <h3>Associate Name</h3>
            <p>Associate</p>
          </div>

          <div className="member-card">
            <div className="member-photo placeholder" />
            <h3>Associate Name</h3>
            <p>Associate</p>
          </div>

          <div className="member-card">
            <div className="member-photo placeholder" />
            <h3>Associate Name</h3>
            <p>Associate</p>
          </div>
        </div>
      </section>

    </main>
  );

  
}