import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Offers > Offers > Clearance Sale
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function OffersOffersClearanceSalePage() {
  // At least 5 collection looks for "Clearance Sale" — add more items here any time.
  const collections = [
        { id: 1, title: "Clearance Sale — Classic Weave", image: imageFor("Clearance Sale-0") },
        { id: 2, title: "Clearance Sale — Festive Edit", image: imageFor("Clearance Sale-1") },
        { id: 3, title: "Clearance Sale — Everyday Comfort", image: imageFor("Clearance Sale-2") },
        { id: 4, title: "Clearance Sale — Designer Pick", image: imageFor("Clearance Sale-3") },
        { id: 5, title: "Clearance Sale — New Season", image: imageFor("Clearance Sale-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Clearance Sale"
      category="Offers"
      categorySlug="offers"
      group="Offers"
      description="Discover our Clearance Sale collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
