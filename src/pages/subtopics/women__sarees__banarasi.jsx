import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Sarees > Banarasi
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSareesBanarasiPage() {
  // At least 5 collection looks for "Banarasi" — add more items here any time.
  const collections = [
        { id: 1, title: "Banarasi — Classic Weave", image: imageFor("Banarasi-0") },
        { id: 2, title: "Banarasi — Festive Edit", image: imageFor("Banarasi-1") },
        { id: 3, title: "Banarasi — Everyday Comfort", image: imageFor("Banarasi-2") },
        { id: 4, title: "Banarasi — Designer Pick", image: imageFor("Banarasi-3") },
        { id: 5, title: "Banarasi — New Season", image: imageFor("Banarasi-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Banarasi"
      category="Women"
      categorySlug="women"
      group="Sarees"
      description="Discover our Banarasi collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
