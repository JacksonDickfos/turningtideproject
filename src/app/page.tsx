import Link from "next/link";

import { Container } from "@/components/Container";
import { ProductCard } from "@/components/ProductCard";
import { about } from "@/content/about";
import { products } from "@/content/products";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <Container>
          <div className="heroGrid">
            <div className="stack">
              <h1 className="h1">{site.heroHeading}</h1>
              <p className="muted" style={{ margin: 0, fontSize: 18 }}>
                {site.heroSubheading}
              </p>
              <p className="muted" style={{ margin: 0 }}>
                {site.tagline.prefix}
                <span className="sheenWord">{site.tagline.emphasis}</span>
                {site.tagline.suffix}
              </p>

              <p className="muted" style={{ margin: 0 }}>
                {site.heroDescription}
              </p>
              <p style={{ margin: 0 }}>
                Start with the books below. Courses and guided modules are on the way.
              </p>

              <div className="buttonRow">
                <a className="button" href="#products">
                  Browse books
                </a>
                <Link className="button secondary" href="/about">
                  Read my story
                </Link>
              </div>
            </div>

            <aside className="panel">
              <div className="panelInner stack">
                <h2 className="h3" style={{ margin: 0 }}>
                  Coming soon
                </h2>
                <p className="muted" style={{ margin: 0 }}>
                  Short courses, modules, and templates.
                </p>
                <div className="stack" style={{ gap: 10 }}>
                  <div className="metaRow" style={{ borderTopStyle: "solid" }}>
                    <span>Courses</span>
                    <span className="muted">In production</span>
                  </div>
                  <div className="metaRow" style={{ borderTopStyle: "solid" }}>
                    <span>Modules</span>
                    <span className="muted">Coming next</span>
                  </div>
                  <div className="metaRow" style={{ borderTopStyle: "solid" }}>
                    <span>Community</span>
                    <span className="muted">Planned</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section id="products" className="section">
        <Container>
          <div className="stack" style={{ gap: "1.25rem" }}>
            <div className="stack" style={{ gap: 6 }}>
              <h2 className="h2">Books</h2>
              <p className="muted" style={{ margin: 0 }}>
                Instant digital delivery. Read on any device.
              </p>
            </div>

            <div className="grid cols2">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section band">
        <Container>
          <div className="stack" style={{ gap: 16 }}>
            <div className="stack" style={{ gap: 6 }}>
              <h2 className="h2">{about.shortTitle}</h2>
              <p className="muted" style={{ margin: 0 }}>
                A short version of my story — and why The Turning Tides Project exists.
              </p>
            </div>

            <div className="prose">
              {about.shortParagraphs.map((p, idx) => (
                <p key={`${idx}-${p.slice(0, 16)}`}>{p}</p>
              ))}
            </div>

            <div className="buttonRow">
              <Link className="button secondary" href="/about">
                Read the full story
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section" id="courses">
        <Container>
          <div className="stack" style={{ gap: 16 }}>
            <div className="stack" style={{ gap: 6 }}>
              <h2 className="h2">Courses & modules</h2>
              <p className="muted" style={{ margin: 0 }}>
                These are being built now. We’ll add a waitlist/signup next.
              </p>
            </div>

            <div className="list">
              <div className="listRow">
                <span>Foundations course</span>
                <span className="muted">Soon</span>
              </div>
              <div className="listRow">
                <span>Weekly modules</span>
                <span className="muted">Soon</span>
              </div>
              <div className="listRow">
                <span>Workbooks & templates</span>
                <span className="muted">Soon</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
