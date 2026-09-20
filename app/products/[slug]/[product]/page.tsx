import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CatalogProductCard, ContactBand, PageShell } from "../../../components";
import { PartMatchForm } from "../../../part-match-form";
import { findProduct, products, productsForSubcategory } from "../../../product-data";
import { categories, menuSubcategories, slugifySubcategory, whatsappLink } from "../../../site-data";

export function generateStaticParams() {
  const subcategoryRoutes = categories.flatMap((category) =>
    menuSubcategories(category).map((subcategory) => ({
      slug: category.slug,
      product: slugifySubcategory(subcategory),
    })),
  );
  return [
    ...subcategoryRoutes,
    ...products.map((product) => ({ slug: product.categorySlug, product: product.slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; product: string }> }): Promise<Metadata> {
  const { slug, product: productSlug } = await params;
  const category = categories.find((item) => item.slug === slug);
  const subcategory = category?.subcategories.find((item) => slugifySubcategory(item) === productSlug);
  const product = findProduct(slug, productSlug);

  if (subcategory && category && category.slug !== "dryer-lint-filters") {
    const description = `${subcategory} supply from JC Filters, with compatible-model matching, ready-stock confirmation, FBA preparation and OEM and ODM support.`;
    return {
      title: `${subcategory} Manufacturer & Supplier | JC Filters`,
      description,
      alternates: { canonical: `/products/${slug}/${productSlug}` },
      openGraph: { title: `${subcategory} | JC Filters`, description, images: category.image ? [{ url: category.image, alt: subcategory }] : [] },
    };
  }

  if (!product) return {};
  return {
    title: `${product.name} | JC Filters`,
    description: product.description,
    alternates: { canonical: `/products/${slug}/${productSlug}` },
    openGraph: { title: product.name, description: product.description, images: [{ url: product.primaryImage, alt: product.name }] },
  };
}

export default async function ProductOrSubcategoryPage({ params }: { params: Promise<{ slug: string; product: string }> }) {
  const { slug, product: productSlug } = await params;
  const category = categories.find((item) => item.slug === slug);
  const subcategory = category?.subcategories.find((item) => slugifySubcategory(item) === productSlug);
  const product = findProduct(slug, productSlug);

  if (category && subcategory && category.slug !== "dryer-lint-filters") {
    const subcategoryProducts = productsForSubcategory(category.slug, productSlug);
    return (
      <PageShell whatsappMessage={`Hello JC Filters, I would like to ask about ${subcategory}.`}>
        <section className="category-hero subcategory-page-hero">
          <div className="shell breadcrumb"><Link href="/products">Products</Link><span>→</span><Link href={`/products/${category.slug}`}>{category.title}</Link><span>→</span><b>{subcategory}</b></div>
          <div className="shell category-hero-grid">
            <div>
              <span className="eyebrow">{category.kicker.toUpperCase()} / SUBCATEGORY</span>
              <h1>{subcategory}</h1>
              <p>{category.description}</p>
              <div className="match-key"><span>MATCHING LOGIC</span><b>{category.matching}</b></div>
            </div>
            <div className="category-hero-shape">
              <span>{category.code}</span>
              {category.image && <img className="category-hero-image" src={category.image} alt={subcategory} />}
              <small>JC {subcategory.toUpperCase()}</small>
            </div>
          </div>
        </section>

        <section className="subcategory-switcher-section">
          <div className="shell subcategory-switcher">
            <b>EXPLORE {category.title.toUpperCase()}</b>
            <div>{menuSubcategories(category).map((item) => <Link className={item === subcategory ? "active" : ""} key={item} href={`/products/${category.slug}/${slugifySubcategory(item)}`}>{item}</Link>)}</div>
          </div>
        </section>

        <section className="brand-directory-section">
          <div className="shell brand-directory-layout">
            <div className="brand-directory-copy">
              <span className="eyebrow">COMPATIBILITY FIRST</span>
              <h2>Match the model before ordering.</h2>
              <p>{category.brandNote || `Use the compatible brand, appliance or machine model, replacement number and dimensions to identify the correct ${subcategory.toLowerCase()}.`}</p>
              <Link className="text-link" href="/contact">Send a matching request <span>→</span></Link>
            </div>
            <div className="brand-index-panel">
              <span className="panel-label">MATCHING INFORMATION</span>
              <div className={`brand-chip-grid ${category.compatibleBrands.length ? "" : "reference-chip-grid"}`}>
                {(category.compatibleBrands.length ? category.compatibleBrands : category.referenceExamples).map((item) => <span key={item}>{item}</span>)}
              </div>
              <small>Brand names identify compatibility only. They do not imply affiliation or endorsement.</small>
            </div>
          </div>
        </section>

        <section className="match-section"><div className="shell"><PartMatchForm category={subcategory} /></div></section>

        <section className="catalog-section">
          <div className="shell">
            <div className="section-heading product-heading">
              <div><span className="eyebrow">{subcategory.toUpperCase()} CATALOG</span><h2>Product records will live here.</h2></div>
              <p>Each future product page will carry its replacement number, compatible models, dimensions, pack options and stock status.</p>
            </div>
            {subcategoryProducts.length ? (
              <div className="product-grid range-grid">{subcategoryProducts.map((item) => <CatalogProductCard key={item.slug} product={item} />)}</div>
            ) : (
              <div className="subcategory-empty-state">
                <div><span>CATALOG STATUS</span><h3>Products are being prepared.</h3><p>You can still send a model, replacement number, dimensions or listing link for matching now.</p></div>
                <a className="btn" href={whatsappLink(`Hello JC Filters, please help me match a ${subcategory} product.`)} target="_blank" rel="noopener noreferrer">Send a matching request <span>↗</span></a>
              </div>
            )}
          </div>
        </section>
        <ContactBand title={`Looking for ${subcategory}?`} text="Send the compatible model, replacement number, quantity, destination and packaging requirements for confirmation." />
      </PageShell>
    );
  }

  if (!product || !category) notFound();

  return (
    <PageShell whatsappMessage={`Hello JC Filters, I am asking about ${product.name}, SKU ${product.sku}.`}>
      <section className="product-detail-hero">
        <div className="shell breadcrumb"><Link href="/products">Products</Link><span>→</span><Link href={`/products/${category.slug}`}>{category.title}</Link><span>→</span><b>{product.sku}</b></div>
        <div className="shell product-detail-grid">
          <div className="product-detail-image"><img src={product.primaryImage} alt={product.name} /></div>
          <div className="product-detail-copy">
            <span className="eyebrow">SKU / {product.sku}</span>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <dl>
              <div><dt>Stock status</dt><dd>{product.readyStock ? "Ready stock — confirm quantity" : "Confirm current availability"}</dd></div>
              <div><dt>Compatible brands</dt><dd>{product.compatibleBrands.join(" · ")}</dd></div>
              <div><dt>Replacement numbers</dt><dd>{product.replacementNumbers.join(" · ")}</dd></div>
              <div><dt>Packaging</dt><dd>{product.packOptions.join(" · ")}</dd></div>
            </dl>
            <a className="btn" href={whatsappLink(`Hello JC Filters, please quote ${product.name}, SKU ${product.sku}.`)} target="_blank" rel="noopener noreferrer">Ask for stock and quotation <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="product-spec-section">
        <div className="shell product-spec-grid">
          <div><span className="eyebrow">FIT INFORMATION</span><h2>Compatibility and dimensions.</h2></div>
          <div>
            <h3>Compatible models</h3>
            <div className="brand-chip-grid">{product.compatibleModels.map((model) => <span key={model}>{model}</span>)}</div>
            <h3>Dimensions</h3>
            <dl className="dimension-list">{product.dimensions.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
          </div>
        </div>
      </section>

      {product.gallery.length > 1 && <section className="product-gallery-section"><div className="shell product-gallery-grid">{product.gallery.map((image) => <figure key={image}><img src={image} alt={`${product.name} product view`} /></figure>)}</div></section>}
      <ContactBand title="Need this replacement filter?" text="Send the required quantity, destination, pack count and any FBA or private-label packaging requirements." />
    </PageShell>
  );
}
