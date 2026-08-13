import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Sarees > Tissue Silk
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSareesTissueSilkPage() {
  // At least 5 collection looks for "Tissue Silk" — add more items here any time.
  const collections = [
        { id: 1, title: "Tissue Silk — Classic Weave", image: imageFor("Tissue Silk-0") },
        { id: 2, title: "Tissue Silk — Festive Edit", image: imageFor("Tissue Silk-1") },
        { id: 3, title: "Tissue Silk — Everyday Comfort", image: imageFor("Tissue Silk-2") },
        { id: 4, title: "Tissue Silk — Designer Pick", image: imageFor("Tissue Silk-3") },
        { id: 5, title: "Tissue Silk — New Season", image: imageFor("Tissue Silk-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Tissue Silk"
      category="Women"
      categorySlug="women"
      group="Sarees"
      description="Discover our Tissue Silk collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
