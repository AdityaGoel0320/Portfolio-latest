import React from "react";

import "./experience.css";

import { experiences } from "./experienceData.js";

const Experience = () => {
  return (
    <section
      id="experience"
      className="experienceSection"
    >


      <p className="experienceIntro">

        My Professional Journey

      </p>

      <h1 className="myName experienceTitle">

        EXPERIENCE

      </h1>

      <div className="timeline">

        {experiences.map((item, index) => (

          <div
            className={`timelineItem ${
              index % 2 === 0
                ? "left"
                : "right"
            }`}
            key={index}
          >

            <div className="timelineDot" />

            <div className="experienceCard">

              <h2>

                {item.title}

              </h2>

              <h3>

                {item.company}

              </h3>

              <p className="duration">

                {item.duration}

              </p>

              <a
                href={item.certificate}
                className="certificate"
              >

                Certificate ↗

              </a>

              <p className="description">

                {item.description}

              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Experience;