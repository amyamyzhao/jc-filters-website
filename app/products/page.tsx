import type { Metadata } from "next";
import { CategoryCard, ContactBand, PageShell } from "../components";
import { categories } from "../site-data";

export const metadata: Metadata = {
  title: "Product Programs | JC Filters",
  description: "Browse JC pool and spa filters, dryer lint screens, HEPA filters, appliance replacements, vacuum dust bags and aquarium cartridges.",
};

export default function ProductsPage() {
  return (
    <PageShell whatsappMessage="Hello JC Filters, please share your current replacement-filter product list.">
      <section className="page-hero">
        <div className="shell narrow-hero">
          <span className="eyebrow">PRODUCT CATALOG</span>
          <h1>Find the category first.<br /><em>Match the part next.</em></h1>
          <p>Six product programs follow the structure of the current JC catalog, then narrow each inquiry by reference, compatible model, dimensions and visual confirmation.</p>
        </div>
      </section>
      <section className="category-section inner-category-section">
        <div className="shell">
          <div className="catalog-intro"><b>06 PRODUCT PROGRAMS</b><span>Product photos, part numbers and compatibility data will be loaded after the final SKU list is approved.</span></div>
          <div className="category-grid">{categories.map((category) => <CategoryCard category={category} key={category.slug} />)}</div>
        </div>
      </section>
      <ContactBand title="Not sure which category fits?" text="Send a reference, photo or current listing link. The inquiry can be routed to the right product program before matching begins." />
    </PageShell>
  );
}
