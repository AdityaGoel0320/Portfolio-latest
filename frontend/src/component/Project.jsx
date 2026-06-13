import React, { useState } from "react";
import "./project.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Shopp.my",
    subtitle: "One Stop place for your ecommerce needs",

    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",

    category: ["MERN", "TypeScript", "Firebase", "Stripe"],

    tech: [
      "MERN",
      "TypeScript",
      "Firebase",
      "Stripe"
    ],

    points: [
      "Authentication",
      "Secure Payments",
      "Admin Dashboard"
    ],

    github: "#",

    live: "#",
  },

  {
    title: "ChatBuddy",

    subtitle:
      "One Stop place for personal interaction",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

    category: ["MERN"],

    tech: [
      "MERN",
      "ReactJS",
      "NodeJS",
      "Socket.IO",
      "Cloudinary",
      "TailwindCSS",
    ],

    points: [
      "Realtime Chat",
      "Image Sharing",
      "Group Chats"
    ],

    github: "#",

    live: "#",
  },

  {
    title: "Pizza Paradise",

    subtitle:
      "A new era of pizza booking",

    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",

    category: ["MERN"],

    tech: [
      "MERN",
      "ReactJS",
      "NodeJS",
      "TailwindCSS"
    ],

    points: [
      "Order Tracking",
      "Payment",
      "Responsive UI"
    ],

    github: "#",

    live: "#",
  },
];

const filters = [
  "All",
  "MERN",
  "TypeScript",
  "Firebase",
  "Stripe",
  "TailwindCSS",
];

const Project = () => {
  const [selected, setSelected] = useState("All");

  const filteredProjects =
    selected === "All"
      ? projects
      : projects.filter((p) =>
          p.category.includes(selected)
        );

  return (
    <section
      id="projects"
      className="min-h-screen px-8 py-20"
    >
      <h1 className="projectTitle">
        Projects
      </h1>

      {/* Filter */}

      <div className="filterContainer">

        {filters.map((item) => (

          <button
            key={item}
            onClick={() => setSelected(item)}
            className={`filterBtn ${
              selected === item
                ? "activeFilter"
                : ""
            }`}
          >
            {item}
          </button>

        ))}
      </div>

      {/* Cards */}

      <div className="projectGrid">

        {filteredProjects.map(
          (project, index) => (

            <div
              key={index}
              className="projectCard"
            >

              <div className="imgWrapper">

                <img
                  src={project.image}
                  alt=""
                />

              </div>

              <div className="cardContent">

                <h2>
                  {project.title}
                </h2>

                <p className="subtitle">
                  {project.subtitle}
                </p>

                <div className="techContainer">

                  {project.tech.map(
                    (tech) => (

                      <span
                        key={tech}
                        className="techTag"
                      >
                        {tech}
                      </span>

                    )
                  )}

                </div>

                <ul>

                  {project.points.map(
                    (point) => (

                      <li key={point}>
                        ✓ {point}
                      </li>

                    )
                  )}

                </ul>

                <div className="btns">

                  <a
                    href={project.github}
                  >
                    <FaGithub />

                    Github
                  </a>

                  <a
                    href={project.live}
                  >
                    <FaExternalLinkAlt />

                    Live
                  </a>

                </div>

              </div>

            </div>

          )
        )}

      </div>

    </section>
  );
};

export default Project;