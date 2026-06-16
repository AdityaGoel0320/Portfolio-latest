import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import "./cursor.css";

const CustomCursor = () => {

  const dotRef = useRef(null);

  const [ripples, setRipples] =
    useState([]);



  useEffect(() => {

    const move = (e) => {

      const el = dotRef.current;
      if (!el) return;

      el.style.transform =
        `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;

      const clickable =
        e.target.closest(
          "a, button, .sidebarIcon, .socialIcon, .projectCard"
        );

      el.classList.toggle("pointer", !!clickable);

    };



    const click = (e) => {

      const id = Date.now();

      setRipples((prev) => [

        ...prev,

        {

          id,

          x: e.clientX,

          y: e.clientY,

        },

      ]);



      setTimeout(() => {

        setRipples((prev) =>

          prev.filter(

            (r) =>

              r.id !== id

          )

        );

      }, 800);

    };



    window.addEventListener(
      "mousemove",
      move
    );

    window.addEventListener(
      "click",
      click
    );



    return () => {

      window.removeEventListener(
        "mousemove",
        move
      );

      window.removeEventListener(
        "click",
        click
      );

    };

  }, []);



  return (

    <>

      <div

        ref={dotRef}

        className="cursorDot"

      />



      {

        ripples.map((r) => (

          <div

            key={r.id}

            className="cursorRipple"

            style={{

              left: r.x,

              top: r.y,

            }}

          />

        ))

      }

    </>

  );

};

export default CustomCursor;