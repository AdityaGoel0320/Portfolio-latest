import React from "react";
import "./frontPage.css";

const FrontPage = () => {

  const scrollToAbout = () => {
    const section = document.getElementById("about");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">

      {/* Intro */}
      <span className="intro">
        Hi, it's me
      </span>

      {/* Name */}
      <h1 className="name">
        Aditya Goel
      </h1>

      {/* Subtitle */}
      <p className="subtitle">
        Software Developer
      </p>

      {/* Scroll Down */}
      <div
        className="absolute bottom-10 flex flex-col items-center gap-3 fadeArrow cursor-pointer"
        onClick={scrollToAbout}
      >

        <div className="scrollCircle">
          <i className="fa-solid fa-arrow-down"></i>
        </div>

        <p className="text-sm tracking-widest uppercase text-gray-500">
          Let's dive into the world of excellent work
        </p>

      </div>

    </section>
  );
};

export default FrontPage;