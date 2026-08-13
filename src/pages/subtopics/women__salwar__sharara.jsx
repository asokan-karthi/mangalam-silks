import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Salwar > Sharara
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSalwarShararaPage() {
  // At least 5 collection looks for "Sharara" — add more items here any time.
  const collections = [
        { id: 1, title: "Sharara — Classic Weave", image: imageFor("Sharara-0") },
        { id: 2, title: "Sharara — Festive Edit", image: imageFor("Sharara-1") },
        { id: 3, title: "Sharara — Everyday Comfort", image: imageFor("Sharara-2") },
        { id: 4, title: "Sharara — Designer Pick", image: imageFor("Sharara-3") },
        { id: 5, title: "Sharara — New Season", image: imageFor("Sharara-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Sharara"
      category="Women"
      categorySlug="women"
      group="Salwar"
      description="Discover our Sharara collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
