import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Salwar > Anarkali
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSalwarAnarkaliPage() {
  // At least 5 collection looks for "Anarkali" — add more items here any time.
  const collections = [
        { id: 1, title: "Anarkali — Classic Weave", image: imageFor("Anarkali-0") },
        { id: 2, title: "Anarkali — Festive Edit", image: imageFor("Anarkali-1") },
        { id: 3, title: "Anarkali — Everyday Comfort", image: imageFor("Anarkali-2") },
        { id: 4, title: "Anarkali — Designer Pick", image: imageFor("Anarkali-3") },
        { id: 5, title: "Anarkali — New Season", image: imageFor("Anarkali-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Anarkali"
      category="Women"
      categorySlug="women"
      group="Salwar"
      description="Discover our Anarkali collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
