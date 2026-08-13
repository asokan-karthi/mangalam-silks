import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Salwar > Straight Cut
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSalwarStraightCutPage() {
  // At least 5 collection looks for "Straight Cut" — add more items here any time.
  const collections = [
        { id: 1, title: "Straight Cut — Classic Weave", image: imageFor("Straight Cut-0") },
        { id: 2, title: "Straight Cut — Festive Edit", image: imageFor("Straight Cut-1") },
        { id: 3, title: "Straight Cut — Everyday Comfort", image: imageFor("Straight Cut-2") },
        { id: 4, title: "Straight Cut — Designer Pick", image: imageFor("Straight Cut-3") },
        { id: 5, title: "Straight Cut — New Season", image: imageFor("Straight Cut-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Straight Cut"
      category="Women"
      categorySlug="women"
      group="Salwar"
      description="Discover our Straight Cut collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
