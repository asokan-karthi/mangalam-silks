import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Men > T-Shirts > Printed
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function MenTShirtsPrintedPage() {
  // At least 5 collection looks for "Printed" — add more items here any time.
  const collections = [
        { id: 1, title: "Printed — Classic Weave", image: imageFor("Printed-0") },
        { id: 2, title: "Printed — Festive Edit", image: imageFor("Printed-1") },
        { id: 3, title: "Printed — Everyday Comfort", image: imageFor("Printed-2") },
        { id: 4, title: "Printed — Designer Pick", image: imageFor("Printed-3") },
        { id: 5, title: "Printed — New Season", image: imageFor("Printed-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Printed"
      category="Men"
      categorySlug="men"
      group="T-Shirts"
      description="Discover our Printed collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
