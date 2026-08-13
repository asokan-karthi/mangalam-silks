import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Kids > Boys > T-Shirts
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function KidsBoysTShirtsPage() {
  // At least 5 collection looks for "T-Shirts" — add more items here any time.
  const collections = [
        { id: 1, title: "T-Shirts — Classic Weave", image: imageFor("T-Shirts-0") },
        { id: 2, title: "T-Shirts — Festive Edit", image: imageFor("T-Shirts-1") },
        { id: 3, title: "T-Shirts — Everyday Comfort", image: imageFor("T-Shirts-2") },
        { id: 4, title: "T-Shirts — Designer Pick", image: imageFor("T-Shirts-3") },
        { id: 5, title: "T-Shirts — New Season", image: imageFor("T-Shirts-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="T-Shirts"
      category="Kids"
      categorySlug="kids"
      group="Boys"
      description="Discover our T-Shirts collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
      highlights={[
              {
                      "title": "Handpicked Fabric",
                      "desc": "Selected for texture, drape and everyday comfort."
              },
              {
                      "title": "Trusted Craftsmanship",
                      "desc": "Made with techniques passed down through generations."
              },
              {
                      "title": "Occasion Ready",
                      "desc": "Styled to work for festive, formal and everyday wear."
              }
      ]}
      collections={collections}
    />
  );
}
