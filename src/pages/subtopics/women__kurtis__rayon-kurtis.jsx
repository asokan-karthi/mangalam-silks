import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Kurtis > Rayon Kurtis
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenKurtisRayonKurtisPage() {
  // At least 5 collection looks for "Rayon Kurtis" — add more items here any time.
  const collections = [
        { id: 1, title: "Rayon Kurtis — Classic Weave", image: imageFor("Rayon Kurtis-0") },
        { id: 2, title: "Rayon Kurtis — Festive Edit", image: imageFor("Rayon Kurtis-1") },
        { id: 3, title: "Rayon Kurtis — Everyday Comfort", image: imageFor("Rayon Kurtis-2") },
        { id: 4, title: "Rayon Kurtis — Designer Pick", image: imageFor("Rayon Kurtis-3") },
        { id: 5, title: "Rayon Kurtis — New Season", image: imageFor("Rayon Kurtis-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Rayon Kurtis"
      category="Women"
      categorySlug="women"
      group="Kurtis"
      description="Discover our Rayon Kurtis collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
