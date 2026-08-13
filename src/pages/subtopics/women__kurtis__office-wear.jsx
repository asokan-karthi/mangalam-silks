import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Kurtis > Office Wear
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenKurtisOfficeWearPage() {
  // At least 5 collection looks for "Office Wear" — add more items here any time.
  const collections = [
        { id: 1, title: "Office Wear — Classic Weave", image: imageFor("Office Wear-0") },
        { id: 2, title: "Office Wear — Festive Edit", image: imageFor("Office Wear-1") },
        { id: 3, title: "Office Wear — Everyday Comfort", image: imageFor("Office Wear-2") },
        { id: 4, title: "Office Wear — Designer Pick", image: imageFor("Office Wear-3") },
        { id: 5, title: "Office Wear — New Season", image: imageFor("Office Wear-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Office Wear"
      category="Women"
      categorySlug="women"
      group="Kurtis"
      description="Discover our Office Wear collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
