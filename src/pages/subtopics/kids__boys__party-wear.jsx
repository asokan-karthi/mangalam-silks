import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Kids > Boys > Party Wear
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function KidsBoysPartyWearPage() {
  // At least 5 collection looks for "Party Wear" — add more items here any time.
  const collections = [
        { id: 1, title: "Party Wear — Classic Weave", image: imageFor("Party Wear-0") },
        { id: 2, title: "Party Wear — Festive Edit", image: imageFor("Party Wear-1") },
        { id: 3, title: "Party Wear — Everyday Comfort", image: imageFor("Party Wear-2") },
        { id: 4, title: "Party Wear — Designer Pick", image: imageFor("Party Wear-3") },
        { id: 5, title: "Party Wear — New Season", image: imageFor("Party Wear-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Party Wear"
      category="Kids"
      categorySlug="kids"
      group="Boys"
      description="Discover our Party Wear collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
