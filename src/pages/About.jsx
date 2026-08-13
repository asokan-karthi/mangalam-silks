import React from "react";

export default function About() {
  return (
    <div className="page-fade">
      <section className="page-hero">
        <h1>About Mangalam Silks</h1>
        <p>Our journey of tradition, trust &amp; timeless fashion</p>
      </section>

      <section className="section container">
        <div className="about-hero">
          <img src="/media/product-09.jpg" alt="Mangalam Silks store" />
          <div className="about-copy">
            <h2>Our Story</h2>
            <p>
              For generations, Mangalam Silks &amp; Readymades has been a trusted name
              for fine sarees, ethnic wear and everyday fashion. What began as a small
              family shop has grown into a destination loved across Tamil Nadu — while
              never losing sight of the craftsmanship and warmth that started it all.
            </p>
            <h2>Vision</h2>
            <p>
              Our commitment is to style, quality and customer happiness — bringing
              handpicked fabrics and thoughtfully designed collections to every
              member of the family, at every occasion.
            </p>
            <h2>Mission</h2>
            <p>
              Our commitment is to style, quality and customer happiness — bringing
              handpicked fabrics and thoughtfully designed collections to every
              member of the family, at every occasion.
            </p>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">Why Mangalam Silks</h2>
        <p className="section-sub">What makes us unique &amp; the preferred choice for thousands of families.</p>
        <div className="why-grid">
          <div className="why-card">
            <h4>Trusted Heritage</h4>
            <p>Decades of experience curating authentic silks and readymade fashion.</p>
          </div>
          <div className="why-card">
            <h4>Handpicked Fabrics</h4>
            <p>Every saree and outfit is sourced for its weave, finish and comfort.</p>
          </div>
          <div className="why-card">
            <h4>Family First</h4>
            <p>Collections for women, men, kids and bridal — all under one roof.</p>
          </div>
          <div className="why-card">
            <h4>Honest Pricing</h4>
            <p>Fair, transparent pricing with no compromise on quality.</p>
          </div>
          <div className="why-card">
            <h4>Store Network</h4>
            <p>Multiple locations across Tamil Nadu for a hands-on shopping experience.</p>
          </div>
          <div className="why-card">
            <h4>Personal Service</h4>
            <p>Our staff help you find the right drape, fit and style — every time.</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="promise-band">
          <div>
            <h3>Quality Promise</h3>
            <p>
              We promise quality in every thread. From the looms to our shelves,
              each piece passes through careful checks so what you wear carries
              the same care with which it was made.
            </p>
            <a href="/contact" className="btn btn-gold" style={{ marginTop: 12 }}>Visit a Store</a>
          </div>
          <img src="/media/product-10.jpg" alt="Quality silk fabric" />
        </div>
      </section>
    </div>
  );
}
