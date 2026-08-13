import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Men > Ethnic > Veshti
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function MenEthnicVeshtiPage() {
  // At least 5 collection looks for "Veshti" — add more items here any time.
  const collections = [
        { id: 1, title: "Veshti — Classic Weave", image: imageFor("Veshti-0") },
        { id: 2, title: "Veshti — Festive Edit", image: imageFor("Veshti-1") },
        { id: 3, title: "Veshti — Everyday Comfort", image: imageFor("Veshti-2") },
        { id: 4, title: "Veshti — Designer Pick", image: imageFor("Veshti-3") },
        { id: 5, title: "Veshti — New Season", image: imageFor("Veshti-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Veshti"
      category="Men"
      categorySlug="men"
      group="Ethnic"
      description="Discover our Veshti collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
