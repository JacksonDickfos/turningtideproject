"use client";

import Image from "next/image";
import { useState } from "react";

import { ImageLightbox } from "@/components/ImageLightbox";
import { publicImageSrc } from "@/lib/publicImageSrc";

export type FreeResourceGalleryImage = { src: string; alt: string };

function GalleryMainImage({
  src,
  alt,
  priority,
  className,
  onOpenLightbox,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  onOpenLightbox: () => void;
}) {
  const imageSrc = publicImageSrc(src);
  const label = alt ? `Enlarge image: ${alt}` : "Enlarge image";

  return (
    <div className={className ? `detailImage ${className}` : "detailImage"}>
      <button
        type="button"
        className="detailImageExpandBtn"
        onClick={onOpenLightbox}
        aria-label={label}
      >
        <Image
          key={src}
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 900px) 100vw, 700px"
          style={{ objectFit: "contain" }}
          priority={priority}
        />
        <span className="detailImageExpandHint" aria-hidden="true">
          Click to enlarge
        </span>
      </button>
    </div>
  );
}

export function FreeResourceGallery({ images }: { images: FreeResourceGalleryImage[] }) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const safeImages = images.length ? images : [];
  const main = safeImages[Math.min(active, safeImages.length - 1)];

  if (!main) return null;

  const lightbox = (
    <ImageLightbox
      open={lightboxOpen}
      onClose={() => setLightboxOpen(false)}
      src={publicImageSrc(main.src)}
      alt={main.alt}
    />
  );

  if (safeImages.length === 1) {
    return (
      <>
        <GalleryMainImage
          src={main.src}
          alt={main.alt}
          priority
          onOpenLightbox={() => setLightboxOpen(true)}
        />
        {lightbox}
      </>
    );
  }

  return (
    <>
      <div className="freeResourceGallery">
        <GalleryMainImage
          src={main.src}
          alt={main.alt}
          className="freeResourceGalleryMain"
          priority={active === 0}
          onOpenLightbox={() => setLightboxOpen(true)}
        />
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
      {lightbox}
    </>
  );
}
