import React from "react";

const tiles = [
  { icon: "✉️", title: "Contact Form", desc: "Send us a message", href: "/contact" },
  { icon: "🎧", title: "Customer Care", desc: "Call for support", href: "tel:+919994453779" },
  { icon: "💬", title: "WhatsApp Chat", desc: "Chat with us", href: "https://wa.me/919994453779" },
  { icon: "📧", title: "Email Support", desc: "Mail us anytime", href: "mailto:support@mangalamsilks.com" },
  { icon: "📍", title: "Store Address", desc: "Find our stores", href: "/contact#stores" },
  { icon: "🗺️", title: "Google Maps", desc: "Get Directions", href: "https://maps.google.com" },
  { icon: "🕒", title: "Business Hours", desc: "Store timings", href: "/contact#hours" },
];

export default function ContactTiles() {
  return (
    <div className="contact-tiles">
      {tiles.map((t) => (
        <a className="contact-tile" href={t.href} key={t.title} target={t.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
          <div className="ic">{t.icon}</div>
          <h4>{t.title}</h4>
          <p>{t.desc}</p>
        </a>
      ))}
    </div>
  );
}
