import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Men > Winter Wear > Hoodies
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function MenWinterWearHoodiesPage() {
  // At least 5 collection looks for "Hoodies" — add more items here any time.
  const collections = [
        { id: 1, title: "Hoodies — Classic Weave", image: imageFor("Hoodies-0") },
        { id: 2, title: "Hoodies — Festive Edit", image: imageFor("Hoodies-1") },
        { id: 3, title: "Hoodies — Everyday Comfort", image: imageFor("Hoodies-2") },
        { id: 4, title: "Hoodies — Designer Pick", image: imageFor("Hoodies-3") },
        { id: 5, title: "Hoodies — New Season", image: imageFor("Hoodies-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Hoodies"
      category="Men"
      categorySlug="men"
      group="Winter Wear"
      description="Discover our Hoodies collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
