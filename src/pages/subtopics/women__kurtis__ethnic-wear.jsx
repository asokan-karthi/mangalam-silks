import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Kurtis > Ethnic Wear
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenKurtisEthnicWearPage() {
  // At least 5 collection looks for "Ethnic Wear" — add more items here any time.
  const collections = [
        { id: 1, title: "Ethnic Wear — Classic Weave", image: imageFor("Ethnic Wear-0") },
        { id: 2, title: "Ethnic Wear — Festive Edit", image: imageFor("Ethnic Wear-1") },
        { id: 3, title: "Ethnic Wear — Everyday Comfort", image: imageFor("Ethnic Wear-2") },
        { id: 4, title: "Ethnic Wear — Designer Pick", image: imageFor("Ethnic Wear-3") },
        { id: 5, title: "Ethnic Wear — New Season", image: imageFor("Ethnic Wear-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Ethnic Wear"
      category="Women"
      categorySlug="women"
      group="Kurtis"
      description="Discover our Ethnic Wear collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
