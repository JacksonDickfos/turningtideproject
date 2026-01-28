import Link from "next/link";
import Image from "next/image";

import { site } from "@/content/site";
import { Container } from "@/components/Container";

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <Container>
        <div className="siteHeaderInner">
          <Link href="/" className="brandLogo" aria-label={site.name}>
            <Image
              src="/images/longlogo.png"
              alt={site.name}
              width={220}
              height={44}
              priority
              className="brandImg"
            />
            <span className="srOnly">{site.name}</span>
          </Link>

          <nav className="nav">
            <Link href="/#why" className="navLink">
              Why
            </Link>
            <Link href="/#digital-products" className="navLink">
              Digital Products
            </Link>
            <Link href="/#courses" className="navLink">
              Courses
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
