import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Sarees > Bridal Sarees
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSareesBridalSareesPage() {
  // At least 5 collection looks for "Bridal Sarees" — add more items here any time.
  const collections = [
        { id: 1, title: "Bridal Sarees — Classic Weave", image: imageFor("Bridal Sarees-0") },
        { id: 2, title: "Bridal Sarees — Festive Edit", image: imageFor("Bridal Sarees-1") },
        { id: 3, title: "Bridal Sarees — Everyday Comfort", image: imageFor("Bridal Sarees-2") },
        { id: 4, title: "Bridal Sarees — Designer Pick", image: imageFor("Bridal Sarees-3") },
        { id: 5, title: "Bridal Sarees — New Season", image: imageFor("Bridal Sarees-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Bridal Sarees"
      category="Women"
      categorySlug="women"
      group="Sarees"
      description="Discover our Bridal Sarees collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
