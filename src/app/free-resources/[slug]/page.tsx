import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { FreeResourceGallery } from "@/components/FreeResourceGallery";
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

  const galleryImages =
    resource.gallery?.length
      ? resource.gallery.map((g) => ({ src: g.src, alt: g.alt ?? "" }))
      : resource.imageSrc
        ? [{ src: resource.imageSrc, alt: resource.imageAlt ?? "" }]
        : [];

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
              <FreeResourceGallery images={galleryImages} />
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
                    <h2 className="h3" style={{ margin: 0 }}>
                      {resource.signupHeading}
                    </h2>
                    <p className="muted" style={{ margin: 0 }}>
                      {resource.signupShortDescription}
                    </p>
                    <FreeResourceSignupForm
                      slug={resource.slug}
                      ctaLabel={resource.signupCtaLabel}
                      disclosureNote={resource.signupDisclosureNote}
                    />
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

