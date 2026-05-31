import Link from "next/link";

import { Container } from "@/components/Container";
import { siteFaqs } from "@/content/faqs";
import { site } from "@/content/site";

export const metadata = {
  title: `Frequently Asked Questions | ${site.name}`,
  description: "FAQs about The Turning Tides Project, our resources, and who they are for.",
};

export default function FaqsPage() {
  return (
    <section className="section">
      <Container>
        <div className="stack" style={{ gap: "1.5rem" }}>
          <header className="stack" style={{ gap: 6 }}>
            <h1 className="h1">Frequently Asked Questions</h1>
            <p className="muted" style={{ margin: 0 }}>
              The Turning Tides Project
            </p>
          </header>

          <div className="panel">
            <div className="panelInner stack legalDoc" style={{ gap: "1rem" }}>
              <section className="faqSection" style={{ gap: "0.85rem" }}>
                <div className="faqList">
                  {siteFaqs.map((f) => (
                    <details key={f.q} className="faqItem">
                      <summary>{f.q}</summary>
                      <p className="muted" style={{ margin: 0 }}>
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              <div className="buttonRow" style={{ marginTop: 8 }}>
                <Link className="button" href="/">
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
