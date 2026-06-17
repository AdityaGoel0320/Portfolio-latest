import React from "react";

import FrontPage from "./component/FrontPage";
import AboutMe from "./component/AboutMe";
import Experience from "./component/Experience";
import Skills from "./component/Skills";
import Project from "./component/Project";
import ContactMe from "./component/ContactMe";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="waves">
        <svg className="wave wave1" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M0,160 C120,100 240,220 360,160 C480,100 600,220 720,160 C840,100 960,220 1080,160 C1200,100 1320,220 1440,160 V0 H0 Z" />
        </svg>

        <svg className="wave wave2" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M0,180 C100,120 220,240 340,180 C460,120 580,240 700,180 C820,120 940,240 1060,180 C1180,120 1300,240 1440,180 V0 H0 Z" />
        </svg>

        <svg className="wave wave3" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M0,140 C150,60 300,220 450,140 C600,60 750,220 900,140 C1050,60 1200,220 1350,140 C1400,120 1440,140 1440,140 V0 H0 Z" />
        </svg>

        <svg className="wave wave4" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M0,200 C120,140 240,260 360,200 C480,140 600,260 720,200 C840,140 960,260 1080,200 C1200,140 1320,260 1440,200 V0 H0 Z" />
        </svg>
      </div>
      <div className="appContainer">
        <FrontPage />

        {/* Main Content */}

        <section className="mainSection">

          {/* Sidebar */}

          <aside className="w-42 pl-12 sidebar">

            <div className="avatar">
              AG
            </div>

            <div className="socials">

              <a href="#">
                LinkedIn
              </a>

              <a href="#">
                Github
              </a>

              <a href="#">
                LeetCode
              </a>

              <a href="#">
                Resume
              </a>

            </div>

          </aside>

          {/* Content */}

          <main className="content">

            <div className="sectionFade">
              <AboutMe />
            </div>

            <div className="sectionFade delay1">
              <Skills />
            </div>

            <div className="sectionFade delay2">
              <Experience />
            </div>

            <div className="sectionFade delay3">
              <Project />
            </div>

            <div className="sectionFade delay4">
              <ContactMe />
            </div>

          </main>

        </section>

        {/* Mobile Navbar */}

        <nav className="bottomNavbar">

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#experience">
            Experience
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>

        </nav>

      </div>
    </>
  );
};

export default App;