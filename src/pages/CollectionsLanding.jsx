import React from "react";
import { imageFor } from "../data/categories.js";

// This is what visitors land on first (root "/"). Every image here is
// reused from the same product photos already used elsewhere on the site.
const COLLECTIONS = [
  { label: "Women's", slug: "women", seed: "Kanchipuram Silk" },
  { label: "Men's", slug: "men", seed: "Formal Shirts" },
  { label: "Kids", slug: "kids", seed: "Frocks" },
  { label: "Accessories", slug: "accessories", seed: "Handbags" },
  { label: "Bridal", slug: "bridal", seed: "Bridal Kanchipuram Sarees" },
];

export default function CollectionsLanding() {
  return (
    <div className="page-fade">
      <section className="collections-hero">
        <h1>Shop by Collection</h1>
        <p>Women's, Men's, Kids, Accessories &amp; Bridal — all in one place</p>
      </section>

      <div className="container">
        <div className="collections-row">
          {COLLECTIONS.map((c) => (
            <a className="cat-tile" href={`/${c.slug}`} key={c.slug}>
              <img src={imageFor(c.seed)} alt={c.label} />
              <div className="cat-label">{c.label}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
