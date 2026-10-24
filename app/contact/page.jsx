import { site } from "@/data/site";
import { PageHero } from "@/components/ui";
import { Faq } from "@/components/sections";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch" intro="Questions about applying, partnering or volunteering? We'd love to hear from you." />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card">
            <h2>Email</h2>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="contact-card">
            <h2>Phone</h2>
            <p>{site.phone}</p>
          </div>
          <div className="contact-card">
            <h2>Based in</h2>
            <p>{site.location}</p>
          </div>
          <div className="contact-card">
            <h2>Instagram</h2>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}</a>
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
}
