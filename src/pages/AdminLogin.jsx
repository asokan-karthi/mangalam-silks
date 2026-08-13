import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Three small local states this page can be in:
//  "login"   - normal username/password sign-in
//  "question" - forgot-password step 1: enter username, see security question
//  "reset"    - forgot-password step 2: answer question + set a new password
export default function AdminLogin() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");

  const [form, setForm] = useState({ username: "", password: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const [forgotUsername, setForgotUsername] = useState("");
  const [question, setQuestion] = useState("");
  const [resetForm, setResetForm] = useState({ answer: "", newPassword: "", confirmNewPassword: "" });
  const [forgotStatus, setForgotStatus] = useState(null);
  const [forgotLoading, setForgotLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("mangalam_admin_token", data.token);
        setStatus({ ok: true, msg: "Login successful! Redirecting..." });
        setTimeout(() => {
          window.location.href = "/admin-dashboard";
        }, 800);
      } else {
        setStatus({ ok: false, msg: data.message || "Invalid credentials." });
      }
    } catch {
      setStatus({ ok: false, msg: "Could not reach the server." });
    }
    setLoading(false);
  };

  const resetToLogin = () => {
    setMode("login");
    setForgotUsername("");
    setQuestion("");
    setResetForm({ answer: "", newPassword: "", confirmNewPassword: "" });
    setForgotStatus(null);
  };

  const submitFindQuestion = async (e) => {
    e.preventDefault();
    setForgotLoading(true);
    setForgotStatus(null);
    try {
      const res = await fetch("/api/admin/forgot-password/question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: forgotUsername }),
      });
      const data = await res.json();
      setQuestion(data.question);
      setMode("reset");
    } catch {
      setForgotStatus({ ok: false, msg: "Could not reach the server." });
    }
    setForgotLoading(false);
  };

  const submitReset = async (e) => {
    e.preventDefault();
    setForgotLoading(true);
    setForgotStatus(null);
    try {
      const res = await fetch("/api/admin/forgot-password/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: forgotUsername,
          securityAnswer: resetForm.answer,
          newPassword: resetForm.newPassword,
          confirmNewPassword: resetForm.confirmNewPassword,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setForgotStatus({ ok: true, msg: "Password reset! You can sign in now." });
        setTimeout(resetToLogin, 1400);
      } else {
        setForgotStatus({ ok: false, msg: data.message || "Could not reset password." });
      }
    } catch {
      setForgotStatus({ ok: false, msg: "Could not reach the server." });
    }
    setForgotLoading(false);
  };

  return (
    <div className="admin-wrap page-fade">
      <button
        type="button"
        className="admin-home-btn"
        onClick={() => navigate("/home")}
        aria-label="Go to Home page"
        title="Go to Home"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5.5 10v9a1 1 0 0 0 1 1h4.5v-6h2v6H17.5a1 1 0 0 0 1-1v-9" />
        </svg>
        Home
      </button>

      <div className="admin-card">
        <div className="brand-mark admin-brand-mark">
          <img src="/logo.svg" alt="Mangalam Silks & Readymades" />
        </div>

        {mode === "login" && (
          <>
            <h2>Admin Login</h2>
            <p className="sub">Mangalam Silks &amp; Readymades — Staff Portal</p>

            {status && <div className={`form-msg ${status.ok ? "ok" : "err"}`}>{status.msg}</div>}

            <form onSubmit={submit}>
              <div className="form-field">
                <label>Username</label>
                <input
                  type="text"
                  required
                  value={form.username}
                  onChange={(e) => setForm((f) => ({ ...f, username: e.target.value }))}
                  placeholder="admin"
                />
              </div>
              <div className="form-field">
                <label>Password</label>
                <input
                  type="password"
                  required
                  value={form.password}
                  onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                  placeholder="••••••••"
                />
              </div>
              <button className="btn btn-primary" type="submit" style={{ width: "100%", justifyContent: "center" }} disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <button
              type="button"
              className="admin-link-btn"
              onClick={() => {
                setForgotUsername(form.username);
                setMode("question");
              }}
            >
              Forgot password?
            </button>
          </>
        )}

        {mode === "question" && (
          <>
            <h2>Forgot Password</h2>
            <p className="sub">Enter your admin username to continue</p>

            {forgotStatus && <div className={`form-msg ${forgotStatus.ok ? "ok" : "err"}`}>{forgotStatus.msg}</div>}

            <form onSubmit={submitFindQuestion}>
              <div className="form-field">
                <label>Username</label>
                <input
                  type="text"
                  required
                  value={forgotUsername}
                  onChange={(e) => setForgotUsername(e.target.value)}
                  placeholder="admin"
                />
              </div>
              <button className="btn btn-primary" type="submit" style={{ width: "100%", justifyContent: "center" }} disabled={forgotLoading}>
                {forgotLoading ? "Checking..." : "Continue"}
              </button>
            </form>

            <button type="button" className="admin-link-btn" onClick={resetToLogin}>
              ← Back to Sign In
            </button>
          </>
        )}

        {mode === "reset" && (
          <>
            <h2>Reset Password</h2>
            <p className="sub">Answer your security question to set a new password</p>

            {forgotStatus && <div className={`form-msg ${forgotStatus.ok ? "ok" : "err"}`}>{forgotStatus.msg}</div>}

            <form onSubmit={submitReset}>
              <div className="form-field">
                <label>{question}</label>
                <input
                  type="text"
                  required
                  value={resetForm.answer}
                  onChange={(e) => setResetForm((f) => ({ ...f, answer: e.target.value }))}
                  placeholder="Your answer"
                />
              </div>
              <div className="form-field">
                <label>New Password</label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={resetForm.newPassword}
                  onChange={(e) => setResetForm((f) => ({ ...f, newPassword: e.target.value }))}
                  placeholder="At least 6 characters"
                />
              </div>
              <div className="form-field">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={resetForm.confirmNewPassword}
                  onChange={(e) => setResetForm((f) => ({ ...f, confirmNewPassword: e.target.value }))}
                  placeholder="Re-enter new password"
                />
              </div>
              <button className="btn btn-primary" type="submit" style={{ width: "100%", justifyContent: "center" }} disabled={forgotLoading}>
                {forgotLoading ? "Resetting..." : "Reset Password"}
              </button>
            </form>

            <button type="button" className="admin-link-btn" onClick={resetToLogin}>
              ← Back to Sign In
            </button>
          </>
        )}
      </div>
    </div>
  );
}
