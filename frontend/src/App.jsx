import React from "react";

import FrontPage from "./component/FrontPage";
import AboutMe from "./component/AboutMe";
import Experience from "./component/Experience";
import Skills from "./component/Skills";
import Project from "./component/Project";
import ContactMe from "./component/ContactMe";

import "./App.css";
import CustomCursor from "./component/CustomCursor";

const App = () => {
  return (
    <>
      <div className="appContainer">

        {/* Animated Background */}

        <div className="background">
          <div className="blob blob1"></div>
          <div className="blob blob2"></div>
          <div className="blob blob3"></div>

          <div className="gridBg"></div>

          <div className="particles">
            {[...Array(25)].map((_, i) => (
              <span key={i}></span>
            ))}
          </div>
        </div>

        {/* Hero Section */}

        <CustomCursor />

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