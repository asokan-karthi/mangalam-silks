import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Men > Ethnic > Kurta Pajama
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function MenEthnicKurtaPajamaPage() {
  // At least 5 collection looks for "Kurta Pajama" — add more items here any time.
  const collections = [
        { id: 1, title: "Kurta Pajama — Classic Weave", image: imageFor("Kurta Pajama-0") },
        { id: 2, title: "Kurta Pajama — Festive Edit", image: imageFor("Kurta Pajama-1") },
        { id: 3, title: "Kurta Pajama — Everyday Comfort", image: imageFor("Kurta Pajama-2") },
        { id: 4, title: "Kurta Pajama — Designer Pick", image: imageFor("Kurta Pajama-3") },
        { id: 5, title: "Kurta Pajama — New Season", image: imageFor("Kurta Pajama-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Kurta Pajama"
      category="Men"
      categorySlug="men"
      group="Ethnic"
      description="Discover our Kurta Pajama collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
