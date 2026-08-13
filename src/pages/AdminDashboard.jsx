import React, { useEffect, useState } from "react";
import { ALL_SUBTOPICS } from "../data/categories.js";
import ItemsManager from "../components/ItemsManager.jsx";
import ChangePasswordForm from "../components/ChangePasswordForm.jsx";

const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", icon: "📊" },
  { key: "new-arrivals", label: "New Arrivals", icon: "🆕" },
  { key: "offers", label: "Offers", icon: "🔥" },
  { key: "change-password", label: "Change Password", icon: "🔐" },
];

function authHeaders() {
  const token = localStorage.getItem("mangalam_admin_token");
  return { Authorization: `Bearer ${token}` };
}

function DashboardOverview({ onNavigate }) {
  const [counts, setCounts] = useState({ newArrivals: null, offers: null });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [naRes, offRes] = await Promise.all([
          fetch("/api/admin/items/new-arrivals", { headers: authHeaders() }),
          fetch("/api/admin/items/offers", { headers: authHeaders() }),
        ]);
        const na = naRes.ok ? await naRes.json() : [];
        const off = offRes.ok ? await offRes.json() : [];
        if (!cancelled) {
          setCounts({
            newArrivals: na.length,
            newArrivalsEnabled: na.filter((i) => i.enabled).length,
            offers: off.length,
            offersEnabled: off.filter((i) => i.enabled).length,
          });
        }
      } catch {
        /* stats are a nice-to-have; ignore failures */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="admin-panel">
      <div className="admin-panel-head">
        <h2>Dashboard</h2>
      </div>
      <div className="grid grid-1">
        <div className="why-card">
          <h4>Total Pages</h4>
          <p>{ALL_SUBTOPICS.length + 6} pages live on the site</p>
        </div>
        <div className="why-card admin-clickable" onClick={() => onNavigate("new-arrivals")}>
          <h4>New Arrivals</h4>
          <p>
            {counts.newArrivals === null ? "…" : `${counts.newArrivalsEnabled} live / ${counts.newArrivals} total`}
          </p>
        </div>
        <div className="why-card admin-clickable" onClick={() => onNavigate("offers")}>
          <h4>Offers</h4>
          <p>{counts.offers === null ? "…" : `${counts.offersEnabled} live / ${counts.offers} total`}</p>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [authed, setAuthed] = useState(true);
  const [section, setSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("mangalam_admin_token");
    if (!token) {
      setAuthed(false);
      window.location.href = "/admin-login";
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("mangalam_admin_token");
    window.location.href = "/admin-login";
  };

  if (!authed) return null;

  return (
    <div className="page-fade admin-shell">
      <button className="admin-sidebar-toggle" onClick={() => setSidebarOpen((v) => !v)} aria-label="Toggle menu">
        ☰
      </button>

      <aside className={`admin-sidebar ${sidebarOpen ? "is-open" : ""}`}>
        <div className="admin-sidebar-brand">
          <img src="/logo.svg" alt="Mangalam Silks" />
          <span>Admin Panel</span>
        </div>
        <nav className="admin-sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              className={`admin-sidebar-link ${section === item.key ? "is-active" : ""}`}
              onClick={() => {
                setSection(item.key);
                setSidebarOpen(false);
              }}
            >
              <span className="admin-sidebar-icon" aria-hidden="true">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <button className="admin-sidebar-logout" onClick={logout}>
          Logout
        </button>
      </aside>

      <section className="admin-main">
        {section === "dashboard" && <DashboardOverview onNavigate={setSection} />}
        {section === "new-arrivals" && <ItemsManager section="new-arrivals" label="New Arrivals" />}
        {section === "offers" && <ItemsManager section="offers" label="Offers" />}
        {section === "change-password" && <ChangePasswordForm />}
      </section>
    </div>
  );
}
