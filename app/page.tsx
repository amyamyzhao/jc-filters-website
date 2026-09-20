import type { Metadata } from "next";
import Link from "next/link";
import { CategoryCard, ContactBand, PageShell } from "./components";
import { catalogArchitecture, categories, services, whatsappLink } from "./site-data";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <PageShell>
      <section className="jc-hero">
        <div className="shell jc-hero-grid">
          <div className="jc-hero-copy">
            <span className="eyebrow">FILTER SUPPLY FOR ECOMMERCE SELLERS</span>
            <h1>Ready stock.<br /><em>24H dispatch*</em></h1>
            <p>Pool, appliance, vacuum and dryer filters with FBA preparation and OEM &amp; ODM support.</p>
            <div className="hero-actions">
              <a className="btn" href={whatsappLink("Hello, I sell filters online and would like to check your ready stock.")} target="_blank" rel="noopener noreferrer">Check ready stock <span>↗</span></a>
              <Link className="text-link" href="#product-categories">Browse filter programs <span>→</span></Link>
            </div>
            <div className="jc-capability-row" aria-label="Supply capabilities">
              <span><b>READY STOCK</b><small>Confirmed by SKU</small></span>
              <span><b>24H*</b><small>Eligible dispatch</small></span>
              <span><b>FBA + OEM/ODM</b><small>Prep &amp; private label</small></span>
            </div>
          </div>

          <div className="jc-hero-visual stock-hero-visual" aria-label="Ready stock of JC filters">
            <img src="/assets/jc/ready-stock.jpg" alt="Large ready stock of filter cartridges prepared for fast replenishment" />
            <div className="stock-hero-badge"><span>READY STOCK</span><b>FAST RESTOCKING</b></div>
            <div className="stock-hero-caption">
              <div>
                <span>STOCK CONFIRMED BY SKU</span>
                <b>Built for fast replenishment.</b>
                <small>Pool &amp; Spa · Appliance · Vacuum · Dryer</small>
              </div>
              <a href={whatsappLink("Hello, I would like to send my SKU list and check your ready stock.")} target="_blank" rel="noopener noreferrer">Send SKU list <i>↗</i></a>
            </div>
          </div>
        </div>
        <div className="shell hero-disclaimer">*24H means eligible orders are dispatched within 24 hours after stock, specification, payment and cut-off confirmation—not delivered within 24 hours.</div>
      </section>

      <section className="category-section jc-category-section" id="product-categories">
        <div className="shell">
          <div className="section-heading">
            <div><span className="eyebrow">PRODUCT CATEGORIES</span><h2>Four focused programs.<br />One clear catalog.</h2></div>
            <p>Start with one of the four product categories, then narrow by compatible brand, model, part reference and dimensions. Product cards can be added later without changing the homepage structure.</p>
          </div>
          <div className="category-grid">{categories.map((category) => <CategoryCard category={category} key={category.slug} />)}</div>
        </div>
      </section>

      <section className="catalog-map-section">
        <div className="shell">
          <div className="section-heading catalog-map-heading">
            <div><span className="eyebrow">HOW TO MATCH</span><h2>From category to the exact compatible part.</h2></div>
            <p>Four focused product programs keep every search clear. Choose the application, narrow the compatible brand, then confirm the model, reference and dimensions.</p>
          </div>
          <div className="catalog-map-grid">
            {catalogArchitecture.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
          <div className="catalog-map-link"><Link href="/services/fba-service">Explore FBA services <span>→</span></Link></div>
        </div>
      </section>

      <section className="seller-support-section">
        <div className="shell">
          <div className="section-heading">
            <div><span className="eyebrow">BUILT FOR REPLENISHMENT</span><h2>Support beyond the filter itself.</h2></div>
            <p>Clear stock status, marketplace-ready preparation and flexible packaging help ecommerce sellers, importers and distributors move from sourcing to replenishment with fewer handoffs.</p>
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

      <section className="factory-scale-section">
        <div className="shell factory-scale-layout">
          <div className="factory-scale-intro">
            <span className="eyebrow light">FACTORY SCALE</span>
            <h2>Manufacturing capacity across two production sites.</h2>
            <p>Four factory buildings provide a combined 15,000 m² production footprint for multi-category filter programs and ongoing replenishment.</p>
          </div>
          <dl className="factory-scale-stats" aria-label="JC Filters factory scale">
            <div><dt>2</dt><dd><b>Production sites</b><span>Coordinated manufacturing</span></dd></div>
            <div><dt>4</dt><dd><b>Factory buildings</b><span>Dedicated production space</span></dd></div>
            <div><dt>15,000<sup>m²</sup></dt><dd><b>Production area</b><span>Combined factory footprint</span></dd></div>
          </dl>
        </div>
      </section>

      <section className="proof-section" id="factory-proof">
        <div className="shell proof-layout">
          <div className="proof-copy">
            <span className="eyebrow">REAL STOCK. REAL PRODUCTION.</span>
            <h2>Factory proof buyers can verify.</h2>
            <p>Confirm the item, stock window and seller-ready preparation before the order is released.</p>
            <ul>
              <li><span>01</span>Confirmed stock and dispatch window</li>
              <li><span>02</span>Part, size and compatibility check</li>
              <li><span>03</span>FBA labels, packs and carton support</li>
            </ul>
            <Link className="btn" href="/about">Meet the manufacturer <span>→</span></Link>
          </div>
          <div className="proof-gallery">
            <figure className="proof-image proof-image-stock"><img src="/assets/jc/pool-cartridge-stock.jpg" alt="Finished pool filter cartridge stock at the JC Filters factory" /><figcaption><b>FINISHED STOCK</b><span>Pool cartridges prepared for shipment</span></figcaption></figure>
            <figure className="proof-image proof-image-line"><img src="/assets/jc/factory-media-inventory.jpg" alt="Prepared filter media inventory inside the JC Filters workshop" /><figcaption><b>WORKSHOP</b><span>Prepared filter media inventory</span></figcaption></figure>
          </div>
        </div>
      </section>

      <section className="packing-section" id="oem-odm">
        <div className="shell packing-layout">
          <div className="packing-image"><img src="/assets/jc/custom-packaging.jpg" alt="OEM and ODM packaging options" /></div>
          <div className="packing-copy"><span className="eyebrow">OEM &amp; ODM</span><h2>Your pack count.<br />Your label. Your market.</h2><p>Configure multipacks, label placement, barcodes and retail boxes around the approved product and marketplace brief.</p><Link className="line-link dark-link" href="/services/custom-packaging">Explore OEM &amp; ODM support <span>→</span></Link></div>
        </div>
      </section>

      <ContactBand />
    </PageShell>
  );
}
