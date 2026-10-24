import { notFound } from "next/navigation";
import { conclaves } from "@/data/site";
import { PageHero, Photo } from "@/components/ui";
import { Journey, Mentors, Faq, ApplyBanner } from "@/components/sections";

export const dynamicParams = false;

export function generateStaticParams() {
  return conclaves.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = conclaves.find((x) => x.slug === slug);
  return { title: c ? `${c.title} · ${c.location}` : "Conclave" };
}

export default async function ConclavePage({ params }) {
  const { slug } = await params;
  const c = conclaves.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <>
      <PageHero eyebrow={`${c.edition} · ${c.status}`} title={`${c.title} · ${c.location}`} intro={c.summary} />
      <section className="fact-bar">
        <div className="container">
          <div><span>Where</span>{c.location}</div>
          <div><span>When</span>{c.dates}</div>
          <div><span>Seats</span>{c.seats} students</div>
          <div><span>Fee</span>{c.fee}</div>
          <div><span>Apply by</span>{c.deadline}</div>
        </div>
      </section>
      <Journey conclave={c} showLinks={false} />
      <section className="section section-dark">
        <div className="container">
          <p className="eyebrow eyebrow-light">Where we go</p>
          <h2 className="section-title" style={{ marginBottom: 40 }}>The villages</h2>
          <div className="villages">
            {c.villages.map((v, i) => (
              <article className="village" key={i}>
                <Photo src={v.image} alt={v.name} dark />
                <div>
                  <h3>{v.name}</h3>
                  <p>{v.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Mentors />
      <Faq />
      <ApplyBanner conclave={c} />
    </>
  );
}
