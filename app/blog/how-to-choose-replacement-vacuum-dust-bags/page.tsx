import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, PageShell } from "../../components";
import { siteUrl } from "../../site-data";

const articlePath = "/blog/how-to-choose-replacement-vacuum-dust-bags";
const articleTitle = "How to Choose Replacement Vacuum Dust Bags by Model, Part Number and Collar Type";
const articleDescription = "A practical B2B guide to matching replacement vacuum dust bags using the machine model, bag reference, collar shape, construction and packaging requirements.";
const articleImage = "/assets/jc/category-vacuum-filter-dust-bag-hero-wide-v4.png";

export const metadata: Metadata = {
  title: `${articleTitle} | JC Filters`,
  description: articleDescription,
  keywords: [
    "how to choose replacement vacuum dust bags",
    "vacuum bag model number matching",
    "vacuum dust bag part number",
    "vacuum bag collar shape",
    "compatible replacement vacuum bags",
    "private label vacuum bags",
  ],
  alternates: { canonical: articlePath },
  openGraph: { title: articleTitle, description: articleDescription, type: "article", url: articlePath, images: [{ url: articleImage, alt: "Vacuum filters and upright replacement vacuum dust bag families" }] },
  twitter: { card: "summary_large_image", title: articleTitle, description: articleDescription, images: [articleImage] },
};

export default function VacuumDustBagBuyingGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articleTitle,
    description: articleDescription,
    image: `${siteUrl}${articleImage}`,
    datePublished: "2026-09-23",
    dateModified: "2026-09-23",
    mainEntityOfPage: `${siteUrl}${articlePath}`,
    author: { "@type": "Organization", name: "JC Filters" },
    publisher: { "@type": "Organization", name: "JC Filters" },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Buying Guides", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: "Choosing Replacement Vacuum Dust Bags", item: `${siteUrl}${articlePath}` },
    ],
  };

  return (
    <PageShell whatsappMessage="Hello JC Filters, please help me match a replacement vacuum dust bag by model or part number.">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="article-hero">
        <div className="shell breadcrumb"><Link href="/">Home</Link><span>→</span><Link href="/blog">Buying Guides</Link><span>→</span><b>Vacuum Dust Bags</b></div>
        <div className="shell article-hero-grid">
          <div className="article-hero-copy">
            <span className="eyebrow">VACUUM DUST BAG BUYING GUIDE</span>
            <h1>{articleTitle}</h1>
            <p>{articleDescription}</p>
            <div className="article-hero-meta"><span>MODEL MATCHING</span><span>PART REFERENCES</span><span>COLLAR CHECK</span><span>SUPPLY BRIEF</span></div>
          </div>
          <div className="article-hero-media"><img src={articleImage} alt="Vacuum filters and upright replacement vacuum dust bag families" /></div>
        </div>
      </section>

      <section className="article-content-section">
        <div className="shell article-layout">
          <article className="article-body">
            <h2>Start with the exact vacuum model.</h2>
            <p>A brand name alone is not enough to confirm a replacement bag. Begin with the complete machine model shown on the rating label. Similar-looking vacuums within one brand family can use different bag collars or references.</p>

            <h2>Use the current bag or part reference.</h2>
            <p>Record every reference printed on the current bag, carton or machine documentation. A verified replacement page should connect that reference to the compatible model family without presenting the referenced manufacturer as the supplier of the replacement product.</p>

            <h2>Compare the collar before ordering.</h2>
            <p>The collar controls how the bag locates and seals inside the vacuum. Compare the opening shape, attachment features, material and overall orientation. When the printed reference is incomplete, a clear front-facing photo of the current collar can support the matching conversation.</p>

            <h2>Confirm the bag construction from the product record.</h2>
            <p>Replacement families can use non-woven, fleece or layered constructions. Use only the construction stated on the verified product page or quotation. Do not assume that two compatible-looking bags have the same layer count or material specification.</p>

            <h2>Prepare the supply and packaging brief.</h2>
            <p>Compatibility is only one part of a B2B quotation. Include the required quantity, destination and pack-count requirements. If FBA or private-label preparation is needed, add the applicable label, barcode, artwork, carton and marketplace instructions for item-by-item review.</p>

            <dl className="article-checklist">
              <div><dt>Machine information</dt><dd>Vacuum brand and complete model number from the rating label.</dd></div>
              <div><dt>Replacement reference</dt><dd>Part number or bag reference printed on the current bag, carton or documentation.</dd></div>
              <div><dt>Visual check</dt><dd>Clear photos of the bag collar, opening and attachment features when available.</dd></div>
              <div><dt>Order information</dt><dd>Required quantity, destination, preferred pack count and current availability requirement.</dd></div>
              <div><dt>Preparation brief</dt><dd>FBA, barcode, artwork, private-label packaging and carton-mark requirements, if applicable.</dd></div>
            </dl>

            <h2>Request a final fit check before quotation approval.</h2>
            <p>A matching request should be reviewed against the selected replacement family before the order specification is approved. Availability, final collar fit, packaging options, MOQ and lead time remain subject to the selected item and quotation.</p>

            <p className="article-note"><b>Compatibility notice.</b> Manufacturer names, model numbers and part references are used solely to identify compatibility. JC Filters supplies independent replacement products and is not affiliated with, sponsored by or endorsed by the referenced manufacturers.</p>
          </article>

          <aside className="article-aside">
            <span className="eyebrow">NEXT STEPS</span>
            <h2>Continue the match.</h2>
            <p>Review the verified catalog or send the information listed in this guide.</p>
            <Link href="/products/vacuum-filters-and-dust-bags/vacuum-dust-bags">Browse vacuum dust bags <span>→</span></Link>
            <Link href="/services/fba-service">Review FBA preparation <span>→</span></Link>
            <Link href="/services/custom-packaging">Review private-label packaging <span>→</span></Link>
            <Link href="/contact">Send a matching request <span>→</span></Link>
          </aside>
        </div>
      </section>

      <ContactBand title="Ready to match a replacement bag?" text="Send the machine model, current bag reference, quantity, destination and packaging requirements for confirmation." />
    </PageShell>
  );
}
