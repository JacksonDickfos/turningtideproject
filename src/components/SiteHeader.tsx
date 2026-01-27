import Link from "next/link";

import { site } from "@/content/site";
import { Container } from "@/components/Container";

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <Container>
        <div className="siteHeaderInner">
          <Link href="/" className="brand">
            {site.name}
          </Link>

          <nav className="nav">
            <Link href="/about" className="navLink">
              About
            </Link>
            <a href="#products" className="navLink">
              Books
            </a>
            <a href="#courses" className="navLink">
              Courses (Soon)
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
