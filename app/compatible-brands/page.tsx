import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, PageShell } from "../components";
import { categories } from "../site-data";

export const metadata: Metadata = {
  title: "Compatible Brands & Model Matching | JC Filters",
  description: "Browse compatible brand families across pool and spa filters, appliance filters, vacuum filters and dust bags, and dryer lint filters.",
  alternates: { canonical: "/compatible-brands" },
};

export default function CompatibleBrandsPage() {
  return (
    <PageShell whatsappMessage="Hello JC Filters, I would like to check compatibility for a brand, model or part number.">
      <section className="page-hero brand-page-hero">
        <div className="shell narrow-hero">
          <span className="eyebrow">COMPATIBILITY DIRECTORY</span>
          <h1>Start with the brand.<br /><em>Confirm the exact part.</em></h1>
          <p>Brand names narrow the correct product family. Final compatibility is confirmed against the machine model, replacement reference, dimensions and product photos.</p>
        </div>
      </section>

      <section className="brands-page-section">
        <div className="shell">
          <div className="brand-directory-grid">
            {categories.map((category) => (
              <article className="brand-category-card" key={category.slug}>
                <div className="brand-category-head">
                  <span>{category.code} / 04</span>
                  <h2>{category.title}</h2>
                  <p>{category.brandNote || category.description}</p>
                </div>
                <div className={`brand-chip-grid ${category.compatibleBrands.length ? "" : "reference-chip-grid"}`}>
                  {(category.compatibleBrands.length ? category.compatibleBrands : category.referenceExamples).map((brand) => <span key={brand}>{brand}</span>)}
                </div>
                <Link href={`/products/${category.slug}`}>Browse this category <span>→</span></Link>
              </article>
            ))}
          </div>
          <div className="compatibility-note">
            <span>COMPATIBILITY NOTE</span>
            <p>All brand names and model references are used only to identify compatible replacement products. JC Filters is not affiliated with or endorsed by the referenced brand owners unless expressly stated.</p>
          </div>
        </div>
      </section>

      <section className="compatibility-process-section">
        <div className="shell">
          <div className="section-heading compact-heading">
            <div><span className="eyebrow">MATCHING PROCESS</span><h2>Four checks before a product is released.</h2></div>
          </div>
          <div className="process-grid compatibility-process-grid">
            <div><span>01</span><b>Brand family</b><p>Identify the appliance, pool system or equipment family.</p></div>
            <div><span>02</span><b>Model or part number</b><p>Match the exact machine model and replacement reference.</p></div>
            <div><span>03</span><b>Dimensions and structure</b><p>Confirm the size, opening, frame, collar or end-cap details.</p></div>
            <div><span>04</span><b>Photo confirmation</b><p>Use clear product photos before stock and quotation are confirmed.</p></div>
          </div>
        </div>
      </section>

      <ContactBand title="Need a compatibility check?" text="Send the brand, model number, part reference and clear photos. We’ll use them to identify the correct filter family before quotation." />
    </PageShell>
  );
}
