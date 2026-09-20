import type { Metadata } from "next";
import { ContactBand, PageShell } from "../components";

export const metadata: Metadata = { title: "About the Supply Program | JC Filters", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return (
    <PageShell>
      <section className="page-hero about-hero">
        <div className="shell narrow-hero"><span className="eyebrow">ABOUT THE MANUFACTURER</span><h1>Replacement filtration,<br /><em>organized for sellers.</em></h1><p>Tongxiang Jiacheng Environmental Protection Technology Co., Ltd. is a Zhejiang-based replacement-filter manufacturer supporting online sellers, importers and distributors.</p></div>
      </section>
      <section className="about-framework">
        <div className="shell about-grid">
          <div><span className="eyebrow">COMPANY SNAPSHOT</span><h2>A focused replacement-filter manufacturer.</h2><p className="source-note">Company details combine the current Alibaba.com profile with factory information supplied directly by JC Filters.</p></div>
          <div className="about-cards">
            <article><span>01</span><h3>Established in 2012</h3><p>Business type listed as manufacturer; location listed as Zhejiang, China.</p></article>
            <article><span>02</span><h3>2 sites · 4 factory buildings</h3><p>Combined production area: 15,000 m².</p></article>
            <article><span>03</span><h3>Multi-category filtration</h3><p>Pool cartridges, dryer lint filters, non-woven dust bags, air filters and pool-cleaner parts are listed as main products.</p></article>
          </div>
        </div>
      </section>
      <section className="factory-gallery-section">
        <div className="shell">
          <div className="section-heading factory-gallery-heading">
            <div><span className="eyebrow">FACTORY PHOTOS</span><h2>Materials, components and finished stock—inside our production sites.</h2></div>
            <p>Real workshop images show prepared filter media, molded vacuum-filter components and finished pool cartridges at different production stages.</p>
          </div>
          <div className="factory-photo-grid">
            <figure><img src="/assets/jc/pleated-media-ready.jpg" alt="Prepared pleated filter media at JC Filters" /><figcaption><b>FILTER MEDIA</b><span>Prepared for assembly</span></figcaption></figure>
            <figure><img src="/assets/jc/vacuum-filter-components.jpg" alt="Molded vacuum filter components at JC Filters" /><figcaption><b>COMPONENTS</b><span>Vacuum-filter parts in production</span></figcaption></figure>
            <figure><img src="/assets/jc/filter-media-batches.jpg" alt="Batches of cut filter media inside the JC Filters factory" /><figcaption><b>WORK IN PROCESS</b><span>Cut media organized by batch</span></figcaption></figure>
          </div>
        </div>
      </section>
      <ContactBand title="Company materials can be added next." text="Approved factory photos, certifications, process images and a final English company introduction will complete this page." />
    </PageShell>
  );
}
