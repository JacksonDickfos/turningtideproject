import Link from "next/link";

import { Container } from "@/components/Container";
import { site } from "@/content/site";

export const metadata = {
  title: `Terms & Conditions | ${site.name}`,
  description: "Terms & Conditions for The Turning Tides Project.",
};

export default function TermsPage() {
  return (
    <section className="section">
      <Container>
        <div className="stack" style={{ gap: "1.5rem" }}>
          <header className="stack" style={{ gap: 6 }}>
            <h1 className="h1">Terms & Conditions</h1>
            <p className="muted" style={{ margin: 0 }}>
              The Turning Tides Project
            </p>
            <p className="muted" style={{ margin: 0 }}>
              Effective Date: 30 March 2026
            </p>
          </header>

          <div className="panel">
            <div className="panelInner stack legalDoc" style={{ gap: "1rem" }}>
              <h2 className="h3" style={{ margin: 0 }}>
                Use of this website
              </h2>
              <p style={{ margin: 0 }}>
                All content on this website is owned by The Turning Tides Project and is provided for
                personal, non-commercial use only.
              </p>
              <p style={{ margin: 0 }}>
                You may not copy, reproduce, republish, sell, distribute, or exploit any content,
                product, or material from this website without written permission.
              </p>

              <h2 className="h3" style={{ margin: 0 }}>
                Digital products
              </h2>
              <p style={{ margin: 0 }}>
                All products sold through The Turning Tides Project are digital products. When you
                purchase a product, you are granted a personal use licence only. This means:
              </p>
              <ul className="legalList">
                <li>You may use the product for your own personal caregiving needs</li>
                <li>
                  You may print copies for your own use, including use across your own caregiving
                  responsibilities
                </li>
                <li>
                  You may not share, resell, copy, reproduce, upload, distribute, or give the product
                  to others
                </li>
              </ul>
              <p style={{ margin: 0 }}>
                If you think someone else would benefit from one of our products, they should purchase
                or download their own copy directly from the website.
              </p>

              <h2 className="h3" style={{ margin: 0 }}>
                Free resources
              </h2>
              <p style={{ margin: 0 }}>
                Free resources are also for personal use only and may not be reproduced,
                redistributed, or repackaged without permission.
              </p>

              <h2 className="h3" style={{ margin: 0 }}>
                Payments
              </h2>
              <p style={{ margin: 0 }}>
                All prices are listed in Australian Dollars (AUD) unless otherwise stated. Payments
                are securely processed through trusted third-party providers such as Stripe. The
                Turning Tides Project does not store your full payment information.
              </p>

              <h2 className="h3" style={{ margin: 0 }}>
                Refunds
              </h2>
              <p style={{ margin: 0 }}>
                Due to the nature of digital products, refunds are not offered once a product has been
                accessed, downloaded, or delivered.
              </p>
              <p style={{ margin: 0 }}>
                If you experience any issues receiving or accessing your product, please contact us and
                we will do our best to assist.
              </p>

              <h2 className="h3" style={{ margin: 0 }}>
                Disclaimer
              </h2>
              <p style={{ margin: 0 }}>
                The Turning Tides Project provides practical information, resources, and tools based
                on lived caregiving experience.
              </p>
              <p style={{ margin: 0 }}>
                All content is intended for general informational and educational purposes only. It is
                not medical, legal, financial, or professional advice.
              </p>
              <p style={{ margin: 0 }}>
                You are responsible for your own decisions, actions, and outcomes.
              </p>

              <h2 className="h3" style={{ margin: 0 }}>
                Intellectual property
              </h2>
              <p style={{ margin: 0 }}>
                All content, branding, wording, designs, digital products, downloads, and materials on
                this website remain the intellectual property of The Turning Tides Project unless
                otherwise stated.
              </p>

              <h2 className="h3" style={{ margin: 0 }}>
                Changes to these terms
              </h2>
              <p style={{ margin: 0 }}>
                These Terms & Conditions may be updated from time to time.
              </p>
              <p style={{ margin: 0 }}>
                The most current version will always be available on this website. By continuing to
                use this website, you agree to any updated terms.
              </p>

              <h2 className="h3" style={{ margin: 0 }}>
                Contact
              </h2>
              <p style={{ margin: 0 }}>
                If you have any questions about these Terms & Conditions, please contact:
              </p>
              <p style={{ margin: 0 }}>
                <a href="mailto:hello@turningtidesproject.com">hello@turningtidesproject.com</a>
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
