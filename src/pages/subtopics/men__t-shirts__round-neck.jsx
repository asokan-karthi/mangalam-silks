import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Men > T-Shirts > Round Neck
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function MenTShirtsRoundNeckPage() {
  // At least 5 collection looks for "Round Neck" — add more items here any time.
  const collections = [
        { id: 1, title: "Round Neck — Classic Weave", image: imageFor("Round Neck-0") },
        { id: 2, title: "Round Neck — Festive Edit", image: imageFor("Round Neck-1") },
        { id: 3, title: "Round Neck — Everyday Comfort", image: imageFor("Round Neck-2") },
        { id: 4, title: "Round Neck — Designer Pick", image: imageFor("Round Neck-3") },
        { id: 5, title: "Round Neck — New Season", image: imageFor("Round Neck-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Round Neck"
      category="Men"
      categorySlug="men"
      group="T-Shirts"
      description="Discover our Round Neck collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
