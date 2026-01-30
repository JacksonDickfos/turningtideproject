import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/Container";
import { freeResourcesPreview } from "@/content/previews";

export default function FreeResourcesPage() {
  return (
    <section className="section freeResourcesSection">
      <Container>
        <div className="stack" style={{ gap: "1.5rem" }}>
          <div className="stack" style={{ gap: 10 }}>
            <h1 className="h1">Free resources</h1>
            <p className="muted" style={{ margin: 0 }}>
              Small tools that can make a big difference. Instant download. Use straight away.
            </p>
          </div>

          <div className="bubbleGrid">
            {freeResourcesPreview.map((item) => (
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
            <Link className="button secondary" href="/#free-resources">
              Back to homepage
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
