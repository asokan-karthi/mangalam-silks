import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Offers > Offers > Buy 1 Get 1
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function OffersOffersBuy1Get1Page() {
  // At least 5 collection looks for "Buy 1 Get 1" — add more items here any time.
  const collections = [
        { id: 1, title: "Buy 1 Get 1 — Classic Weave", image: imageFor("Buy 1 Get 1-0") },
        { id: 2, title: "Buy 1 Get 1 — Festive Edit", image: imageFor("Buy 1 Get 1-1") },
        { id: 3, title: "Buy 1 Get 1 — Everyday Comfort", image: imageFor("Buy 1 Get 1-2") },
        { id: 4, title: "Buy 1 Get 1 — Designer Pick", image: imageFor("Buy 1 Get 1-3") },
        { id: 5, title: "Buy 1 Get 1 — New Season", image: imageFor("Buy 1 Get 1-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Buy 1 Get 1"
      category="Offers"
      categorySlug="offers"
      group="Offers"
      description="Discover our Buy 1 Get 1 collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
