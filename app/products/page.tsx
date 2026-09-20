import type { Metadata } from "next";
import Link from "next/link";
import { CategoryCard, ContactBand, PageShell } from "../components";
import { catalogArchitecture, categories } from "../site-data";

export const metadata: Metadata = {
  title: "Product Programs | JC Filters",
  description: "Browse JC pool and spa filters, appliance filters, vacuum filters and dust bags, and dryer lint filters.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <PageShell whatsappMessage="Hello JC Filters, please share your current replacement-filter product list.">
      <section className="page-hero">
        <div className="shell narrow-hero">
          <span className="eyebrow">FILTER CATEGORIES</span>
          <h1>Start with the application.<br /><em>Match the exact part next.</em></h1>
          <p>Four focused product programs organize every inquiry by replacement reference, compatible model, dimensions and visual confirmation.</p>
        </div>
      </section>
      <section className="category-section inner-category-section">
        <div className="shell">
          <div className="catalog-intro"><b>04 PRODUCT PROGRAMS</b><span>Each category keeps its own keywords, compatible brands, references and future product pages.</span></div>
          <div className="category-grid">{categories.map((category) => <CategoryCard category={category} key={category.slug} />)}</div>
        </div>
      </section>
      <section className="directory-framework-section">
        <div className="shell directory-framework-grid">
          <div>
            <span className="eyebrow">MATCHING FLOW</span>
            <h2>A clear route<br />from brand to part.</h2>
            <p>Each product record connects its category, compatible-brand family, part-number references, dimensions and direct inquiry route.</p>
            <Link className="text-link" href="/services/fba-service">Explore FBA services <span>→</span></Link>
          </div>
          <div className="architecture-list">
            {catalogArchitecture.map((item) => <article key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
          </div>
        </div>
      </section>
      <ContactBand title="Not sure which category fits?" text="Send a reference, photo or current listing link. The inquiry can be routed to the right product program before matching begins." />
    </PageShell>
  );
}
