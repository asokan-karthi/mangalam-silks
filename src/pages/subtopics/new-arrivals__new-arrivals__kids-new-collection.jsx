import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: New Arrivals > New Arrivals > Kids New Collection
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function NewArrivalsNewArrivalsKidsNewCollectionPage() {
  // At least 5 collection looks for "Kids New Collection" — add more items here any time.
  const collections = [
        { id: 1, title: "Kids New Collection — Classic Weave", image: imageFor("Kids New Collection-0") },
        { id: 2, title: "Kids New Collection — Festive Edit", image: imageFor("Kids New Collection-1") },
        { id: 3, title: "Kids New Collection — Everyday Comfort", image: imageFor("Kids New Collection-2") },
        { id: 4, title: "Kids New Collection — Designer Pick", image: imageFor("Kids New Collection-3") },
        { id: 5, title: "Kids New Collection — New Season", image: imageFor("Kids New Collection-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Kids New Collection"
      category="New Arrivals"
      categorySlug="new-arrivals"
      group="New Arrivals"
      description="Discover our Kids New Collection collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
