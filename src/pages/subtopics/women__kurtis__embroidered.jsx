import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Kurtis > Embroidered
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenKurtisEmbroideredPage() {
  // At least 5 collection looks for "Embroidered" — add more items here any time.
  const collections = [
        { id: 1, title: "Embroidered — Classic Weave", image: imageFor("Embroidered-0") },
        { id: 2, title: "Embroidered — Festive Edit", image: imageFor("Embroidered-1") },
        { id: 3, title: "Embroidered — Everyday Comfort", image: imageFor("Embroidered-2") },
        { id: 4, title: "Embroidered — Designer Pick", image: imageFor("Embroidered-3") },
        { id: 5, title: "Embroidered — New Season", image: imageFor("Embroidered-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Embroidered"
      category="Women"
      categorySlug="women"
      group="Kurtis"
      description="Discover our Embroidered collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
