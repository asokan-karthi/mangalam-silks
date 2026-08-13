import React, { useEffect, useState } from "react";

// Rotating one-line slogans shown in the very top navbar strip.
// Pure text carousel, autoplay only — no arrows / dots / buttons of any kind.
const SLOGANS = [
  { tag: "Priya Mani's picks", rest: "for the Chill Brides this Season" },
  { tag: "Tradition Woven", rest: "into every thread, for every generation" },
  { tag: "New Season Arrivals", rest: "silks, ethnic wear & bridal collections" },
  { tag: "Trusted Since Generations", rest: "pure quality, honest craftsmanship" },
];

const INTERVAL = 3500;

export default function SloganSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLOGANS.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="slogan-bar" aria-hidden="false">
      <div className="slogan-track">
        {SLOGANS.map((s, i) => (
          <div className={`slogan-slide ${i === index ? "active" : ""}`} key={s.tag}>
            <span className="tag">{s.tag}</span>
            <span>— {s.rest}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
