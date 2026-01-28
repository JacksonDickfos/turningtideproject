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
              <p className="muted" style={{ margin: 0 }}>
                {site.tagline.prefix}<span className="sheenWord">{site.tagline.emphasis}</span>{site.tagline.suffix}
              </p>
              <h1 className="h1">Build momentum with resources you can use today.</h1>
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

      <section className="section">
        <Container>
          <div className="grid cols2">
            <div className="panel">
              <div className="panelInner stack">
                <h2 className="h2">{about.previewTitle}</h2>
                <p className="muted" style={{ margin: 0 }}>
                  {about.preview}
                </p>
                <div className="buttonRow">
                  <Link className="button secondary" href="/about">
                    Go to About
                  </Link>
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="panelInner stack">
                <h2 className="h2" id="courses">
                  Courses & modules
                </h2>
                <p className="muted" style={{ margin: 0 }}>
                  These are being built now. We’ll add a waitlist/signup next.
                </p>
                <div className="stack" style={{ gap: 10 }}>
                  <div className="metaRow" style={{ borderTopStyle: "solid" }}>
                    <span>Foundations course</span>
                    <span className="muted">Soon</span>
                  </div>
                  <div className="metaRow" style={{ borderTopStyle: "solid" }}>
                    <span>Weekly modules</span>
                    <span className="muted">Soon</span>
                  </div>
                  <div className="metaRow" style={{ borderTopStyle: "solid" }}>
                    <span>Workbooks & templates</span>
                    <span className="muted">Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
