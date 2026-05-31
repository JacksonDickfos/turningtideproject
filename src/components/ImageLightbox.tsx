"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type LightboxImage = { src: string; alt: string };

type ImageLightboxProps = {
  open: boolean;
  onClose: () => void;
  images: LightboxImage[];
  index: number;
  onIndexChange: (index: number) => void;
};

export function ImageLightbox({
  open,
  onClose,
  images,
  index,
  onIndexChange,
}: ImageLightboxProps) {
  const [mounted, setMounted] = useState(false);
  const close = useCallback(() => onClose(), [onClose]);

  const count = images.length;
  const safeIndex = count ? Math.min(Math.max(0, index), count - 1) : 0;
  const current = count ? images[safeIndex] : null;

  const goPrev = useCallback(() => {
    if (count < 2) return;
    onIndexChange((safeIndex - 1 + count) % count);
  }, [count, safeIndex, onIndexChange]);

  const goNext = useCallback(() => {
    if (count < 2) return;
    onIndexChange((safeIndex + 1) % count);
  }, [count, safeIndex, onIndexChange]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, goPrev, goNext]);

  if (!open || !mounted || !current) return null;

  const showNav = count > 1;

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
        aria-label={current.alt || "Enlarged image gallery"}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="imageLightboxClose modalClose"
          onClick={close}
          aria-label="Close enlarged image"
        >
          ×
        </button>

        {showNav ? (
          <button
            type="button"
            className="imageLightboxNav imageLightboxNav--prev"
            onClick={goPrev}
            aria-label="Previous image"
          >
            <span aria-hidden="true">‹</span>
          </button>
        ) : null}

        <div className="imageLightboxMedia">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="min(95vw, 1400px)"
            style={{ objectFit: "contain" }}
            priority
          />
          {showNav ? (
            <p className="imageLightboxCounter" aria-live="polite">
              {safeIndex + 1} / {count}
            </p>
          ) : null}
        </div>

        {showNav ? (
          <button
            type="button"
            className="imageLightboxNav imageLightboxNav--next"
            onClick={goNext}
            aria-label="Next image"
          >
            <span aria-hidden="true">›</span>
          </button>
        ) : null}
      </div>
    </div>,
    document.body
  );
}
