import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Sarees > Linen
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSareesLinenPage() {
  // At least 5 collection looks for "Linen" — add more items here any time.
  const collections = [
        { id: 1, title: "Linen — Classic Weave", image: imageFor("Linen-0") },
        { id: 2, title: "Linen — Festive Edit", image: imageFor("Linen-1") },
        { id: 3, title: "Linen — Everyday Comfort", image: imageFor("Linen-2") },
        { id: 4, title: "Linen — Designer Pick", image: imageFor("Linen-3") },
        { id: 5, title: "Linen — New Season", image: imageFor("Linen-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Linen"
      category="Women"
      categorySlug="women"
      group="Sarees"
      description="Discover our Linen collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
