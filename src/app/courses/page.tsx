import Link from "next/link";

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
                <div className="bubbleMedia">Coming soon</div>
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
            <Link className="button secondary" href="/#courses">
              Back to homepage
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
