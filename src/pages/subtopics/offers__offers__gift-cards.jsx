import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Offers > Offers > Gift Cards
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function OffersOffersGiftCardsPage() {
  // At least 5 collection looks for "Gift Cards" — add more items here any time.
  const collections = [
        { id: 1, title: "Gift Cards — Classic Weave", image: imageFor("Gift Cards-0") },
        { id: 2, title: "Gift Cards — Festive Edit", image: imageFor("Gift Cards-1") },
        { id: 3, title: "Gift Cards — Everyday Comfort", image: imageFor("Gift Cards-2") },
        { id: 4, title: "Gift Cards — Designer Pick", image: imageFor("Gift Cards-3") },
        { id: 5, title: "Gift Cards — New Season", image: imageFor("Gift Cards-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Gift Cards"
      category="Offers"
      categorySlug="offers"
      group="Offers"
      description="Discover our Gift Cards collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
