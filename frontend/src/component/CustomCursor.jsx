import React, { useEffect, useRef, useState } from "react";
import "./cursor.css";

const CustomCursor = () => {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const pos = useRef({
    x: 0,
    y: 0,
  });

  const [hover, setHover] = useState(false);

  const [clicked, setClicked] = useState(false);

  const [scrolling, setScrolling] =
    useState(false);

  const [ripples, setRipples] =
    useState([]);

  useEffect(() => {

    const moveCursor = (e) => {

      mouse.current = {

        x: e.clientX,

        y: e.clientY,
      };

      if (dotRef.current) {

        dotRef.current.style.left =
          `${e.clientX}px`;

        dotRef.current.style.top =
          `${e.clientY}px`;

      }

     const iconTarget = e.target.closest(
  ".sidebarIcon,.socialIcon"
);

if (iconTarget) {

  setHover(false);

  ringRef.current.classList.add(
    "hideRing"
  );

} else {

  ringRef.current.classList.remove(
    "hideRing"
  );

  const target = e.target.closest(
    "button,a,.projectCard"
  );

  setHover(!!target);

}

    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      );

    };

  }, []);

  useEffect(() => {

    const animate = () => {

      pos.current.x +=

        (mouse.current.x -
          pos.current.x)

        * 0.12;

      pos.current.y +=

        (mouse.current.y -
          pos.current.y)

        * 0.12;

      if (ringRef.current) {

        ringRef.current.style.left =
          `${pos.current.x}px`;

        ringRef.current.style.top =
          `${pos.current.y}px`;

      }

      requestAnimationFrame(
        animate
      );

    };

    animate();

  }, []);

  useEffect(() => {

    const handleClick = (e) => {

      setClicked(true);

      setTimeout(() => {

        setClicked(false);

      }, 400);

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
            (r) => r.id !== id
          )

        );

      }, 700);

    };

    window.addEventListener(
      "click",
      handleClick
    );

    return () => {

      window.removeEventListener(
        "click",
        handleClick
      );

    };

  }, []);

  useEffect(() => {

    let timer;

    const handleScroll = () => {

      setScrolling(true);

      clearTimeout(timer);

      timer = setTimeout(() => {

        setScrolling(false);

      }, 200);

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);

  return (

    <>

      <div

        ref={ringRef}

        className={`
        cursorRing

        ${hover ? "hover" : ""}

        ${clicked ? "click" : ""}

      ${
        scrolling

          ? "scrolling"

          : ""

      }

      `}
      />

      <div

        ref={dotRef}

        className={`
        cursorDot

      ${
        scrolling

          ? "scrollDot"

          : ""

      }

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