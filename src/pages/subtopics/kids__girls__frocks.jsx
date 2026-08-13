import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Kids > Girls > Frocks
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function KidsGirlsFrocksPage() {
  // At least 5 collection looks for "Frocks" — add more items here any time.
  const collections = [
        { id: 1, title: "Frocks — Classic Weave", image: imageFor("Frocks-0") },
        { id: 2, title: "Frocks — Festive Edit", image: imageFor("Frocks-1") },
        { id: 3, title: "Frocks — Everyday Comfort", image: imageFor("Frocks-2") },
        { id: 4, title: "Frocks — Designer Pick", image: imageFor("Frocks-3") },
        { id: 5, title: "Frocks — New Season", image: imageFor("Frocks-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Frocks"
      category="Kids"
      categorySlug="kids"
      group="Girls"
      description="Discover our Frocks collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
