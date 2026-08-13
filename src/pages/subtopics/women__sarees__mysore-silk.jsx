import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Sarees > Mysore Silk
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSareesMysoreSilkPage() {
  // At least 5 collection looks for "Mysore Silk" — add more items here any time.
  const collections = [
        { id: 1, title: "Mysore Silk — Classic Weave", image: imageFor("Mysore Silk-0") },
        { id: 2, title: "Mysore Silk — Festive Edit", image: imageFor("Mysore Silk-1") },
        { id: 3, title: "Mysore Silk — Everyday Comfort", image: imageFor("Mysore Silk-2") },
        { id: 4, title: "Mysore Silk — Designer Pick", image: imageFor("Mysore Silk-3") },
        { id: 5, title: "Mysore Silk — New Season", image: imageFor("Mysore Silk-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Mysore Silk"
      category="Women"
      categorySlug="women"
      group="Sarees"
      description="Discover our Mysore Silk collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
