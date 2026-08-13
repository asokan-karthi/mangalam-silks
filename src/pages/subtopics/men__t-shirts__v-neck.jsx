import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Men > T-Shirts > V-Neck
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function MenTShirtsVNeckPage() {
  // At least 5 collection looks for "V-Neck" — add more items here any time.
  const collections = [
        { id: 1, title: "V-Neck — Classic Weave", image: imageFor("V-Neck-0") },
        { id: 2, title: "V-Neck — Festive Edit", image: imageFor("V-Neck-1") },
        { id: 3, title: "V-Neck — Everyday Comfort", image: imageFor("V-Neck-2") },
        { id: 4, title: "V-Neck — Designer Pick", image: imageFor("V-Neck-3") },
        { id: 5, title: "V-Neck — New Season", image: imageFor("V-Neck-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="V-Neck"
      category="Men"
      categorySlug="men"
      group="T-Shirts"
      description="Discover our V-Neck collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
