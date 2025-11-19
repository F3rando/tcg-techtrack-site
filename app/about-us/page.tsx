import React from "react";
import { Button } from ".././components/button";

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-about-us">
        <h1 className = "white-text-bold"><strong>About Us</strong></h1>
          <div className="white-text"><p>We’re UC San Diego’s premier student consulting group, 
            providing services to companies in all stages of business development.</p></div>
        <div>
          <Button>Learn More About TCG</Button>
          <Button variant="outline">Work With Us</Button>
        </div>
      </section>
      {/* OUR MISSION SECTION */}
      <section className="section about">
        <div className="about-container">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Our core focus is on providing our clients with exceptional consulting services of the highest caliber. 
              Alongside this, we are dedicated to affording our members the appropriate channels for their professional 
              and personal growth 
            </p>
          </div>
          <img
            className="about-image"
            src = "/About_Us_Home_Page.jpg"
            alt="About Us Image"
          ></img>
        </div>
      </section>

      {/* MEET OUR ASSOCIATES */}
<section className="section associates-section">

  {/* LEFT TITLE + RIGHT TEXT */}
  <div className="associates-top">
    <h2 className="associates-title">Meet Our Associates<br />Through the Years</h2>

    <div className="associates-right">
      <p>
        All our incoming members are put through a rigorous analyst training program 
        to receive training in traditional management consulting.
      </p>
      <Button>Learn More</Button>
    </div>
  </div>

  {/* BIG IMAGE */}
  <div className="associates-image-wrapper">
    <img
      src="/Community_Events_Home_Page.jpg"
      className="associates-image"
      alt="Associates group photo"
    />
  </div>

  {/* CAPTION BELOW */}
  <p className="associates-caption">
    Instead of flipping through pictures the user can hover over the image and once 
    clicked it will take them to meet the associates.
  </p>

</section>

      {/* WORKED ALONGSIDE */}
<section className="section featured">
  <p>Worked Alongside...</p>

  <div className="card-container centered">

    <div className="image-card">
      <img
        src="/deloitte.png"
        alt="Deloitte Logo"
        className="placeholder"
      />
    </div>

    <div className="image-card">
      <img
        src="/bain&company.png"
        alt="Bain & Company Logo"
        className="placeholder"
      />
    </div>

    <div className="image-card">
      <img
        src="/bainbridge.png"
        alt="Bainbridge Logo"
        className="placeholder"
      />
    </div>

  </div>
</section>
    </main>
  );
}
