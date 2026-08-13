import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Kids > Baby Wear > Baby Shirts
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function KidsBabyWearBabyShirtsPage() {
  // At least 5 collection looks for "Baby Shirts" — add more items here any time.
  const collections = [
        { id: 1, title: "Baby Shirts — Classic Weave", image: imageFor("Baby Shirts-0") },
        { id: 2, title: "Baby Shirts — Festive Edit", image: imageFor("Baby Shirts-1") },
        { id: 3, title: "Baby Shirts — Everyday Comfort", image: imageFor("Baby Shirts-2") },
        { id: 4, title: "Baby Shirts — Designer Pick", image: imageFor("Baby Shirts-3") },
        { id: 5, title: "Baby Shirts — New Season", image: imageFor("Baby Shirts-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Baby Shirts"
      category="Kids"
      categorySlug="kids"
      group="Baby Wear"
      description="Discover our Baby Shirts collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
