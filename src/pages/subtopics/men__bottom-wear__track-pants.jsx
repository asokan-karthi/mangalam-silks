import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Men > Bottom Wear > Track Pants
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function MenBottomWearTrackPantsPage() {
  // At least 5 collection looks for "Track Pants" — add more items here any time.
  const collections = [
        { id: 1, title: "Track Pants — Classic Weave", image: imageFor("Track Pants-0") },
        { id: 2, title: "Track Pants — Festive Edit", image: imageFor("Track Pants-1") },
        { id: 3, title: "Track Pants — Everyday Comfort", image: imageFor("Track Pants-2") },
        { id: 4, title: "Track Pants — Designer Pick", image: imageFor("Track Pants-3") },
        { id: 5, title: "Track Pants — New Season", image: imageFor("Track Pants-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Track Pants"
      category="Men"
      categorySlug="men"
      group="Bottom Wear"
      description="Discover our Track Pants collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
