import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, PageShell } from "../components";

export const metadata: Metadata = {
  title: "Vacuum Filter & Dust Bag Buying Guides | JC Filters",
  description: "Practical buying guides for replacement vacuum dust bag compatibility, part-reference matching, packaging and supply preparation.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <PageShell whatsappMessage="Hello JC Filters, I have a question about replacement vacuum dust bag matching.">
      <section className="page-hero">
        <div className="shell narrow-hero">
          <span className="eyebrow">BUYING GUIDES</span>
          <h1>Practical guidance for<br /><em>replacement filter sourcing.</em></h1>
          <p>Use model numbers, replacement references, product construction and supply requirements to prepare a clearer matching request.</p>
        </div>
      </section>

      <section className="blog-index-section">
        <div className="shell">
          <article className="blog-feature-card">
            <Link className="blog-feature-media" href="/blog/how-to-choose-replacement-vacuum-dust-bags" aria-label="Read the replacement vacuum dust bag buying guide">
              <img src="/assets/jc/category-vacuum-filter-dust-bag-hero-wide-v4.png" alt="Vacuum filters and upright replacement vacuum dust bag families" />
            </Link>
            <div className="blog-feature-copy">
              <span className="eyebrow">VACUUM DUST BAG BUYING GUIDE</span>
              <h2>How to choose replacement vacuum dust bags.</h2>
              <p>Follow a practical sequence using the exact machine model, current bag reference, collar shape, bag construction and supply brief.</p>
              <Link className="text-link" href="/blog/how-to-choose-replacement-vacuum-dust-bags">Read the buying guide <span>→</span></Link>
            </div>
          </article>
        </div>
      </section>

      <ContactBand title="Need a compatibility check?" text="Send the machine model, current bag reference, quantity, destination and packaging requirements for confirmation." />
    </PageShell>
  );
}
