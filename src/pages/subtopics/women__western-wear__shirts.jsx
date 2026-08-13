import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Western Wear > Shirts
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenWesternWearShirtsPage() {
  // At least 5 collection looks for "Shirts" — add more items here any time.
  const collections = [
        { id: 1, title: "Shirts — Classic Weave", image: imageFor("Shirts-0") },
        { id: 2, title: "Shirts — Festive Edit", image: imageFor("Shirts-1") },
        { id: 3, title: "Shirts — Everyday Comfort", image: imageFor("Shirts-2") },
        { id: 4, title: "Shirts — Designer Pick", image: imageFor("Shirts-3") },
        { id: 5, title: "Shirts — New Season", image: imageFor("Shirts-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Shirts"
      category="Women"
      categorySlug="women"
      group="Western Wear"
      description="Discover our Shirts collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
