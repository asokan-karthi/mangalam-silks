// Tiny helper for persisting per-image edits made via the "Edit" button on
// subtopic collection cards. Edited images are stored as data URLs in the
// browser's localStorage, keyed by a unique storage key per image, so they
// survive full page reloads (this site reloads the page on every navigation).
//
// This is a client-side-only "edit" (no server upload) — good for previewing
// layout/content changes instantly. To make edits persist across browsers /
// devices, wire saveImage() below to POST to a real backend upload endpoint.

const PREFIX = "mangalam_img_edit:";

export function getStoredImage(key) {
  try {
    return localStorage.getItem(PREFIX + key);
  } catch {
    return null;
  }
}

export function saveStoredImage(key, dataUrl) {
  try {
    localStorage.setItem(PREFIX + key, dataUrl);
  } catch {
    // localStorage full or unavailable — silently ignore
  }
}

export function clearStoredImage(key) {
  try {
    localStorage.removeItem(PREFIX + key);
  } catch {
    /* noop */
  }
}

export function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
