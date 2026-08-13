import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: New Arrivals > New Arrivals > New Men's Fashion
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function NewArrivalsNewArrivalsNewMenSFashionPage() {
  // At least 5 collection looks for "New Men's Fashion" — add more items here any time.
  const collections = [
        { id: 1, title: "New Men's Fashion — Classic Weave", image: imageFor("New Men's Fashion-0") },
        { id: 2, title: "New Men's Fashion — Festive Edit", image: imageFor("New Men's Fashion-1") },
        { id: 3, title: "New Men's Fashion — Everyday Comfort", image: imageFor("New Men's Fashion-2") },
        { id: 4, title: "New Men's Fashion — Designer Pick", image: imageFor("New Men's Fashion-3") },
        { id: 5, title: "New Men's Fashion — New Season", image: imageFor("New Men's Fashion-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="New Men's Fashion"
      category="New Arrivals"
      categorySlug="new-arrivals"
      group="New Arrivals"
      description="Discover our New Men's Fashion collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
