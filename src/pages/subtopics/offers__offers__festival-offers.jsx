import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Offers > Offers > Festival Offers
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function OffersOffersFestivalOffersPage() {
  // At least 5 collection looks for "Festival Offers" — add more items here any time.
  const collections = [
        { id: 1, title: "Festival Offers — Classic Weave", image: imageFor("Festival Offers-0") },
        { id: 2, title: "Festival Offers — Festive Edit", image: imageFor("Festival Offers-1") },
        { id: 3, title: "Festival Offers — Everyday Comfort", image: imageFor("Festival Offers-2") },
        { id: 4, title: "Festival Offers — Designer Pick", image: imageFor("Festival Offers-3") },
        { id: 5, title: "Festival Offers — New Season", image: imageFor("Festival Offers-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Festival Offers"
      category="Offers"
      categorySlug="offers"
      group="Offers"
      description="Discover our Festival Offers collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
