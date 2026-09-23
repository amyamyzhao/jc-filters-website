import Link from "next/link";
import type { ProductRecord } from "./product-data";
import type { Category } from "./site-data";
import { InquiryForm } from "./inquiry-form";
import { categories, contact, menuSubcategories, services, slugifySubcategory, whatsappLink } from "./site-data";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Home"><span className="brand-symbol" aria-hidden="true" /></Link>
  );
}

function WhatsAppIcon() {
  return <img className="whatsapp-icon" src="/assets/whatsapp.svg" alt="" aria-hidden="true" />;
}

export function Header() {
  return (
    <>
      <div className="service-bar">
        <div className="shell service-bar-inner">
          <span>For ecommerce sellers, importers and filter distributors</span>
          <span><b>24H ready-stock dispatch*</b><i />FBA services<i />OEM &amp; ODM</span>
        </div>
      </div>
      <header className="site-header">
        <div className="shell nav-row">
          <Brand />
          <nav aria-label="Primary navigation">
            <div className="nav-products">
              <Link className="nav-products-trigger" href="/products">Products <span aria-hidden="true">⌄</span></Link>
              <div className="product-mega-menu">
                <div className="mega-menu-head">
                  <div><span>PRODUCT CATEGORIES</span><b>Four focused filter programs</b></div>
                  <Link href="/products">View all categories <span>→</span></Link>
                </div>
                <div className="mega-menu-grid">
                  {categories.map((category) => (
                    <div className="mega-category" key={category.slug}>
                      <Link className="mega-category-title" href={`/products/${category.slug}`}><small>{category.code}</small>{category.title}</Link>
                      {menuSubcategories(category).map((item) => (
                        <Link className="mega-subcategory" key={item} href={`/products/${category.slug}/${slugifySubcategory(item)}`}>{item}<span>→</span></Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/services/fba-service">FBA Services</Link>
            <Link href="/services/ready-stock">Ready Stock</Link>
            <Link href="/services/custom-packaging">OEM &amp; ODM</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
          </nav>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <div className="mobile-menu-panel">
              <details className="mobile-products-tree" open>
                <summary>Products</summary>
                <div>
                  <Link className="mobile-all-products" href="/products">All filter categories <span>→</span></Link>
                  <div className="mobile-category-tree">{categories.map((category) => menuSubcategories(category).length ? (
                    <details className="mobile-category-group" key={category.slug}>
                      <summary><span>{category.code}</span>{category.title}</summary>
                      <div>
                        <Link href={`/products/${category.slug}`}>All {category.title}</Link>
                        {menuSubcategories(category).map((item) => <Link key={item} href={`/products/${category.slug}/${slugifySubcategory(item)}`}>{item}</Link>)}
                      </div>
                    </details>
                  ) : (
                    <Link className="mobile-single-category" key={category.slug} href={`/products/${category.slug}`}><small>{category.code}</small><span>{category.title}</span><b>→</b></Link>
                  ))}</div>
                </div>
              </details>
              <div className="mobile-service-links">
              <Link href="/services/fba-service">FBA Services</Link>
              <Link href="/services/ready-stock">Ready Stock</Link>
              <Link href="/services/custom-packaging">OEM &amp; ODM</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About JC</Link>
              <Link href="/contact">Contact</Link>
              <a className="mobile-wa" href={whatsappLink("Hello, I would like to discuss replacement filter sourcing.")} target="_blank" rel="noopener noreferrer" aria-label="Start a WhatsApp inquiry"><WhatsAppIcon /></a>
              </div>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>Filter programs for pool and spa, air and humidifier appliances, vacuum cleaners and dryers.</p>
        </div>
        <div>
          <h4>Products</h4>
          {categories.map((item) => <Link key={item.slug} href={`/products/${item.slug}`}>{item.title}</Link>)}
          <Link href="/blog">Buying guides</Link>
        </div>
        <div>
          <h4>Services</h4>
          {services.map((item) => <Link key={item.slug} href={`/services/${item.slug}`}>{item.title}</Link>)}
        </div>
        <div>
          <h4>Contact</h4>
          <a className="footer-wa" href={whatsappLink("Hello, I would like to discuss a filter sourcing project.")} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /><span>{contact.whatsappDisplay}</span></a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <Link href="/contact">Contact page</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Tongxiang Jiacheng Environmental Protection Technology Co., Ltd.</span>
        <span>*Dispatch timing is confirmed per order.</span>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp({ message = "Hello JC Filters, I would like to discuss replacement filter sourcing." }: { message?: string }) {
  return <a className="floating-whatsapp" href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" aria-label="Start a WhatsApp inquiry"><WhatsAppIcon /></a>;
}

export function PageShell({ children, whatsappMessage }: { children: React.ReactNode; whatsappMessage?: string }) {
  return <><Header /><main>{children}</main><Footer /><FloatingWhatsApp message={whatsappMessage} /></>;
}

export function ProductShape({ type }: { type: Category["shape"] }) {
  return <span className={`filter-shape ${type}`} aria-hidden="true" />;
}

export function CategoryCard({ category }: { category: Category }) {
  return (
    <article className="category-card">
      <Link className="category-media" href={`/products/${category.slug}`} aria-label={`View ${category.title}`}>
        {category.image ? <img src={category.image} alt={category.title} /> : <ProductShape type={category.shape} />}
        <small>{category.code} / 04</small>
      </Link>
      <div className="category-content">
        <span className="card-kicker">{category.kicker}</span>
        <h3><Link href={`/products/${category.slug}`}>{category.title}</Link></h3>
        <p>{category.description}</p>
        <div className="subcategory-preview">{category.subcategories.map((item) => <span key={item}>{item}</span>)}</div>
        <Link className="card-link" href={`/products/${category.slug}`}>Explore this category <span>→</span></Link>
      </div>
    </article>
  );
}

export function CatalogProductCard({ product }: { product: ProductRecord }) {
  return (
    <article className="product-card">
      <Link className="product-media" href={`/products/${product.categorySlug}/${product.slug}`}>
        <span className="slot-label">{product.readyStock ? "READY STOCK" : "CHECK AVAILABILITY"}</span>
        {product.primaryImage ? (
          <img src={product.primaryImage} alt={product.imageAlt || product.name} />
        ) : (
          <span className="verified-image-pending" role="img" aria-label={`Verified product photo pending for ${product.reference}`}>
            <small>VERIFIED PHOTO PENDING</small>
            <b>{product.reference}</b>
            <em>No substitute image shown</em>
          </span>
        )}
      </Link>
      <div className="product-info">
        <span className="card-kicker">REFERENCE / {product.reference}</span>
        <h3><Link href={`/products/${product.categorySlug}/${product.slug}`}>{product.name}</Link></h3>
        <dl>
          <div><dt>Compatible brands</dt><dd>{product.compatibleBrands.slice(0, 3).join(" · ")}</dd></div>
          <div><dt>Replacement no.</dt><dd>{product.replacementNumbers.slice(0, 2).join(" · ")}</dd></div>
          <div><dt>Supply support</dt><dd>FBA · custom pack</dd></div>
        </dl>
        <a className="card-inquiry" href={whatsappLink(`Hello JC Filters, I am asking about ${product.name}, reference ${product.reference}.`)} target="_blank" rel="noopener noreferrer">Ask about this product <span>↗</span></a>
      </div>
    </article>
  );
}

export function ContactBand({
  title = "Have a part list ready?",
  text = "Send the current reference, dimensions, quantity and destination. We’ll use them to structure the next sourcing conversation.",
  requestContext,
}: { title?: string; text?: string; requestContext?: string }) {
  const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

  return (
    <section className="contact-band">
      <div className="shell contact-band-grid">
        <div><span className="eyebrow light">DIRECT INQUIRY</span><h2>{title}</h2><p>{text}</p></div>
        <div className="contact-actions">
          <InquiryForm accessKey={web3FormsAccessKey} requestContext={requestContext} />
          <a className="email-link" href={`mailto:${contact.email}${requestContext ? `?subject=${encodeURIComponent(`JC Filters inquiry: ${requestContext}`)}` : ""}`}>{contact.email}</a>
        </div>
      </div>
    </section>
  );
}
