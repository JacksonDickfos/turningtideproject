import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/Container";
import { digitalProductsPreview } from "@/content/previews";

export default function DigitalProductsPage() {
  return (
    <section className="section">
      <Container>
        <div className="stack" style={{ gap: "1.5rem" }}>
          <div className="stack" style={{ gap: 10 }}>
            <h1 className="h1">Digital Products</h1>
            <p className="muted" style={{ margin: 0 }}>
              Instantly downloadable tools to make caring feel less overwhelming.
            </p>
          </div>

          <div className="bubbleGrid">
            {digitalProductsPreview.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`bubble bubble--${item.id} bubbleLink`}
              >
                <div className="bubbleMedia" style={{ overflow: "hidden" }}>
                  {item.imageSrc ? (
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt ?? ""}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                      className="bubbleImage"
                    />
                  ) : (
                    "Visual coming soon"
                  )}
                </div>
                <div className="bubbleText">
                  <div className="bubbleTitleGroup">
                    <h2 className="h3">{item.title}</h2>
                    {item.subtitle ? (
                      <p className="muted bubbleSubtitle">{item.subtitle}</p>
                    ) : null}
                  </div>
                  {item.description?.trim() ? (
                    <p className="muted bubbleDesc">{item.description}</p>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>

          <div className="buttonRow">
            <Link className="button secondary" href="/#digital-products">
              Back to homepage
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
