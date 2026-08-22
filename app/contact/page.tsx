import type { Metadata } from "next";
import { PageShell } from "../components";
import { contact, whatsappLink } from "../site-data";

export const metadata: Metadata = { title: "Contact JC Filters" };

export default function ContactPage() {
  return (
    <PageShell>
      <section className="contact-page">
        <div className="shell contact-page-grid">
          <div><span className="eyebrow">DIRECT CONTACT</span><h1>Start with the part.<br /><em>We’ll structure the rest.</em></h1><p>For a useful first check, include your target category, reference or photo, dimensions, quantity, destination and any FBA or custom-packaging requirements.</p></div>
          <div className="contact-panel">
            <span className="panel-label">DIRECT INQUIRY</span>
            <h2>Send your part list</h2><p>Fastest for part photos, lists and continuing discussion.</p>
            <a className="whatsapp-icon-button contact-wa" href={whatsappLink("Hello, I would like to start a replacement-filter inquiry.")} target="_blank" rel="noopener noreferrer" aria-label="Start a WhatsApp inquiry"><img className="whatsapp-icon" src="/assets/whatsapp.svg" alt="" /></a>
            <div className="contact-row"><span>Number</span><b>{contact.whatsappDisplay}</b></div>
            <div className="contact-row"><span>Email</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
          </div>
        </div>
      </section>
      <section className="inquiry-checklist"><div className="shell"><b>INCLUDE IF AVAILABLE</b><span>Part number</span><span>Clear photos</span><span>Dimensions</span><span>Quantity</span><span>Destination</span><span>Packaging brief</span></div></section>
    </PageShell>
  );
}
