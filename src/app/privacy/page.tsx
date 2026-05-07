import Link from "next/link";

import { Container } from "@/components/Container";
import { site } from "@/content/site";

export const metadata = {
  title: `Privacy Policy | ${site.name}`,
  description: "Privacy Policy for The Turning Tides Project.",
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <Container>
        <div className="stack" style={{ gap: "1.5rem" }}>
          <header className="stack" style={{ gap: 6 }}>
            <h1 className="h1">Privacy Policy</h1>
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
                Your privacy matters
              </h2>
              <p style={{ margin: 0 }}>
                This Privacy Policy explains what information is collected, how it is used, and how it
                is protected when you visit The Turning Tides Project website, download a resource,
                purchase a product, join our email list, or contact us.
              </p>

              <h2 className="h3" style={{ margin: 0 }}>
                What we collect
              </h2>
              <p style={{ margin: 0 }}>We may collect personal information such as:</p>
              <ul className="legalList">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Purchase details</li>
                <li>Any information you choose to share with us</li>
              </ul>

              <h2 className="h3" style={{ margin: 0 }}>
                How your information is collected
              </h2>
              <p style={{ margin: 0 }}>We may collect your information when you:</p>
              <ul className="legalList">
                <li>Download a free resource</li>
                <li>Purchase a digital product</li>
                <li>Join our email list</li>
                <li>Contact us directly</li>
                <li>Browse or interact with our website</li>
              </ul>

              <h2 className="h3" style={{ margin: 0 }}>
                How your information is used
              </h2>
              <p style={{ margin: 0 }}>Your information may be used to:</p>
              <ul className="legalList">
                <li>Deliver your downloads and purchases</li>
                <li>Send emails, updates, and helpful resources</li>
                <li>Improve our products, services, and website</li>
                <li>Respond to enquiries and customer support requests</li>
              </ul>
              <p style={{ margin: 0 }}>
                If you download a resource or make a purchase, you may receive emails from The Turning
                Tides Project. You can unsubscribe at any time by clicking the unsubscribe link in
                any email.
              </p>

              <h2 className="h3" style={{ margin: 0 }}>
                Third-party services
              </h2>
              <p style={{ margin: 0 }}>
                We use trusted third-party platforms to help run this business, including services such
                as:
              </p>
              <ul className="legalList">
                <li>Mailchimp (email marketing)</li>
                <li>Stripe (payment processing)</li>
                <li>Google Drive (file hosting and delivery)</li>
              </ul>
              <p style={{ margin: 0 }}>
                These providers may collect, store, or process your information on our behalf to
                deliver services.
              </p>

              <h2 className="h3" style={{ margin: 0 }}>
                How your information is stored
              </h2>
              <p style={{ margin: 0 }}>
                Your information is stored securely using trusted third-party platforms. Some of these
                providers may store or process data outside Australia. By using this website,
                downloading resources, or purchasing products, you acknowledge that your information
                may be transferred, stored, or processed overseas. We take reasonable steps to
                protect your information; however no online system can be guaranteed to be completely
                secure.
              </p>

              <h2 className="h3" style={{ margin: 0 }}>
                Sharing your information
              </h2>
              <p style={{ margin: 0 }}>
                We do not sell, rent, or trade your personal information. Your information will only
                be shared where necessary to operate this business, such as processing payments,
                sending emails, or delivering digital products.
              </p>

              <h2 className="h3" style={{ margin: 0 }}>
                Cookies and website tracking
              </h2>
              <p style={{ margin: 0 }}>
                This website may use cookies and similar technologies to improve your browsing
                experience and understand how visitors use the site.
              </p>
              <p style={{ margin: 0 }}>
                These tools may help us analyse website traffic, improve website performance, and better
                understand what content is most helpful.
              </p>
              <p style={{ margin: 0 }}>
                You can usually disable cookies through your browser settings if you prefer.
              </p>

              <h2 className="h3" style={{ margin: 0 }}>
                Data retention
              </h2>
              <p style={{ margin: 0 }}>We only keep your personal information for as long as necessary to:</p>
              <ul className="legalList">
                <li>Provide products or services for you</li>
                <li>Meet legal, tax, or accounting obligations</li>
                <li>Improve our business and customer experience</li>
              </ul>

              <h2 className="h3" style={{ margin: 0 }}>
                Your rights
              </h2>
              <p style={{ margin: 0 }}>You may request to:</p>
              <ul className="legalList">
                <li>Access the personal information we hold about you</li>
                <li>Correct or update your information</li>
                <li>Request deletion of your personal information where appropriate</li>
                <li>To make a request, please contact us using the details below.</li>
              </ul>

              <h2 className="h3" style={{ margin: 0 }}>
                Contact
              </h2>
              <p style={{ margin: 0 }}>
                If you have any questions about this Privacy Policy or how your information is handled,
                you can contact:
              </p>
              <p style={{ margin: 0 }}>
                <a href="mailto:hello@turningtidesproject.com">hello@turningtidesproject.com</a>
              </p>

              <h2 className="h3" style={{ margin: 0 }}>
                Changes to this policy
              </h2>
              <p style={{ margin: 0 }}>
                This Privacy Policy may be updated from time to time to reflect changes to the website,
                services, or legal requirements.
              </p>
              <p style={{ margin: 0 }}>
                The most current version will always be available on this website.
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
