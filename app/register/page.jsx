import { site, conclaves } from "@/data/site";
import { PageHero } from "@/components/ui";

export const metadata = { title: "Register" };

export default function Register() {
  const c = conclaves[0];
  return (
    <>
      <PageHero
        eyebrow={`${c.title} · ${c.status}`}
        title="Apply for the conclave"
        intro={`${c.dates} · ${c.location} · ${c.seats} seats. Applications close on ${c.deadline}.`}
      />
      <section className="section">
        <div className="container">
          {site.applyFormEmbedUrl ? (
            <iframe className="form-frame" src={site.applyFormEmbedUrl} title="Application form">
              Loading…
            </iframe>
          ) : (
            <div className="notice">
              <h2 style={{ fontSize: "1.5rem" }}>Application form coming soon</h2>
              <p>
                Applications will open here shortly. For questions, write to{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
              <p style={{ fontSize: "0.95rem" }}>
                <strong>For the site owner:</strong> create a Google Form, click <em>Send → &lt;&gt;</em>, copy the
                link inside <code>src="…"</code> and paste it as <code>applyFormEmbedUrl</code> in{" "}
                <code>data/site.js</code>.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
