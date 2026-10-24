import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/site";
import { Photo } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  return { title: p ? p.title : "Story", description: p?.excerpt };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <article>
      <section className="page-hero" style={{ paddingBottom: 96 }}>
        <div className="container">
          <p className="eyebrow eyebrow-light">{p.category}</p>
          <h1>{p.title}</h1>
          <p className="post-meta">{p.date} · {p.readTime}</p>
        </div>
      </section>
      <div className="post-image"><Photo src={p.image} alt={p.title} /></div>
      <div className="prose" style={{ paddingBottom: 96, paddingLeft: 24, paddingRight: 24 }}>
        {p.body.map((para, i) => <p key={i}>{para}</p>)}
        <Link href="/blog/" className="back-link">← All stories</Link>
      </div>
    </article>
  );
}
