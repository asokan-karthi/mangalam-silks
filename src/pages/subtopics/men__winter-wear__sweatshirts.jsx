import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Men > Winter Wear > Sweatshirts
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function MenWinterWearSweatshirtsPage() {
  // At least 5 collection looks for "Sweatshirts" — add more items here any time.
  const collections = [
        { id: 1, title: "Sweatshirts — Classic Weave", image: imageFor("Sweatshirts-0") },
        { id: 2, title: "Sweatshirts — Festive Edit", image: imageFor("Sweatshirts-1") },
        { id: 3, title: "Sweatshirts — Everyday Comfort", image: imageFor("Sweatshirts-2") },
        { id: 4, title: "Sweatshirts — Designer Pick", image: imageFor("Sweatshirts-3") },
        { id: 5, title: "Sweatshirts — New Season", image: imageFor("Sweatshirts-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Sweatshirts"
      category="Men"
      categorySlug="men"
      group="Winter Wear"
      description="Discover our Sweatshirts collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
