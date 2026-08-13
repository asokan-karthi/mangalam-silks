import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Accessories > Accessories > Shawls
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function AccessoriesAccessoriesShawlsPage() {
  // At least 5 collection looks for "Shawls" — add more items here any time.
  const collections = [
        { id: 1, title: "Shawls — Classic Weave", image: imageFor("Shawls-0") },
        { id: 2, title: "Shawls — Festive Edit", image: imageFor("Shawls-1") },
        { id: 3, title: "Shawls — Everyday Comfort", image: imageFor("Shawls-2") },
        { id: 4, title: "Shawls — Designer Pick", image: imageFor("Shawls-3") },
        { id: 5, title: "Shawls — New Season", image: imageFor("Shawls-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Shawls"
      category="Accessories"
      categorySlug="accessories"
      group="Accessories"
      description="Discover our Shawls collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
