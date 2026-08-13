import { Footer, Header } from "../_components/marketing";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { ContactForm } from "@/components/ContactForm";
import { figmaAssets } from "@/content/site";

const contactDetails = [
  ["Address", "6th Floor, Landmark Towers, 5 Water Corporation Drive, Victoria Island, Lagos, Nigeria"],
  ["Phone", "+234 201 236 6363"],
  ["Email", "sales@hybrgroup.net"],
] as const;

export default function ContactPage() {
  return (
    <main className="provisional-page contact-page">
      {/* Kept in the server-rendered page so Netlify detects every field at deploy time. */}
      <form data-netlify="true" hidden name="hybr-contact-enquiry">
        <input name="form-name" type="hidden" value="hybr-contact-enquiry" />
        <input name="lead_type" type="text" />
        <input name="name" type="text" />
        <input name="email" type="email" />
        <textarea name="message" />
        <input name="strategy_meeting_requested" type="checkbox" value="Yes" />
        <input name="bot-field" type="text" />
      </form>
      <form data-netlify="true" hidden name="hybr-strategy-meeting">
        <input name="form-name" type="hidden" value="hybr-strategy-meeting" />
        <input name="lead_type" type="text" />
        <input name="name" type="text" />
        <input name="email" type="email" />
        <textarea name="message" />
        <input name="strategy_meeting_requested" type="checkbox" value="Yes" />
        <input name="bot-field" type="text" />
      </form>
      <Header />
      <section className="provisional-hero provisional-hero--compact">
        <div className="provisional-shell">
          <h1 className="provisional-title">Let&apos;s Talk</h1>
          <p className="provisional-subtitle">
            Ready to build what&apos;s next? Tell us where you are, what you are trying to
            solve, and what you want to move faster.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="provisional-shell">
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="provisional-kicker">Build Innovation that Works, with Us</p>
              <h2>Book a strategy call or send us a note.</h2>
              <p>
                Have a challenge, idea or growth opportunity? Let&apos;s unpack it together.
              </p>
              <div className="provisional-media contact-media">
                <img alt="" src={figmaAssets.figmaBusinessPartners} />
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="contact-details-section">
        <div className="provisional-shell contact-detail-grid">
          {contactDetails.map(([label, detail]) => (
            <article className="contact-detail-card" key={label}>
              <p>{label}</p>
              <span>{detail}</span>
            </article>
          ))}
        </div>
      </section>
      <section className="contact-testimonials-section" aria-labelledby="contact-testimonials-title">
        <div className="provisional-shell">
          <div className="contact-testimonials-copy">
            <p>TESTIMONIALS</p>
            <h2 id="contact-testimonials-title">What our clients say about working with us.</h2>
            <span>The relationships behind the work, in their own words.</span>
          </div>
          <TestimonialsCarousel className="contact-testimonials-carousel" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
