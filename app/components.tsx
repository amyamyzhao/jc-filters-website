import Link from "next/link";
import type { Category } from "./site-data";
import { categories, contact, services, whatsappLink } from "./site-data";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="JC Filters home">
      <img className="brand-logo" src="/assets/store/jc-logo.jpg" alt="JC" />
      <span className="brand-copy"><strong>JC FILTERS</strong><small>WATER · AIR · APPLIANCE</small></span>
    </Link>
  );
}

export function Header() {
  return (
    <>
      <div className="service-bar">
        <div className="shell service-bar-inner">
          <span>Replacement filtration for global sellers and distributors</span>
          <span><b>Ready-stock dispatch*</b><i />FBA support<i />Custom packaging</span>
        </div>
      </div>
      <header className="site-header">
        <div className="shell nav-row">
          <Brand />
          <nav aria-label="Primary navigation">
            <Link href="/products">Products</Link>
            <Link href="/services/ready-stock">Ready Stock</Link>
            <Link href="/services/fba-service">FBA Service</Link>
            <Link href="/services/custom-packaging">Custom Packaging</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <a className="btn btn-small" href={whatsappLink("Hello JC Filters, I would like to discuss replacement filter sourcing.")} target="_blank" rel="noopener noreferrer">Chat on WhatsApp <span>↗</span></a>
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
          <p>Replacement filters for pool, dryer, air, appliance, vacuum and aquarium applications.</p>
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
          <a href={whatsappLink("Hello JC Filters, I would like to discuss a filter sourcing project.")} target="_blank" rel="noopener noreferrer">WhatsApp {contact.whatsappDisplay}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <Link href="/contact">Contact page</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} JC Filters. Product-level content pending final SKU approval.</span>
        <span>*Dispatch timing is confirmed per order.</span>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp({ message = "Hello JC Filters, I would like to discuss replacement filter sourcing." }: { message?: string }) {
  return <a className="floating-whatsapp" href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" aria-label="Chat with JC Filters on WhatsApp"><span>WA</span><b>WhatsApp</b></a>;
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
        <small>{category.code}</small>
      </Link>
      <div className="category-content">
        <span className="card-kicker">{category.kicker}</span>
        <h3><Link href={`/products/${category.slug}`}>{category.title}</Link></h3>
        <p>{category.description}</p>
        <div className="subcategory-preview">{category.subcategories.slice(0, 2).map((item) => <span key={item}>{item}</span>)}</div>
        <Link className="card-link" href={`/products/${category.slug}`}>Explore this category <span>→</span></Link>
      </div>
    </article>
  );
}

export function PlaceholderProductCard({ category, index }: { category: Category; index: number }) {
  const slot = String(index).padStart(2, "0");
  return (
    <article className="product-card">
      <div className="product-media">
        <span className="slot-label">PRODUCT SLOT {slot}</span>
        <ProductShape type={category.shape} />
        <span className="pending-chip">IMAGE PENDING</span>
      </div>
      <div className="product-info">
        <span className="card-kicker">{category.kicker}</span>
        <h3>Product name to be added</h3>
        <dl>
          <div><dt>Part / model</dt><dd>Pending data</dd></div>
          <div><dt>Key dimension</dt><dd>Pending data</dd></div>
          <div><dt>Pack option</dt><dd>Pending data</dd></div>
        </dl>
        <a className="card-inquiry" href={whatsappLink(`Hello JC Filters, I am asking about ${category.title} catalog slot ${slot}. Please help me match my part.`)} target="_blank" rel="noopener noreferrer">Ask on WhatsApp <span>↗</span></a>
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
          <a className="btn btn-white" href={whatsappLink("Hello JC Filters, I have a part list for matching. I will send the references, quantity and destination.")} target="_blank" rel="noopener noreferrer">Send it on WhatsApp <span>↗</span></a>
          <a className="email-link" href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>
    </section>
  );
}
