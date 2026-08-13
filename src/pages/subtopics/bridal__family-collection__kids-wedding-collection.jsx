import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Bridal > Family Collection > Kids Wedding Collection
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function BridalFamilyCollectionKidsWeddingCollectionPage() {
  // At least 5 collection looks for "Kids Wedding Collection" — add more items here any time.
  const collections = [
        { id: 1, title: "Kids Wedding Collection — Classic Weave", image: imageFor("Kids Wedding Collection-0") },
        { id: 2, title: "Kids Wedding Collection — Festive Edit", image: imageFor("Kids Wedding Collection-1") },
        { id: 3, title: "Kids Wedding Collection — Everyday Comfort", image: imageFor("Kids Wedding Collection-2") },
        { id: 4, title: "Kids Wedding Collection — Designer Pick", image: imageFor("Kids Wedding Collection-3") },
        { id: 5, title: "Kids Wedding Collection — New Season", image: imageFor("Kids Wedding Collection-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Kids Wedding Collection"
      category="Bridal"
      categorySlug="bridal"
      group="Family Collection"
      description="Discover our Kids Wedding Collection collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
