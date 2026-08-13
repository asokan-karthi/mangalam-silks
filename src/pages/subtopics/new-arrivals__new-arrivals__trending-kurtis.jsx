import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: New Arrivals > New Arrivals > Trending Kurtis
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function NewArrivalsNewArrivalsTrendingKurtisPage() {
  // At least 5 collection looks for "Trending Kurtis" — add more items here any time.
  const collections = [
        { id: 1, title: "Trending Kurtis — Classic Weave", image: imageFor("Trending Kurtis-0") },
        { id: 2, title: "Trending Kurtis — Festive Edit", image: imageFor("Trending Kurtis-1") },
        { id: 3, title: "Trending Kurtis — Everyday Comfort", image: imageFor("Trending Kurtis-2") },
        { id: 4, title: "Trending Kurtis — Designer Pick", image: imageFor("Trending Kurtis-3") },
        { id: 5, title: "Trending Kurtis — New Season", image: imageFor("Trending Kurtis-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Trending Kurtis"
      category="New Arrivals"
      categorySlug="new-arrivals"
      group="New Arrivals"
      description="Discover our Trending Kurtis collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
