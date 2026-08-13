import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Ethnic Wear > Half Saree
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenEthnicWearHalfSareePage() {
  // At least 5 collection looks for "Half Saree" — add more items here any time.
  const collections = [
        { id: 1, title: "Half Saree — Classic Weave", image: imageFor("Half Saree-0") },
        { id: 2, title: "Half Saree — Festive Edit", image: imageFor("Half Saree-1") },
        { id: 3, title: "Half Saree — Everyday Comfort", image: imageFor("Half Saree-2") },
        { id: 4, title: "Half Saree — Designer Pick", image: imageFor("Half Saree-3") },
        { id: 5, title: "Half Saree — New Season", image: imageFor("Half Saree-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Half Saree"
      category="Women"
      categorySlug="women"
      group="Ethnic Wear"
      description="Discover our Half Saree collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
