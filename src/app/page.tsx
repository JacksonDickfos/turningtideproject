import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/Container";
import {
  coursesPreview,
  digitalProductsPreview,
  freeResourcesPreview,
} from "@/content/previews";
import { site } from "@/content/site";

function BubbleGrid({
  items,
}: {
  items: { id: string; title: string; description: string }[];
}) {
  return (
    <div className="bubbleGrid">
      {items.map((item) => (
        <div key={item.id} className="bubble">
          <div className="bubbleMedia">Visual coming soon</div>
          <div className="stack" style={{ gap: 6 }}>
            <h3 className="h3">{item.title}</h3>
            <p className="muted" style={{ margin: 0 }}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <Container>
          <div className="heroGrid">
            <div className="stack">
              <div className="heroLogoWrap" aria-hidden="true">
                <Image
                  src="/images/primarylogo.png"
                  alt=""
                  width={360}
                  height={160}
                  priority
                  className="heroLogoImg"
                />
              </div>
              <h1 className="h1">{site.heroHeading}</h1>
              <p className="muted" style={{ margin: 0, fontSize: 18 }}>
                {site.heroSubheading}
              </p>
              <p className="muted" style={{ margin: 0 }}>
                {site.tagline.prefix}
                <span className="sheenWord">{site.tagline.emphasis}</span>
                {site.tagline.suffix}
              </p>

              <div className="buttonRow">
                <a className="button" href="#digital-products">
                  Explore digital products
                </a>
                <Link className="button secondary" href="/about">
                  Read my story
                </Link>
              </div>
            </div>

            <aside className="panel">
              <div className="panelInner stack">
                <h2 className="h3" style={{ margin: 0 }}>
                  What you’ll find here
                </h2>
                <p className="muted" style={{ margin: 0 }}>
                  Digital products now. Courses and free resources rolling out soon.
                </p>
                <div className="stack" style={{ gap: 10 }}>
                  <div className="metaRow" style={{ borderTopStyle: "solid" }}>
                    <span>Why Turning Tides Project</span>
                    <span className="muted">Read below</span>
                  </div>
                  <div className="metaRow" style={{ borderTopStyle: "solid" }}>
                    <span>Digital products</span>
                    <span className="muted">Preview + page</span>
                  </div>
                  <div className="metaRow" style={{ borderTopStyle: "solid" }}>
                    <span>Courses</span>
                    <span className="muted">Coming soon</span>
                  </div>
                  <div className="metaRow" style={{ borderTopStyle: "solid" }}>
                    <span>Free resources</span>
                    <span className="muted">Preview + page</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="section" id="why">
        <Container>
          <div className="stack" style={{ gap: 16 }}>
            <div className="stack" style={{ gap: 6 }}>
              <h2 className="h2">{site.whyTitle}</h2>
            </div>

            <div className="prose">
              {site.whyParagraphs.map((p, idx) => (
                <p key={`${idx}-${p.slice(0, 16)}`}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section" id="digital-products">
        <Container>
          <div className="stack" style={{ gap: 16 }}>
            <div className="sectionHeader">
              <div className="stack" style={{ gap: 6 }}>
                <h2 className="h2">Digital Products</h2>
                <p className="muted" style={{ margin: 0 }}>
                  A quick preview of the paid resources you can access.
                </p>
              </div>
              <Link className="button secondary" href="/digital-products">
                View all
              </Link>
            </div>

            <BubbleGrid items={digitalProductsPreview} />
          </div>
        </Container>
      </section>

      <section className="section band" id="courses">
        <Container>
          <div className="stack" style={{ gap: 16 }}>
            <div className="sectionHeader">
              <div className="stack" style={{ gap: 6 }}>
                <h2 className="h2">Courses</h2>
                <p className="muted" style={{ margin: 0 }}>
                  Coming soon.
                </p>
              </div>
              <Link className="button secondary" href="/courses">
                Learn more
              </Link>
            </div>

            <BubbleGrid items={coursesPreview} />
          </div>
        </Container>
      </section>

      <section className="section" id="free-resources">
        <Container>
          <div className="stack" style={{ gap: 16 }}>
            <div className="sectionHeader">
              <div className="stack" style={{ gap: 6 }}>
                <h2 className="h2">Free Resources</h2>
                <p className="muted" style={{ margin: 0 }}>
                  Helpful tools you can use right away (more coming soon).
                </p>
              </div>
              <Link className="button secondary" href="/free-resources">
                View all
              </Link>
            </div>

            <BubbleGrid items={freeResourcesPreview} />
          </div>
        </Container>
      </section>
    </>
  );
}
