import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Salwar > Churidar
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSalwarChuridarPage() {
  // At least 5 collection looks for "Churidar" — add more items here any time.
  const collections = [
        { id: 1, title: "Churidar — Classic Weave", image: imageFor("Churidar-0") },
        { id: 2, title: "Churidar — Festive Edit", image: imageFor("Churidar-1") },
        { id: 3, title: "Churidar — Everyday Comfort", image: imageFor("Churidar-2") },
        { id: 4, title: "Churidar — Designer Pick", image: imageFor("Churidar-3") },
        { id: 5, title: "Churidar — New Season", image: imageFor("Churidar-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Churidar"
      category="Women"
      categorySlug="women"
      group="Salwar"
      description="Discover our Churidar collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
