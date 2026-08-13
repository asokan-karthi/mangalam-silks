import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Bridal > Bride > Bridal Accessories
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function BridalBrideBridalAccessoriesPage() {
  // At least 5 collection looks for "Bridal Accessories" — add more items here any time.
  const collections = [
        { id: 1, title: "Bridal Accessories — Classic Weave", image: imageFor("Bridal Accessories-0") },
        { id: 2, title: "Bridal Accessories — Festive Edit", image: imageFor("Bridal Accessories-1") },
        { id: 3, title: "Bridal Accessories — Everyday Comfort", image: imageFor("Bridal Accessories-2") },
        { id: 4, title: "Bridal Accessories — Designer Pick", image: imageFor("Bridal Accessories-3") },
        { id: 5, title: "Bridal Accessories — New Season", image: imageFor("Bridal Accessories-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Bridal Accessories"
      category="Bridal"
      categorySlug="bridal"
      group="Bride"
      description="Discover our Bridal Accessories collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
