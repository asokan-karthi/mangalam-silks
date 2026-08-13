import React, { useEffect, useState } from "react";

// Floating gold-and-maroon arrow, bottom-right corner. Fades in once the
// visitor has scrolled down the page, and smooth-scrolls back to the top
// (bottom-to-top) on click.
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top ${visible ? "is-visible" : ""}`}
      onClick={scrollUp}
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5" />
        <path d="M6 11l6-6 6 6" />
      </svg>
    </button>
  );
}
