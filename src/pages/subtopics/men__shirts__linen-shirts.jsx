import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Men > Shirts > Linen Shirts
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function MenShirtsLinenShirtsPage() {
  // At least 5 collection looks for "Linen Shirts" — add more items here any time.
  const collections = [
        { id: 1, title: "Linen Shirts — Classic Weave", image: imageFor("Linen Shirts-0") },
        { id: 2, title: "Linen Shirts — Festive Edit", image: imageFor("Linen Shirts-1") },
        { id: 3, title: "Linen Shirts — Everyday Comfort", image: imageFor("Linen Shirts-2") },
        { id: 4, title: "Linen Shirts — Designer Pick", image: imageFor("Linen Shirts-3") },
        { id: 5, title: "Linen Shirts — New Season", image: imageFor("Linen Shirts-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Linen Shirts"
      category="Men"
      categorySlug="men"
      group="Shirts"
      description="Discover our Linen Shirts collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
