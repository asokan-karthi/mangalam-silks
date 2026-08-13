import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Ethnic Wear > Gowns
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenEthnicWearGownsPage() {
  // At least 5 collection looks for "Gowns" — add more items here any time.
  const collections = [
        { id: 1, title: "Gowns — Classic Weave", image: imageFor("Gowns-0") },
        { id: 2, title: "Gowns — Festive Edit", image: imageFor("Gowns-1") },
        { id: 3, title: "Gowns — Everyday Comfort", image: imageFor("Gowns-2") },
        { id: 4, title: "Gowns — Designer Pick", image: imageFor("Gowns-3") },
        { id: 5, title: "Gowns — New Season", image: imageFor("Gowns-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Gowns"
      category="Women"
      categorySlug="women"
      group="Ethnic Wear"
      description="Discover our Gowns collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
