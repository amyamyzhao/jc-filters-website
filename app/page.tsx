import Link from "next/link";
import { CategoryCard, ContactBand, PageShell } from "./components";
import { categories, services, whatsappLink } from "./site-data";

export default function Home() {
  return (
    <PageShell>
      <section className="jc-hero">
        <div className="shell jc-hero-grid">
          <div className="jc-hero-copy">
            <span className="eyebrow">REPLACEMENT FILTER MANUFACTURER</span>
            <h1>Filters ready for your <em>next restock.</em></h1>
            <p>Four focused replacement-filter ranges for online sellers, importers and distributors—with ready stock, FBA preparation and custom packing support.</p>
            <div className="hero-actions">
              <Link className="btn" href="#product-categories">Explore categories <span>→</span></Link>
              <a className="text-link" href={whatsappLink("Hello, I would like to discuss a replacement filter sourcing project.")} target="_blank" rel="noopener noreferrer">Send your part list <span>↗</span></a>
            </div>
            <div className="jc-capability-row" aria-label="Supply capabilities">
              <span><b>24H*</b><small>Ready-stock dispatch</small></span>
              <span><b>FBA</b><small>Prep support</small></span>
              <span><b>OEM</b><small>Custom packing</small></span>
            </div>
          </div>

          <div className="jc-hero-visual" aria-label="JC replacement filter collections">
            <img src="/assets/jc/pool-collection.jpg" alt="Pool and spa replacement filter collection" />
            <div className="hero-image-caption"><span>01</span><div><b>Pool &amp; Spa Filters</b><small>Pool Filters / Spa Filters</small></div></div>
          </div>
        </div>
        <div className="shell hero-disclaimer">*24H means eligible orders are dispatched within 24 hours after stock, specification, payment and cut-off confirmation—not delivered within 24 hours.</div>
      </section>

      <section className="category-section jc-category-section" id="product-categories">
        <div className="shell">
          <div className="section-heading">
            <div><span className="eyebrow">PRODUCT CATEGORIES</span><h2>Four focused programs.<br />One clear catalog.</h2></div>
            <p>Start by application, then narrow by compatible model, replacement reference and dimensions. Product cards can be added continuously without changing the site structure.</p>
          </div>
          <div className="category-grid">{categories.map((category) => <CategoryCard category={category} key={category.slug} />)}</div>
        </div>
      </section>

      <section className="seller-support-section">
        <div className="shell">
          <div className="section-heading">
            <div><span className="eyebrow">BUILT FOR REPLENISHMENT</span><h2>Support beyond the filter itself.</h2></div>
            <p>Clear stock status, marketplace-ready preparation and flexible packaging help online sellers move from sourcing to replenishment with fewer handoffs.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.slug}>
                <span>SERVICE / {service.number}</span><h3>{service.title}</h3><p>{service.short}</p>
                <Link href={`/services/${service.slug}`}>See how it works <b>→</b></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="proof-section">
        <div className="shell proof-layout">
          <div className="proof-copy">
            <span className="eyebrow">REAL STOCK. REAL PRODUCTION.</span>
            <h2>A supply framework buyers can verify.</h2>
            <p>Use your product reference or target model to start. We confirm the matching route, stock status and any FBA or custom-packing work before the order is released.</p>
            <ul>
              <li><span>01</span>Confirmed stock and dispatch window</li>
              <li><span>02</span>Part, size and compatibility check</li>
              <li><span>03</span>FBA labels, packs and carton support</li>
            </ul>
            <Link className="btn" href="/about">Meet the manufacturer <span>→</span></Link>
          </div>
          <div className="proof-gallery">
            <figure className="proof-image proof-image-stock"><img src="/assets/jc/ready-stock.jpg" alt="Ready stock of JC pool filters" /><figcaption><b>READY STOCK</b><span>Pool filter inventory</span></figcaption></figure>
            <figure className="proof-image proof-image-line"><img src="/assets/jc/production-line.jpg" alt="JC filter production line" /><figcaption><b>PRODUCTION</b><span>Filter media processing line</span></figcaption></figure>
          </div>
        </div>
      </section>

      <section className="packing-section">
        <div className="shell packing-layout">
          <div className="packing-image"><img src="/assets/jc/custom-packaging.jpg" alt="Custom packing options" /></div>
          <div className="packing-copy"><span className="eyebrow">CUSTOM PACKING</span><h2>Your pack count.<br />Your label. Your market.</h2><p>Configure multipacks, label placement, barcodes and retail boxes around the approved product and marketplace brief.</p><Link className="line-link dark-link" href="/services/custom-packaging">Explore packaging support <span>→</span></Link></div>
        </div>
      </section>

      <ContactBand />
    </PageShell>
  );
}
