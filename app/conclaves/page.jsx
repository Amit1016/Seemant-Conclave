import Link from "next/link";
import { conclaves } from "@/data/site";
import { PageHero, Photo } from "@/components/ui";

export const metadata = { title: "All conclaves" };

export default function Conclaves() {
  return (
    <>
      <PageHero
        eyebrow="Conclaves"
        title="All conclaves"
        intro="Every edition takes a new cohort to a different stretch of the border."
      />
      <section className="section">
        <div className="container conclave-list">
          {conclaves.map((c) => (
            <Link key={c.slug} href={`/conclaves/${c.slug}/`} className="conclave-row">
              <Photo src={c.image} alt={`${c.title}, ${c.location}`} />
              <div className="conclave-row-body">
                <span><span className="status">{c.status}</span></span>
                <p className="eyebrow" style={{ marginBottom: 0 }}>{c.edition} · {c.dates}</p>
                <h2>{c.title} · {c.location}</h2>
                <p>{c.summary}</p>
                <span className="read-more">View details →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
