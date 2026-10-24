import { site } from "@/data/site";
import { PageHero } from "@/components/ui";

export const metadata = { title: "Volunteer with us" };

const roles = [
  { title: "Field volunteers", text: "Help with logistics, safety and coordination during the conclave." },
  { title: "Mentors & speakers", text: "Share your experience in governance, development or enterprise with the cohort." },
  { title: "Photo & story team", text: "Document the journey through photographs, video and writing." },
  { title: "Campus ambassadors", text: "Spread the word and help students from your institution apply." },
];

export default function Volunteer() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Volunteer with us"
        intro="The conclave runs on people who give their time and skills. Here is how you can help."
      />
      <section className="section">
        <div className="container">
          <div className="cards-3">
            {roles.map((r) => (
              <div className="card-dark" key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
          <div className="btn-row">
            {site.volunteerFormUrl ? (
              <a href={site.volunteerFormUrl} className="btn btn-accent" target="_blank" rel="noopener noreferrer">
                SIGN UP TO VOLUNTEER
              </a>
            ) : (
              <a href={`mailto:${site.email}?subject=Volunteering`} className="btn btn-accent">
                WRITE TO US
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
