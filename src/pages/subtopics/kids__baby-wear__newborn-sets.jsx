import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Kids > Baby Wear > Newborn Sets
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function KidsBabyWearNewbornSetsPage() {
  // At least 5 collection looks for "Newborn Sets" — add more items here any time.
  const collections = [
        { id: 1, title: "Newborn Sets — Classic Weave", image: imageFor("Newborn Sets-0") },
        { id: 2, title: "Newborn Sets — Festive Edit", image: imageFor("Newborn Sets-1") },
        { id: 3, title: "Newborn Sets — Everyday Comfort", image: imageFor("Newborn Sets-2") },
        { id: 4, title: "Newborn Sets — Designer Pick", image: imageFor("Newborn Sets-3") },
        { id: 5, title: "Newborn Sets — New Season", image: imageFor("Newborn Sets-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Newborn Sets"
      category="Kids"
      categorySlug="kids"
      group="Baby Wear"
      description="Discover our Newborn Sets collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
