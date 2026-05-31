import React, { useEffect, useMemo, useState } from "react";

const DEFAULT_WORDS = [
  "conservation",
  "business",
  "non-profits",
  "creatives",
  "government",
  "councils",
];

type Props = {
  words?: string[];
  /** milliseconds each word rests before the next glides in */
  interval?: number;
};

/**
 * Vertical "filmstrip" word scroller. All words are stacked in a column inside a
 * one-line mask; the column glides up one row per cycle. A clone of the first
 * word is appended so the wrap-around is seamless (after landing on the clone we
 * snap back to the real first word with the transition disabled).
 *
 * Sits on its own centred line, so words of different lengths never leave a gap.
 * Dependency-free; respects prefers-reduced-motion.
 */
const RotatingWords = ({ words = DEFAULT_WORDS, interval = 3000 }: Props) => {
  const items = useMemo(() => [...words, words[0]], [words]);
  const [i, setI] = useState(0);
  const [withTransition, setWithTransition] = useState(true);

  // Advance one row per interval
  useEffect(() => {
    const id = setInterval(() => setI((p) => p + 1), interval);
    return () => clearInterval(id);
  }, [interval]);

  // Seamless wrap: when we glide onto the cloned first word, snap back to 0
  useEffect(() => {
    if (i === items.length - 1) {
      const t = setTimeout(() => {
        setWithTransition(false);
        setI(0);
      }, 850); // just after the glide finishes
      return () => clearTimeout(t);
    }
    if (!withTransition) {
      const r = requestAnimationFrame(() => setWithTransition(true));
      return () => cancelAnimationFrame(r);
    }
  }, [i, items.length, withTransition]);

  return (
    <span className="roll-mask text-2xl sm:text-3xl" aria-live="polite">
      <span
        className="roll-track"
        style={{
          transform: `translateY(calc(${i} * var(--roll-h) * -1))`,
          transition: withTransition
            ? "transform 0.8s cubic-bezier(0.65, 0, 0.35, 1)"
            : "none",
        }}
      >
        {items.map((w, idx) => (
          <span className="roll-item" key={idx}>
            {w}
          </span>
        ))}
      </span>
    </span>
  );
};

export default RotatingWords;
