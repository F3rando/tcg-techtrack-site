"use client";

import React, { useState } from "react";
import Image from 'next/image'
import styles from "./meet-the-team.module.css";

export default function TeamPage() {
  const [active, setActive] = useState<'executive' | 'associates'>('executive');

  return (
    <main>
      <div className={styles.container}>

        {/* ================= HERO SECTION ================= */}
        <section
          className={styles.teamHero}
          style={{
            backgroundImage: "url('/Fall24-pic.avif')",
          }}
        >
          <div className={styles.teamHeroOverlay}>
            <h1>Meet The Team</h1>
            <p>
              Meet the dedicated and dynamic team behind Triton Consulting Group.
            </p>
            {/* buttons moved below the intro section */}
          </div>
        </section>

      </div>

      

      {/* ================= TEAM INTRO SECTION ================= */}
      <section className={`${styles.section}`}>
        <div className={styles.teamIntroLeft}>
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
        <div className={styles.sectionButtons}>
          <button
            className={`${styles.navButton} ${active === 'executive' ? styles.active : ''}`}
            onClick={() => setActive('executive')}
          >
            Executive Board
          </button>

          <button
            className={`${styles.navButton} ${active === 'associates' ? styles.active : ''}`}
            onClick={() => setActive('associates')}
          >
            Associates
          </button>
        </div>
      </section>

     {/* ================= EXECUTIVE BOARD SECTION ================= */}
{active === 'executive' && (
  <section className={`${styles.section} ${styles.teamGrid}`}>
    <h2 id="executive-board" className={styles.teamSectionTitle}>Executive Board</h2>
    <div className={styles.teamPhotoGrid}>
      
      {/* MEMBER CARD */}
      <div className={styles.memberCard}>
        <div className={styles.memberPhoto}>
          <img
            src="/RiaS-pic.avif" 
            alt="Member One"
            className={styles.memberImage}
          />
        </div>
        <h3>Ria Singhania</h3>
        <p>President</p>
      </div>

      <div className={styles.memberCard}>
        <div className={styles.memberPhoto}>
          <img
            src="/EdmondH-pic.avif"
            alt="Member Two"
            className={styles.memberImage}
          />
        </div>
        <h3>Edmond Hong</h3>
        <p>Exec Vice President</p>
      </div>

      <div className={styles.memberCard}>
        <div className={styles.memberPhoto}>
          <img
            src="/VeynaK-pic.avif"
            alt="Member Two"
            className={styles.memberImage}
          />
        </div>
        <h3>Veyna Karanth</h3>
        <p>Exec Vice President</p>
      </div>

      <div className={styles.memberCard}>
        <div className={styles.memberPhoto}>
          <img
            src="/MirabelleH-pic.avif"
            alt="Member Two"
            className={styles.memberImage}
          />
        </div>
        <h3>Mirabelle Hwang</h3>
        <p>Vice President Internal Development</p>
      </div>

      <div className={styles.memberCard}>
        <div className={styles.memberPhoto}>
          <img
            src="/AditiP-pic.avif"
            alt="Member Two"
            className={styles.memberImage}
          />
        </div>
        <h3>Aditi Parthan</h3>
        <p>Vice President Internal Development</p>
      </div>

      <div className={styles.memberCard}>
        <div className={styles.memberPhoto}>
          <img
            src="/AathiM-pic.avif"
            alt="Member Two"
            className={styles.memberImage}
          />
        </div>
        <h3>Aathi Muthu</h3>
        <p>Vice President Technology</p>
      </div>

            <div className={styles.memberCard}>
        <div className={styles.memberPhoto}>
          <img
            src="/ZoyaH-pic.avif"
            alt="Member Two"
            className={styles.memberImage}
          />
        </div>
        <h3>Zoya Hasan</h3>
        <p>Vice President Technology</p>
      </div>

      <div className={styles.memberCard}>
        <div className={styles.memberPhoto}>
          <img
            src="/ShrayK-pic.avif"
            alt="Member Two"
            className={styles.memberImage}
          />
        </div>
        <h3>Shray Kudva</h3>
        <p>Vice President Finance</p>
      </div>

      <div className={styles.memberCard}>
        <div className={styles.memberPhoto}>
          <img
            src="/MaxV-pic.avif"
            alt="Member Two"
            className={styles.memberImage}
          />
        </div>
        <h3>Max Vroeman</h3>
        <p>Vice President Consulting</p>
      </div>

      <div className={styles.memberCard}>
        <div className={styles.memberPhoto}>
          <img
            src="/VydaL-pic.avif"
            alt="Member Two"
            className={styles.memberImage}
          />
        </div>
        <h3>Vyda Lam</h3>
        <p>Vice President Marketing</p>
      </div>

      <div className={styles.memberCard}>
        <div className={styles.memberPhoto}>
          <img
            src="/JessicaG-pic.avif"
            alt="Member Two"
            className={styles.memberImage}
          />
        </div>
        <h3>Jessica Gajiwala</h3>
        <p>Vice President External Affairs</p>
      </div>

      <div className={styles.memberCard}>
        <div className={styles.memberPhoto}>
          <img
            src="/AasthaS-pic.avif"
            alt="Member Two"
            className={styles.memberImage}
          />
        </div>
        <h3>Aastha Shah</h3>
        <p>Vice President Operations</p>
      </div>

      <div className={styles.memberCard}>
        <div className={styles.memberPhoto}>
          <img
            src="/MatthewD-pic.avif"
            alt="Member Two"
            className={styles.memberImage}
          />
        </div>
        <h3>Matthew Dao </h3>
        <p>Vice President Human Capital Management </p>
      </div>

  

    </div>
  </section>
)}


      {/* ================= ASSOCIATES SECTION ================= */}
      {active === 'associates' && (
        <section className={`${styles.section} ${styles.teamGrid}`}>
          <h2 id="associates" className={styles.teamSectionTitle}>Associates</h2>
          <div className={styles.groupGrid}>
            {/* Group photo cards for associates with caption text underneath */}
            <div className={styles.groupCard}>
              <div className={styles.groupPhoto} style={{backgroundImage: "url('/Winter25-pic.avif')"}} />
              <div className={styles.groupCaption}>
                <h3>Winter 2025</h3>
                <p>Pictured: Advay Pradhan, Evan Chen, Harrison Takken, Frank Hao, Helen Lin, Jamera Fernando, Himansi Gupta, Brian Can. 
                Not pictured: April Huang, Candice Chow, Deiter Williams, Ethan Kam, Jayden Patel, Jesus Hernandez, Joanne Lee, Mallika Dasgupta, Olivier Armand, Ryan McCombs, Sonia Sahu, Sparsh Jha, Spencer Cowles, Wanhan Sun</p>
              </div>
            </div>

            <div className={styles.groupCard}>
              <div className={styles.groupPhoto} style={{backgroundImage: "url('/Fall24-pic.avif')"}} />
              <div className={styles.groupCaption}>
                <h3>Fall 2024</h3>
                <p>Pictured: Jason Lee, Aathi Muthu, Varun Chowdary, Mark Kim, Matthew Dao, Saidazim Saidov, Erika Yu, Sidhant Dhawan, Holly Zhang, Farzad Haghighat Kashani, Ashley Nguyen, Eojin Lee, Faith Iwanaka, Mia Zhang, Tanisha Bala, Sadhana Tadepalli, Mirabelle Hwang, Nikitha Kerudi, Suhani Chaurasiya

Not pictured: Aatish Mandalapu, Caitlin Lee, Nathan Pang, Saaz Mahadkar, Sweekrit Bhatnagar</p>
              </div>
            </div>

            <div className={styles.groupCard}>
              <div className={styles.groupPhoto} style={{backgroundImage: "url('/Winter24-pic.jpg')"}} />
              <div className={styles.groupCaption}>
                <h3>Winter 2024</h3>
                <p>Pictured: Akhil Malladi, Kavi Patel-Jhawar, Rowan Brougham, Zachary Ishida, Mikhail Rutskov, Ryan Kim, Atherv Vidhate, Alexander Vong, Aastha Shah, Ria Singhania, Vyda Lam, Zoya Hasan, Kate Lee


Not pictured: Bharath Sathappan, Ganesh Nachiappan, Kabir Sachdev, Priya Rohra</p>
              </div>
            </div>

          <div className={styles.groupCard}>
              <div className={styles.groupPhoto} style={{backgroundImage: "url('/Fall23-pic.avif')"}} />
              <div className={styles.groupCaption}>
                <h3>Fall 2023</h3>
                <p>SPictured: Eliya Futatsugi-Touzet, Max Vroeman, Darren Reyes, Noah Salisbury, Ethan Cao, Nathan Cho, Andrew Pu, Adriel Mendoza, Hannah Lee, Adeline Zhou, Kianna Kim, Jessica Gajiwala, Aditi Parthan


Not pictured: Kaleigh Beachler, Valerie Kuo, Luke Pederson, Roxy Behjat, Alina Markov, Dhilan Bong</p>
              </div>
            </div>

          <div className={styles.groupCard}>
              <div className={styles.groupPhoto} style={{backgroundImage: "url('/Winter23-pic.avif')"}} />
              <div className={styles.groupCaption}>
                <h3>Winter 2023</h3>
                <p>Pictured: Akshat Jain, Aditya Mody, Andrea González Martín, Ashley Lee, Athina Lesca, Benjamin Kim, Bennett Yarnell, Camilla Giancotti, Daniel Woo, Daniel Zhu, Edmond Hong, Ian Hwang, Iris Ji, Isabel Wang, Jory Newquist, Joseph Whiteman, Kadie Qi, Kairi Tanaka, Karmen Connor, Kate Burgee, Kimberly Luga, Lynicia Moody, Manav Dixit, Meiqi Lai, Mihir Shah, Siddharth Rana, Tarkan Kafar</p>
              </div>
            </div>

            <div className={styles.groupCard}>
              <div className={styles.groupPhoto} style={{backgroundImage: "url('/Fall22-pic.avif')"}} />
              <div className={styles.groupCaption}>
                <h3>Fall 2022</h3>
                <p>Pictured: Taylor Ireland, Mihir Joshi, Ethan Lomes, Jacob Thacker, Winston Fan, Justin Chou, Shilpa Chowbey, Dhruv Kanetkar, Michael Wang, J.P. Fuertez, Faiz Lodhi, Daniel Mathew, Dhathry Doppalapudi, Ashley Lee, Madeleine So, Anoop Singh, Bassam Motawi, Abhishek Ganga, Rachel Wei, Hua Yang(Billy) Zhang, Rei Tan, Yuming Sze, Kamran ostrum, Matthew Hopkins, Shray Kudva.</p>
              </div>
            </div>

            <div className={styles.groupCard}>
              <div className={styles.groupPhoto} style={{backgroundImage: "url('/Winter22-pic.avif')"}} />
              <div className={styles.groupCaption}>
                <h3>Winter 2022</h3>
                <p>Pictured: Dominic Ricci, Daniyal Rahman, Aman Kar, Marcos Soler Alonso, Nelly Zerbib, Grant Castaneda, Patrick Le-Tran, Crystal Tsao, Eric Stratford, Kelly Yu, Julia Chang, Aishani Mohapatra, Anu Yelisetti



Not pictured: Jane Merkle, Makenzie Johnson, Arohi Raychaudhuri, Liang Wenhua, Louie Zhao, Manisha Tirunagaru, Alvaro Belmar, Patrick Le-Tran, Timothy Noritake</p>
              </div>
            </div>

          <div className={styles.groupCard}>
              <div className={styles.groupPhoto} style={{backgroundImage: "url('/Fall21-pic.avif')"}} />
              <div className={styles.groupCaption}>
                <h3>Fall 2021</h3>
                <p>Pictured: Dominic Ricci, Daniyal Rahman, Aman Kar, Marcos Soler Alonso, Nelly Zerbib, Grant Castaneda, Patrick Le-Tran, Crystal Tsao, Eric Stratford, Kelly Yu, Julia Chang (VP ID), Aishani Mohapatra, Anu Yelisetti



Not pictured: Jane Merkle, Makenzie Johnson, Arohi Raychaudhuri, Liang Wenhua, Louie Zhao, Manisha Tirunagaru, Alvaro Belmar, Patrick Le-Tran, Timothy Noritake</p>
              </div>
            </div>

            <div className={styles.groupCard}>
              <div className={styles.groupPhoto} style={{backgroundImage: "url('/Winter21-pic.avif')"}} />
              <div className={styles.groupCaption}>
                <h3>Winter 2021</h3>
                <p>Pictured: Dominic Ricci, Heather Song, Andrea Lai, Ren Tang, Sadaf Rasekh, Selina Jin, Rhea Kalra, Kenny Nguyen, 

Not pictured: Alejandro Vazquez, Abhishek Nisha Anish</p>
              </div>
            </div>

          </div>
        </section>
      )}

    </main>
  );
}