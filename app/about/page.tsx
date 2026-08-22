import type { Metadata } from "next";
import { ContactBand, PageShell } from "../components";

export const metadata: Metadata = { title: "About the Supply Program | JC Filters" };

export default function AboutPage() {
  return (
    <PageShell>
      <section className="page-hero about-hero">
        <div className="shell narrow-hero"><span className="eyebrow">ABOUT JC FILTERS</span><h1>Replacement filtration,<br /><em>organized for sellers.</em></h1><p>Tongxiang Jiacheng Environmental Protection Technology Co., Ltd. is presented on Alibaba.com as a Zhejiang-based manufacturer established in 2012.</p></div>
      </section>
      <section className="about-framework">
        <div className="shell about-grid">
          <div><span className="eyebrow">ALIBABA-LISTED PROFILE</span><h2>A focused replacement-filter manufacturer.</h2><p className="source-note">These facts are based on the current Alibaba.com company profile and should be rechecked before the public launch.</p></div>
          <div className="about-cards">
            <article><span>01</span><h3>Established in 2012</h3><p>Business type listed as manufacturer; location listed as Zhejiang, China.</p></article>
            <article><span>02</span><h3>51–100 people</h3><p>Alibaba profile lists a 1,000–3,000 m² facility and on-site verification.</p></article>
            <article><span>03</span><h3>Multi-category filtration</h3><p>Pool cartridges, dryer lint filters, non-woven dust bags, air filters and pool-cleaner parts are listed as main products.</p></article>
          </div>
        </div>
      </section>
      <ContactBand title="Company materials can be added next." text="Approved factory photos, certifications, process images and a final English company introduction will complete this page." />
    </PageShell>
  );
}
