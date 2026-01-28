import Link from "next/link";

import { site } from "@/content/site";
import { Container } from "@/components/Container";

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <Container>
        <div className="siteHeaderInner">
          <nav className="nav">
            <Link href="/#digital-products" className="navLink">
              Digital Products
            </Link>
            <Link href="/#courses" className="navLink">
              Mini Courses
            </Link>
            <Link href="/#free-resources" className="navLink">
              Free Resources
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
