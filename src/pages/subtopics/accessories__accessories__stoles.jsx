import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Accessories > Accessories > Stoles
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function AccessoriesAccessoriesStolesPage() {
  // At least 5 collection looks for "Stoles" — add more items here any time.
  const collections = [
        { id: 1, title: "Stoles — Classic Weave", image: imageFor("Stoles-0") },
        { id: 2, title: "Stoles — Festive Edit", image: imageFor("Stoles-1") },
        { id: 3, title: "Stoles — Everyday Comfort", image: imageFor("Stoles-2") },
        { id: 4, title: "Stoles — Designer Pick", image: imageFor("Stoles-3") },
        { id: 5, title: "Stoles — New Season", image: imageFor("Stoles-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Stoles"
      category="Accessories"
      categorySlug="accessories"
      group="Accessories"
      description="Discover our Stoles collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
