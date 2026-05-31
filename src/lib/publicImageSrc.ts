/** Encode filename segment for paths under /public (spaces etc.). */
export function publicImageSrc(path: string): string {
  const parts = path.split("/").filter(Boolean);
  if (!parts.length) return path;
  const file = parts.pop()!;
  return `/${[...parts, encodeURIComponent(file)].join("/")}`;
}
