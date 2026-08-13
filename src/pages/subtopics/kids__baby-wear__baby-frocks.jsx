import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Kids > Baby Wear > Baby Frocks
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function KidsBabyWearBabyFrocksPage() {
  // At least 5 collection looks for "Baby Frocks" — add more items here any time.
  const collections = [
        { id: 1, title: "Baby Frocks — Classic Weave", image: imageFor("Baby Frocks-0") },
        { id: 2, title: "Baby Frocks — Festive Edit", image: imageFor("Baby Frocks-1") },
        { id: 3, title: "Baby Frocks — Everyday Comfort", image: imageFor("Baby Frocks-2") },
        { id: 4, title: "Baby Frocks — Designer Pick", image: imageFor("Baby Frocks-3") },
        { id: 5, title: "Baby Frocks — New Season", image: imageFor("Baby Frocks-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Baby Frocks"
      category="Kids"
      categorySlug="kids"
      group="Baby Wear"
      description="Discover our Baby Frocks collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
