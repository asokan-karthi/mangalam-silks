import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Women > Sarees > Printed Sarees
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function WomenSareesPrintedSareesPage() {
  // At least 5 collection looks for "Printed Sarees" — add more items here any time.
  const collections = [
        { id: 1, title: "Printed Sarees — Classic Weave", image: imageFor("Printed Sarees-0") },
        { id: 2, title: "Printed Sarees — Festive Edit", image: imageFor("Printed Sarees-1") },
        { id: 3, title: "Printed Sarees — Everyday Comfort", image: imageFor("Printed Sarees-2") },
        { id: 4, title: "Printed Sarees — Designer Pick", image: imageFor("Printed Sarees-3") },
        { id: 5, title: "Printed Sarees — New Season", image: imageFor("Printed Sarees-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Printed Sarees"
      category="Women"
      categorySlug="women"
      group="Sarees"
      description="Discover our Printed Sarees collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
