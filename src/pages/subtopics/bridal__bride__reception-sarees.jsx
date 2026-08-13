import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Bridal > Bride > Reception Sarees
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function BridalBrideReceptionSareesPage() {
  // At least 5 collection looks for "Reception Sarees" — add more items here any time.
  const collections = [
        { id: 1, title: "Reception Sarees — Classic Weave", image: imageFor("Reception Sarees-0") },
        { id: 2, title: "Reception Sarees — Festive Edit", image: imageFor("Reception Sarees-1") },
        { id: 3, title: "Reception Sarees — Everyday Comfort", image: imageFor("Reception Sarees-2") },
        { id: 4, title: "Reception Sarees — Designer Pick", image: imageFor("Reception Sarees-3") },
        { id: 5, title: "Reception Sarees — New Season", image: imageFor("Reception Sarees-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Reception Sarees"
      category="Bridal"
      categorySlug="bridal"
      group="Bride"
      description="Discover our Reception Sarees collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
