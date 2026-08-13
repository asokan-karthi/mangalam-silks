import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: New Arrivals > New Arrivals > Festival Collection
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function NewArrivalsNewArrivalsFestivalCollectionPage() {
  // At least 5 collection looks for "Festival Collection" — add more items here any time.
  const collections = [
        { id: 1, title: "Festival Collection — Classic Weave", image: imageFor("Festival Collection-0") },
        { id: 2, title: "Festival Collection — Festive Edit", image: imageFor("Festival Collection-1") },
        { id: 3, title: "Festival Collection — Everyday Comfort", image: imageFor("Festival Collection-2") },
        { id: 4, title: "Festival Collection — Designer Pick", image: imageFor("Festival Collection-3") },
        { id: 5, title: "Festival Collection — New Season", image: imageFor("Festival Collection-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Festival Collection"
      category="New Arrivals"
      categorySlug="new-arrivals"
      group="New Arrivals"
      description="Discover our Festival Collection collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
