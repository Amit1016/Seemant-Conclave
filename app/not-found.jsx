import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section center">
      <div className="container">
        <h1 className="section-title">Page not found</h1>
        <p className="section-intro">This path doesn't lead anywhere yet.</p>
        <Link href="/" className="btn btn-dark">Back to home</Link>
      </div>
    </section>
  );
}
