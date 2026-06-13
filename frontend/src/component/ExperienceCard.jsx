import React, { useState } from "react";

const ExperienceCard = ({
  experience,
  active,
}) => {

  const [expanded, setExpanded] =
    useState(false);

  const handleMouseMove = (e) => {

    const card =
      e.currentTarget;

    const rect =
      card.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    card.style.setProperty(
      "--mouse-x",

      `${x}px`
    );

    card.style.setProperty(
      "--mouse-y",

      `${y}px`
    );
  };

  return (

    <div

      className={`

      experience-card

      ${active ? "active" : ""}

      ${expanded ? "expanded" : ""}

      `}

      onMouseMove={handleMouseMove}

    >

      {/* Spotlight */}

      <div className="spotlight" />

      {/* Top */}

      <div className="card-top">

        <div className="icon">

          {experience.icon}

        </div>

        <div>

          <h2>

            {experience.title}

          </h2>

          <h3>

            {experience.company}

          </h3>

          <p>

            {experience.duration}

          </p>

        </div>

      </div>

      {/* Skills */}

      <div className="skills">

        {experience.skills.map(

          (skill) => (

            <span

              key={skill}

              className="skill-chip"

            >

              {skill}

            </span>

          )

        )}

      </div>

      {/* Description */}

      <div

        className={`

        description

        ${expanded

          ? "show"

          : ""

        }

        `}

      >

        {experience.description}

      </div>

      {/* Buttons */}

      <div className="buttons">

        <button

          className="expand-btn"

          onClick={() =>

            setExpanded(

              !expanded

            )

          }

        >

          {

            expanded

            ?

            "Show Less"

            :

            "Know More"

          }

        </button>

        <a

          href={

            experience.certificate

          }

          target="_blank"

          rel="noreferrer"

          className="certificate"

        >

          Certificate ↗

        </a>

      </div>

    </div>

  );

};

export default ExperienceCard;