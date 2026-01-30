import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { courses, getCourse } from "@/content/catalog";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const slug = "then" in params ? (await params).slug : params.slug;
  const course = getCourse(slug);
  if (!course) return notFound();

  return (
    <section className="section">
      <Container>
        <div className="stack detailLayout">
          <div className="buttonRow">
            <Link className="button secondary" href="/courses">
              Back to mini courses
            </Link>
          </div>

          <header className="detailHeader">
            <h1 className="h1">{course.title}</h1>
            {course.subtitle ? (
              <p className="muted" style={{ margin: 0 }}>
                {course.subtitle}
              </p>
            ) : null}
          </header>

          <div className="detailGrid">
            <div className="courseVideo">
              <div className="courseVideoInner">
                Video intro coming soon
              </div>
            </div>

            <aside className="panel">
              <div className="panelInner stack">
                {course.description ? <p style={{ margin: 0 }}>{course.description}</p> : null}
                {course.status === "coming_soon" ? (
                  <button className="button" type="button" disabled>
                    Coming soon
                  </button>
                ) : (
                  <a className="button" href="#">
                    Enrol now
                  </a>
                )}
              </div>
            </aside>
          </div>

          <div className="courseModules">
            <h2 className="h2">Modules</h2>
            <div className="stack" style={{ gap: 10 }}>
              {(course.modules ?? []).map((m) => (
                <div key={m.title} className="panel">
                  <div className="panelInner stack" style={{ gap: 8 }}>
                    <h3 className="h3">{m.title}</h3>
                    {m.bullets?.length ? (
                      <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                        {m.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              ))}
              {!course.modules?.length ? (
                <p className="muted" style={{ margin: 0 }}>
                  Module details coming soon.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

