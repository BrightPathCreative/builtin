import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Built In. Melbourne home">
        Built In.
        <span>Melbourne</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#about">About</Link>
        <Link href="/#services">Services</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Link className="button button-small" href="/contact">
        Discuss Your Project
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <p className="footer-brand">Built In. Melbourne</p>
      <p>
        Built In. Melbourne Pty Ltd / ABN 54 610 132 486 / Registered Domestic
        Builder (Unlimited) / CDB-U 58374
      </p>
      <p>
        &copy; 2026 Built In. Melbourne. All rights reserved.{" "}
        <Link href="/privacy">Privacy</Link>
      </p>
    </footer>
  );
}
