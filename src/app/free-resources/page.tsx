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
              <div key={item.id} className={`bubble bubble--${item.id}`}>
                <div className="bubbleMedia" style={{ overflow: "hidden" }}>
                  {item.imageSrc ? (
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt ?? ""}
                      width={800}
                      height={500}
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
                  {item.longDescription?.trim() ? (
                    <p className="muted bubbleDesc">{item.longDescription}</p>
                  ) : null}
                </div>
              </div>
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
