import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Kurtis > Straight
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenKurtisStraightPage() {
  // At least 5 collection looks for "Straight" — add more items here any time.
  const collections = [
        { id: 1, title: "Straight — Classic Weave", image: imageFor("Straight-0") },
        { id: 2, title: "Straight — Festive Edit", image: imageFor("Straight-1") },
        { id: 3, title: "Straight — Everyday Comfort", image: imageFor("Straight-2") },
        { id: 4, title: "Straight — Designer Pick", image: imageFor("Straight-3") },
        { id: 5, title: "Straight — New Season", image: imageFor("Straight-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Straight"
      category="Women"
      categorySlug="women"
      group="Kurtis"
      description="Discover our Straight collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
