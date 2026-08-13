import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Sarees > Tussar Silk
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSareesTussarSilkPage() {
  // At least 5 collection looks for "Tussar Silk" — add more items here any time.
  const collections = [
        { id: 1, title: "Tussar Silk — Classic Weave", image: imageFor("Tussar Silk-0") },
        { id: 2, title: "Tussar Silk — Festive Edit", image: imageFor("Tussar Silk-1") },
        { id: 3, title: "Tussar Silk — Everyday Comfort", image: imageFor("Tussar Silk-2") },
        { id: 4, title: "Tussar Silk — Designer Pick", image: imageFor("Tussar Silk-3") },
        { id: 5, title: "Tussar Silk — New Season", image: imageFor("Tussar Silk-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Tussar Silk"
      category="Women"
      categorySlug="women"
      group="Sarees"
      description="Discover our Tussar Silk collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
