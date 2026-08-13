import React from "react";
import SubtopicPageTemplate from "../../components/SubtopicPageTemplate.jsx";
import { imageFor } from "../../data/categories.js";

// EDITABLE PAGE FILE — Category: Offers > Offers > Coupon Codes
// Change the text/collections below to customise this exact page. Each
// collection image can also be swapped live in the browser via its "Edit"
// button (persisted per-browser). The shared layout lives in
// SubtopicPageTemplate.jsx (used by every subtopic page).
export default function OffersOffersCouponCodesPage() {
  // At least 5 collection looks for "Coupon Codes" — add more items here any time.
  const collections = [
        { id: 1, title: "Coupon Codes — Classic Weave", image: imageFor("Coupon Codes-0") },
        { id: 2, title: "Coupon Codes — Festive Edit", image: imageFor("Coupon Codes-1") },
        { id: 3, title: "Coupon Codes — Everyday Comfort", image: imageFor("Coupon Codes-2") },
        { id: 4, title: "Coupon Codes — Designer Pick", image: imageFor("Coupon Codes-3") },
        { id: 5, title: "Coupon Codes — New Season", image: imageFor("Coupon Codes-4") },
  ];

  return (
    <SubtopicPageTemplate
      name="Coupon Codes"
      category="Offers"
      categorySlug="offers"
      group="Offers"
      description="Discover our Coupon Codes collection at Mangalam Silks & Readymades — thoughtfully curated for quality, comfort and timeless style."
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
