import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: New Arrivals > New Arrivals > Latest Silk Sarees
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function NewArrivalsNewArrivalsLatestSilkSareesPage() {
  // At least 5 collection looks for "Latest Silk Sarees" — add more items here any time.
  const collections = [
        { id: 1, title: "Latest Silk Sarees — Classic Weave", image: imageFor("Latest Silk Sarees-0") },
        { id: 2, title: "Latest Silk Sarees — Festive Edit", image: imageFor("Latest Silk Sarees-1") },
        { id: 3, title: "Latest Silk Sarees — Everyday Comfort", image: imageFor("Latest Silk Sarees-2") },
        { id: 4, title: "Latest Silk Sarees — Designer Pick", image: imageFor("Latest Silk Sarees-3") },
        { id: 5, title: "Latest Silk Sarees — New Season", image: imageFor("Latest Silk Sarees-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Latest Silk Sarees"
      category="New Arrivals"
      categorySlug="new-arrivals"
      group="New Arrivals"
      description="Discover our Latest Silk Sarees collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
