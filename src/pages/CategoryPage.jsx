import React from "react";
import { useParams } from "react-router-dom";
import { CATEGORIES, slugify } from "../data/categories.js";
import SubtopicCard from "../components/SubtopicCard.jsx";

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const cat = CATEGORIES.find((c) => c.slug === categorySlug);

  if (!cat) {
    return (
      <div className="not-found page-fade">
        <h1>Category not found</h1>
        <a className="btn btn-primary" href="/home">Back to Home</a>
      </div>
    );
  }

  return (
    <div className="page-fade">
      <section className="page-hero">
        <h1>{cat.label}</h1>
        <p>Browse every {cat.label.toLowerCase()} collection</p>
      </section>

      <div className="container breadcrumb">
        <a href="/home">Home</a> <span className="sep">/</span> {cat.label}
      </div>

      <section className="container" style={{ paddingBottom: 60 }}>
        {cat.groups.map((g) => (
          <div key={g.groupName} style={{ marginBottom: 48 }}>
            <h2 className="section-title">{g.groupName}</h2>
            <div className="grid grid-5" style={{ marginTop: 20 }}>
              {g.items.map((item) => (
                <SubtopicCard
                  key={item}
                  name={item}
                  href={`/${cat.slug}/${slugify(g.groupName)}/${slugify(item)}`}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
