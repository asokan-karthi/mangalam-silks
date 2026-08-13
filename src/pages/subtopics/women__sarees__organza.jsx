import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Sarees > Organza
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSareesOrganzaPage() {
  // At least 5 collection looks for "Organza" — add more items here any time.
  const collections = [
        { id: 1, title: "Organza — Classic Weave", image: imageFor("Organza-0") },
        { id: 2, title: "Organza — Festive Edit", image: imageFor("Organza-1") },
        { id: 3, title: "Organza — Everyday Comfort", image: imageFor("Organza-2") },
        { id: 4, title: "Organza — Designer Pick", image: imageFor("Organza-3") },
        { id: 5, title: "Organza — New Season", image: imageFor("Organza-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Organza"
      category="Women"
      categorySlug="women"
      group="Sarees"
      description="Discover our Organza collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
