import type { Metadata } from "next";
import { ContactBand, PageShell } from "../components";

export const metadata: Metadata = { title: "About the Supply Program | JC Filters" };

export default function AboutPage() {
  return (
    <PageShell>
      <section className="page-hero about-hero">
        <div className="shell narrow-hero"><span className="eyebrow">ABOUT THE PROGRAM</span><h1>Replacement filtration,<br /><em>organized for sellers.</em></h1><p>This page is intentionally a framework until approved company facts, factory material, certifications and team images are supplied.</p></div>
      </section>
      <section className="about-framework">
        <div className="shell about-grid">
          <div><span className="eyebrow">POSITIONING</span><h2>A focused B2B catalog, not a retail storefront.</h2></div>
          <div className="about-cards">
            <article><span>01</span><h3>Part matching first</h3><p>Product structure begins with reference, dimensions and compatibility—not lifestyle merchandising.</p></article>
            <article><span>02</span><h3>Seller support visible</h3><p>Ready stock, FBA preparation and packaging sit close to the product inquiry path.</p></article>
            <article><span>03</span><h3>Claims stay verifiable</h3><p>Company scale, certifications and capability claims will only be added from approved source material.</p></article>
          </div>
        </div>
      </section>
      <ContactBand title="Company materials can be added next." text="Factory photos, verified business facts, certifications, process images and an approved company introduction will complete this page." />
    </PageShell>
  );
}
