import Link from "next/link";

import { site } from "@/content/site";
import { Container } from "@/components/Container";
import Image from "next/image";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <Container>
        <div className="siteFooterInner">
          <div className="footerLogoWrap" aria-hidden="true">
            <Image
              src="/images/footerlogocopy.png"
              alt=""
              width={520}
              height={240}
              className="footerLogoImg"
            />
          </div>
          <nav className="footerNav" aria-label="Legal and contact">
            <Link href="/contact">Contact Us</Link>
            <Link href="/carer-burnout-assessment">Carer Burnout Assessment</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </nav>
          <p className="muted">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
