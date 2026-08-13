import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Men > T-Shirts > Polo
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function MenTShirtsPoloPage() {
  // At least 5 collection looks for "Polo" — add more items here any time.
  const collections = [
        { id: 1, title: "Polo — Classic Weave", image: imageFor("Polo-0") },
        { id: 2, title: "Polo — Festive Edit", image: imageFor("Polo-1") },
        { id: 3, title: "Polo — Everyday Comfort", image: imageFor("Polo-2") },
        { id: 4, title: "Polo — Designer Pick", image: imageFor("Polo-3") },
        { id: 5, title: "Polo — New Season", image: imageFor("Polo-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Polo"
      category="Men"
      categorySlug="men"
      group="T-Shirts"
      description="Discover our Polo collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
