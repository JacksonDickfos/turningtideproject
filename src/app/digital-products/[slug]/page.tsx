import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { getDigitalProduct, digitalProducts } from "@/content/catalog";

export function generateStaticParams() {
  return digitalProducts.map((p) => ({ slug: p.slug }));
}

export default async function DigitalProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const slug = "then" in params ? (await params).slug : params.slug;
  const product = getDigitalProduct(slug);
  if (!product) return notFound();

  return (
    <section className="section">
      <Container>
        <div className="stack detailLayout">
          <div className="buttonRow">
            <Link className="button secondary" href="/digital-products">
              Back to digital products
            </Link>
          </div>

          <header className="detailHeader">
            <h1 className="h1">{product.title}</h1>
            {product.subtitle ? (
              <p className="muted" style={{ margin: 0 }}>
                {product.subtitle}
              </p>
            ) : null}
          </header>

          <div className="detailGrid">
            <div className="detailGallery">
              {(product.gallery?.length ? product.gallery : []).map((img) => (
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
              {!product.gallery?.length && product.imageSrc ? (
                <div className="detailImage">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt ?? ""}
                    fill
                    sizes="(max-width: 900px) 100vw, 700px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ) : null}
            </div>

            <aside className="panel">
              <div className="panelInner stack">
                {product.description ? <p style={{ margin: 0 }}>{product.description}</p> : null}
                {product.longDescription ? (
                  <p className="muted" style={{ margin: 0 }}>
                    {product.longDescription}
                  </p>
                ) : null}

                {product.status === "coming_soon" || !product.stripeUrl ? (
                  <button className="button" type="button" disabled>
                    Coming soon
                  </button>
                ) : (
                  <a className="button" href={product.stripeUrl}>
                    Buy now
                  </a>
                )}
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}

