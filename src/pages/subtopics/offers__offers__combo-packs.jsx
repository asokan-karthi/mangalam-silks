import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Offers > Offers > Combo Packs
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function OffersOffersComboPacksPage() {
  // At least 5 collection looks for "Combo Packs" — add more items here any time.
  const collections = [
        { id: 1, title: "Combo Packs — Classic Weave", image: imageFor("Combo Packs-0") },
        { id: 2, title: "Combo Packs — Festive Edit", image: imageFor("Combo Packs-1") },
        { id: 3, title: "Combo Packs — Everyday Comfort", image: imageFor("Combo Packs-2") },
        { id: 4, title: "Combo Packs — Designer Pick", image: imageFor("Combo Packs-3") },
        { id: 5, title: "Combo Packs — New Season", image: imageFor("Combo Packs-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Combo Packs"
      category="Offers"
      categorySlug="offers"
      group="Offers"
      description="Discover our Combo Packs collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
