import React from "react";

export default function NotFound() {
  return (
    <div className="not-found page-fade">
      <h1>404 — Page Not Found</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        The page you're looking for doesn't exist or has moved.
      </p>
      <a className="btn btn-primary" href="/home">Back to Home</a>
    </div>
  );
}
