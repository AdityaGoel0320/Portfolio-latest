import React from "react";
import { skills } from "./skillsData";

import "./skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skillsSection">

      <p className="skillsIntro">

        Here are my

      </p>

      <h1 className="skillsTitle">

        SKILLS

      </h1>

      <p className="skillsSubtitle">

        Technologies and tools I use to build modern applications.

      </p>

      {skills.map((category) => (

        <div key={category.category}>

          <h2 className="categoryTitle">

            {category.category}

          </h2>

          <div className="skillsGrid">

            {category.items.map((skill) => (

              <div className="skillCard">

                <img
                  src={skill.logo}
                  alt={skill.name}
                />

                <h3>

                  {skill.name}

                </h3>

                <p>

                  {skill.description}

                </p>

                <div className="progress">

                  <div
                    className="progressFill"
                    style={{
                      width: `${skill.level}%`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      ))}

    </section>
  );
};

export default Skills;