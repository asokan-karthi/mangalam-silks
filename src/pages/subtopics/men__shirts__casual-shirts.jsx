import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Men > Shirts > Casual Shirts
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function MenShirtsCasualShirtsPage() {
  // At least 5 collection looks for "Casual Shirts" — add more items here any time.
  const collections = [
        { id: 1, title: "Casual Shirts — Classic Weave", image: imageFor("Casual Shirts-0") },
        { id: 2, title: "Casual Shirts — Festive Edit", image: imageFor("Casual Shirts-1") },
        { id: 3, title: "Casual Shirts — Everyday Comfort", image: imageFor("Casual Shirts-2") },
        { id: 4, title: "Casual Shirts — Designer Pick", image: imageFor("Casual Shirts-3") },
        { id: 5, title: "Casual Shirts — New Season", image: imageFor("Casual Shirts-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Casual Shirts"
      category="Men"
      categorySlug="men"
      group="Shirts"
      description="Discover our Casual Shirts collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
