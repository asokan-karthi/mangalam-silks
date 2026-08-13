import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Bridal > Groom > Blazer
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function BridalGroomBlazerPage() {
  // At least 5 collection looks for "Blazer" — add more items here any time.
  const collections = [
        { id: 1, title: "Blazer — Classic Weave", image: imageFor("Blazer-0") },
        { id: 2, title: "Blazer — Festive Edit", image: imageFor("Blazer-1") },
        { id: 3, title: "Blazer — Everyday Comfort", image: imageFor("Blazer-2") },
        { id: 4, title: "Blazer — Designer Pick", image: imageFor("Blazer-3") },
        { id: 5, title: "Blazer — New Season", image: imageFor("Blazer-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Blazer"
      category="Bridal"
      categorySlug="bridal"
      group="Groom"
      description="Discover our Blazer collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
