import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Men > Ethnic > Kurta
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function MenEthnicKurtaPage() {
  // At least 5 collection looks for "Kurta" — add more items here any time.
  const collections = [
        { id: 1, title: "Kurta — Classic Weave", image: imageFor("Kurta-0") },
        { id: 2, title: "Kurta — Festive Edit", image: imageFor("Kurta-1") },
        { id: 3, title: "Kurta — Everyday Comfort", image: imageFor("Kurta-2") },
        { id: 4, title: "Kurta — Designer Pick", image: imageFor("Kurta-3") },
        { id: 5, title: "Kurta — New Season", image: imageFor("Kurta-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Kurta"
      category="Men"
      categorySlug="men"
      group="Ethnic"
      description="Discover our Kurta collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
