import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Kids > Girls > Choridar
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function KidsGirlsChoridarPage() {
  // At least 5 collection looks for "Choridar" — add more items here any time.
  const collections = [
        { id: 1, title: "Choridar — Classic Weave", image: imageFor("Choridar-0") },
        { id: 2, title: "Choridar — Festive Edit", image: imageFor("Choridar-1") },
        { id: 3, title: "Choridar — Everyday Comfort", image: imageFor("Choridar-2") },
        { id: 4, title: "Choridar — Designer Pick", image: imageFor("Choridar-3") },
        { id: 5, title: "Choridar — New Season", image: imageFor("Choridar-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Choridar"
      category="Kids"
      categorySlug="kids"
      group="Girls"
      description="Discover our Choridar collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
