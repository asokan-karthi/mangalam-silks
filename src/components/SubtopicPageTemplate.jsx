import React from "react";
import { imageFor, slugify } from "../data/categories.js";
import EditableImage from "./EditableImage.jsx";

/**
 * Shared visual template rendered by every individual subtopic page file
 * (see src/pages/subtopics/). Each subtopic file supplies its own
 * name/category/group/description/collections — edit those files to change
 * content and images, or edit this file to change the layout for ALL
 * subtopic pages at once.
 *
 * `collections`: array of at least 5 items: { id, title, image }
 * Each collection image can be swapped in the browser via the "Edit" button
 * (see EditableImage.jsx) — the choice is remembered per-subtopic-per-slot.
 */
export default function SubtopicPageTemplate({
  name,
  category,
  categorySlug,
  group,
  description,
  highlights = [],
  image,
  collections = [],
}) {
  const groupSlug = slugify(group);
  const baseKey = `${categorySlug}-${groupSlug}-${slugify(name)}`;
  const heroImg = image || imageFor(name);

  const resolvedCollections =
    collections.length > 0
      ? collections
      : Array.from({ length: 5 }, (_, i) => ({
          id: i + 1,
          title: `${name} — Style ${i + 1}`,
          image: imageFor(`${name}-${i}`),
        }));

  return (
    <div className="page-fade">
      <section className="page-hero">
        <h1>{name}</h1>
        <p>{category} / {group}</p>
      </section>

      <div className="container breadcrumb">
        <a href="/home">Home</a> <span className="sep">/</span>
        <a href={`/${categorySlug}`}>{category}</a> <span className="sep">/</span>
        {name}
      </div>

      <section className="section container">
        <div className="about-hero">
          <EditableImage storageKey={`${baseKey}-hero`} defaultSrc={heroImg} alt={name} aspect="4/5" />
          <div className="about-copy">
            <span className="card-tag">{group}</span>
            <h2>{name}</h2>
            <p>{description}</p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/contact" className="btn btn-primary">Enquire In-Store</a>
              <a href={`/${categorySlug}`} className="btn btn-outline">
                Browse all {category}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS — at least 5 per subtopic, each image individually editable */}
      <section className="section container" style={{ paddingTop: 0 }}>
        <h2 className="section-title">{name} Collections</h2>
        <p className="section-sub">
          Browse {resolvedCollections.length} curated looks from this collection. Hover any
          image and click "Edit" to swap in your own photo.
        </p>
        <div className="collections-grid">
          {resolvedCollections.map((c) => (
            <div className="collection-card" key={c.id}>
              <EditableImage
                storageKey={`${baseKey}-collection-${c.id}`}
                defaultSrc={c.image}
                alt={c.title}
              />
              <h5>{c.title}</h5>
            </div>
          ))}
        </div>
      </section>

      {highlights.length > 0 && (
        <section className="section container" style={{ paddingTop: 0 }}>
          <h2 className="section-title">Highlights</h2>
          <div className="why-grid">
            {highlights.map((h) => (
              <div className="why-card" key={h.title}>
                <h4>{h.title}</h4>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="section container" style={{ paddingTop: 0 }}>
        <div className="promise-band">
          <div>
            <h3>Visit Us for {name}</h3>
            <p>
              Speak with our in-store stylists to explore the full {name} range,
              check availability and get personalised recommendations.
            </p>
            <a href="/contact" className="btn btn-gold" style={{ marginTop: 12 }}>
              Find a Store Near You
            </a>
          </div>
          <img src={imageFor(name + "-alt")} alt={`${name} detail`} />
        </div>
      </section>
    </div>
  );
}
