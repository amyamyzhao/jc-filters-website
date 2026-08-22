import Link from "next/link";
import { CategoryCard, ContactBand, PageShell } from "./components";
import { categories, services, whatsappLink } from "./site-data";

export default function Home() {
  return (
    <PageShell>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">FILTER REPLACEMENT MANUFACTURER</span>
            <h1>One supply partner.<br /><em>Across water, air &amp; appliances.</em></h1>
            <p>Pool &amp; spa cartridges, robotic pool cleaner filters, dryer lint screens, HEPA and appliance filters, vacuum dust bags and aquarium cartridges—organized around replacement references.</p>
            <div className="hero-actions">
              <Link className="btn" href="/products">Explore product categories <span>→</span></Link>
              <a className="text-link" href={whatsappLink("Hello JC Filters, I have a target part list and would like a sourcing check.")} target="_blank" rel="noopener noreferrer">Send your part list <span>↗</span></a>
            </div>
            <div className="proof-strip">
              <div><b>6</b><span>Core product programs</span></div>
              <div><b>FBA</b><span>Unit, label and carton support</span></div>
              <div><b>24H*</b><span>Eligible stock dispatch</span></div>
            </div>
          </div>

          <div className="hero-board real-product-board" aria-label="JC product category preview">
            <div className="board-title"><span>JC PRODUCT SYSTEM</span><b>6 connected programs</b></div>
            <div className="real-product-grid">
              <div className="real-product-card featured-product"><img src="/assets/store/pool-spa.jpg" alt="Pool and spa filter cartridges" /><small>POOL &amp; SPA</small></div>
              <div className="real-product-card"><img src="/assets/store/dryer-lint.jpg" alt="Dryer lint screen filter" /><small>DRYER LINT</small></div>
              <div className="real-product-card"><img src="/assets/store/hepa.jpg" alt="HEPA filter replacement" /><small>HEPA FILTER</small></div>
              <div className="real-product-card"><img src="/assets/store/vacuum-dust-bag.jpg" alt="Vacuum dust bags" /><small>DUST BAGS</small></div>
            </div>
            <div className="board-note"><span className="status-dot" />Representative categories from the current JC catalog</div>
          </div>
        </div>
        <div className="shell hero-disclaimer">*24H refers to dispatch after stock, payment, specification and cut-off confirmation—not delivery time.</div>
      </section>

      <section className="category-section">
        <div className="shell">
          <div className="section-heading">
            <div><span className="eyebrow">YOUR PRODUCT PROGRAMS</span><h2>Six real categories, structured by application.</h2></div>
            <p>The new architecture follows your Alibaba catalog: water filtration, dryer replacement parts, HEPA, appliance filters, non-woven dust bags and aquarium cartridges.</p>
          </div>
          <div className="category-grid">{categories.map((category) => <CategoryCard category={category} key={category.slug} />)}</div>
        </div>
      </section>

      <section className="stock-feature">
        <div className="shell stock-grid">
          <div className="stock-visual">
            <span className="big-number">24H<sup>*</sup></span>
            <div><b>Eligible dispatch</b><span>after item-level confirmation</span></div>
          </div>
          <div className="stock-copy">
            <span className="eyebrow">READY-STOCK PROGRAM</span>
            <h2>A faster replenishment conversation starts with confirmed inventory.</h2>
            <p>The framework separates ready-stock inquiries from custom production, so buyers know what information is needed before a dispatch window is promised.</p>
            <Link className="line-link" href="/services/ready-stock">See the ready-stock workflow <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="shell">
          <div className="section-heading compact-heading">
            <div><span className="eyebrow">SELLER SUPPORT</span><h2>Built around replenishment, FBA and private label.</h2></div>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.slug}>
                <span>{service.number}</span><h3>{service.title}</h3><p>{service.short}</p>
                <Link href={`/services/${service.slug}`}>View support details <b>→</b></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="workflow-section">
        <div className="shell workflow-grid">
          <div>
            <span className="eyebrow">FROM MATCH TO REORDER</span>
            <h2>A simple B2B inquiry path.</h2>
            <p>No retail cart is needed. Every useful action moves a qualified buyer toward a part match and direct conversation.</p>
          </div>
          <ol className="workflow-list">
            <li><span>01</span><div><b>Choose a category</b><p>Start with pool, dryer, vacuum filter or dust bag.</p></div></li>
            <li><span>02</span><div><b>Share the reference</b><p>Send the part number, photo, dimensions, quantity and destination.</p></div></li>
            <li><span>03</span><div><b>Confirm the supply route</b><p>Check ready stock, FBA preparation and packaging requirements.</p></div></li>
            <li><span>04</span><div><b>Keep replenishment direct</b><p>Continue through the same WhatsApp or email contact.</p></div></li>
          </ol>
        </div>
      </section>

      <ContactBand />
    </PageShell>
  );
}
