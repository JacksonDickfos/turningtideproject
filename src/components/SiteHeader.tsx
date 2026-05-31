import Link from "next/link";

import { Container } from "@/components/Container";
import { StayConnectedTrigger } from "@/components/StayConnectedModal";

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <Container>
        <div className="siteHeaderInner">
          <nav className="nav" aria-label="Main">
            <Link href="/#free-resources" className="navLink">
              Free Resources
            </Link>
            <Link href="/#digital-products" className="navLink">
              Digital Products
            </Link>
            <Link href="/#courses" className="navLink">
              Mini Courses
            </Link>
          </nav>
          <div className="navActions" aria-label="Quick links">
            <Link href="/carer-burnout-assessment" className="navActionBtn">
              Carer Burnout Quiz
            </Link>
            <StayConnectedTrigger />
          </div>
        </div>
      </Container>
    </header>
  );
}
