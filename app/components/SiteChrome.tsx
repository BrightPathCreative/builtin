'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CONTACT_EMAIL,
  FOOTER_LINKS,
  NAV_LINKS,
  SERVICE_LINKS,
} from "../lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`site-header${isHome ? " site-header--hero" : ""}${
        scrolled ? " is-scrolled" : ""
      }`}
    >
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="Built In. Melbourne home">
          <img
            src="/images/brand/logo.png"
            alt="built in melbourne logo — architectural builder bayside melbourne"
            width={160}
            height={48}
          />
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) =>
            link.href === "/services" ? (
              <div
                key={link.href}
                className="nav-dropdown"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="nav-dropdown__trigger"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  {link.label}
                </Link>
                <div className={`nav-dropdown__menu${servicesOpen ? " is-open" : ""}`}>
                  {SERVICE_LINKS.map((service) => (
                    <Link key={service.href} href={service.href}>
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        <Link className="button button-nav" href="/contact">
          Discuss Your Project
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
      >
        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="mobile-menu__group">
            <span>Services</span>
            {SERVICE_LINKS.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                onClick={() => setMenuOpen(false)}
              >
                {service.label}
              </Link>
            ))}
          </div>
          <div className="mobile-menu__email">
            <a href={`mailto:${CONTACT_EMAIL}`}>josh@builtinmelbourne.com.au</a>
          </div>
          <Link
            className="button button-nav"
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Discuss Your Project
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">Built In. Melbourne Pty Ltd</p>
          <p>ABN 54 610 132 486 · ACN 610 132 486</p>
          <p>
            Registered Domestic Builder (Unlimited) · CDB-U 58374 · Victorian
            Practitioner
          </p>
          <p className="site-footer__trust">
            Fully Insured · 16 Years Experience · DB-U 45446
          </p>
        </div>

        <div className="site-footer__nav">
          <p className="site-footer__nav-label">Navigation</p>
          <nav aria-label="Footer navigation">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Footer links">
            {FOOTER_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="site-footer__nav">
          <p className="site-footer__nav-label">Contact</p>
          <a href={`mailto:${CONTACT_EMAIL}`}>josh@builtinmelbourne.com.au</a>
          <a
            href="https://www.instagram.com/builtin.melbourne"
            rel="noopener noreferrer"
            target="_blank"
          >
            @builtin.melbourne
          </a>
        </div>
      </div>
      <p className="site-footer__copy">
        © 2026 Built In. Melbourne. All rights reserved.
      </p>
    </footer>
  );
}
