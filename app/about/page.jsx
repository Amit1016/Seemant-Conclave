import { site, team } from "@/data/site";
import { PageHero, Photo } from "@/components/ui";
import { Partners, Faq, ApplyBanner } from "@/components/sections";

export const metadata = { title: "About" };

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Taking young India to its first villages"
        intro={`${site.name} is an initiative of ${site.organiser} that brings students face to face with life, challenges and opportunity at the country's border.`}
      />
      <section className="section">
        <div className="prose">
          <h2>Why we started</h2>
          <p>[Tell the story of how the idea began: who started it, what they saw, and why it matters.]</p>
          <h2>What we do</h2>
          <p>
            Each conclave takes a small cohort of students from different institutions to a cluster of border villages.
            They live with host families, listen to communities and officials, and work in teams on ideas that respond
            to what they have seen.
          </p>
          <h2>Our approach</h2>
          <p>
            We go as learners, not as experts. Every visit is planned with village leaders and the district
            administration, and every idea is presented back to the community it came from.
          </p>
        </div>
      </section>
      <section className="section section-sage">
        <div className="container">
          <h2 className="section-title center" style={{ marginBottom: 40 }}>The team</h2>
          <div className="team">
            {team.map((t, i) => (
              <div key={i}>
                <Photo src={t.image} alt={t.name} />
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Partners />
      <Faq />
      <ApplyBanner />
    </>
  );
}
