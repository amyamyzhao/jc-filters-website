import type { Metadata } from "next";
import { CategoryCard, ContactBand, PageShell } from "../components";
import { categories } from "../site-data";

export const metadata: Metadata = {
  title: "Product Programs | JC Filters",
  description: "Browse JC pool and spa filters, appliance filters, vacuum filters and dust bags, and dryer lint filters.",
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
          <div className="catalog-intro"><b>04 PRODUCT PROGRAMS</b><span>New product cards can be added continuously as images and compatibility data are confirmed.</span></div>
          <div className="category-grid">{categories.map((category) => <CategoryCard category={category} key={category.slug} />)}</div>
        </div>
      </section>
      <ContactBand title="Not sure which category fits?" text="Send a reference, photo or current listing link. The inquiry can be routed to the right product program before matching begins." />
    </PageShell>
  );
}
