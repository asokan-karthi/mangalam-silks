import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Salwar > Readymade Sets
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSalwarReadymadeSetsPage() {
  // At least 5 collection looks for "Readymade Sets" — add more items here any time.
  const collections = [
        { id: 1, title: "Readymade Sets — Classic Weave", image: imageFor("Readymade Sets-0") },
        { id: 2, title: "Readymade Sets — Festive Edit", image: imageFor("Readymade Sets-1") },
        { id: 3, title: "Readymade Sets — Everyday Comfort", image: imageFor("Readymade Sets-2") },
        { id: 4, title: "Readymade Sets — Designer Pick", image: imageFor("Readymade Sets-3") },
        { id: 5, title: "Readymade Sets — New Season", image: imageFor("Readymade Sets-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Readymade Sets"
      category="Women"
      categorySlug="women"
      group="Salwar"
      description="Discover our Readymade Sets collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
