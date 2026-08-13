import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Salwar > Palazzo
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSalwarPalazzoPage() {
  // At least 5 collection looks for "Palazzo" — add more items here any time.
  const collections = [
        { id: 1, title: "Palazzo — Classic Weave", image: imageFor("Palazzo-0") },
        { id: 2, title: "Palazzo — Festive Edit", image: imageFor("Palazzo-1") },
        { id: 3, title: "Palazzo — Everyday Comfort", image: imageFor("Palazzo-2") },
        { id: 4, title: "Palazzo — Designer Pick", image: imageFor("Palazzo-3") },
        { id: 5, title: "Palazzo — New Season", image: imageFor("Palazzo-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Palazzo"
      category="Women"
      categorySlug="women"
      group="Salwar"
      description="Discover our Palazzo collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
