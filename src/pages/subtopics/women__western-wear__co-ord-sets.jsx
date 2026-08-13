import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Western Wear > Co-ord Sets
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenWesternWearCoOrdSetsPage() {
  // At least 5 collection looks for "Co-ord Sets" — add more items here any time.
  const collections = [
        { id: 1, title: "Co-ord Sets — Classic Weave", image: imageFor("Co-ord Sets-0") },
        { id: 2, title: "Co-ord Sets — Festive Edit", image: imageFor("Co-ord Sets-1") },
        { id: 3, title: "Co-ord Sets — Everyday Comfort", image: imageFor("Co-ord Sets-2") },
        { id: 4, title: "Co-ord Sets — Designer Pick", image: imageFor("Co-ord Sets-3") },
        { id: 5, title: "Co-ord Sets — New Season", image: imageFor("Co-ord Sets-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Co-ord Sets"
      category="Women"
      categorySlug="women"
      group="Western Wear"
      description="Discover our Co-ord Sets collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
