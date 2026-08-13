import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Kids > Girls > Lehenga
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function KidsGirlsLehengaPage() {
  // At least 5 collection looks for "Lehenga" — add more items here any time.
  const collections = [
        { id: 1, title: "Lehenga — Classic Weave", image: imageFor("Lehenga-0") },
        { id: 2, title: "Lehenga — Festive Edit", image: imageFor("Lehenga-1") },
        { id: 3, title: "Lehenga — Everyday Comfort", image: imageFor("Lehenga-2") },
        { id: 4, title: "Lehenga — Designer Pick", image: imageFor("Lehenga-3") },
        { id: 5, title: "Lehenga — New Season", image: imageFor("Lehenga-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Lehenga"
      category="Kids"
      categorySlug="kids"
      group="Girls"
      description="Discover our Lehenga collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
