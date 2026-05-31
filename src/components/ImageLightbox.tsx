"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ImageLightboxProps = {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
};

export function ImageLightbox({ open, onClose, src, alt }: ImageLightboxProps) {
  const [mounted, setMounted] = useState(false);

  const close = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className="imageLightboxOverlay"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        className="imageLightboxDialog"
        role="dialog"
        aria-modal="true"
        aria-label={alt || "Enlarged image"}
      >
        <button
          type="button"
          className="imageLightboxClose modalClose"
          onClick={close}
          aria-label="Close enlarged image"
        >
          ×
        </button>
        <div className="imageLightboxMedia">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="min(95vw, 1400px)"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
