import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Bridal > Family Collection > Matching Couple Dress
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function BridalFamilyCollectionMatchingCoupleDressPage() {
  // At least 5 collection looks for "Matching Couple Dress" — add more items here any time.
  const collections = [
        { id: 1, title: "Matching Couple Dress — Classic Weave", image: imageFor("Matching Couple Dress-0") },
        { id: 2, title: "Matching Couple Dress — Festive Edit", image: imageFor("Matching Couple Dress-1") },
        { id: 3, title: "Matching Couple Dress — Everyday Comfort", image: imageFor("Matching Couple Dress-2") },
        { id: 4, title: "Matching Couple Dress — Designer Pick", image: imageFor("Matching Couple Dress-3") },
        { id: 5, title: "Matching Couple Dress — New Season", image: imageFor("Matching Couple Dress-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Matching Couple Dress"
      category="Bridal"
      categorySlug="bridal"
      group="Family Collection"
      description="Discover our Matching Couple Dress collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
