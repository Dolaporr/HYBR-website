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

const iconPadding: Record<string, string> = {
  bag: "6.25% 9.38% 15.63%",
  palette: "9.37% 9.37% 12.5% 9.38%",
  trend: "18.75% 6.25% 25%",
  mask: "12.5% 12.5% 6.27%",
  "clock-user": "9.37% 9.36% 9.32% 9.37%",
  "calendar-dots": "6.25% 12.5% 12.5%",
  certificate: "15.63% 3.13% 9.35% 9.38%",
  "cursor-click": "3.12% 12.5% 12.5% 3.12%",
  "hand-heart": "12.5% 6.23% 15.62% 0",
  "hand-coins": "9.37% 6.23% 15.63% 0",
  "globe-hemisphere-east": "9.38% 9.38% 9.37% 9.37%",
};

/* Phosphor glyphs exported from Figma: each SVG is the bare glyph, so the
   inset places it inside its 32 / 80 px icon box exactly as in the frame. */
function FigmaIcon({ type, className = "" }: { type: string; className?: string }) {
  const src = iconAssets[type] ?? iconAssets["globe-hemisphere-east"];
  return (
    <span aria-hidden="true" className={`${styles.icon} ${className}`}>
      <span style={{ inset: iconPadding[type] }}>
        <img alt="" src={src} />
      </span>
    </span>
  );
}

function ContentDrop() {
  return (
    <aside aria-label="Careers page contents" className={`careers-content-drop ${styles.drop}`}>
      <span
        aria-hidden="true"
        className={styles.dropMedia}
        style={{ backgroundImage: `url(${figmaAssets.careersContentBar})` }}
      />
      <p className={styles.dropLabel}>CONTENT</p>
      <nav className={styles.dropNav}>
        {contentLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
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
    <Link className={`careers-button ${styles.button} ${className}`} href={href}>
      {children}
    </Link>
  );
}

function SectionHead({
  label,
  title,
  titleId,
  body,
  className = "",
}: {
  label: string;
  title: ReactNode;
  titleId: string;
  body?: ReactNode;
  className?: string;
}) {
  return (
    <header className={`${styles.head} ${className}`}>
      <p className={styles.label}>{label}</p>
      <h2 className={styles.h2} id={titleId}>{title}</h2>
      {body ? <p className={styles.body}>{body}</p> : null}
    </header>
  );
}

export default function CareersPage() {
  return (
    <main className={`${styles.page} careers-page`}>
      <Header active="who" />

      <div className={styles.top}>
        <section aria-labelledby="careers-title" className={`${styles.wrap} ${styles.hero}`}>
          <h1 id="careers-title">Careers</h1>
          <p>Explore career paths designed for curious minds ready to build what&rsquo;s next.</p>
        </section>
        <ContentDrop />
      </div>

      <section aria-labelledby="careers-working-title" className={`${styles.wrap} ${styles.working}`} id="working">
        <div
          aria-hidden="true"
          className={styles.workingImage}
          style={{ backgroundImage: `url(${figmaAssets.careersWorking})` }}
        />
        <div className={styles.workingCopy}>
          <h2 className={styles.h2} id="careers-working-title">Working at HYBR</h2>
          <p className={styles.body}>
            At HYBR, your ideas don&rsquo;t sit on a shelf &mdash; they shape how
            organizations innovate, grow, and create real impact across Africa
            and beyond. Help organizations solve real challenges.
          </p>
          <ButtonLink className={styles.workingButton} href="/contact">Learn More</ButtonLink>
        </div>
      </section>

      <section aria-labelledby="careers-why-title" className={`${styles.wrap} ${styles.why}`} id="why">
        <SectionHead label="WHY JOIN?" title="Why become a HYBRian?" titleId="careers-why-title" />
        <div className={styles.whyGrid}>
          {whyCards.map((card) => (
            <article className={`${styles.whyCard} ${styles[card.className]}`} key={card.title}>
              <div className={styles.whyCardHead}>
                <FigmaIcon className={styles.whyIcon} type={card.icon} />
                <h3>{card.title}</h3>
              </div>
              <p>{card.body}</p>
            </article>
          ))}
          <div
            aria-hidden="true"
            className={styles.culture}
            style={{ backgroundImage: `url(${figmaAssets.figmaBusinessPartners})` }}
          >
            <span className={styles.play} />
            <img alt="" src={figmaAssets.logoWhite} />
          </div>
        </div>
      </section>

      <section aria-labelledby="careers-testimonials-title" className={`${styles.wrap} ${styles.testimonials}`} id="testimonials">
        <SectionHead
          body="Our people are the pulse of HYBR. Discover the insights, stories, and lived experiences shaping our innovation journey."
          className={styles.testimonialsHead}
          label="OUR TEAM"
          title={<>Hear from Our Own<span className={styles.period}>.</span></>}
          titleId="careers-testimonials-title"
        />
        <div className={styles.carousel}>
          <div aria-label="Team testimonial" className={styles.tCard} role="group">
            <span
              aria-hidden="true"
              className={styles.tBg}
              style={{ backgroundImage: `url(${figmaAssets.figmaBuilding})` }}
            />
            <div className={styles.tInner}>
              <div className={styles.avatar}>
                <span />
                <img alt="" src={figmaAssets.figmaTeamPortrait} />
              </div>
              <div className={styles.tCopy}>
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
          </div>
          <button aria-label="Previous testimonial" className={`${styles.arrow} ${styles.arrowLeft}`} type="button">
            <svg aria-hidden="true" fill="none" viewBox="0 0 64 64">
              <path d="M40 52L20 32L40 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
          </button>
          <button aria-label="Next testimonial" className={`${styles.arrow} ${styles.arrowRight}`} type="button">
            <svg aria-hidden="true" fill="none" viewBox="0 0 64 64">
              <path d="M24 12L44 32L24 52" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
          </button>
        </div>
        <div aria-hidden="true" className={styles.dots}>
          <span />
          <span className={styles.dotActive} />
          <span />
        </div>
      </section>

      <section aria-labelledby="careers-benefits-title" className={`${styles.wrap} ${styles.benefits}`} id="benefits">
        <SectionHead
          body="Our benefits are designed to support your journey and empower you with the tools to build a career you are proud of."
          className={styles.benefitsHead}
          label="BENEFITS"
          title="Benefits of Working with Us"
          titleId="careers-benefits-title"
        />
        <div aria-label="Benefits of working with HYBR" className={styles.benefitGrid} role="list">
          {benefits.map((benefit) => (
            <article className={styles.benefit} key={benefit.title} role="listitem">
              <FigmaIcon className={styles.benefitIcon} type={benefit.icon} />
              <h3>{benefit.title}</h3>
              <p>{benefit.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="careers-fellowship-title" className={`${styles.wrap} ${styles.fellowship}`} id="fellowship">
        <div
          aria-hidden="true"
          className={styles.fellowshipImage}
          style={{ backgroundImage: `url(${figmaAssets.careersFellowship})` }}
        />
        <div className={styles.fellowshipCopy}>
          <SectionHead
            body="Our Innovation Fellowship Program connects ambitious talent with live projects, expert guidance, and a dynamic learning environment designed to shape thinkers who solve problems, create impact, and drive meaningful transformation."
            label="INNOVATION FELLOWSHIP"
            title="Accelerating the next generation of Innovation leaders."
            titleId="careers-fellowship-title"
          />
          <ButtonLink className={styles.smallButton} href="/contact">Learn More</ButtonLink>
        </div>
      </section>

      <section
        aria-labelledby="careers-internship-title"
        className={styles.internship}
        id="internship"
        style={{ backgroundImage: `url(${figmaAssets.careersAlphaAd})` }}
      >
        <p className={styles.partner}>IN PARTNERSHIP WITH 7EDU IMPACT ACADEMY</p>
        <div className={styles.internshipCopy}>
          <h2 className={styles.h2} id="careers-internship-title">Join the 2026 HYBR internship program.</h2>
          <p className={styles.body}>
            Through hands-on projects, mentorship, and collaboration, the HYBR
            Industry Shadowing Program gives bright young talents the chance to
            build new skills, gain practical experience, and contribute to real
            industry challenges with guidance from seasoned experts.
          </p>
          <ButtonLink className={`${styles.smallButton} ${styles.white}`} href="/contact">Learn More</ButtonLink>
        </div>
        <p className={styles.alpha}>ALPHA</p>
      </section>

      {/* The Open Roles section of the frames stays hidden until roles are ready (internal edit doc). */}

      <section aria-labelledby="careers-newsletter-title" className={styles.newsletterBand} id="newsletter">
        <div className={styles.newsletter}>
          <div
            aria-hidden="true"
            className={styles.newsletterImage}
            style={{ backgroundImage: `url(${figmaAssets.careersNewsletter})` }}
          />
          <div className={styles.newsletterCopy}>
            <h2 className={styles.h2} id="careers-newsletter-title">
              We&rsquo;d Love to Get <span>to Know You.</span>
            </h2>
            <p className={styles.body}>
              We&rsquo;re always looking to connect with talented folks like you. Show
              us what you&rsquo;ve got or tell us what you do.
            </p>
          </div>
          <div className={styles.newsletterForm}>
            <CareersConnectionForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
