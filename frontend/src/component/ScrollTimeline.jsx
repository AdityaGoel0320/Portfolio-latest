import React, { useEffect, useRef, useState } from "react";

const data = [
  {
    title: "MAIT",
    desc: "Completed my BTECH in Information Technology.",
    year: "2022",
  },
  {
    title: "Maaps Schooling",
    desc: "Completed my schooling with a focus on PCM subjects.",
    year: "2023",
  },
  
];

export default function ScrollTimelineRoad() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // 🔥 Scroll → Progress engine
  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const total = rect.height - windowHeight;
      const scrolled = -rect.top;

      let p = scrolled / total;

      p = Math.max(0, Math.min(1, p));

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rawIndex = progress * (data.length - 1);

  return (
    <section
      ref={containerRef}
      className="relative py-40 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">

        {/* 🌄 Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50 to-white opacity-60 blur-3xl" />

        {/* ================= ROAD SVG ================= */}
        <svg
          className="absolute left-1/2 top-0 h-full -translate-x-1/2"
          width="260"
          viewBox="0 0 260 1000"
          fill="none"
        >
          {/* ROAD SHADOW */}
          <path
            d="M130 0
               C 300 150, -40 300, 130 450
               C 300 600, -40 750, 130 1000"
            stroke="#111827"
            strokeWidth="32"
            strokeLinecap="round"
            opacity="0.2"
          />

          {/* ROAD BASE */}
          <path
            d="M130 0
               C 300 150, -40 300, 130 450
               C 300 600, -40 750, 130 1000"
            stroke="#1f2937"
            strokeWidth="26"
            strokeLinecap="round"
          />

          {/* LANE DASH MARKINGS */}
          <path
            d="M130 0
               C 300 150, -40 300, 130 450
               C 300 600, -40 750, 130 1000"
            stroke="#f9fafb"
            strokeWidth="2"
            strokeDasharray="10 18"
            opacity="0.7"
          />

          {/* PROGRESS (glowing travel path) */}
          <path
            d="M130 0
               C 300 150, -40 300, 130 450
               C 300 600, -40 750, 130 1000"
            stroke="#f59e0b"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="1000"
            strokeDashoffset={1000 - progress * 1000}
            style={{
              filter: "drop-shadow(0px 0px 10px rgba(245,158,11,0.7))",
              transition: "stroke-dashoffset 0.15s linear",
            }}
          />
        </svg>

        {/* ================= MOVING NODE ================= */}
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-all duration-150 ease-out"
          style={{
            top: `${progress * 100}%`,
          }}
        >
          <div className="w-6 h-6 bg-amber-500 rounded-full shadow-[0_0_25px_rgba(245,158,11,0.9)] relative">

            {/* pulse glow */}
            <div className="absolute inset-0 rounded-full bg-amber-400 opacity-40 animate-ping" />
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="space-y-40 relative z-10">
          {data.map((item, i) => {
            const isLeft = i % 2 === 0;

            // smooth activation based on scroll distance
            const distance = Math.abs(rawIndex - i);
            const activeStrength = 1 - Math.min(distance, 1);

            return (
              <div key={i} className="flex items-center justify-between">

                {/* LEFT */}
                <div className="w-[45%]">
                  {isLeft && (
                    <div
                      className="p-6 rounded-2xl border bg-white shadow-md transition-all duration-300"
                      style={{
                        opacity: 0.3 + activeStrength * 0.7,
                        transform: `scale(${0.95 + activeStrength * 0.05})`,
                        filter: `blur(${(1 - activeStrength) * 2}px)`,
                      }}
                    >
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mt-2">{item.desc}</p>
                      <span className="text-amber-500 font-semibold mt-2 block">
                        {item.year}
                      </span>
                    </div>
                  )}
                </div>

                {/* CENTER SPACE */}
                <div className="w-[10%]" />

                {/* RIGHT */}
                <div className="w-[45%]">
                  {!isLeft && (
                    <div
                      className="p-6 rounded-2xl border bg-white shadow-md transition-all duration-300"
                      style={{
                        opacity: 0.3 + activeStrength * 0.7,
                        transform: `scale(${0.95 + activeStrength * 0.05})`,
                        filter: `blur(${(1 - activeStrength) * 2}px)`,
                      }}
                    >
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mt-2">{item.desc}</p>
                      <span className="text-amber-500 font-semibold mt-2 block">
                        {item.year}
                      </span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}