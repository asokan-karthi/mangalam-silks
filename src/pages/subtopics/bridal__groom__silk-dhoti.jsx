import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Bridal > Groom > Silk Dhoti
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function BridalGroomSilkDhotiPage() {
  // At least 5 collection looks for "Silk Dhoti" — add more items here any time.
  const collections = [
        { id: 1, title: "Silk Dhoti — Classic Weave", image: imageFor("Silk Dhoti-0") },
        { id: 2, title: "Silk Dhoti — Festive Edit", image: imageFor("Silk Dhoti-1") },
        { id: 3, title: "Silk Dhoti — Everyday Comfort", image: imageFor("Silk Dhoti-2") },
        { id: 4, title: "Silk Dhoti — Designer Pick", image: imageFor("Silk Dhoti-3") },
        { id: 5, title: "Silk Dhoti — New Season", image: imageFor("Silk Dhoti-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Silk Dhoti"
      category="Bridal"
      categorySlug="bridal"
      group="Groom"
      description="Discover our Silk Dhoti collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
