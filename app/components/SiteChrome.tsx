'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <Link className="brand" href="/" aria-label="Built In. Melbourne home">
        Built In.
        <span>Melbourne</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#about">About</Link>
        <Link href="/#services">Services</Link>
        <Link href="/#projects">Projects</Link>
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
