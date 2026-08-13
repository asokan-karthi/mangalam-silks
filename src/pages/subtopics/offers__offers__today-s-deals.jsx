import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Offers > Offers > Today's Deals
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function OffersOffersTodaySDealsPage() {
  // At least 5 collection looks for "Today's Deals" — add more items here any time.
  const collections = [
        { id: 1, title: "Today's Deals — Classic Weave", image: imageFor("Today's Deals-0") },
        { id: 2, title: "Today's Deals — Festive Edit", image: imageFor("Today's Deals-1") },
        { id: 3, title: "Today's Deals — Everyday Comfort", image: imageFor("Today's Deals-2") },
        { id: 4, title: "Today's Deals — Designer Pick", image: imageFor("Today's Deals-3") },
        { id: 5, title: "Today's Deals — New Season", image: imageFor("Today's Deals-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Today's Deals"
      category="Offers"
      categorySlug="offers"
      group="Offers"
      description="Discover our Today's Deals collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
