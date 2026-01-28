import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/Container";
import { coursesPreview } from "@/content/previews";

export default function CoursesPage() {
  return (
    <section className="section coursesSection">
      <Container>
        <div className="stack" style={{ gap: "1.5rem" }}>
          <div className="stack" style={{ gap: 10 }}>
            <p className="muted" style={{ margin: 0 }}>
              Courses
            </p>
            <h1 className="h1">Courses (coming soon)</h1>
            <p className="muted" style={{ margin: 0 }}>
              This page will expand with course outlines, module breakdowns, and enrollment details.
            </p>
          </div>

          <div className="bubbleGrid">
            {coursesPreview.map((item) => (
              <div key={item.id} className="bubble">
                <div className="bubbleMedia" style={{ overflow: "hidden" }}>
                  {item.imageSrc ? (
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt ?? ""}
                      width={800}
                      height={500}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  ) : (
                    "Coming soon"
                  )}
                </div>
                <div className="stack" style={{ gap: 6 }}>
                  <h2 className="h3">{item.title}</h2>
                  {item.subtitle ? (
                    <p className="muted" style={{ margin: 0, fontWeight: 600 }}>
                      {item.subtitle}
                    </p>
                  ) : null}
                  <p className="muted" style={{ margin: 0, whiteSpace: "pre-line" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="buttonRow">
            <Link className="button secondary" href="/#courses">
              Back to homepage
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
