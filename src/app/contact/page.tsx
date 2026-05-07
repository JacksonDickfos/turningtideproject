import Link from "next/link";

import { Container } from "@/components/Container";
import { site } from "@/content/site";

export const metadata = {
  title: `Contact Us | ${site.name}`,
  description: "Get in touch with The Turning Tides Project.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <Container>
        <div className="stack" style={{ gap: "1.5rem" }}>
          <header className="stack" style={{ gap: 6 }}>
            <h1 className="h1">Contact</h1>
            <p className="muted" style={{ margin: 0 }}>
              The Turning Tides Project
            </p>
          </header>

          <div className="panel">
            <div className="panelInner stack legalDoc" style={{ gap: "1rem" }}>
              <h2 className="h3" style={{ margin: 0 }}>
                Get in touch
              </h2>
              <p style={{ margin: 0 }}>
                If you have a question, need support, or would like to reach out, you can contact The
                Turning Tides Project using the details below.
              </p>

              <h2 className="h3" style={{ margin: 0 }}>
                Email
              </h2>
              <p style={{ margin: 0 }}>
                <a href="mailto:hello@turningtidesproject.com">hello@turningtidesproject.com</a>
              </p>

              <h2 className="h3" style={{ margin: 0 }}>
                Response time
              </h2>
              <p style={{ margin: 0 }}>We aim to respond within 1–2 business days.</p>

              <h2 className="h3" style={{ margin: 0 }}>
                Before you contact us
              </h2>
              <p style={{ margin: 0 }}>You may find what you need on the website first, including:</p>
              <ul className="legalList">
                <li>
                  <Link href="/digital-products">Product Pages</Link>
                </li>
                <li>
                  <Link href="/digital-products/the-care-companion">Paid Product FAQs</Link>
                </li>
                <li>
                  <Link href="/free-resources">Free Resources</Link>
                </li>
              </ul>

              <h2 className="h3" style={{ margin: 0 }}>
                A note
              </h2>
              <p style={{ margin: 0 }}>
                The Turning Tides Project was built from lived caregiving experience. Every message is
                read with care and respect.
              </p>

              <div className="buttonRow" style={{ marginTop: 8 }}>
                <Link className="button secondary" href="/">
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
