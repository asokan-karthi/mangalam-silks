import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Ethnic Wear > Dupatta Sets
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenEthnicWearDupattaSetsPage() {
  // At least 5 collection looks for "Dupatta Sets" — add more items here any time.
  const collections = [
        { id: 1, title: "Dupatta Sets — Classic Weave", image: imageFor("Dupatta Sets-0") },
        { id: 2, title: "Dupatta Sets — Festive Edit", image: imageFor("Dupatta Sets-1") },
        { id: 3, title: "Dupatta Sets — Everyday Comfort", image: imageFor("Dupatta Sets-2") },
        { id: 4, title: "Dupatta Sets — Designer Pick", image: imageFor("Dupatta Sets-3") },
        { id: 5, title: "Dupatta Sets — New Season", image: imageFor("Dupatta Sets-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Dupatta Sets"
      category="Women"
      categorySlug="women"
      group="Ethnic Wear"
      description="Discover our Dupatta Sets collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
