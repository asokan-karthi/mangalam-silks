import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: New Arrivals > New Arrivals > Seasonal Collection
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function NewArrivalsNewArrivalsSeasonalCollectionPage() {
  // At least 5 collection looks for "Seasonal Collection" — add more items here any time.
  const collections = [
        { id: 1, title: "Seasonal Collection — Classic Weave", image: imageFor("Seasonal Collection-0") },
        { id: 2, title: "Seasonal Collection — Festive Edit", image: imageFor("Seasonal Collection-1") },
        { id: 3, title: "Seasonal Collection — Everyday Comfort", image: imageFor("Seasonal Collection-2") },
        { id: 4, title: "Seasonal Collection — Designer Pick", image: imageFor("Seasonal Collection-3") },
        { id: 5, title: "Seasonal Collection — New Season", image: imageFor("Seasonal Collection-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Seasonal Collection"
      category="New Arrivals"
      categorySlug="new-arrivals"
      group="New Arrivals"
      description="Discover our Seasonal Collection collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
