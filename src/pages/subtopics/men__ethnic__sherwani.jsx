import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Men > Ethnic > Sherwani
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function MenEthnicSherwaniPage() {
  // At least 5 collection looks for "Sherwani" — add more items here any time.
  const collections = [
        { id: 1, title: "Sherwani — Classic Weave", image: imageFor("Sherwani-0") },
        { id: 2, title: "Sherwani — Festive Edit", image: imageFor("Sherwani-1") },
        { id: 3, title: "Sherwani — Everyday Comfort", image: imageFor("Sherwani-2") },
        { id: 4, title: "Sherwani — Designer Pick", image: imageFor("Sherwani-3") },
        { id: 5, title: "Sherwani — New Season", image: imageFor("Sherwani-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Sherwani"
      category="Men"
      categorySlug="men"
      group="Ethnic"
      description="Discover our Sherwani collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
