import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Bridal > Family Collection > Bridesmaid Sarees
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function BridalFamilyCollectionBridesmaidSareesPage() {
  // At least 5 collection looks for "Bridesmaid Sarees" — add more items here any time.
  const collections = [
        { id: 1, title: "Bridesmaid Sarees — Classic Weave", image: imageFor("Bridesmaid Sarees-0") },
        { id: 2, title: "Bridesmaid Sarees — Festive Edit", image: imageFor("Bridesmaid Sarees-1") },
        { id: 3, title: "Bridesmaid Sarees — Everyday Comfort", image: imageFor("Bridesmaid Sarees-2") },
        { id: 4, title: "Bridesmaid Sarees — Designer Pick", image: imageFor("Bridesmaid Sarees-3") },
        { id: 5, title: "Bridesmaid Sarees — New Season", image: imageFor("Bridesmaid Sarees-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Bridesmaid Sarees"
      category="Bridal"
      categorySlug="bridal"
      group="Family Collection"
      description="Discover our Bridesmaid Sarees collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
