import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Bridal > Groom > Kurta Set
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function BridalGroomKurtaSetPage() {
  // At least 5 collection looks for "Kurta Set" — add more items here any time.
  const collections = [
        { id: 1, title: "Kurta Set — Classic Weave", image: imageFor("Kurta Set-0") },
        { id: 2, title: "Kurta Set — Festive Edit", image: imageFor("Kurta Set-1") },
        { id: 3, title: "Kurta Set — Everyday Comfort", image: imageFor("Kurta Set-2") },
        { id: 4, title: "Kurta Set — Designer Pick", image: imageFor("Kurta Set-3") },
        { id: 5, title: "Kurta Set — New Season", image: imageFor("Kurta Set-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Kurta Set"
      category="Bridal"
      categorySlug="bridal"
      group="Groom"
      description="Discover our Kurta Set collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
