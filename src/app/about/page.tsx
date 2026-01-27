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
            <h1 className="h1">{about.headline}</h1>
            <p className="muted" style={{ margin: 0 }}>
              {about.preview}
            </p>
          </div>

          <div className="panel">
            <div className="panelInner stack" style={{ gap: "1.25rem" }}>
              {about.sections.map((s) => (
                <section key={s.title} className="stack" style={{ gap: 8 }}>
                  <h2 className="h2">{s.title}</h2>
                  <p style={{ margin: 0 }}>{s.body}</p>
                </section>
              ))}

              <div className="buttonRow">
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
