import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Bridal > Bride > Designer Sarees
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function BridalBrideDesignerSareesPage() {
  // At least 5 collection looks for "Designer Sarees" — add more items here any time.
  const collections = [
        { id: 1, title: "Designer Sarees — Classic Weave", image: imageFor("Designer Sarees-0") },
        { id: 2, title: "Designer Sarees — Festive Edit", image: imageFor("Designer Sarees-1") },
        { id: 3, title: "Designer Sarees — Everyday Comfort", image: imageFor("Designer Sarees-2") },
        { id: 4, title: "Designer Sarees — Designer Pick", image: imageFor("Designer Sarees-3") },
        { id: 5, title: "Designer Sarees — New Season", image: imageFor("Designer Sarees-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Designer Sarees"
      category="Bridal"
      categorySlug="bridal"
      group="Bride"
      description="Discover our Designer Sarees collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
