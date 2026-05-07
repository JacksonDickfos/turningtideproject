import { courses, digitalProducts, freeResources } from "@/content/catalog";

export type PreviewItem = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  imageSrc?: string;
  imageAlt?: string;
  href: string;
};

export const digitalProductsPreview: PreviewItem[] = digitalProducts.map((p) => ({
  id: p.id,
  slug: p.slug,
  title: p.title,
  subtitle: p.subtitle,
  description: p.description,
  longDescription: p.longDescription,
  imageSrc: p.imageSrc,
  imageAlt: p.imageAlt,
  href: `/digital-products/${p.slug}`,
}));

export const coursesPreview: PreviewItem[] = courses.map((c) => ({
  id: c.id,
  slug: c.slug,
  title: c.title,
  subtitle: c.subtitle,
  description: c.description,
  longDescription: c.longDescription,
  imageSrc: c.imageSrc,
  imageAlt: c.imageAlt,
  href: `/courses/${c.slug}`,
}));

export const freeResourcesPreview: PreviewItem[] = freeResources.map((r) => ({
  id: r.id,
  slug: r.slug,
  title: r.title,
  subtitle: r.subtitle,
  description: r.description,
  longDescription: r.longDescription,
  imageSrc: r.imageSrc,
  imageAlt: r.imageAlt,
  href: `/free-resources/${r.slug}`,
}));
