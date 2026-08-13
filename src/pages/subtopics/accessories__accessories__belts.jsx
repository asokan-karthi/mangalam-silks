import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Accessories > Accessories > Belts
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function AccessoriesAccessoriesBeltsPage() {
  // At least 5 collection looks for "Belts" — add more items here any time.
  const collections = [
        { id: 1, title: "Belts — Classic Weave", image: imageFor("/media/product-01.jpg") },
        { id: 2, title: "Belts — Festive Edit", image: imageFor("/media/product-01.jpg") },
        { id: 3, title: "Belts — Everyday Comfort", image: imageFor("Belts-2") },
        { id: 4, title: "Belts — Designer Pick", image: imageFor("Belts-3") },
        { id: 5, title: "Belts — New Season", image: imageFor("Belts-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Belts"
      category="Accessories"
      categorySlug="accessories"
      group="Accessories"
      description="Discover our Belts collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
