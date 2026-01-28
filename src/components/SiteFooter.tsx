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
              src="/images/primarylogocopy.png"
              alt=""
              width={520}
              height={240}
              className="footerLogoImg"
            />
          </div>
          <p className="muted">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
