import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CatalogProductCard, ContactBand, PageShell, ProductShape } from "../../components";
import { PartMatchForm } from "../../part-match-form";
import { productsForCategory } from "../../product-data";
import { categories, siteUrl, slugifySubcategory } from "../../site-data";

const dryerFilterFaqs = [
  {
    question: "How do I match the correct dryer lint filter?",
    answer: "Start with the complete dryer model, including its suffix, and the current filter part number. The frame outline, guide profile, handle or flap and mesh construction are then checked before quotation.",
  },
  {
    question: "Are ADQ56656401 and ADQ56656403 interchangeable?",
    answer: "Not for every dryer. Some models use different filter-guide or housing versions, so the complete appliance model and installed guide must be confirmed before either reference is supplied.",
  },
  {
    question: "What is the difference between DC97-16742A and DC61-03048A?",
    answer: "These references are commonly associated with the Samsung lint-filter assembly shown in this catalog. The complete model suffix and revision still need to be checked, and the assembly must not be confused with the separate DC61-02595A guide housing.",
  },
  {
    question: "Can JC Filters prepare dryer filters for FBA or private-label orders?",
    answer: "Yes. Unit labels, pack count, carton planning, artwork, barcode placement and marketplace presentation can be reviewed for the selected filter and approved order specification.",
  },
  {
    question: "What should I send for a wholesale dryer-filter quotation?",
    answer: "Send the part number or complete dryer model, required quantity, destination, packaging requirements and a clear photo of the current filter or appliance nameplate when available.",
  },
];

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
  const isDryerCategory = category.slug === "dryer-lint-filters";
  const itemListSchema = categoryProducts.length ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${category.title} catalog`,
    numberOfItems: categoryProducts.length,
    itemListElement: categoryProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `${siteUrl}/products/${product.categorySlug}/${product.slug}`,
    })),
  } : null;
  const faqSchema = isDryerCategory ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dryerFilterFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  } : null;

  return (
    <PageShell whatsappMessage={`Hello JC Filters, I would like to ask about ${category.title}.`}>
      {itemListSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />}
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
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
            <div>{isDryerCategory
              ? <span>{categoryProducts.length} verified products · browse by part number below</span>
              : category.subcategories.map((item) => <Link key={item} href={`/products/${category.slug}/${slugifySubcategory(item)}`}>{item}<small>→</small></Link>)}</div>
          </div>
          {category.subImages && !isDryerCategory && <div className="subcategory-image-grid">
            {category.subcategories.map((item, index) => {
              const visual = <><img src={category.subImages?.[index] || category.image} alt={`${item} product family`} /><span><small>0{index + 1}</small><b>{item}</b><em>View category →</em></span></>;
              return <Link key={item} href={`/products/${category.slug}/${slugifySubcategory(item)}`}>{visual}</Link>;
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
            <div><span className="eyebrow">PRODUCT CATALOG</span><h2>{categoryProducts.length ? "Verified product records for this category." : "A clean structure, ready for product records."}</h2></div>
            <p>{categoryProducts.length ? "Published records use checked replacement references and compatible-model data. Availability and final physical fit are confirmed before quotation." : "Products will appear here after their images, replacement references and complete compatibility lists are matched. New models can then be added continuously within this category."}</p>
          </div>
          {categoryProducts.length ? (
            <>
              <div className="product-grid range-grid">{categoryProducts.map((product) => <CatalogProductCard key={product.slug} product={product} />)}</div>
              <p className="catalog-compatibility-notice">Compatibility notice: manufacturer names, model numbers and part references identify fit only. JC Filters supplies independent replacement products and is not affiliated with, sponsored by or endorsed by the referenced manufacturers.</p>
            </>
          ) : (
            <div className="catalog-ready-panel">
              <div className="catalog-ready-copy"><span>CATALOG STATUS</span><h3>Product pages are being prepared.</h3><p>In the meantime, send a brand, model number, part reference or clear photo for a direct match.</p></div>
              <div className="catalog-lanes">{category.subcategories.map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b><small>Images · references · compatibility · pack options</small></div>)}</div>
            </div>
          )}
        </div>
      </section>

      {isDryerCategory && (
        <section className="subcategory-faq-section dryer-filter-faq-section">
          <div className="shell">
            <div className="section-heading subcategory-faq-heading">
              <div><span className="eyebrow">DRYER FILTER SOURCING FAQ</span><h2>Match the complete dryer before ordering.</h2></div>
              <p>Part numbers can cross between revisions, while similar-looking frames may use different guides. These checks keep wholesale and private-label orders tied to the correct appliance family.</p>
            </div>
            <div className="subcategory-faq-grid">
              {dryerFilterFaqs.map((item) => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}
            </div>
            <div className="subcategory-faq-links" role="navigation" aria-label="Dryer filter supply support">
              <Link href="/services/fba-service">Review FBA preparation <span>View service →</span></Link>
              <Link href="/services/custom-packaging">Review private-label packaging <span>View service →</span></Link>
              <Link href="/contact">Send a fit and quotation request <span>Start inquiry →</span></Link>
              <Link href="/compatible-brands">Browse compatible brands <span>View directory →</span></Link>
            </div>
          </div>
        </section>
      )}

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
