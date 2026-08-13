import React, { useEffect, useState } from "react";

const emptyForm = {
  title: "",
  description: "",
  price: "",
  originalPrice: "",
  badge: "",
};

function authHeaders() {
  const token = localStorage.getItem("mangalam_admin_token");
  return { Authorization: `Bearer ${token}` };
}

export default function ItemsManager({ section, label }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [saving, setSaving] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/items/${section}`, { headers: authHeaders() });
      if (res.status === 401) {
        localStorage.removeItem("mangalam_admin_token");
        window.location.href = "/admin-login";
        return;
      }
      const data = await res.json();
      setItems(Array.isArray(data) ? data : []);
    } catch {
      setStatus({ ok: false, msg: "Could not load items — check the backend is running." });
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);

  const openAddForm = () => {
    setEditingId(null);
    setForm(emptyForm);
    setImageFile(null);
    setImagePreview("");
    setShowForm(true);
  };

  const openEditForm = (item) => {
    setEditingId(item.id);
    setForm({
      title: item.title || "",
      description: item.description || "",
      price: item.price ?? "",
      originalPrice: item.originalPrice ?? "",
      badge: item.badge || "",
    });
    setImageFile(null);
    setImagePreview(item.imageUrl || "");
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
    setImageFile(null);
    setImagePreview("");
  };

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setSaving(true);
    setStatus(null);
    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("description", form.description);
      fd.append("price", form.price);
      fd.append("originalPrice", form.originalPrice);
      fd.append("badge", form.badge);
      if (imageFile) fd.append("image", imageFile);

      const url = editingId ? `/api/admin/items/${section}/${editingId}` : `/api/admin/items/${section}`;
      const method = editingId ? "PUT" : "POST";
      const res = await fetch(url, { method, headers: authHeaders(), body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Save failed.");

      setStatus({ ok: true, msg: editingId ? "Item updated." : "Item added." });
      closeForm();
      load();
    } catch (err) {
      setStatus({ ok: false, msg: err.message || "Save failed." });
    }
    setSaving(false);
  };

  const toggleEnabled = async (item) => {
    setStatus(null);
    try {
      const res = await fetch(`/api/admin/items/${section}/${item.id}/toggle`, {
        method: "PATCH",
        headers: authHeaders(),
      });
      if (!res.ok) throw new Error("Could not update status.");
      setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, enabled: !i.enabled } : i)));
    } catch (err) {
      setStatus({ ok: false, msg: err.message });
    }
  };

  const removeItem = async (item) => {
    if (!window.confirm(`Delete "${item.title}"? This cannot be undone.`)) return;
    setStatus(null);
    try {
      const res = await fetch(`/api/admin/items/${section}/${item.id}`, {
        method: "DELETE",
        headers: authHeaders(),
      });
      if (!res.ok) throw new Error("Could not delete item.");
      setItems((prev) => prev.filter((i) => i.id !== item.id));
      setStatus({ ok: true, msg: "Item deleted." });
    } catch (err) {
      setStatus({ ok: false, msg: err.message });
    }
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel-head">
        <h2>{label}</h2>
        <button className="btn btn-primary" onClick={openAddForm}>+ Add {label.slice(0, -1) || "Item"}</button>
      </div>

      {status && <div className={`form-msg ${status.ok ? "ok" : "err"}`}>{status.msg}</div>}

      {showForm && (
        <form className="admin-item-form" onSubmit={submitForm}>
          <h3>{editingId ? "Edit item" : "Add item"}</h3>
          <div className="admin-form-grid">
            <div className="form-field">
              <label>Title</label>
              <input
                type="text"
                required
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                placeholder="e.g. Bridal Kanchipuram Saree"
              />
            </div>
            <div className="form-field">
              <label>Badge (optional)</label>
              <input
                type="text"
                value={form.badge}
                onChange={(e) => setForm((f) => ({ ...f, badge: e.target.value }))}
                placeholder="e.g. New / 30% OFF"
              />
            </div>
            <div className="form-field">
              <label>Price (₹)</label>
              <input
                type="number"
                min="0"
                value={form.price}
                onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
                placeholder="4999"
              />
            </div>
            <div className="form-field">
              <label>Original Price (₹, optional)</label>
              <input
                type="number"
                min="0"
                value={form.originalPrice}
                onChange={(e) => setForm((f) => ({ ...f, originalPrice: e.target.value }))}
                placeholder="6999"
              />
            </div>
          </div>
          <div className="form-field">
            <label>Description (optional)</label>
            <textarea
              rows={3}
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              placeholder="Short description shown on the site"
            />
          </div>
          <div className="form-field">
            <label>Image</label>
            <input type="file" accept="image/*" onChange={onFileChange} />
            {imagePreview && <img src={imagePreview} alt="Preview" className="admin-img-preview" />}
          </div>
          <div className="admin-form-actions">
            <button className="btn btn-primary" type="submit" disabled={saving}>
              {saving ? "Saving..." : editingId ? "Save Changes" : "Add Item"}
            </button>
            <button className="btn btn-outline" type="button" onClick={closeForm}>Cancel</button>
          </div>
        </form>
      )}

      {loading ? (
        <p className="admin-empty">Loading...</p>
      ) : items.length === 0 ? (
        <p className="admin-empty">No {label.toLowerCase()} yet. Click "Add" to create one.</p>
      ) : (
        <div className="admin-item-grid">
          {items.map((item) => (
            <div className={`admin-item-card ${item.enabled ? "" : "is-disabled"}`} key={item.id}>
              <div className="admin-item-img">
                {item.imageUrl ? <img src={item.imageUrl} alt={item.title} /> : <div className="admin-item-noimg">No image</div>}
                {item.badge && <span className="admin-item-badge">{item.badge}</span>}
              </div>
              <div className="admin-item-body">
                <h4>{item.title}</h4>
                {item.price != null && (
                  <p className="admin-item-price">
                    ₹{item.price}
                    {item.originalPrice ? <s style={{ marginLeft: 8, color: "var(--muted)" }}>₹{item.originalPrice}</s> : null}
                  </p>
                )}
                <div className="admin-item-actions">
                  <label className="admin-switch">
                    <input type="checkbox" checked={item.enabled} onChange={() => toggleEnabled(item)} />
                    <span className="admin-switch-slider" />
                  </label>
                  <span className="admin-item-status">{item.enabled ? "Enabled" : "Disabled"}</span>
                  <button className="admin-icon-btn" onClick={() => openEditForm(item)} title="Edit">Edit</button>
                  <button className="admin-icon-btn danger" onClick={() => removeItem(item)} title="Delete">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
