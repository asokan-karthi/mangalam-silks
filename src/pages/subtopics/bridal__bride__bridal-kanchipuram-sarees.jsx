import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Bridal > Bride > Bridal Kanchipuram Sarees
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function BridalBrideBridalKanchipuramSareesPage() {
  // At least 5 collection looks for "Bridal Kanchipuram Sarees" — add more items here any time.
  const collections = [
        { id: 1, title: "Bridal Kanchipuram Sarees — Classic Weave", image: imageFor("Bridal Kanchipuram Sarees-0") },
        { id: 2, title: "Bridal Kanchipuram Sarees — Festive Edit", image: imageFor("Bridal Kanchipuram Sarees-1") },
        { id: 3, title: "Bridal Kanchipuram Sarees — Everyday Comfort", image: imageFor("Bridal Kanchipuram Sarees-2") },
        { id: 4, title: "Bridal Kanchipuram Sarees — Designer Pick", image: imageFor("Bridal Kanchipuram Sarees-3") },
        { id: 5, title: "Bridal Kanchipuram Sarees — New Season", image: imageFor("Bridal Kanchipuram Sarees-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Bridal Kanchipuram Sarees"
      category="Bridal"
      categorySlug="bridal"
      group="Bride"
      description="Discover our Bridal Kanchipuram Sarees collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
