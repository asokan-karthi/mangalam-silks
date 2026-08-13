import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Salwar > Pakistani Suits
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSalwarPakistaniSuitsPage() {
  // At least 5 collection looks for "Pakistani Suits" — add more items here any time.
  const collections = [
        { id: 1, title: "Pakistani Suits — Classic Weave", image: imageFor("Pakistani Suits-0") },
        { id: 2, title: "Pakistani Suits — Festive Edit", image: imageFor("Pakistani Suits-1") },
        { id: 3, title: "Pakistani Suits — Everyday Comfort", image: imageFor("Pakistani Suits-2") },
        { id: 4, title: "Pakistani Suits — Designer Pick", image: imageFor("Pakistani Suits-3") },
        { id: 5, title: "Pakistani Suits — New Season", image: imageFor("Pakistani Suits-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Pakistani Suits"
      category="Women"
      categorySlug="women"
      group="Salwar"
      description="Discover our Pakistani Suits collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
