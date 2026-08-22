import Link from "next/link";
import type { Category } from "./site-data";
import { categories, contact, services, whatsappLink } from "./site-data";

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
          <span>For Amazon sellers, importers and filter distributors</span>
          <span><b>24H ready-stock dispatch*</b><i />FBA support<i />Custom packing</span>
        </div>
      </div>
      <header className="site-header">
        <div className="shell nav-row">
          <Brand />
          <nav aria-label="Primary navigation">
            <Link href="/products">Filter Categories</Link>
            <Link href="/services/ready-stock">Ready Stock</Link>
            <Link href="/services/fba-service">FBA Service</Link>
            <Link href="/services/custom-packaging">Custom Packaging</Link>
            <Link href="/about">About</Link>
          </nav>
          <a className="whatsapp-icon-button header-whatsapp" href={whatsappLink("Hello, I would like to discuss replacement filter sourcing.")} target="_blank" rel="noopener noreferrer" aria-label="Start a WhatsApp inquiry"><WhatsAppIcon /></a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <div>
              <Link href="/products">Filter Categories</Link>
              <Link href="/services/ready-stock">Ready Stock</Link>
              <Link href="/services/fba-service">FBA Service</Link>
              <Link href="/services/custom-packaging">Custom Packaging</Link>
              <Link href="/about">About JC</Link>
              <Link href="/contact">Contact</Link>
              <a className="mobile-wa" href={whatsappLink("Hello, I would like to discuss replacement filter sourcing.")} target="_blank" rel="noopener noreferrer" aria-label="Start a WhatsApp inquiry"><WhatsAppIcon /></a>
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
          <p>Replacement filters for pool and spa, air and humidifier appliances, vacuum cleaners and dryers.</p>
        </div>
        <div>
          <h4>Products</h4>
          {categories.map((item) => <Link key={item.slug} href={`/products/${item.slug}`}>{item.title}</Link>)}
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

export function PlaceholderProductCard({ category, index }: { category: Category; index: number }) {
  const slot = String(index).padStart(2, "0");
  const rangeName = category.subcategories[(index - 1) % category.subcategories.length];
  const image = category.subImages?.[(index - 1) % category.subcategories.length] || category.image;
  return (
    <article className="product-card">
      <div className="product-media">
        <span className="slot-label">CATALOG RANGE {slot}</span>
        {image ? <img src={image} alt={rangeName} /> : <ProductShape type={category.shape} />}
        <span className="pending-chip">PRODUCTS ADD CONTINUOUSLY</span>
      </div>
      <div className="product-info">
        <span className="card-kicker">{category.kicker}</span>
        <h3>{rangeName}</h3>
        <dl>
          <div><dt>Match by</dt><dd>Model / part no.</dd></div>
          <div><dt>Available support</dt><dd>FBA / custom pack</dd></div>
          <div><dt>Catalog status</dt><dd>Updating</dd></div>
        </dl>
        <a className="card-inquiry" href={whatsappLink(`Hello JC Filters, I am asking about ${rangeName}. Please help me match my model or part number.`)} target="_blank" rel="noopener noreferrer">Ask about this range <span>↗</span></a>
      </div>
    </article>
  );
}

export function ContactBand({ title = "Have a part list ready?", text = "Send the current reference, dimensions, quantity and destination. We’ll use them to structure the next sourcing conversation." }: { title?: string; text?: string }) {
  return (
    <section className="contact-band">
      <div className="shell contact-band-grid">
        <div><span className="eyebrow light">DIRECT INQUIRY</span><h2>{title}</h2><p>{text}</p></div>
        <div className="contact-actions">
          <a className="btn btn-white" href={whatsappLink("Hello, I have a part list for matching. I will send the references, quantity and destination.")} target="_blank" rel="noopener noreferrer">Send your product request <WhatsAppIcon /></a>
          <a className="email-link" href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>
    </section>
  );
}
