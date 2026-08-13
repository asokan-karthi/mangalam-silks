import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Offers > Offers > Flat Discounts
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function OffersOffersFlatDiscountsPage() {
  // At least 5 collection looks for "Flat Discounts" — add more items here any time.
  const collections = [
        { id: 1, title: "Flat Discounts — Classic Weave", image: imageFor("Flat Discounts-0") },
        { id: 2, title: "Flat Discounts — Festive Edit", image: imageFor("Flat Discounts-1") },
        { id: 3, title: "Flat Discounts — Everyday Comfort", image: imageFor("Flat Discounts-2") },
        { id: 4, title: "Flat Discounts — Designer Pick", image: imageFor("Flat Discounts-3") },
        { id: 5, title: "Flat Discounts — New Season", image: imageFor("Flat Discounts-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Flat Discounts"
      category="Offers"
      categorySlug="offers"
      group="Offers"
      description="Discover our Flat Discounts collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
