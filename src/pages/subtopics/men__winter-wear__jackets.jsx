import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Men > Winter Wear > Jackets
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function MenWinterWearJacketsPage() {
  // At least 5 collection looks for "Jackets" — add more items here any time.
  const collections = [
        { id: 1, title: "Jackets — Classic Weave", image: imageFor("Jackets-0") },
        { id: 2, title: "Jackets — Festive Edit", image: imageFor("Jackets-1") },
        { id: 3, title: "Jackets — Everyday Comfort", image: imageFor("Jackets-2") },
        { id: 4, title: "Jackets — Designer Pick", image: imageFor("Jackets-3") },
        { id: 5, title: "Jackets — New Season", image: imageFor("Jackets-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Jackets"
      category="Men"
      categorySlug="men"
      group="Winter Wear"
      description="Discover our Jackets collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
