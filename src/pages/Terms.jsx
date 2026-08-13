import React from "react";

export default function Terms() {
  return (
    <div className="page-fade">
      <section className="page-hero">
        <h1>Terms &amp; Conditions</h1>
        <p>Please read these terms carefully</p>
      </section>

      <section className="section container" style={{ maxWidth: 860, margin: "0 auto" }}>
        <div className="why-card" style={{ marginBottom: 20 }}>
          <h4>1. General</h4>
          <p>
            By visiting or shopping at Mangalam Silks &amp; Readymades stores, you agree
            to the terms outlined here. These terms apply to all customers across our
            store locations in Tamil Nadu.
          </p>
        </div>
        <div className="why-card" style={{ marginBottom: 20 }}>
          <h4>2. Product Information</h4>
          <p>
            We make every effort to ensure fabric, colour and pattern details shown
            in-store and on this website are accurate. Minor variations in colour or
            weave are natural characteristics of handwoven and dyed fabrics.
          </p>
        </div>
        <div className="why-card" style={{ marginBottom: 20 }}>
          <h4>3. Pricing</h4>
          <p>
            Prices are subject to change without prior notice. Ongoing offers and
            discounts are valid for the duration mentioned in-store and cannot be
            combined unless stated otherwise.
          </p>
        </div>
        <div className="why-card" style={{ marginBottom: 20 }}>
          <h4>4. Store Conduct</h4>
          <p>
            We request customers to handle merchandise with care. Any damage caused
            to a product before purchase may need to be compensated as per store
            policy.
          </p>
        </div>
        <div className="why-card">
          <h4>5. Contact</h4>
          <p>
            For any questions about these terms, please reach out via our
            <a href="/contact" style={{ color: "var(--maroon-700)", fontWeight: 600 }}> Contact page</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
