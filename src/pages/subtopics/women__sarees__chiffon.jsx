import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Sarees > Chiffon
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSareesChiffonPage() {
  // At least 5 collection looks for "Chiffon" — add more items here any time.
  const collections = [
        { id: 1, title: "Chiffon — Classic Weave", image: imageFor("Chiffon-0") },
        { id: 2, title: "Chiffon — Festive Edit", image: imageFor("Chiffon-1") },
        { id: 3, title: "Chiffon — Everyday Comfort", image: imageFor("Chiffon-2") },
        { id: 4, title: "Chiffon — Designer Pick", image: imageFor("Chiffon-3") },
        { id: 5, title: "Chiffon — New Season", image: imageFor("Chiffon-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Chiffon"
      category="Women"
      categorySlug="women"
      group="Sarees"
      description="Discover our Chiffon collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
