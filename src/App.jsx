import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import CollectionsLanding from "./pages/CollectionsLanding.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import SearchResults from "./pages/SearchResults.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import NotFound from "./pages/NotFound.jsx";

import { SUBTOPIC_ROUTES } from "./data/subtopicRoutes.js";

export default function App() {
  const location = useLocation();
  // The admin/staff login screen and the admin dashboard are focused,
  // standalone portals — no site header or footer there, they have their
  // own navigation (a Home button on login, a sidebar on the dashboard).
  const isBareLayout = location.pathname === "/admin-login" || location.pathname === "/admin-dashboard";

  return (
    <div className="app-shell">
      {!isBareLayout && <Navbar />}
      <main>
        <Routes>
          {/* Site opens directly on the Collections landing page */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/admin-login" element={<AdminLogin />} > </Route>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          {/* One route per generated subtopic page (113 total) */}
          {SUBTOPIC_ROUTES.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          {/* Category landing pages: /women, /men, /kids, /accessories, /bridal, /new-arrivals, /offers */}
          <Route path="/:categorySlug" element={<CategoryPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isBareLayout && <Footer />}
      <ScrollToTop />
    </div>
  );
}
