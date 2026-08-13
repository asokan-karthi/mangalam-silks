import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Western Wear > Jeans
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenWesternWearJeansPage() {
  // At least 5 collection looks for "Jeans" — add more items here any time.
  const collections = [
        { id: 1, title: "Jeans — Classic Weave", image: imageFor("Jeans-0") },
        { id: 2, title: "Jeans — Festive Edit", image: imageFor("Jeans-1") },
        { id: 3, title: "Jeans — Everyday Comfort", image: imageFor("Jeans-2") },
        { id: 4, title: "Jeans — Designer Pick", image: imageFor("Jeans-3") },
        { id: 5, title: "Jeans — New Season", image: imageFor("Jeans-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Jeans"
      category="Women"
      categorySlug="women"
      group="Western Wear"
      description="Discover our Jeans collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
