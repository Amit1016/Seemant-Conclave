import { posts } from "@/data/site";
import { PageHero } from "@/components/ui";
import { StoryCard } from "@/components/sections";

export const metadata = { title: "Stories from the border" };

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Field journalism"
        title="Stories from the border"
        intro="Narratives, reflections and takeaways from our journeys to India's first villages."
      />
      <section className="section">
        <div className="container stories">
          {posts.map((p) => <StoryCard key={p.slug} post={p} />)}
        </div>
      </section>
    </>
  );
}
