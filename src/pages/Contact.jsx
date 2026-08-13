import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ ok: true, msg: data.message || "Message sent! We'll get back to you soon." });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({ ok: false, msg: data.message || "Something went wrong." });
      }
    } catch {
      setStatus({ ok: false, msg: "Could not reach the server. Please try again later." });
    }
    setLoading(false);
  };

  return (
    <div className="page-fade">
      <section className="page-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </section>

      <section className="section container">
        <div className="contact-grid">
          <div className="contact-form-box">
            <h2 className="section-title">Send a Message</h2>
            <p className="section-sub">Fill in the form and our team will respond within 24 hours.</p>

            {status && (
              <div className={`form-msg ${status.ok ? "ok" : "err"}`}>{status.msg}</div>
            )}

            <form onSubmit={submit}>
              <div className="form-field">
                <label>Full Name</label>
                <input type="text" required value={form.name} onChange={update("name")} placeholder="Your name" />
              </div>
              <div className="form-field">
                <label>Email</label>
                <input type="email" required value={form.email} onChange={update("email")} placeholder="you@example.com" />
              </div>
              <div className="form-field">
                <label>Phone</label>
                <input type="tel" value={form.phone} onChange={update("phone")} placeholder="+91 98765 43210" />
              </div>
              <div className="form-field">
                <label>Message</label>
                <textarea rows="5" required value={form.message} onChange={update("message")} placeholder="How can we help?" />
              </div>
              <button className="btn btn-primary" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div>
            <h2 className="section-title">Find Us</h2>
            <p className="section-sub">Visit any of our stores across Tamil Nadu.</p>
            <div className="map-embed-wrap" id="stores">
              <iframe
                title="Mangalam Silks & Readymades Store Location"
                src="https://maps.google.com/maps?q=Mangalam%20Silks%20%26%20Readymades%2C%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="contact-side-card" id="hours" style={{ marginTop: 18 }}>
              <div className="ic">🕒</div>
              <div>
                <h4>Business Hours</h4>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.88rem" }}>
                  Mon – Sun: 9:30 AM – 9:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
