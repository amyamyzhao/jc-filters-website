import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CatalogProductCard, ContactBand, PageShell } from "../../../components";
import { PartMatchForm } from "../../../part-match-form";
import { findProduct, products, productsForSubcategory } from "../../../product-data";
import { categories, menuSubcategories, siteUrl, slugifySubcategory, whatsappLink } from "../../../site-data";

const vacuumDustBagFaqs = [
  {
    question: "How do I find the correct replacement vacuum dust bag?",
    answer: "Start with the vacuum brand, exact machine model and the current bag or part reference. The collar shape, bag construction and pack count are then checked before quotation.",
  },
  {
    question: "Can JC Filters match a vacuum bag by part number or collar shape?",
    answer: "Yes. Send the current part number, machine model and a clear photo when available. Only the compatible references confirmed for the selected product are used for the final fit check.",
  },
  {
    question: "Which non-woven vacuum dust bag constructions are available?",
    answer: "Construction varies by replacement family. The verified product pages identify the available non-woven, fleece or layered construction where that information has been confirmed.",
  },
  {
    question: "Do you support OEM or private-label vacuum bag packaging?",
    answer: "Private-label packaging can be scoped around pack count, artwork, barcode placement and marketplace presentation. Packaging options, MOQ and lead time are confirmed for the selected item and final artwork.",
  },
  {
    question: "Can vacuum dust bags be prepared for FBA replenishment?",
    answer: "FBA preparation can be reviewed item by item for unit labels, pack-count and carton planning, and shipping marks. Final requirements follow the buyer's current marketplace instructions and approved order specification.",
  },
  {
    question: "What should I send for a wholesale vacuum dust bag quotation?",
    answer: "Send the machine model or bag reference, required quantity, destination and any pack-count, FBA or private-label packaging requirements. Availability and final compatibility are confirmed with the quotation.",
  },
];

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
    const isVacuumDustBags = subcategory === "Vacuum Dust Bags";
    const description = isVacuumDustBags
      ? "Browse JC Filters replacement vacuum dust bags by compatible model and part reference, with fit confirmation, FBA preparation and custom packaging support."
      : `${subcategory} supply from JC Filters, with compatible-model matching, ready-stock confirmation, FBA preparation and OEM and ODM support.`;
    return {
      title: isVacuumDustBags ? "Vacuum Dust Bag Manufacturer & Supplier | JC Filters" : `${subcategory} Manufacturer & Supplier | JC Filters`,
      description,
      keywords: isVacuumDustBags ? [
        "vacuum dust bag manufacturer",
        "vacuum dust bag supplier",
        "replacement vacuum dust bags",
        "compatible replacement vacuum bags",
        "non-woven vacuum dust bags",
        "wholesale vacuum dust bags",
        "OEM vacuum dust bags",
        "private label vacuum bags",
        "custom vacuum dust bags",
        "vacuum filter bag manufacturer",
      ] : undefined,
      alternates: { canonical: `/products/${slug}/${productSlug}` },
      openGraph: { title: `${subcategory} | JC Filters`, description, images: category.image ? [{ url: category.image, alt: subcategory }] : [] },
      twitter: { card: "summary_large_image", title: `${subcategory} | JC Filters`, description, images: category.image ? [category.image] : [] },
    };
  }

  if (!product) return {};
  const socialImages = product.primaryImage ? [{ url: product.primaryImage, alt: product.imageAlt || product.name }] : [];
  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
    alternates: { canonical: `/products/${slug}/${productSlug}` },
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      type: "website",
      url: `/products/${slug}/${productSlug}`,
      images: socialImages,
    },
    twitter: { card: "summary_large_image", title: product.seo.title, description: product.seo.description, images: product.primaryImage ? [product.primaryImage] : [] },
  };
}

export default async function ProductOrSubcategoryPage({ params }: { params: Promise<{ slug: string; product: string }> }) {
  const { slug, product: productSlug } = await params;
  const category = categories.find((item) => item.slug === slug);
  const subcategory = category?.subcategories.find((item) => slugifySubcategory(item) === productSlug);
  const product = findProduct(slug, productSlug);

  if (category && subcategory && category.slug !== "dryer-lint-filters") {
    const subcategoryProducts = productsForSubcategory(category.slug, productSlug);
    const verifiedBrands = Array.from(new Set(subcategoryProducts.flatMap((item) => item.compatibleBrands)));
    const brandDirectory = verifiedBrands.length ? verifiedBrands : category.compatibleBrands;
    const isVacuumDustBags = subcategory === "Vacuum Dust Bags";
    const canonicalPath = `/products/${category.slug}/${productSlug}`;
    const heroTitle = isVacuumDustBags ? "Replacement Vacuum Dust Bags" : subcategory;
    const heroDescription = isVacuumDustBags
      ? "Replacement non-woven vacuum dust bags for ecommerce sellers, importers and filter distributors, prepared for model matching, FBA requirements and private-label packaging review."
      : category.description;
    const matchingLogic = isVacuumDustBags
      ? "Vacuum model · part reference · collar shape · bag construction · pack count"
      : category.matching;
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Products", item: `${siteUrl}/products` },
        { "@type": "ListItem", position: 2, name: category.title, item: `${siteUrl}/products/${category.slug}` },
        { "@type": "ListItem", position: 3, name: subcategory, item: `${siteUrl}${canonicalPath}` },
      ],
    };
    const itemListSchema = subcategoryProducts.length ? {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${subcategory} catalog`,
      numberOfItems: subcategoryProducts.length,
      itemListElement: subcategoryProducts.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: `${siteUrl}/products/${item.categorySlug}/${item.slug}`,
      })),
    } : null;
    const faqSchema = isVacuumDustBags ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: vacuumDustBagFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    } : null;
    return (
      <PageShell whatsappMessage={`Hello JC Filters, I would like to ask about ${subcategory}.`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        {itemListSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />}
        {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
        <section className="category-hero subcategory-page-hero">
          <div className="shell breadcrumb"><Link href="/products">Products</Link><span>→</span><Link href={`/products/${category.slug}`}>{category.title}</Link><span>→</span><b>{subcategory}</b></div>
          <div className="shell category-hero-grid">
            <div>
              <span className="eyebrow">{category.kicker.toUpperCase()} / SUBCATEGORY</span>
              <h1>{heroTitle}</h1>
              <p>{heroDescription}</p>
              <div className="match-key"><span>MATCHING LOGIC</span><b>{matchingLogic}</b></div>
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

        <section className={`brand-directory-section ${isVacuumDustBags ? "vacuum-dust-bag-brand-section" : ""}`}>
          <div className="shell brand-directory-layout">
            <div className="brand-directory-copy">
              <span className="eyebrow">COMPATIBILITY FIRST</span>
              <h2>Match the model before ordering.</h2>
              <p>{subcategoryProducts.length ? `Use the compatible brand, machine model and replacement reference to identify the correct ${subcategory.toLowerCase()}. Final fit is confirmed before quotation.` : category.brandNote || `Use the compatible brand, appliance or machine model, replacement number and dimensions to identify the correct ${subcategory.toLowerCase()}.`}</p>
              <Link className="text-link" href="/contact">Send a matching request <span>→</span></Link>
            </div>
            <div className="brand-index-panel">
              <span className="panel-label">{subcategoryProducts.length ? `${brandDirectory.length} VERIFIED BRAND FAMILIES IN THIS FIRST RELEASE` : "MATCHING INFORMATION"}</span>
              <div className={`brand-chip-grid ${brandDirectory.length ? "" : "reference-chip-grid"}`}>
                {(brandDirectory.length ? brandDirectory : category.referenceExamples).map((item) => <span key={item}>{item}</span>)}
              </div>
              <small>Brand names identify compatibility only. JC Filters is not affiliated with or endorsed by the referenced manufacturers.</small>
            </div>
          </div>
        </section>

        <section className="match-section"><div className="shell"><PartMatchForm category={subcategory} /></div></section>

        <section className={`catalog-section ${isVacuumDustBags ? "vacuum-dust-bag-catalog-section" : ""}`}>
          <div className="shell">
            <div className="section-heading product-heading">
              <div><span className="eyebrow">{subcategory.toUpperCase()} CATALOG</span><h2>{subcategoryProducts.length ? "Verified replacement bag families." : "Product records will live here."}</h2></div>
              <p>{subcategoryProducts.length ? "The first release includes only high-confirmation records cleared to proceed. Availability, quantity and final collar fit remain subject to quotation confirmation." : "Each future product page will carry its replacement number, compatible models, dimensions, pack options and stock status."}</p>
            </div>
            {subcategoryProducts.length ? (
              <>
                <div className="product-grid range-grid">{subcategoryProducts.map((item) => <CatalogProductCard key={item.slug} product={item} />)}</div>
                <p className="catalog-compatibility-notice">Compatibility notice: manufacturer names, model numbers and part references identify fit only. JC Filters supplies independent replacement products and is not affiliated with, sponsored by or endorsed by the referenced manufacturers.</p>
              </>
            ) : (
              <div className="subcategory-empty-state">
                <div><span>CATALOG STATUS</span><h3>Products are being prepared.</h3><p>You can still send a model, replacement number, dimensions or listing link for matching now.</p></div>
                <a className="btn" href={whatsappLink(`Hello JC Filters, please help me match a ${subcategory} product.`)} target="_blank" rel="noopener noreferrer">Send a matching request <span>↗</span></a>
              </div>
            )}
          </div>
        </section>
        {isVacuumDustBags && (
          <section className="subcategory-faq-section vacuum-dust-bag-faq-section">
            <div className="shell">
              <div className="section-heading subcategory-faq-heading">
                <div><span className="eyebrow">VACUUM DUST BAG SOURCING FAQ</span><h2>Answers for model matching and supply planning.</h2></div>
                <p>Use these confirmed steps to prepare a compatible replacement, wholesale, OEM or private-label vacuum bag inquiry.</p>
              </div>
              <div className="subcategory-faq-grid">
                {vacuumDustBagFaqs.map((item) => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}
              </div>
              <div className="subcategory-faq-links" role="navigation" aria-label="Vacuum dust bag supply support">
                <Link href="/services/fba-service">Review FBA preparation <span>View service →</span></Link>
                <Link href="/services/custom-packaging">Review OEM &amp; private-label packaging <span>View service →</span></Link>
                <Link href="/contact">Send a matching and quotation request <span>Start inquiry →</span></Link>
                <Link href="/blog/how-to-choose-replacement-vacuum-dust-bags">How to choose a replacement vacuum dust bag <span>Read guide →</span></Link>
              </div>
            </div>
          </section>
        )}
        <ContactBand title={`Looking for ${subcategory}?`} text="Send the compatible model, replacement number, quantity, destination and packaging requirements for confirmation." />
      </PageShell>
    );
  }

  if (!product || !category) notFound();
  const subcategoryTitle = category.subcategories.find((item) => slugifySubcategory(item) === product.subcategorySlug) || "Vacuum Dust Bags";
  const subcategoryPath = `/products/${category.slug}/${product.subcategorySlug}`;
  const relatedProducts = productsForSubcategory(category.slug, product.subcategorySlug || "")
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);
  const canonicalPath = `/products/${category.slug}/${product.slug}`;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seo.description,
    ...(product.primaryImage ? { image: [product.primaryImage, ...(product.gallery || [])].map((image) => `${siteUrl}${image}`) } : {}),
    category: subcategoryTitle,
    brand: { "@type": "Brand", name: "JC Filters" },
    url: `${siteUrl}${canonicalPath}`,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Replacement reference", value: product.reference },
      { "@type": "PropertyValue", name: "Compatible brands", value: product.compatibleBrands.join(", ") },
      { "@type": "PropertyValue", name: "Material", value: product.material },
    ],
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Products", item: `${siteUrl}/products` },
      { "@type": "ListItem", position: 2, name: category.title, item: `${siteUrl}/products/${category.slug}` },
      { "@type": "ListItem", position: 3, name: subcategoryTitle, item: `${siteUrl}${subcategoryPath}` },
      { "@type": "ListItem", position: 4, name: product.name, item: `${siteUrl}${canonicalPath}` },
    ],
  };

  return (
    <PageShell whatsappMessage={`Hello JC Filters, I am asking about ${product.name}, reference ${product.reference}.`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="product-detail-hero">
        <div className="shell breadcrumb"><Link href="/products">Products</Link><span>→</span><Link href={`/products/${category.slug}`}>{category.title}</Link><span>→</span><Link href={subcategoryPath}>{subcategoryTitle}</Link><span>→</span><b>{product.reference}</b></div>
        <div className="shell product-detail-grid">
          <div>
            <div className="product-detail-image">
              {product.primaryImage ? (
                <img src={product.primaryImage} alt={product.imageAlt || product.name} />
              ) : (
                <span className="verified-image-pending product-detail-pending" role="img" aria-label={`Verified product photo pending for ${product.reference}`}>
                  <small>VERIFIED PHOTO PENDING</small>
                  <b>{product.reference}</b>
                  <em>No substitute image shown</em>
                </span>
              )}
            </div>
            <p className="product-image-note">{product.primaryImage ? "Style-matched product photo from the supplied JC dust-bag catalog. Final collar and dimensions are reconfirmed for quotation." : "No verified matching photo was found in the supplied dust-bag folder, so no substitute style is displayed."}</p>
          </div>
          <div className="product-detail-copy">
            <span className="eyebrow">REPLACEMENT REFERENCE / {product.reference}</span>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <dl>
              <div><dt>Stock status</dt><dd>{product.readyStock ? "Ready stock — confirm quantity" : "Confirm current availability"}</dd></div>
              <div><dt>Compatible brands</dt><dd>{product.compatibleBrands.join(" · ")}</dd></div>
              <div><dt>Replacement numbers</dt><dd>{product.replacementNumbers.join(" · ")}</dd></div>
              <div><dt>Bag type</dt><dd>{product.productType}</dd></div>
              <div><dt>Material</dt><dd>{product.material}</dd></div>
              <div><dt>Packaging</dt><dd>Pack count and private-label requirements confirmed with quotation</dd></div>
            </dl>
            <a className="btn" href={whatsappLink(`Hello JC Filters, please quote ${product.name}, reference ${product.reference}. Quantity: . Destination: . Packaging requirements: .`)} target="_blank" rel="noopener noreferrer">Ask for fit, stock and quotation <span>↗</span></a>
          </div>
        </div>
      </section>

      {product.gallery && product.gallery.length > 0 && (
        <section className="product-gallery-section">
          <div className="shell">
            <div className="section-heading product-heading">
              <div><span className="eyebrow">STYLE-MATCHED PRODUCT IMAGES</span><h2>Details from the same bag family.</h2></div>
              <p>Every image below comes from the folder matched to this replacement reference. Angle, collar and pack views are not mixed across styles.</p>
            </div>
            <div className="product-gallery-grid">
              {product.gallery.map((image, index) => (
                <figure key={image}><img src={image} alt={`${product.imageAlt || product.name} — detail ${index + 1}`} /></figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="product-spec-section">
        <div className="shell product-spec-grid">
          <div><span className="eyebrow">VERIFIED FIT INFORMATION</span><h2>Compatibility data for quotation.</h2></div>
          <div>
            <h3>Compatible models</h3>
            <div className="brand-chip-grid">{product.compatibleModels.map((model) => <span key={model}>{model}</span>)}</div>
            <h3>Final fit check</h3>
            <p className="fit-check-note">{product.compatibilityNote}</p>
            <p className="compatibility-disclaimer"><b>Compatibility notice.</b> Manufacturer names, model numbers and part references are used solely to identify compatibility. JC Filters supplies independent replacement products and is not affiliated with, sponsored by or endorsed by the referenced manufacturers.</p>
            <div className="product-internal-links" role="navigation" aria-label="Related product and service links">
              <Link href={subcategoryPath}>Browse all {subcategoryTitle}<span>→</span></Link>
              <Link href="/services/ready-stock">Ready-stock process<span>→</span></Link>
              <Link href="/services/fba-service">FBA preparation<span>→</span></Link>
              <Link href="/services/custom-packaging">Custom packaging<span>→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && <section className="related-product-section"><div className="shell"><div className="section-heading product-heading"><div><span className="eyebrow">RELATED VACUUM DUST BAGS</span><h2>Continue by reference family.</h2></div><Link className="text-link" href={subcategoryPath}>View all {subcategoryTitle} <span>→</span></Link></div><div className="product-grid related-product-grid">{relatedProducts.map((item) => <CatalogProductCard key={item.slug} product={item} />)}</div></div></section>}
      <ContactBand
        title="Request fit confirmation and quotation."
        text="Send the required quantity, destination, current bag or machine reference, and any FBA or private-label packaging requirements."
        requestContext={`${product.name} | Reference: ${product.reference}`}
      />
    </PageShell>
  );
}
