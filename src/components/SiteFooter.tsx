import { site } from "@/content/site";
import { Container } from "@/components/Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <Container>
        <div className="siteFooterInner">
          <p className="muted">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="muted">
            Digital products are delivered electronically. No physical items.
          </p>
        </div>
      </Container>
    </footer>
  );
}
