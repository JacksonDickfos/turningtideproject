import Link from "next/link";

import { Container } from "@/components/Container";
import { site } from "@/content/site";

export const metadata = {
  title: `Carer Burnout Assessment | ${site.name}`,
  description:
    "A short assessment to reflect on carer stress and burnout — from The Turning Tides Project.",
};

const EMBED_SRC =
  "https://claude.site/public/artifacts/464ff73a-796f-4dfc-a30e-61b78ce0e021/embed";
const ARTIFACT_URL = "https://claude.ai/public/artifacts/464ff73a-796f-4dfc-a30e-61b78ce0e021";

export default function CarerBurnoutAssessmentPage() {
  return (
    <section className="section">
      <Container>
        <div className="stack" style={{ gap: "1.25rem" }}>
          <header className="stack" style={{ gap: 8 }}>
            <h1 className="h1">Carer Burnout Assessment</h1>
            <p className="muted" style={{ margin: 0 }}>
              Take a moment to check in with yourself. The quiz runs in the embedded tool below.
            </p>
            <p className="muted" style={{ margin: 0 }}>
              Tip: For the biggest view with Claude’s top bar hidden, use the fullscreen control in the
              top-right corner of the quiz (inside the frame). That mode can’t be started automatically
              from this page because the quiz is hosted on Claude’s domain.
            </p>
            <p className="muted" style={{ margin: 0 }}>
              <a href={ARTIFACT_URL} target="_blank" rel="noreferrer">
                Open the assessment in a new tab
              </a>{" "}
              if the embed doesn’t load.
            </p>
          </header>

          <div className="quizEmbedWrap">
            <iframe
              src={EMBED_SRC}
              title="The Turning Tides Project — Carer Burnout Assessment"
              className="quizEmbedFrame"
              allow="clipboard-write"
              allowFullScreen
            />
          </div>

          <div className="buttonRow">
            <Link className="button secondary" href="/">
              Back home
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
