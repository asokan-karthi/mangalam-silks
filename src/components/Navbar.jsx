import React, { useState } from "react";
import SloganSlideshow from "./SloganSlideshow.jsx";
import { CATEGORIES, slugify } from "../data/categories.js";

// "Collections" shows only these 5 subtopics, exactly as requested.
const COLLECTIONS = [
  { label: "Women's", slug: "women" },
  { label: "Men's", slug: "men" },
  { label: "Kids", slug: "kids" },
  { label: "Accessories", slug: "accessories" },
  { label: "Bridal", slug: "bridal" },
];

// "New Arrivals" and "Offers" dropdowns pull their items straight from the
// shared categories.js data, so editing that file also updates these menus.
const newArrivalsCat = CATEGORIES.find((c) => c.slug === "new-arrivals");
const offersCat = CATEGORIES.find((c) => c.slug === "offers");

function buildDropdownItems(cat) {
  if (!cat) return [];
  return cat.groups.flatMap((g) =>
    g.items.map((item) => ({
      label: item,
      href: `/${cat.slug}/${slugify(g.groupName)}/${slugify(item)}`,
    }))
  );
}

const NEW_ARRIVALS_ITEMS = buildDropdownItems(newArrivalsCat);
const OFFERS_ITEMS = buildDropdownItems(offersCat);

export default function Navbar() {
  // Tracks which single dropdown is open: 'collections' | 'new-arrivals' | 'offers' | null
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  const renderDropdown = (key, label, topHref, items) => (
    <div
      className={`nav-item ${openMenu === key ? "open" : ""}`}
      onMouseEnter={() => setOpenMenu(key)}
      onMouseLeave={() => setOpenMenu((m) => (m === key ? null : m))}
    >
      <a
        href={topHref}
        onClick={() => setOpenMenu(null)}
        onTouchStart={(e) => {
          if (openMenu !== key) {
            e.preventDefault();
            setOpenMenu(key);
          }
        }}
      >
        {label}
      </a>

      <div className={`mega-menu collections-menu ${items.length > 6 ? "two-col" : ""}`}>
        <div className="mega-col">
          {items.map((it) => (
            <a key={it.href} href={it.href} onClick={closeAll}>
              {it.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <header className="navbar">
      {/* NAVBAR 1: slogan slideshow */}
      <SloganSlideshow />

      {/* NAVBAR 2: logo left, links, round admin button */}
      <div className="navbar-top">
        <div className="container">
          <a href="/home" className="brand">
            <div className="brand-mark">
              <img src="/logo.jpg" alt="Mangalam Silks & Readymades" />
            </div>
            <div className="brand-text">
              <h1>Mangalam Silks</h1>
              <span>&amp; Readymades</span>
            </div>
          </a>

          <div className="navbar-top-right">
            <nav className={`navlinks ${mobileOpen ? "mobile-open" : ""}`}>
              <div className="nav-item">
                <a href="/home">Home</a>
              </div>

              {renderDropdown("collections", "Collections", "/", COLLECTIONS.map((c) => ({ label: c.label, href: `/${c.slug}` })))}
              {renderDropdown("new-arrivals", "New Arrivals", "/new-arrivals", NEW_ARRIVALS_ITEMS)}
              {renderDropdown("offers", "Offers", "/offers", OFFERS_ITEMS)}

              <div className="nav-item">
                <a href="/about">About Us</a>
              </div>

              <div className="nav-item">
                <a href="/contact">Contact Us</a>
              </div>
            </nav>

            <a href="/admin-login" className="admin-round-btn" aria-label="Admin Login" title="Admin Login">
              🔒
            </a>

            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
