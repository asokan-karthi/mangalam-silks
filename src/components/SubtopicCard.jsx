import React from "react";
import { imageFor } from "../data/categories.js";

export default function SubtopicCard({ name, href, tag }) {
  return (
    <a className="card" href={href}>
      <div className="card-img-wrap">
        <img src={imageFor(name)} alt={name} loading="lazy" />
      </div>
      <div className="card-body">
        {tag && <span className="card-tag">{tag}</span>}
        <h4>{name}</h4>
        <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--muted)" }}>
          Explore the {name} collection
        </p>
      </div>
    </a>
  );
}
