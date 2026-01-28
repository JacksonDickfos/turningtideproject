import Link from "next/link";

import { Container } from "@/components/Container";
import { about } from "@/content/about";

export default function AboutPage() {
  return (
    <section className="section">
      <Container>
        <div className="stack" style={{ gap: "1.5rem" }}>
          <div className="stack" style={{ gap: 10 }}>
            <p className="muted" style={{ margin: 0 }}>
              About
            </p>
            <h1 className="h1">{about.longTitle}</h1>
          </div>

          <div className="panel">
            <div className="panelInner stack" style={{ gap: "1rem" }}>
              {about.longParagraphs.map((p, idx) => (
                <p key={`${idx}-${p.slice(0, 16)}`} style={{ margin: 0 }}>
                  {p}
                </p>
              ))}

              <div className="buttonRow" style={{ marginTop: 8 }}>
                <Link className="button" href="/#products">
                  Browse books
                </Link>
                <Link className="button secondary" href="/">
                  Back home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
