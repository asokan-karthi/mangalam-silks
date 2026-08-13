import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Kids > Boys > Shorts
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function KidsBoysShortsPage() {
  // At least 5 collection looks for "Shorts" — add more items here any time.
  const collections = [
        { id: 1, title: "Shorts — Classic Weave", image: imageFor("Shorts-0") },
        { id: 2, title: "Shorts — Festive Edit", image: imageFor("Shorts-1") },
        { id: 3, title: "Shorts — Everyday Comfort", image: imageFor("Shorts-2") },
        { id: 4, title: "Shorts — Designer Pick", image: imageFor("Shorts-3") },
        { id: 5, title: "Shorts — New Season", image: imageFor("Shorts-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Shorts"
      category="Kids"
      categorySlug="kids"
      group="Boys"
      description="Discover our Shorts collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
