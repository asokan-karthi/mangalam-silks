import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Men > Bottom Wear > Chinos
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function MenBottomWearChinosPage() {
  // At least 5 collection looks for "Chinos" — add more items here any time.
  const collections = [
        { id: 1, title: "Chinos — Classic Weave", image: imageFor("Chinos-0") },
        { id: 2, title: "Chinos — Festive Edit", image: imageFor("Chinos-1") },
        { id: 3, title: "Chinos — Everyday Comfort", image: imageFor("Chinos-2") },
        { id: 4, title: "Chinos — Designer Pick", image: imageFor("Chinos-3") },
        { id: 5, title: "Chinos — New Season", image: imageFor("Chinos-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Chinos"
      category="Men"
      categorySlug="men"
      group="Bottom Wear"
      description="Discover our Chinos collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
