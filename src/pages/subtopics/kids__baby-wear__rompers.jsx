import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Kids > Baby Wear > Rompers
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function KidsBabyWearRompersPage() {
  // At least 5 collection looks for "Rompers" — add more items here any time.
  const collections = [
        { id: 1, title: "Rompers — Classic Weave", image: imageFor("Rompers-0") },
        { id: 2, title: "Rompers — Festive Edit", image: imageFor("Rompers-1") },
        { id: 3, title: "Rompers — Everyday Comfort", image: imageFor("Rompers-2") },
        { id: 4, title: "Rompers — Designer Pick", image: imageFor("Rompers-3") },
        { id: 5, title: "Rompers — New Season", image: imageFor("Rompers-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Rompers"
      category="Kids"
      categorySlug="kids"
      group="Baby Wear"
      description="Discover our Rompers collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
