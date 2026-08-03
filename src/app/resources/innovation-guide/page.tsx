import Link from "next/link";
import { Footer, Header } from "../../_components/marketing";
import { figmaAssets } from "@/content/site";

export default function InnovationGuidePage() {
  return (
    <main className="provisional-page resource-page">
      <Header />

      <section className="resource-hero">
        <div className="provisional-shell resource-hero-grid">
          <div>
            <p className="provisional-kicker">Resource</p>
            <h1 className="provisional-title resource-title">Innovation Guide</h1>
            <p className="provisional-subtitle resource-subtitle">
              Download HYBR&apos;s practical guide for replacing guesswork with clarity,
              discipline, and momentum.
            </p>
          </div>
          <div className="provisional-media resource-hero-media">
            <img alt="" src={figmaAssets.figmaBusinessPartners} />
          </div>
        </div>
      </section>

      <section className="resource-download-section">
        <div className="provisional-shell">
          <div className="resource-download-panel">
            <div className="resource-download-copy">
              <h2>Get the guide in your inbox.</h2>
              <p>This becomes a WordPress-managed gated resource flow later.</p>
            </div>
            <form className="provisional-form">
              <input className="field" placeholder="Insert Your Name" />
              <input className="field" placeholder="Insert Your Email" type="email" />
              <button type="button">Download</button>
            </form>
          </div>
        </div>
      </section>

      <section className="resource-cta">
        <div className="provisional-shell">
          <p className="provisional-kicker">Ready to go further?</p>
          <h2>
          Let HYBR help you turn the guide into action.
          </h2>
          <Link href="/contact">
            Book a Strategy Call
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
