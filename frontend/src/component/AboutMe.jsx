import React, { useEffect, useRef, useState } from "react";
import "./aboutMe.css";

const AboutMe = () => {
  const aboutRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="aboutSection"
    >
      {/* Background Text */}

      <div className={`bgText ${show ? "showBgText" : ""}`}>
        ADITYA
      </div>

     

      {/* Heading */}

      <h1 className={`heading aboutTitle ${show ? "showScale" : ""}`}>
        ABOUT ME
      </h1>

      {/* Description */}

      <div className="aboutContent">

        <p className={`aboutPara ${show ? "showBottom delay1" : ""}`}>
          I'm <span>Aditya Goel</span>, currently pursuing B.Tech in
          Information Technology at Maharaja Agrasen Institute of Technology,
          Delhi.
        </p>

        <p className={`aboutPara ${show ? "showBottom delay2" : ""}`}>
          I specialize in MERN Stack Development and Java.
          During my internship, I contributed to building real-world
          applications and gained industry-level experience.
        </p>

        <p className={`aboutPara ${show ? "showBottom delay3" : ""}`}>
          I enjoy crafting websites that are functional,
          user-friendly, and visually appealing with a
          focus on clean UI and delightful experiences.
        </p>

      </div>

      {/* Education */}
      <div className="educationSection">

        <h2 className={`smallHeading educationHeading ${show ? "showTop" : ""}`}>
          EDUCATION
        </h2>

        <div className="educationGrid">

          <div className={`educationCard ${show ? "showCard delay1" : ""}`}>

            <h3>Maharaja Agrasen Institute Of Technology</h3>

            <p className="year">2021 - Present</p>

            <p>B.Tech, Information Technology</p>

          </div>

          <div className={`educationCard ${show ? "showCard delay2" : ""}`}>

            <h3>Maharaja Aggarsain Adarsh Public School</h3>

            <p className="year">2009 - 2021</p>

            <p>PCM • CBSE</p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutMe;