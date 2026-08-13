import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Salwar > Gharara
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSalwarGhararaPage() {
  // At least 5 collection looks for "Gharara" — add more items here any time.
  const collections = [
        { id: 1, title: "Gharara — Classic Weave", image: imageFor("Gharara-0") },
        { id: 2, title: "Gharara — Festive Edit", image: imageFor("Gharara-1") },
        { id: 3, title: "Gharara — Everyday Comfort", image: imageFor("Gharara-2") },
        { id: 4, title: "Gharara — Designer Pick", image: imageFor("Gharara-3") },
        { id: 5, title: "Gharara — New Season", image: imageFor("Gharara-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Gharara"
      category="Women"
      categorySlug="women"
      group="Salwar"
      description="Discover our Gharara collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
