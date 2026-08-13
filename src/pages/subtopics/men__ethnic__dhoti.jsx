import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Men > Ethnic > Dhoti
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function MenEthnicDhotiPage() {
  // At least 5 collection looks for "Dhoti" — add more items here any time.
  const collections = [
        { id: 1, title: "Dhoti — Classic Weave", image: imageFor("Dhoti-0") },
        { id: 2, title: "Dhoti — Festive Edit", image: imageFor("Dhoti-1") },
        { id: 3, title: "Dhoti — Everyday Comfort", image: imageFor("Dhoti-2") },
        { id: 4, title: "Dhoti — Designer Pick", image: imageFor("Dhoti-3") },
        { id: 5, title: "Dhoti — New Season", image: imageFor("Dhoti-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Dhoti"
      category="Men"
      categorySlug="men"
      group="Ethnic"
      description="Discover our Dhoti collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
