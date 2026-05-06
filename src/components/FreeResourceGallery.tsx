"use client";

import Image from "next/image";
import { useState } from "react";

export type FreeResourceGalleryImage = { src: string; alt: string };

/** Encode filename segment for paths under /public (spaces etc.). */
function publicImageSrc(path: string): string {
  const parts = path.split("/").filter(Boolean);
  if (!parts.length) return path;
  const file = parts.pop()!;
  return `/${[...parts, encodeURIComponent(file)].join("/")}`;
}

export function FreeResourceGallery({ images }: { images: FreeResourceGalleryImage[] }) {
  const [active, setActive] = useState(0);
  const safeImages = images.length ? images : [];
  const main = safeImages[Math.min(active, safeImages.length - 1)];

  if (!main) return null;

  if (safeImages.length === 1) {
    return (
      <div className="detailImage">
        <Image
          src={publicImageSrc(main.src)}
          alt={main.alt}
          fill
          sizes="(max-width: 900px) 100vw, 700px"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    );
  }

  return (
    <div className="freeResourceGallery">
      <div className="detailImage freeResourceGalleryMain">
        <Image
          key={main.src}
          src={publicImageSrc(main.src)}
          alt={main.alt}
          fill
          sizes="(max-width: 900px) 100vw, 700px"
          style={{ objectFit: "contain" }}
          priority={active === 0}
        />
      </div>
      <ul className="freeResourceGalleryThumbs">
        {safeImages.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              className="freeResourceGalleryThumb"
              aria-current={i === active ? "true" : undefined}
              aria-label={`Show image ${i + 1}: ${img.alt}`}
              onClick={() => setActive(i)}
            >
              <Image
                src={publicImageSrc(img.src)}
                alt=""
                fill
                sizes="80px"
                className="freeResourceGalleryThumbImg"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
