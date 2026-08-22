import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBand, PageShell, PlaceholderProductCard, ProductShape } from "../../components";
import { PartMatchForm } from "../../part-match-form";
import { categories } from "../../site-data";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) return {};
  return { title: `${category.title} | JC Filters`, description: category.description };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();

  return (
    <PageShell whatsappMessage={`Hello JC Filters, I would like to ask about ${category.title}.`}>
      <section className="category-hero">
        <div className="shell breadcrumb"><Link href="/products">Products</Link><span>→</span><b>{category.title}</b></div>
        <div className="shell category-hero-grid">
          <div>
            <span className="eyebrow">{category.kicker.toUpperCase()}</span>
            <h1>{category.title}</h1>
            <p>{category.description}</p>
            <div className="match-key"><span>MATCHING LOGIC</span><b>{category.matching}</b></div>
          </div>
          <div className="category-hero-shape"><span>{category.code}</span><ProductShape type={category.shape} /><small>PRODUCT IMAGE AREA</small></div>
        </div>
      </section>

      <section className="match-section">
        <div className="shell"><PartMatchForm category={category.title} /></div>
      </section>

      <section className="catalog-section">
        <div className="shell">
          <div className="section-heading product-heading">
            <div><span className="eyebrow">PRODUCT CARD SYSTEM</span><h2>Catalog slots ready for your products.</h2></div>
            <p>Each approved product will replace one slot with its real image, part number, dimensions, pack information and an item-specific WhatsApp message.</p>
          </div>
          <div className="product-grid">{[1, 2, 3, 4, 5, 6].map((index) => <PlaceholderProductCard category={category} index={index} key={index} />)}</div>
        </div>
      </section>

      <section className="data-check-section">
        <div className="shell data-check-grid">
          <div><span className="eyebrow">BEFORE A CARD GOES LIVE</span><h2>What each product needs.</h2></div>
          <ul>
            <li><span>01</span>Clean product images</li>
            <li><span>02</span>Internal SKU and sellable name</li>
            <li><span>03</span>Cross-reference / compatibility list</li>
            <li><span>04</span>Dimensions and pack configuration</li>
            <li><span>05</span>Ready-stock and customization status</li>
          </ul>
        </div>
      </section>
      <ContactBand title={`Need a ${category.title} match?`} text="Send the reference, clear photos, dimensions, quantity and destination so the correct item can be checked before quotation." />
    </PageShell>
  );
}
