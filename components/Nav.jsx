"use client";

import Link from "next/link";
import { useState } from "react";
import { site, conclaves } from "@/data/site";
import { Logo } from "./ui";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" onClick={close} aria-label={`${site.name} home`}>
          <Logo />
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="main-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6 L18 18 M18 6 L6 18" /> : <path d="M4 7 H20 M4 12 H20 M4 17 H20" />}
          </svg>
        </button>

        <nav id="main-menu" className={`nav-menu ${open ? "is-open" : ""}`} aria-label="Main">
          <Link href="/about/" onClick={close}>About</Link>
          <div className="nav-dropdown">
            <Link href="/conclaves/" onClick={close}>Conclaves</Link>
            <div className="nav-dropdown-panel">
              {conclaves.map((c) => (
                <Link key={c.slug} href={`/conclaves/${c.slug}/`} onClick={close}>
                  <strong>{c.title}</strong>
                  <span>{c.location} · {c.dates}</span>
                </Link>
              ))}
              <Link href="/conclaves/" onClick={close} className="nav-dropdown-all">
                View all conclaves →
              </Link>
            </div>
          </div>
          <Link href="/blog/" onClick={close}>Blog</Link>
          <Link href="/volunteer/" onClick={close}>Volunteer</Link>
          <Link href="/contact/" onClick={close}>Contact</Link>
          <Link href="/register/" onClick={close} className="btn btn-dark btn-small">
            {site.currentEdition.label} →
          </Link>
        </nav>
      </div>
    </header>
  );
}
