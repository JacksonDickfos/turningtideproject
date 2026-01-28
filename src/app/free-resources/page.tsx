import Link from "next/link";

import { Container } from "@/components/Container";
import { freeResourcesPreview } from "@/content/previews";

export default function FreeResourcesPage() {
  return (
    <section className="section">
      <Container>
        <div className="stack" style={{ gap: "1.5rem" }}>
          <div className="stack" style={{ gap: 10 }}>
            <p className="muted" style={{ margin: 0 }}>
              Free Resources
            </p>
            <h1 className="h1">Free resources</h1>
            <p className="muted" style={{ margin: 0 }}>
              This page will expand with downloadable tools, guides, and helpful links.
            </p>
          </div>

          <div className="bubbleGrid">
            {freeResourcesPreview.map((item) => (
              <div key={item.id} className="bubble">
                <div className="bubbleMedia">Visual coming soon</div>
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
            <Link className="button secondary" href="/#free-resources">
              Back to homepage
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
