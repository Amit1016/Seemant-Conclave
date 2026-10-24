import Link from "next/link";
import { site, conclaves } from "@/data/site";
import { Logo, Photo } from "./ui";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo light />
          <p className="footer-about">
            Taking students to India's first villages to learn, listen and build with the communities who live there.
          </p>
          <p className="footer-about">An initiative of {site.organiser}.</p>
        </div>
        <div>
          <h2 className="footer-title">Quick links</h2>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about/">About us</Link></li>
            <li><Link href="/blog/">Stories &amp; blog</Link></li>
            <li><Link href="/contact/">Contact us</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-title">Our conclaves</h2>
          <ul>
            <li><Link href="/conclaves/">All conclaves</Link></li>
            {conclaves.map((c) => (
              <li key={c.slug}>
                <Link href={`/conclaves/${c.slug}/`}>{c.title} • {c.location}</Link>
              </li>
            ))}
            <li><Link href="/register/">Register</Link></li>
            <li><Link href="/volunteer/">Volunteer with us</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-title">Connect</h2>
          <ul>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.location}</li>
            <li><a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}</a></li>
          </ul>
        </div>
      </div>
      <div className="container">
        <Photo src={null} alt="Group photo of participants and mentors" className="footer-photo" dark />
        <p className="footer-copy">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
