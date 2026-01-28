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
            <p className="muted" style={{ margin: 0 }}>
              Digital Products
            </p>
            <h1 className="h1">Explore digital products</h1>
            <p className="muted" style={{ margin: 0 }}>
              This page will become the full storefront with visuals, detailed descriptions, and checkout links.
            </p>
          </div>

          <div className="bubbleGrid">
            {digitalProductsPreview.map((item) => (
              <div key={item.id} className="bubble">
                <div className="bubbleMedia" style={{ overflow: "hidden" }}>
                  {item.imageSrc ? (
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt ?? ""}
                      width={800}
                      height={500}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    "Visual coming soon"
                  )}
                </div>
                <div className="stack" style={{ gap: 6 }}>
                  <h2 className="h3">{item.title}</h2>
                  <p className="muted" style={{ margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
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
