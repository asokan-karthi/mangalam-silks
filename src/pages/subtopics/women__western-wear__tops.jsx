import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Western Wear > Tops
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenWesternWearTopsPage() {
  // At least 5 collection looks for "Tops" — add more items here any time.
  const collections = [
        { id: 1, title: "Tops — Classic Weave", image: imageFor("Tops-0") },
        { id: 2, title: "Tops — Festive Edit", image: imageFor("Tops-1") },
        { id: 3, title: "Tops — Everyday Comfort", image: imageFor("Tops-2") },
        { id: 4, title: "Tops — Designer Pick", image: imageFor("Tops-3") },
        { id: 5, title: "Tops — New Season", image: imageFor("Tops-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Tops"
      category="Women"
      categorySlug="women"
      group="Western Wear"
      description="Discover our Tops collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
