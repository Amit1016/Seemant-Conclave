import Link from "next/link";
import {
  site, stripPhotos, pillars, partners, audience, gains, gallery,
  mentors, testimonials, conclaves, posts, faqs,
} from "@/data/site";
import { Photo, Icon, ApplyButton } from "./ui";

export function PhotoStrip() {
  const items = [...stripPhotos, ...stripPhotos]; // duplicated for a seamless loop
  return (
    <section className="strip" aria-label="Photos from the field">
      <div className="strip-track">
        {items.map((p, i) => (
          <figure className="strip-item" key={i} aria-hidden={i >= stripPhotos.length}>
            <Photo src={p.image} alt={p.caption} />
            <figcaption>
              <span className="strip-tag">{p.tag}</span>
              <span className="strip-caption">{p.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Story() {
  return (
    <section className="story">
      <div className="container story-inner">
        <h1>
          <span className="story-kicker" style={{ display: "block" }}>On the map, India has edges.</span>
          <span className="story-headline" style={{ display: "block" }}>The first villages of India.</span>
        </h1>
        <Photo src={null} alt="Illustration: city campus on one side, border village on the other" className="story-illustration" />
        <div className="story-text">
          <p>
            Most of us know the India of campuses and cities. Far fewer of us have seen the villages at the very edge of
            the country, where families farm, trade, celebrate and raise children within sight of the border.
          </p>
          <p>
            Life there is shaped by distance, terrain and security, and also by deep resilience and pride. These are not
            the “last” villages. They are the first.
          </p>
          <p>
            <strong>{site.name}</strong> takes students to these villages to see three things for themselves.
          </p>
        </div>
        <div className="pillars">
          {pillars.map((p) => (
            <div className="pillar" key={p.title}>
              <div className="pillar-icon"><Icon name={p.icon} /></div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
        <p className="story-call">The border is calling. Will you answer?</p>
      </div>
    </section>
  );
}

export function Partners() {
  return (
    <section className="section section-white" style={{ padding: "56px 0" }}>
      <div className="container">
        <p className="eyebrow center" style={{ color: "var(--muted)", marginBottom: 28 }}>In association with</p>
        <div className="partners">
          {partners.map((p) => (
            <div className="partner" key={p.name + p.description}>
              <div className="partner-logo"><Photo src={p.logo} alt="logo" /></div>
              <div>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <a href={p.url} target="_blank" rel="noopener noreferrer">Visit website →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AudienceAndGains() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title center">Who is this journey for?</h2>
        <p className="section-intro center">
          For young people ready to leave the classroom behind for a few days and meet the country where it begins.
        </p>
        <div className="cards-3">
          {audience.map((a) => (
            <div className="card-dark" key={a.title}>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          ))}
        </div>

        <h2 className="section-title center" style={{ marginTop: 88 }}>What will you gain?</h2>
        <div className="gains">
          {gains.map((g) => (
            <div className="gain" key={g.title}>
              <h3>{g.title}</h3>
              <p>{g.text}</p>
            </div>
          ))}
        </div>
        <div className="btn-row"><ApplyButton /></div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="section section-dark">
      <div className="container">
        <p className="eyebrow eyebrow-light center">Visual chronicles</p>
        <h2 className="section-title center">Gallery from the frontier</h2>
        <p className="section-intro center">Every photograph holds a story of learning, resilience and friendship.</p>
        <div className="gallery">
          {gallery.map((g, i) => (
            <Photo key={i} src={g.image} alt={g.alt} dark />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Mentors() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title center">Voices of the frontier: mentors &amp; speakers</h2>
        <p className="section-intro center">
          Learn from people who have worked in border governance, rural development and grassroots enterprise.
        </p>
        <div className="mentors">
          {mentors.map((m, i) => (
            <div className="mentor" key={i}>
              <Photo src={m.image} alt={m.name} />
              <div className="mentor-body">
                <span className="mentor-theme">{m.theme}</span>
                <h3>{m.name}</h3>
                <p>{m.role}<br />{m.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Journey({ conclave = conclaves[0], showLinks = true }) {
  return (
    <section className="section section-sage">
      <div className="container">
        <p className="eyebrow center" style={{ color: "var(--sage-text)" }}>
          {conclave.title} · {conclave.location}
        </p>
        <h2 className="section-title center" style={{ marginBottom: 48 }}>A journey to the edge</h2>
        <ol className="journey">
          {conclave.days.map((d) => (
            <li key={d.day}>
              <span className="journey-day">{d.day}</span>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </li>
          ))}
        </ol>
        {showLinks && (
          <div className="btn-row">
            <Link href={`/conclaves/${conclave.slug}/`} className="btn btn-outline">View full details</Link>
            <ApplyButton />
          </div>
        )}
      </div>
    </section>
  );
}

export function FieldNotes() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title center">Field notes from participants</h2>
        <p className="section-intro center">Letters and reflections from students who made the journey.</p>
        <div className="notes">
          {testimonials.map((t, i) => (
            <figure className="note" key={i}>
              <span className="note-tag">Field note #{String(i + 1).padStart(2, "0")} · {t.institution}</span>
              <span className="note-place">{t.place}</span>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>{t.programme}, {t.institution}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StoryCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}/`} className="story-card">
      <Photo src={post.image} alt={post.title} />
      <div className="story-card-body">
        <span className="story-meta">{post.category} · {post.date} · {post.readTime}</span>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className="read-more">Read story →</span>
      </div>
    </Link>
  );
}

export function Stories() {
  return (
    <section className="section section-white">
      <div className="container">
        <div className="stories-head">
          <div>
            <p className="eyebrow">Field journalism</p>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Stories from the border</h2>
          </div>
          <Link href="/blog/">View all stories →</Link>
        </div>
        <div className="stories">
          {posts.slice(0, 3).map((p) => <StoryCard key={p.slug} post={p} />)}
        </div>
      </div>
    </section>
  );
}

export function ApplyBanner({ conclave = conclaves[0] }) {
  return (
    <section style={{ padding: "80px 24px" }}>
      <div className="apply-banner">
        <h2>Applications open for {conclave.title}</h2>
        <p>{conclave.seats} seats · {conclave.dates} · {conclave.location}. Apply by {conclave.deadline}.</p>
        <ApplyButton />
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="section section-sage">
      <div className="container">
        <h2 className="section-title center" style={{ marginBottom: 32 }}>Frequently asked questions</h2>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
