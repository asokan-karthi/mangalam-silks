import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Men > Shirts > Cotton Shirts
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function MenShirtsCottonShirtsPage() {
  // At least 5 collection looks for "Cotton Shirts" — add more items here any time.
  const collections = [
        { id: 1, title: "Cotton Shirts — Classic Weave", image: imageFor("Cotton Shirts-0") },
        { id: 2, title: "Cotton Shirts — Festive Edit", image: imageFor("Cotton Shirts-1") },
        { id: 3, title: "Cotton Shirts — Everyday Comfort", image: imageFor("Cotton Shirts-2") },
        { id: 4, title: "Cotton Shirts — Designer Pick", image: imageFor("Cotton Shirts-3") },
        { id: 5, title: "Cotton Shirts — New Season", image: imageFor("Cotton Shirts-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Cotton Shirts"
      category="Men"
      categorySlug="men"
      group="Shirts"
      description="Discover our Cotton Shirts collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
