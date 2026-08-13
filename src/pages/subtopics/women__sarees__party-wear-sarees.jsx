import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Sarees > Party Wear Sarees
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSareesPartyWearSareesPage() {
  // At least 5 collection looks for "Party Wear Sarees" — add more items here any time.
  const collections = [
        { id: 1, title: "Party Wear Sarees — Classic Weave", image: imageFor("Party Wear Sarees-0") },
        { id: 2, title: "Party Wear Sarees — Festive Edit", image: imageFor("Party Wear Sarees-1") },
        { id: 3, title: "Party Wear Sarees — Everyday Comfort", image: imageFor("Party Wear Sarees-2") },
        { id: 4, title: "Party Wear Sarees — Designer Pick", image: imageFor("Party Wear Sarees-3") },
        { id: 5, title: "Party Wear Sarees — New Season", image: imageFor("Party Wear Sarees-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Party Wear Sarees"
      category="Women"
      categorySlug="women"
      group="Sarees"
      description="Discover our Party Wear Sarees collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
