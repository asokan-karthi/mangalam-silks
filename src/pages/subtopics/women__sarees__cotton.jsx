import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Sarees > Cotton
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSareesCottonPage() {
  // At least 5 collection looks for "Cotton" — add more items here any time.
  const collections = [
        { id: 1, title: "Cotton — Classic Weave", image: imageFor("Cotton-0") },
        { id: 2, title: "Cotton — Festive Edit", image: imageFor("Cotton-1") },
        { id: 3, title: "Cotton — Everyday Comfort", image: imageFor("Cotton-2") },
        { id: 4, title: "Cotton — Designer Pick", image: imageFor("Cotton-3") },
        { id: 5, title: "Cotton — New Season", image: imageFor("Cotton-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Cotton"
      category="Women"
      categorySlug="women"
      group="Sarees"
      description="Discover our Cotton collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
