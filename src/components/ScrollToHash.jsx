import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Renders nothing — just watches the route. When the URL has a #hash
// (e.g. /women#sarees), it scrolls the matching element into view once
// it exists in the DOM. Without a hash, it resets scroll to the top on
// every new page like a normal site.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const id = decodeURIComponent(hash.replace("#", ""));
    let attempts = 0;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts < 20) {
        attempts += 1;
        requestAnimationFrame(tryScroll);
      }
    };

    tryScroll();
  }, [pathname, hash]);

  return null;
}
