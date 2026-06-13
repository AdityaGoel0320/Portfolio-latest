import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import "./cursor.css";

const CustomCursor = () => {

  const dotRef = useRef(null);

  const [pointer, setPointer] =
    useState(false);

  const [ripples, setRipples] =
    useState([]);



  useEffect(() => {

    const move = (e) => {

      dotRef.current.style.left =
        `${e.clientX}px`;

      dotRef.current.style.top =
        `${e.clientY}px`;



      const clickable =
        e.target.closest(
          `
          a,
          button,
          .sidebarIcon,
          .socialIcon,
          .projectCard
          `
        );

      setPointer(!!clickable);

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

        className={`

          cursorDot

          ${pointer ? "pointer" : ""}

        `}

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