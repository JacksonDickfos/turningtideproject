import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { FreeResourceSignupForm } from "@/components/FreeResourceSignupForm";
import { freeResources, getFreeResource } from "@/content/catalog";

export function generateStaticParams() {
  return freeResources.map((r) => ({ slug: r.slug }));
}

export default async function FreeResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const slug = "then" in params ? (await params).slug : params.slug;
  const resource = getFreeResource(slug);
  if (!resource) return notFound();

  return (
    <section className="section">
      <Container>
        <div className="stack detailLayout">
          <div className="buttonRow">
            <Link className="button secondary" href="/free-resources">
              Back to free resources
            </Link>
          </div>

          <header className="detailHeader">
            <h1 className="h1">{resource.title}</h1>
            {resource.subtitle ? (
              <p className="muted" style={{ margin: 0 }}>
                {resource.subtitle}
              </p>
            ) : null}
          </header>

          <div className="detailGrid">
            <div className="detailGallery">
              {(resource.gallery?.length ? resource.gallery : []).map((img) => (
                <div key={img.src} className="detailImage">
                  <Image
                    src={img.src}
                    alt={img.alt ?? ""}
                    fill
                    sizes="(max-width: 900px) 100vw, 700px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
              {!resource.gallery?.length && resource.imageSrc ? (
                <div className="detailImage">
                  <Image
                    src={resource.imageSrc}
                    alt={resource.imageAlt ?? ""}
                    fill
                    sizes="(max-width: 900px) 100vw, 700px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ) : null}
              {resource.longDescription ? (
                <p className="muted" style={{ margin: 0 }}>
                  {resource.longDescription}
                </p>
              ) : null}
            </div>

            <aside className="panel">
              <div className="panelInner stack">
                {resource.status === "coming_soon" ? (
                  <>
                    <p className="muted" style={{ margin: 0 }}>
                      Coming soon.
                    </p>
                    <button className="button" type="button" disabled>
                      Coming soon
                    </button>
                  </>
                ) : (
                  <>
                    <p className="muted" style={{ margin: 0 }}>
                      Enter your details and we’ll email you the PDF.
                    </p>
                    <FreeResourceSignupForm slug={resource.slug} />
                  </>
                )}
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}

