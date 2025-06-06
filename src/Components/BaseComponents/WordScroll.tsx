import React, { useEffect, useState, useRef } from "react";

const words = [
  "business",
  "conservation",
  "creatives",
  "non-profits",
  "government",
];

const WordScroll: React.FC = () => {
  const [index, setIndex] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [wordHeight, setWordHeight] = useState(0);
  const [maxWordWidth, setMaxWordWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (refs.current.length > 0) {
        const heights = refs.current.map((ref) => ref?.offsetHeight || 0);
        const widths = refs.current.map((ref) => ref?.offsetWidth || 0);
        setWordHeight(Math.max(...heights));
        setMaxWordWidth(Math.max(...widths));
      }
    };
    setTimeout(measure, 50);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <h1
      className={`
        heading-text flex items-baseline justify-center flex-wrap
        w-full max-w-full
        text-[clamp(1.2rem,5vw,2.7rem)] 
        px-2 sm:px-4 md:px-8 
        gap-2 md:gap-4
        min-w-0
      `}
      style={{ lineHeight: 1.2 }}
    >
      <span className="mr-2 md:mr-5 min-w-0">Helping</span>
      <span
        className="inline-block relative overflow-hidden align-baseline min-w-0 max-w-full"
        style={{
          height: wordHeight ? `${wordHeight}px` : "1em",
          width: maxWordWidth ? `min(${maxWordWidth}px, 100vw)` : "auto",
        }}
      >
        <div
          style={{
            transition: "transform 0.4s cubic-bezier(.62,.28,.23,.99)",
            transform: `translateY(-${index * wordHeight}px)`,
          }}
        >
          {words.map((w, i) => (
            <div
              key={w}
              ref={(el) => {
                refs.current[i] = el;
                return undefined;
              }}
              className="flex items-center font-inherit text-inherit whitespace-nowrap min-w-0 max-w-full"
              style={{
                height: wordHeight ? `${wordHeight - 0.5}px` : "1em",
                width: maxWordWidth ? `min(${maxWordWidth}px, 100vw)` : "auto",
                color: "#F28C38",
              }}
            >
              {w}
            </div>
          ))}
        </div>
      </span>
      <span className="ml-3 md:ml-4 min-w-0 break-words">
        show the worth of their work
      </span>
      <p className="obody-text text-center">
        Ready to tell your story with confidence?
        <div className="flex gap-4 mt-6 justify-center w-full">
          <button
            className="px-7 py-3 rounded-full font-bold shadow-lg bg-[#003E5D] text-white hover:bg-[#022940] hover:shadow-xl hover:scale-105 transition-all duration-200 border-2 border-transparent focus:outline-none focus:ring-4 focus:ring-[#4681a4] focus:ring-opacity-40"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            type="button"
          >
            Contact
          </button>
          <button
            className="px-7 py-3 rounded-full font-bold shadow-lg bg-white text-[#003E5D] border-2 border-[#003E5D] hover:bg-[#e6f1f7] hover:text-[#022940] hover:border-[#022940] hover:shadow-xl hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#4681a4] focus:ring-opacity-40"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            type="button"
          >
            About
          </button>
        </div>
      </p>
    </h1>
  );
};

export default WordScroll;
