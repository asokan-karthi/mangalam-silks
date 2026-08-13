import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Kurtis > A-Line
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenKurtisALinePage() {
  // At least 5 collection looks for "A-Line" — add more items here any time.
  const collections = [
        { id: 1, title: "A-Line — Classic Weave", image: imageFor("A-Line-0") },
        { id: 2, title: "A-Line — Festive Edit", image: imageFor("A-Line-1") },
        { id: 3, title: "A-Line — Everyday Comfort", image: imageFor("A-Line-2") },
        { id: 4, title: "A-Line — Designer Pick", image: imageFor("A-Line-3") },
        { id: 5, title: "A-Line — New Season", image: imageFor("A-Line-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="A-Line"
      category="Women"
      categorySlug="women"
      group="Kurtis"
      description="Discover our A-Line collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
