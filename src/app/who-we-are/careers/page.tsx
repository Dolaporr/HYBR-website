import Link from "next/link";
import type { ReactNode } from "react";
import { figmaAssets } from "@/content/site";
import { Footer, Header } from "../../_components/marketing";
import { CareersConnectionForm } from "@/components/LeadCaptureForms";
import styles from "./page.module.css";

const contentLinks = [
  { label: "Working at HYBR", href: "#working" },
  { label: "Why Join", href: "#why" },
  { label: "Team Testimonials", href: "#testimonials" },
  { label: "Benefits", href: "#benefits" },
  { label: "Innovation Fellowship", href: "#fellowship" },
  { label: "Internship Program", href: "#internship" },
  { label: "Open Roles", href: "#roles" },
  { label: "Newsletter", href: "#newsletter" },
];

const whyCards = [
  {
    className: "is-purpose",
    icon: "bag",
    title: "Work with Purpose",
    body: "Every project is an opportunity to solve meaningful problems and contribute to the future of work, leadership, and innovation.",
  },
  {
    className: "is-curiosity",
    icon: "palette",
    title: "Stay Curious",
    body: "We believe in experimentation, questioning assumptions, and exploring new ways to solve problems.",
  },
  {
    className: "is-growth",
    icon: "trend",
    title: "Grow Faster",
    body: "Evolve as a creator and professional. You'll work on challenges that accelerate your growth, from ambitious projects to cross-collaboration.",
  },
  {
    className: "is-boring",
    icon: "mask",
    title: "We're Definitely not Boring.",
    body: "We work hard, laugh often, and support one another. You'll join a team that values empathy, openness, and genuine human connection - a team where your voice matters and your contributions are valued.",
  },
];

const iconAssets: Record<string, string> = {
  bag: "/careers/icons/bag.svg",
  palette: "/careers/icons/palette.svg",
  trend: "/careers/icons/trend-up.svg",
  mask: "/careers/icons/mask-happy.svg",
  "clock-user": "/careers/icons/clock-user.svg",
  "calendar-dots": "/careers/icons/calendar-dots.svg",
  certificate: "/careers/icons/certificate.svg",
  "cursor-click": "/careers/icons/cursor-click.svg",
  "hand-heart": "/careers/icons/hand-heart.svg",
  "hand-coins": "/careers/icons/hand-coins.svg",
  "globe-hemisphere-east": "/careers/icons/globe-hemisphere-east.svg",
};

const benefits = [
  { icon: "clock-user", title: "Flexible Ways of Working", body: "Work with the flexibility, trust and autonomy to perform at your best." },
  { icon: "calendar-dots", title: "Vacation", body: "Enjoy paid time off and protected breaks to rest, reset and return energised." },
  { icon: "certificate", title: "Continuous Learning", body: "Access training, certifications and real projects that accelerate your professional growth." },
  { icon: "cursor-click", title: "Modern Tools and Technology", body: "Use leading digital and AI tools to work smarter, move faster and create meaningful impact." },
  { icon: "hand-heart", title: "Wellbeing and Support", body: "Thrive in a people-first environment that supports your wellbeing and personal development." },
  { icon: "hand-coins", title: "Competitive Rewards", body: "Receive fair compensation, performance recognition and opportunities to share in our growth." },
  { icon: "globe-hemisphere-east", title: "Global Exposure", body: "Collaborate across markets, industries and cultures while solving important global challenges." },
];

const roles = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  title: "Name of Position/Role",
  meta: "Tier | Department | Location",
}));

function FigmaIcon({ type, className = "" }: { type: string; className?: string }) {
  const src = iconAssets[type] ?? iconAssets["globe-hemisphere-east"];
  return (
    <span aria-hidden="true" className={`careers-vector-icon careers-vector-icon--${type} ${className}`}>
      <img alt="" src={src} />
    </span>
  );
}

function ContentDrop() {
  return (
    <aside aria-label="Careers page contents" className="careers-content-drop">
      <span
        aria-hidden="true"
        className="careers-content-drop-media"
        style={{ backgroundImage: `url(${figmaAssets.careersContentBar})` }}
      />
      <p>CONTENT</p>
      <nav>
        {contentLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

function ImagePill({
  className = "",
  overlay = false,
  src = figmaAssets.figmaBusinessPartners,
}: {
  className?: string;
  overlay?: boolean;
  src?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`careers-image-pill ${overlay ? "has-overlay" : ""} ${className}`}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}

function WhyCard({ card }: { card: (typeof whyCards)[number] }) {
  return (
    <article className={`careers-why-card ${card.className}`}>
      <div>
        <FigmaIcon className="careers-card-icon" type={card.icon} />
        <h3>{card.title}</h3>
      </div>
      <p>{card.body}</p>
    </article>
  );
}

function CultureVisual() {
  return (
    <div
      aria-hidden="true"
      className="careers-culture-visual"
      style={{ backgroundImage: `url(${figmaAssets.figmaBusinessPartners})` }}
    >
      <span className="careers-play-mark" />
      <img alt="" src={figmaAssets.logoWhite} />
    </div>
  );
}

function TestimonialCard() {
  return (
    <section aria-label="Team testimonial carousel" className="careers-testimonial-card">
      <span
        aria-hidden="true"
        className="careers-testimonial-bg"
        style={{ backgroundImage: `url(${figmaAssets.figmaBuilding})` }}
      />
      <div className="careers-testimonial-inner">
        <div className="careers-testimonial-avatar">
          <span />
          <img alt="" src={figmaAssets.figmaTeamPortrait} />
        </div>
        <div className="careers-testimonial-copy">
          <p>
            &ldquo;I really appreciate HYBR&rsquo;s work culture. It&rsquo;s so different from
            everywhere else I&rsquo;ve worked. It&rsquo;s open, supportive, non-toxic and
            friendly, and you feel that people genuinely care about you.&rdquo;
          </p>
          <div>
            <strong>Ntukwasi A.</strong>
            <span>Experience Designer</span>
          </div>
        </div>
      </div>
      <button aria-label="Previous testimonial" className="careers-carousel-arrow is-left" type="button">
        <svg aria-hidden="true" fill="none" viewBox="0 0 64 64">
          <path d="M39 18L25 32L39 46" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </svg>
      </button>
      <button aria-label="Next testimonial" className="careers-carousel-arrow is-right" type="button">
        <svg aria-hidden="true" fill="none" viewBox="0 0 64 64">
          <path d="M25 18L39 32L25 46" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </svg>
      </button>
      <div aria-hidden="true" className="careers-carousel-dots">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <div aria-label="Benefits of working with HYBR" className="careers-benefits-grid">
      {benefits.map((benefit) => (
        <article className="careers-benefit" key={benefit.title}>
          <FigmaIcon className="careers-benefit-icon" type={benefit.icon} />
          <h3>{benefit.title}</h3>
          <p>{benefit.body}</p>
        </article>
      ))}
    </div>
  );
}

function ButtonLink({
  children,
  className = "",
  href,
}: {
  children: ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link className={`careers-button ${className}`} href={href}>
      {children}
    </Link>
  );
}

function InternshipProgram() {
  return (
    <section
      aria-labelledby="careers-internship-title"
      className="careers-internship"
      id="internship"
      style={{ backgroundImage: `url(${figmaAssets.careersAlphaAd})` }}
    >
      <p className="careers-internship-partner">IN PARTNERSHIP WITH 7EDU IMPACT ACADEMY</p>
      <div>
        <h2 id="careers-internship-title">Join the 2026 HYBR internship program.</h2>
        <p>
          Through hands-on projects, mentorship, and collaboration, the HYBR
          Industry Shadowing Program gives bright young talents the chance to
          build new skills, gain practical experience, and contribute to real
          industry challenges with guidance from seasoned experts.
        </p>
        <ButtonLink className="is-white" href="/contact">Learn More</ButtonLink>
      </div>
    </section>
  );
}

function Roles() {
  return (
    <div className="careers-roles-list">
      {roles.map((role) => (
        <article className="careers-role" key={role.id}>
          <div>
            <h3>{role.title}</h3>
            <p>{role.meta}</p>
          </div>
          <ButtonLink href="/contact">Apply Now</ButtonLink>
        </article>
      ))}
    </div>
  );
}

function NewsletterCard() {
  return (
    <section
      aria-labelledby="careers-newsletter-title"
      className="careers-newsletter"
      id="newsletter"
      style={{ backgroundImage: `url(${figmaAssets.careersNewsletter})` }}
    >
      <div className="careers-newsletter-copy">
        <h2 id="careers-newsletter-title">
          We&rsquo;d Love to Get <span>to Know You.</span>
        </h2>
        <p>
          We&rsquo;re always looking to connect with talented folks like you. Show
          us what you&rsquo;ve got or tell us what you do.
        </p>
      </div>
      <CareersConnectionForm />
    </section>
  );
}

export default function CareersPage() {
  return (
    <main className={`${styles.careersScope} careers-page`}>
      <div className="careers-frame">
        <Header active="who" />

        <section aria-labelledby="careers-title" className="careers-hero">
          <h1 id="careers-title">Careers</h1>
          <p>Explore career paths designed for curious minds ready to build what&rsquo;s next.</p>
        </section>

        <ContentDrop />

        <ImagePill className="careers-working-image" src={figmaAssets.careersWorking} />
        <section aria-labelledby="careers-working-title" className="careers-working" id="working">
          <h2 id="careers-working-title">Working at HYBR</h2>
          <p>
            At HYBR, your ideas don&rsquo;t sit on a shelf &mdash; they shape how
            organizations innovate, grow, and create real impact across Africa
            and beyond. Help organizations solve real challenges.
          </p>
          <ButtonLink className="careers-working-button" href="/contact">Learn More</ButtonLink>
        </section>

        <section aria-labelledby="careers-why-title" className="careers-why" id="why">
          <p>WHY JOIN?</p>
          <h2 id="careers-why-title">Why become a HYBRian?</h2>
        </section>

        <div className="careers-why-cards">
          {whyCards.map((card) => (
            <WhyCard card={card} key={card.title} />
          ))}
          <CultureVisual />
        </div>

        <section aria-labelledby="careers-testimonials-title" className="careers-testimonials" id="testimonials">
          <p>OUR TEAM</p>
          <h2 id="careers-testimonials-title">Hear from Our Own<span>.</span></h2>
          <p>
            Our people are the pulse of HYBR. Discover the insights, stories,
            and lived experiences shaping our innovation journey.
          </p>
        </section>
        <TestimonialCard />

        <section aria-labelledby="careers-benefits-title" className="careers-benefits" id="benefits">
          <p>BENEFITS</p>
          <h2 id="careers-benefits-title">Benefits of Working with Us</h2>
          <p>
            Our benefits are designed to support your journey and empower you
            with the tools to build a career you are proud of.
          </p>
        </section>
        <Benefits />

        <ImagePill className="careers-fellowship-image" src={figmaAssets.careersFellowship} />
        <section aria-labelledby="careers-fellowship-title" className="careers-fellowship" id="fellowship">
          <p>INNOVATION FELLOWSHIP</p>
          <h2 id="careers-fellowship-title">Accelerating the next generation of Innovation leaders.</h2>
          <p>
            Our Innovation Fellowship Program connects ambitious talent with
            live projects, expert guidance, and a dynamic learning environment
            designed to shape thinkers who solve problems, create impact, and
            drive meaningful transformation.
          </p>
          <ButtonLink href="/contact">Learn More</ButtonLink>
        </section>

        <InternshipProgram />

        <section aria-labelledby="careers-roles-title" className="careers-open" id="roles">
          <h2 id="careers-roles-title">Open Roles</h2>
          <p>A short, captivating statement about what this section is for.</p>
        </section>
        <Roles />

        <NewsletterCard />
      </div>

      <Footer />
    </main>
  );
}
