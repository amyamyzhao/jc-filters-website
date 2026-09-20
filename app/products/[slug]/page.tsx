import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CatalogProductCard, ContactBand, PageShell, ProductShape } from "../../components";
import { PartMatchForm } from "../../part-match-form";
import { productsForCategory } from "../../product-data";
import { categories, siteUrl, slugifySubcategory } from "../../site-data";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) return {};
  const title = `${category.title} | JC Filters`;
  const image = category.image ? `${siteUrl}${category.image}` : null;
  return {
    title,
    description: category.description,
    alternates: { canonical: `/products/${category.slug}` },
    openGraph: { title, description: category.description, images: image ? [{ url: image, alt: category.title }] : [] },
    twitter: { card: "summary_large_image", title, description: category.description, images: image ? [image] : [] },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();
  const categoryProducts = productsForCategory(category.slug);

  return (
    <PageShell whatsappMessage={`Hello JC Filters, I would like to ask about ${category.title}.`}>
      <section className="category-hero">
        <div className="shell breadcrumb"><Link href="/products">Products</Link><span>→</span><b>{category.title}</b></div>
        <div className="shell category-hero-grid">
          <div>
            <span className="eyebrow">{category.kicker.toUpperCase()}</span>
            <h1>{category.title}</h1>
            <p>{category.description}</p>
            <div className="match-key"><span>MATCHING LOGIC</span><b>{category.matching}</b></div>
          </div>
          <div className="category-hero-shape">
            <span>{category.code}</span>
            {category.image ? <img className="category-hero-image" src={category.image} alt={category.title} /> : <ProductShape type={category.shape} />}
            <small>JC CATEGORY COLLECTION</small>
          </div>
        </div>
      </section>

      <section className="subcategory-section">
        <div className="shell">
          <div className="subcategory-row">
            <b>CATALOG SUBCATEGORIES</b>
            <div>{category.slug === "dryer-lint-filters"
              ? <span>Browse future products by part number</span>
              : category.subcategories.map((item) => <Link key={item} href={`/products/${category.slug}/${slugifySubcategory(item)}`}>{item}<small>→</small></Link>)}</div>
          </div>
          {category.subImages && <div className="subcategory-image-grid">
            {category.subcategories.map((item, index) => {
              const visual = <><img src={category.subImages?.[index] || category.image} alt={`${item} product family`} /><span><small>0{index + 1}</small><b>{item}</b><em>View category →</em></span></>;
              return category.slug === "dryer-lint-filters"
                ? <article key={item}>{visual}</article>
                : <Link key={item} href={`/products/${category.slug}/${slugifySubcategory(item)}`}>{visual}</Link>;
            })}
          </div>}
        </div>
      </section>

      <section className="brand-directory-section" id="compatible-brands">
        <div className="shell brand-directory-layout">
          <div className="brand-directory-copy">
            <span className="eyebrow">COMPATIBLE BRAND INDEX</span>
            <h2>Find the right family before the exact part.</h2>
            <p>{category.brandNote || "The brand directory reflects compatible reference families found in the current catalog materials. Exact fit is confirmed by model, part number, dimensions and product photos."}</p>
            <Link className="text-link" href="/contact">Send a matching request <span>→</span></Link>
          </div>
          <div className="brand-index-panel">
            <span className="panel-label">{category.compatibleBrands.length ? `${category.compatibleBrands.length} BRAND FAMILIES IN CURRENT MATERIALS` : "REFERENCE-BASED MATCHING"}</span>
            <div className={`brand-chip-grid ${category.compatibleBrands.length ? "" : "reference-chip-grid"}`}>
              {(category.compatibleBrands.length ? category.compatibleBrands : category.referenceExamples).map((item) => <span key={item}>{item}</span>)}
            </div>
            <small>Brand names identify compatibility only. They do not imply affiliation or endorsement.</small>
          </div>
        </div>
      </section>

      <section className="match-section">
        <div className="shell"><PartMatchForm category={category.title} /></div>
      </section>

      <section className="catalog-section">
        <div className="shell">
          <div className="section-heading product-heading">
            <div><span className="eyebrow">PRODUCT CATALOG</span><h2>A clean structure, ready for product records.</h2></div>
            <p>Products will appear here after their images, replacement references and complete compatibility lists are matched. New models can then be added continuously within this category.</p>
          </div>
          {categoryProducts.length ? (
            <div className="product-grid range-grid">{categoryProducts.map((product) => <CatalogProductCard key={product.slug} product={product} />)}</div>
          ) : (
            <div className="catalog-ready-panel">
              <div className="catalog-ready-copy"><span>CATALOG STATUS</span><h3>Product pages are being prepared.</h3><p>In the meantime, send a brand, model number, part reference or clear photo for a direct match.</p></div>
              <div className="catalog-lanes">{category.subcategories.map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b><small>Images · references · compatibility · pack options</small></div>)}</div>
            </div>
          )}
        </div>
      </section>

      <section className="data-check-section">
        <div className="shell data-check-grid">
          <div><span className="eyebrow">FIT CONFIRMATION</span><h2>What we check before quotation.</h2></div>
          <ul>
            {category.fitChecks.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}
            <li><span>05</span>Quantity, stock timing and pack requirements</li>
          </ul>
        </div>
      </section>
      <ContactBand title={`Need a ${category.title} match?`} text="Send the reference, clear photos, dimensions, quantity and destination so the correct item can be checked before quotation." />
    </PageShell>
  );
}
