import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Men > Shirts > Formal Shirts
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function MenShirtsFormalShirtsPage() {
  // At least 5 collection looks for "Formal Shirts" — add more items here any time.
  const collections = [
        { id: 1, title: "Formal Shirts — Classic Weave", image: imageFor("Formal Shirts-0") },
        { id: 2, title: "Formal Shirts — Festive Edit", image: imageFor("Formal Shirts-1") },
        { id: 3, title: "Formal Shirts — Everyday Comfort", image: imageFor("Formal Shirts-2") },
        { id: 4, title: "Formal Shirts — Designer Pick", image: imageFor("Formal Shirts-3") },
        { id: 5, title: "Formal Shirts — New Season", image: imageFor("Formal Shirts-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Formal Shirts"
      category="Men"
      categorySlug="men"
      group="Shirts"
      description="Discover our Formal Shirts collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
