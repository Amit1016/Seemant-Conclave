import Link from "next/link";
import { site } from "@/data/site";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Adds the GitHub Pages sub-path to image URLs.
export function asset(path) {
  if (!path || path.startsWith("http")) return path;
  return `${base}${path}`;
}

// Shows a photo if one is set, otherwise a labelled placeholder box.
export function Photo({ src, alt, className = "", dark = false }) {
  if (src) {
    return <img src={asset(src)} alt={alt} className={`photo ${className}`} loading="lazy" />;
  }
  return (
    <div className={`photo placeholder ${dark ? "placeholder-dark" : ""} ${className}`} role="img" aria-label={`Photo placeholder: ${alt}`}>
      <span>[PHOTO: {alt}]</span>
    </div>
  );
}

export function Icon({ name, size = 34 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 40 40",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinejoin: "round",
    strokeLinecap: "round",
    "aria-hidden": true,
  };
  if (name === "home")
    return (
      <svg {...common}>
        <path d="M6 32 L6 18 L20 8 L34 18 L34 32 Z" />
        <path d="M16 32 V23 H24 V32" />
      </svg>
    );
  if (name === "alert")
    return (
      <svg {...common}>
        <path d="M20 6 L35 33 H5 Z" />
        <path d="M20 16 V24" />
        <circle cx="20" cy="28.5" r="1" fill="currentColor" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M20 34 V16" />
      <path d="M20 20 C 20 12, 28 8, 33 8 C 33 14, 28 20, 20 20 Z" />
      <path d="M20 25 C 20 18, 12 15, 7 15 C 7 21, 12 25, 20 25 Z" />
    </svg>
  );
}

export function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? "logo-light" : ""}`}>
      <svg width="32" height="32" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <path d="M3 24 L11 10 L16 17 L20 12 L27 24 Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M15 3 V8" stroke="var(--accent)" strokeWidth="2.6" strokeLinecap="round" />
      </svg>
      {site.name}
    </span>
  );
}

// "Apply now" goes to the Google Form if set, otherwise to /register/
export function ApplyButton({ children = "APPLY NOW", className = "btn btn-accent" }) {
  if (site.applyFormUrl) {
    return (
      <a href={site.applyFormUrl} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href="/register/" className={className}>
      {children}
    </Link>
  );
}

export function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow && <p className="eyebrow eyebrow-light">{eyebrow}</p>}
        <h1>{title}</h1>
        {intro && <p className="page-hero-intro">{intro}</p>}
      </div>
    </section>
  );
}
