import React, { useEffect, useState } from "react";
import { imageFor } from "../data/categories.js";

// Autoplaying hero slideshow — the uploaded photo is the first slide,
// followed by a few existing product photos already used on the site.
// No arrows / dots / buttons anywhere, purely automatic.
const HERO_SLIDES = [
  "/media/priya-mani-picks.png",
  imageFor("Bridal Kanchipuram Sarees"),
  imageFor("Kanchipuram Silk"),
  imageFor("Designer Sarees"),
];
const HERO_INTERVAL = 4500;

function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, HERO_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-slideshow-wrap">
      {HERO_SLIDES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Mangalam Silks"
          className={`hero-slide ${i === index ? "active" : ""}`}
        />
      ))}
    </section>
  );
}

// Pulls live items the admin has added via the Admin Panel (New Arrivals /
// Offers). Only items marked "Enabled" come back from the backend, so this
// section quietly disappears if nothing has been published yet.
function AdminShowcase({ section, title, subtitle }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/items/${section}`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (!cancelled) setItems(Array.isArray(data) ? data.slice(0, 8) : []);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [section]);

  if (items.length === 0) return null;

  return (
    <section className="section container">
      <h2 className="section-title">{title}</h2>
      <p className="section-sub">{subtitle}</p>
      <div className="grid grid-4">
        {items.map((item) => (
          <div className="why-card" key={item.id} style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ position: "relative", aspectRatio: "4 / 3", background: "var(--cream-100)" }}>
              {item.imageUrl ? (
                <img src={item.imageUrl} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              ) : null}
              {item.badge && (
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    background: "linear-gradient(135deg, var(--gold-400), var(--orange-600))",
                    color: "var(--maroon-950)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: 999,
                  }}
                >
                  {item.badge}
                </span>
              )}
            </div>
            <div style={{ padding: "14px 16px 18px" }}>
              <h4 style={{ fontSize: "0.95rem", marginBottom: 6 }}>{item.title}</h4>
              {item.price != null && (
                <p style={{ margin: 0, fontWeight: 700, color: "var(--maroon-800)" }}>
                  ₹{item.price}
                  {item.originalPrice ? (
                    <s style={{ marginLeft: 8, color: "var(--muted)", fontWeight: 400 }}>₹{item.originalPrice}</s>
                  ) : null}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


const featuredCollections = [
  { title: "Kanchipuram Silk Sarees", href: "/women/sarees/kanchipuram-silk" },
  { title: "Designer Kurtis", href: "/women/kurtis/embroidered" },
  { title: "Formal Shirts for Men", href: "/men/shirts/formal-shirts" },
  { title: "Kids Party Wear", href: "/kids/girls/gowns" },
  { title: "Bridal Lehengas", href: "/bridal/bride/lehenga" },
];

const testimonials = [
  {
    quote: "The Kanchipuram silk I bought for my daughter's wedding was stunning — the finish and colours were beyond what I expected.",
    name: "Priya R.",
    place: "Chennai",
  },
  {
    quote: "Wonderful collection for the whole family. The staff helped us pick outfits for every function without any rush.",
    name: "Karthik S.",
    place: "Coimbatore",
  },
  {
    quote: "Their bridal collection is unmatched — quality, variety and honest advice on what would actually suit the occasion.",
    name: "Meena V.",
    place: "Madurai",
  },
];

export default function Home() {
  return (
    <div className="page-fade">
      {/* HERO IMAGE SLIDESHOW */}
      <HeroSlideshow />

      {/* FEATURED COLLECTIONS */}
      <section className="section container">
        <h2 className="section-title">Featured Collections</h2>
        <p className="section-sub">A handful of our most-loved picks this season.</p>
        <div className="grid grid-5">
          {featuredCollections.map((c) => (
            <a className="cat-tile" href={c.href} key={c.title}>
              <img src={imageFor(c.title)} alt={c.title} />
              <div className="cat-label">{c.title}</div>
            </a>
          ))}
        </div>
      </section>

      {/* LIVE NEW ARRIVALS (managed from the Admin Panel) */}
      <AdminShowcase section="new-arrivals" title="New Arrivals" subtitle="Fresh in this week, picked by our team." />

      {/* LIVE OFFERS (managed from the Admin Panel) */}
      <AdminShowcase section="offers" title="Current Offers" subtitle="Limited-time deals — while stocks last." />

      {/* CUSTOMER TESTIMONIALS */}
      <section className="section" style={{ background: "var(--cream-100)" }}>
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-sub">Real words from families who've shopped with us.</p>
          <div className="grid grid-3">
            {testimonials.map((t) => (
              <div className="why-card" key={t.name}>
                <p style={{ fontStyle: "italic", color: "var(--ink)", marginBottom: 14 }}>
                  “{t.quote}”
                </p>
                <h4 style={{ marginBottom: 2 }}>{t.name}</h4>
                <p style={{ margin: 0, fontSize: "0.8rem" }}>{t.place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT STORE BANNER */}
      <section className="section container">
        <div className="promise-band">
          <div>
            <h3>Step Into a Mangalam Silks Store</h3>
            <p>
              Photos only tell half the story — come feel the fabric, try the drape,
              and get styling advice from our team in person at a store near you.
            </p>
            <a href="/contact" className="btn btn-gold" style={{ marginTop: 12 }}>
              Find a Store Near You
            </a>
          </div>
          <img src="/media/product-11.jpg" alt="Mangalam Silks store interior" />
        </div>
      </section>
    </div>
  );
}
