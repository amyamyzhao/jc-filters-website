import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBand, PageShell } from "../../components";
import { services } from "../../site-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return { title: `${service.title} | JC Filters`, description: service.short };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <PageShell whatsappMessage={`Hello JC Filters, I would like to discuss ${service.title}.`}>
      <section className="service-hero">
        <div className="shell breadcrumb"><Link href="/">Home</Link><span>→</span><b>{service.title}</b></div>
        <div className="shell service-hero-grid">
          <div><span className="eyebrow">SELLER SUPPORT / {service.number}</span><h1>{service.title}</h1><p>{service.intro}</p></div>
          <span className="service-number">{service.number}</span>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="shell service-detail-grid">
          <div className="service-detail-title"><span className="eyebrow">SERVICE FRAMEWORK</span><h2>What the buyer confirms.</h2></div>
          <div className="service-point-list">
            {service.points.map((point, index) => <div key={point}><span>0{index + 1}</span><b>{point}</b></div>)}
            <p>{service.note}</p>
          </div>
        </div>
      </section>

      <section className="service-process-section">
        <div className="shell">
          <div className="section-heading compact-heading"><div><span className="eyebrow">WORKFLOW</span><h2>Brief. Confirm. Approve. Release.</h2></div></div>
          <div className="process-grid">
            <div><span>01</span><b>Buyer brief</b><p>Product list, quantity, destination and applicable service requirements.</p></div>
            <div><span>02</span><b>Item check</b><p>Confirm what applies to each selected product and packing route.</p></div>
            <div><span>03</span><b>Approval</b><p>Lock the specification, artwork or preparation details before release.</p></div>
            <div><span>04</span><b>Execution</b><p>Prepare against the approved order and communicate the dispatch plan.</p></div>
          </div>
        </div>
      </section>
      <ContactBand title={`Discuss ${service.title}`} text="Send the product list, expected quantity, destination and your current requirement. The applicable options can then be checked item by item." />
    </PageShell>
  );
}
