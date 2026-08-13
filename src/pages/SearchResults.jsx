import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { ALL_SUBTOPICS } from "../data/categories.js";
import SubtopicCard from "../components/SubtopicCard.jsx";

export default function SearchResults() {
  const location = useLocation();
  const q = useMemo(() => new URLSearchParams(location.search).get("q") || "", [location.search]);

  const results = useMemo(() => {
    if (!q.trim()) return [];
    const needle = q.toLowerCase();
    return ALL_SUBTOPICS.filter(
      (s) =>
        s.name.toLowerCase().includes(needle) ||
        s.category.toLowerCase().includes(needle) ||
        s.group.toLowerCase().includes(needle)
    );
  }, [q]);

  return (
    <div className="page-fade">
      <section className="page-hero">
        <h1>Search Results</h1>
        <p>{q ? `Showing results for "${q}"` : "Enter a search term to begin"}</p>
      </section>

      <section className="section container">
        {results.length === 0 ? (
          <div className="not-found" style={{ padding: "40px 0" }}>
            <h2>No matches found</h2>
            <p style={{ color: "var(--muted)" }}>Try searching for a category like "Sarees", "Kurtis", "Bridal" or "Offers".</p>
            <a href="/home" className="btn btn-primary" style={{ marginTop: 20 }}>Back to Home</a>
          </div>
        ) : (
          <div className="grid grid-5">
            {results.map((r) => (
              <SubtopicCard key={r.path} name={r.name} tag={r.category} href={r.path} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
