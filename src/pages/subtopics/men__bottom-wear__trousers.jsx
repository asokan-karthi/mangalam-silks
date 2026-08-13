import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Men > Bottom Wear > Trousers
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function MenBottomWearTrousersPage() {
  // At least 5 collection looks for "Trousers" — add more items here any time.
  const collections = [
        { id: 1, title: "Trousers — Classic Weave", image: imageFor("Trousers-0") },
        { id: 2, title: "Trousers — Festive Edit", image: imageFor("Trousers-1") },
        { id: 3, title: "Trousers — Everyday Comfort", image: imageFor("Trousers-2") },
        { id: 4, title: "Trousers — Designer Pick", image: imageFor("Trousers-3") },
        { id: 5, title: "Trousers — New Season", image: imageFor("Trousers-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Trousers"
      category="Men"
      categorySlug="men"
      group="Bottom Wear"
      description="Discover our Trousers collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
