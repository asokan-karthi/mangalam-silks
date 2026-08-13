import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Accessories > Accessories > Handbags
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function AccessoriesAccessoriesHandbagsPage() {
  // At least 5 collection looks for "Handbags" — add more items here any time.
  const collections = [
        { id: 1, title: "Handbags — Classic Weave", image: imageFor("Handbags-0") },
        { id: 2, title: "Handbags — Festive Edit", image: imageFor("Handbags-1") },
        { id: 3, title: "Handbags — Everyday Comfort", image: imageFor("Handbags-2") },
        { id: 4, title: "Handbags — Designer Pick", image: imageFor("Handbags-3") },
        { id: 5, title: "Handbags — New Season", image: imageFor("Handbags-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Handbags"
      category="Accessories"
      categorySlug="accessories"
      group="Accessories"
      description="Discover our Handbags collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
