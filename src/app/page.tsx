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
                  src="/images/primarylogocopy.png"
                  alt=""
                  width={720}
                  height={320}
                  priority
                  className="heroLogoImg"
                />
              </div>
              <div className="heroTitleBlock">
                <h1 className="h1 heroHeading">
                  <span className="heroHeadingTop">{site.heroHeading.top}</span>
                  <span className="heroHeadingBottom">
                    {site.heroHeading.bottom}
                  </span>
                </h1>
                <p className="muted heroSubheading" style={{ margin: 0 }}>
                  {site.heroSubheading}
                </p>
              </div>
              <p className="muted heroTagline" style={{ margin: 0 }}>
                {site.tagline.prefix}
                <span className="taglineEmphasis">{site.tagline.emphasis}</span>
                {site.tagline.suffix}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <aside className="panel floatingHeroPanel" aria-label="Featured download">
        <div className="panelInner floatingCard">
          <div className="floatingCardTop">
            <div className="floatingCardMedia" aria-hidden="true">
              <Image
                src="/images/braindump.png"
                alt=""
                width={800}
                height={500}
                className="floatingCardImg"
              />
            </div>

            <div className="stack" style={{ gap: 6 }}>
              <h2 className="h3" style={{ margin: 0 }}>
                The Brain Dump
              </h2>
              <p className="muted floatingCardDesc" style={{ margin: 0 }}>
                Brain won&apos;t switch off. Mentally overloaded? Start here.
              </p>
            </div>
          </div>

          <div className="floatingCardFooter">
            <Link className="button" href="/free-resources">
              Free Download
            </Link>
            <p className="muted floatingCardNote" style={{ margin: 0 }}>
              Takes 5 minutes
            </p>
          </div>
        </div>
      </aside>

      <section className="section whySection" id="why">
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
