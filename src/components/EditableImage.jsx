import React, { useEffect, useRef, useState } from "react";
import { getStoredImage, saveStoredImage, clearStoredImage, fileToDataUrl } from "../utils/imageStore.js";

/**
 * An <img> with a hover "Edit" control that lets a store admin/editor swap the
 * picture right on the page (click the pencil -> choose a file -> preview
 * updates instantly). The chosen image is saved in the browser's storage
 * under `storageKey`, so it stays swapped even after this site's full-page
 * reload navigation.
 *
 * Usage:
 *   <EditableImage storageKey="women-sarees-kanchipuram-silk-1" defaultSrc={img} alt="..." />
 */
export default function EditableImage({ storageKey, defaultSrc, alt, aspect = "3/4", editable = true }) {
  const [src, setSrc] = useState(defaultSrc);
  const inputRef = useRef(null);

  useEffect(() => {
    const stored = getStoredImage(storageKey);
    setSrc(stored || defaultSrc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey, defaultSrc]);

  const onPick = () => inputRef.current?.click();

  const onFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await fileToDataUrl(file);
    saveStoredImage(storageKey, dataUrl);
    setSrc(dataUrl);
    e.target.value = "";
  };

  const onReset = (e) => {
    e.stopPropagation();
    clearStoredImage(storageKey);
    setSrc(defaultSrc);
  };

  const isEdited = src !== defaultSrc;

  return (
    <div className="editable-img" style={{ aspectRatio: aspect }}>
      <img src={src} alt={alt} loading="lazy" />
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={onFileChange}
      />
    </div>
  );
}
