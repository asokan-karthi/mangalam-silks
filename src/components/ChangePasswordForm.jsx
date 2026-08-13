import React, { useState } from "react";

export default function ChangePasswordForm() {
  const [form, setForm] = useState({ currentPassword: "", newPassword: "", confirmNewPassword: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const token = localStorage.getItem("mangalam_admin_token");
      const res = await fetch("/api/admin/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ ok: true, msg: data.message || "Password changed successfully." });
        setForm({ currentPassword: "", newPassword: "", confirmNewPassword: "" });
      } else {
        setStatus({ ok: false, msg: data.message || "Could not change password." });
      }
    } catch {
      setStatus({ ok: false, msg: "Could not reach the server." });
    }
    setLoading(false);
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel-head">
        <h2>Change Password</h2>
      </div>

      <div className="admin-card admin-card--inline">
        {status && <div className={`form-msg ${status.ok ? "ok" : "err"}`}>{status.msg}</div>}
        <form onSubmit={submit}>
          <div className="form-field">
            <label>Current Password</label>
            <input
              type="password"
              required
              value={form.currentPassword}
              onChange={(e) => setForm((f) => ({ ...f, currentPassword: e.target.value }))}
              placeholder="••••••••••••••••"
            />
          </div>
          <div className="form-field">
            <label>New Password</label>
            <input
              type="password"
              required
              minLength={6}
              value={form.newPassword}
              onChange={(e) => setForm((f) => ({ ...f, newPassword: e.target.value }))}
              placeholder="••••••••••••••••"
            />
          </div>
          <div className="form-field">
            <label>Confirm New Password</label>
            <input
              type="password"
              required
              minLength={6}
              value={form.confirmNewPassword}
              onChange={(e) => setForm((f) => ({ ...f, confirmNewPassword: e.target.value }))}
              placeholder="••••••••••••••••"
            />
          </div>
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Changing..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
