import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Sarees > Georgette
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSareesGeorgettePage() {
  // At least 5 collection looks for "Georgette" — add more items here any time.
  const collections = [
        { id: 1, title: "Georgette — Classic Weave", image: imageFor("Georgette-0") },
        { id: 2, title: "Georgette — Festive Edit", image: imageFor("Georgette-1") },
        { id: 3, title: "Georgette — Everyday Comfort", image: imageFor("Georgette-2") },
        { id: 4, title: "Georgette — Designer Pick", image: imageFor("Georgette-3") },
        { id: 5, title: "Georgette — New Season", image: imageFor("Georgette-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Georgette"
      category="Women"
      categorySlug="women"
      group="Sarees"
      description="Discover our Georgette collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
