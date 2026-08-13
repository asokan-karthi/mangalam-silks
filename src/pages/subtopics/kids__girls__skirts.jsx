import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Kids > Girls > Skirts
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function KidsGirlsSkirtsPage() {
  // At least 5 collection looks for "Skirts" — add more items here any time.
  const collections = [
        { id: 1, title: "Skirts — Classic Weave", image: imageFor("Skirts-0") },
        { id: 2, title: "Skirts — Festive Edit", image: imageFor("Skirts-1") },
        { id: 3, title: "Skirts — Everyday Comfort", image: imageFor("Skirts-2") },
        { id: 4, title: "Skirts — Designer Pick", image: imageFor("Skirts-3") },
        { id: 5, title: "Skirts — New Season", image: imageFor("Skirts-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Skirts"
      category="Kids"
      categorySlug="kids"
      group="Girls"
      description="Discover our Skirts collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
