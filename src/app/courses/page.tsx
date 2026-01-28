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
            <h1 className="h1">Mini Courses</h1>
            <p className="muted" style={{ margin: 0 }}>
              Short, supportive courses to help you care without burning out or losing yourself. No fluff. Built for real life.
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
                <div className="bubbleText">
                  <div className="bubbleTitleGroup">
                    <h2 className="h3">{item.title}</h2>
                    {item.subtitle ? (
                      <p className="muted bubbleSubtitle">{item.subtitle}</p>
                    ) : null}
                  </div>
                  <p className="muted bubbleDesc">{item.description}</p>
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
