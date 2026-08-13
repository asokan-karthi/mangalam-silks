import React, { useState } from "react";

const SocialIcon = ({ type }) => {
  const paths = {
    whatsapp: (
      <path d="M16.04 3C9.37 3 3.96 8.4 3.96 15.06c0 2.24.6 4.32 1.65 6.12L3 29l7.99-2.56a12.03 12.03 0 0 0 5.05 1.1h.01c6.67 0 12.08-5.41 12.08-12.07C28.13 8.4 22.71 3 16.04 3zm0 21.86h-.01a10.1 10.1 0 0 1-5.15-1.41l-.37-.22-4.74 1.52 1.55-4.62-.24-.38a10.02 10.02 0 0 1-1.55-5.39C5.53 9.4 10.32 4.9 16.04 4.9c2.72 0 5.28 1.07 7.2 2.99a10.06 10.06 0 0 1 2.98 7.17c0 5.7-4.79 10.8-10.18 10.8zm5.58-7.63c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.08-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.51-1.79-1.69-2.09-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.65-.94-2.26-.25-.6-.5-.51-.68-.52h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.51s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.79-.73 2.04-1.44.25-.71.25-1.32.18-1.44-.07-.13-.27-.2-.57-.35z"/>
    ),
    instagram: (
      <path d="M16 3c-3.53 0-3.97.02-5.36.08-1.38.06-2.32.28-3.15.6a6.36 6.36 0 0 0-2.3 1.5 6.36 6.36 0 0 0-1.5 2.3c-.32.83-.54 1.77-.6 3.15C3 12.03 3 12.47 3 16s.02 3.97.09 5.36c.06 1.38.28 2.32.6 3.15a6.36 6.36 0 0 0 1.5 2.3 6.36 6.36 0 0 0 2.3 1.5c.83.32 1.77.54 3.15.6C11.03 29 11.47 29 15 29s3.97-.02 5.36-.09c1.38-.06 2.32-.28 3.15-.6a6.36 6.36 0 0 0 2.3-1.5 6.36 6.36 0 0 0 1.5-2.3c.32-.83.54-1.77.6-3.15.07-1.39.09-1.83.09-5.36s-.02-3.97-.09-5.36c-.06-1.38-.28-2.32-.6-3.15a6.36 6.36 0 0 0-1.5-2.3 6.36 6.36 0 0 0-2.3-1.5c-.83-.32-1.77-.54-3.15-.6C19.97 3.02 19.53 3 16 3zm0 2.16c3.47 0 3.88.01 5.25.08 1.27.06 1.96.27 2.42.44.6.24 1.04.51 1.5.97.46.46.73.9.97 1.5.17.46.38 1.15.44 2.42.07 1.37.08 1.78.08 5.25s-.01 3.88-.08 5.25c-.06 1.27-.27 1.96-.44 2.42a4.2 4.2 0 0 1-.97 1.5 4.2 4.2 0 0 1-1.5.97c-.46.17-1.15.38-2.42.44-1.37.07-1.78.08-5.25.08s-3.88-.01-5.25-.08c-1.27-.06-1.96-.27-2.42-.44a4.2 4.2 0 0 1-1.5-.97 4.2 4.2 0 0 1-.97-1.5c-.17-.46-.38-1.15-.44-2.42-.07-1.37-.08-1.78-.08-5.25s.01-3.88.08-5.25c.06-1.27.27-1.96.44-2.42.24-.6.51-1.04.97-1.5.46-.46.9-.73 1.5-.97.46-.17 1.15-.38 2.42-.44 1.37-.07 1.78-.08 5.25-.08z"/>
    ),
    facebook: (
      <path d="M18.9 29V17.3h3.9l.6-4.6h-4.5v-2.9c0-1.33.37-2.24 2.28-2.24H23.5V3.5A31 31 0 0 0 19.96 3c-3.5 0-5.9 2.14-5.9 6.06v3.38H10.16v4.6h3.9V29z"/>
    ),
    youtube: (
      <path d="M28.7 10.6a3.7 3.7 0 0 0-2.6-2.6C23.9 7.5 16 7.5 16 7.5s-7.9 0-10.1.5a3.7 3.7 0 0 0-2.6 2.6A38.6 38.6 0 0 0 2.8 16a38.6 38.6 0 0 0 .5 5.4 3.7 3.7 0 0 0 2.6 2.6c2.2.5 10.1.5 10.1.5s7.9 0 10.1-.5a3.7 3.7 0 0 0 2.6-2.6c.35-1.78.52-3.59.5-5.4a38.6 38.6 0 0 0-.5-5.4zM13.2 19.9v-7.8l6.8 3.9z"/>
    ),
  };
  return (
    <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor" aria-hidden="true">
      {paths[type]}
    </svg>
  );
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setMsg(data.message || "Subscribed!");
      setEmail("");
    } catch {
      setMsg("Could not reach server, please try again later.");
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand" style={{ marginBottom: 6 }}>
              <div className="brand-mark">
                <img src="/logo.jpg" alt="Mangalam Silks & Readymades" />
              </div>
              <div className="brand-text">
                <h1 style={{ color: "#fff" }}>Mangalam Silks</h1>
                <span>&amp; Readymades</span>
              </div>
            </div>
            <p>Tradition weaves. Modern styles. Timeless elegance for the entire family.</p>
            <div className="social-row">
              <a href="https://wa.me/919994453779" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <SocialIcon type="whatsapp" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <SocialIcon type="instagram" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <SocialIcon type="facebook" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <SocialIcon type="youtube" />
              </a>
            </div>
          </div>

          <div>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/new-arrivals">New Arrivals</a></li>
              <li><a href="/offers">Offers</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h5>Shop</h5>
            <ul>
              <li><a href="/women">Women</a></li>
              <li><a href="/men">Men</a></li>
              <li><a href="/kids">Kids</a></li>
              <li><a href="/accessories">Accessories</a></li>
              <li><a href="/bridal">Bridal</a></li>
            </ul>
          </div>

          <div>
            <h5>Customer Service</h5>
            <ul>
              <li><a href="/contact">Customer Care</a></li>
              <li><a href="/terms">Terms &amp; Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h5>Newsletter</h5>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>
              Subscribe to get updates on new arrivals and exclusive offers.
            </p>
            <form className="newsletter-row" onSubmit={subscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
            {msg && <p style={{ fontSize: "0.75rem", color: "#f4cd5e", marginTop: 8 }}>{msg}</p>}
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Mangalam Silks &amp; Readymades. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
