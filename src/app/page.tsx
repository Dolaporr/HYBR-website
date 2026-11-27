import type { ReactNode } from "react";
import { figmaAssets } from "@/content/site";
import { Footer, Header } from "@/app/_components/marketing";
import { HeroWordRotator } from "@/components/HeroWordRotator";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { MaterialIcon } from "@/components/MaterialIcon";
import { HomeLeadForm } from "@/components/LeadCaptureForms";
import { innovationSweetSpotArticle, spctaNewsFeature } from "@/content/insights";

const assets = {
  hero: figmaAssets.heroHome,
  logo: figmaAssets.logoBlue,
  video: figmaAssets.video,
  webinar: figmaAssets.webinar,
  play: figmaAssets.play,
  riskImage: "/home/edit-flags/home-you-risk.jpg",
  gainImage: "/home/edit-flags/home-you-gain.jpg",
  whoImage: figmaAssets.people,
  testimonial: figmaAssets.testimonial,
  testimonialRing: figmaAssets.testimonialRing,
  news: "/home/news-tall.png",
  contact: figmaAssets.contact,
  cocaColaLogo: "/logos/coca-cola-logo.svg",
  caseStudy: "/home/case-study.png",
  caseStudyLogo: "/home/logo-case-study.svg",
  mockVideo: "/home/website-mock-1.mp4",
  // 16:9 still of the Figma video preview (was an 8 MB SVG that left black bars around the player).
  videoPoster: "/home/video-poster.jpg",
  plasticWaste: "/home/edit-flags/plastic-waste.jpg",
  ourWorkFeature: "/home/our-work-feature-source.png",
  ourWorkTall: "/home/our-work-tall-source.png",
};

const trustedPartners: ReadonlyArray<{
  label: string;
  src: string;
  width: number;
  height: number;
}> = [
  { label: "Coca-Cola", src: "/logos/coca-cola-marquee.svg", width: 80, height: 25 },
  { label: "Google", src: "/logos/google-marquee.svg", width: 80, height: 27 },
  { label: "ABSA", src: "/logos/absa-marquee.png", width: 81, height: 19 },
  { label: "Thomson Reuters", src: "/logos/thomson-reuters-marquee.svg", width: 101, height: 14 },
  { label: "Samsung", src: "/logos/samsung-marquee.svg", width: 81, height: 13 },
  { label: "AFEX", src: "/logos/afex-marquee.png", width: 71, height: 20 },
  { label: "Meta", src: "/logos/meta-marquee.svg", width: 98, height: 17 },
  { label: "Alitheia", src: "/logos/alitheia-marquee.png", width: 87, height: 28 },
  { label: "AfriLabs", src: "/logos/afrilabs-marquee.png", width: 82, height: 19 },
  { label: "GIZ", src: "/logos/giz-marquee.svg", width: 79, height: 22 },
  { label: "Merck", src: "/logos/merck-marquee.svg", width: 80, height: 14 },
  { label: "Columbia University", src: "/logos/columbia-university.svg", width: 125, height: 19 },
];
const homeWebinar = {
  duration: "01:40:35",
  url: "/insights/webinars/specific-webinar",
};

const rotatingWords = ["ideas", "products", "services", "markets", "teams"];

const risks = [
  "Wasting time and budget on ideas customers don’t want",
  "Slow, fragmented decision-making",
  "Products that fail to scale",
  "Losing momentum — and market relevance",
];

const services = [
  {
    title: "Discover",
    items: [
      "Customer & Market Intelligence",
      "Growth Opportunity Discovery",
      "Innovation Readiness & Strategy",
    ],
    icon: "shopping_bag",
    tag: "Find The Right Opportunity",
    href: "/what-we-do/services",
    image: "/home/edit-flags/home-service-discover.jpg",
    bgPosition: "center 32%",
  },
  {
    title: "Develop",
    items: [
      "Solution & Venture Design",
      "AI & Digital Solution Development",
      "Pilot & Validation",
    ],
    icon: "palette",
    tag: "Build The Right Solution",
    href: "/what-we-do/services",
    image: "/home/edit-flags/home-service-develop.jpg",
    bgPosition: "center",
  },
  {
    title: "Deploy",
    items: [
      "Growth & Commercialisation",
      "Enterprise Transformation",
      "Scale & Investment",
    ],
    icon: "trending_up",
    tag: "Scale Measurable Growth",
    href: "/what-we-do/services",
    image: "/home/edit-flags/home-service-deploy.jpg",
    bgPosition: "center",
  },
] as const;

const impact = [
  { value: "300K+", label: "Jobs Created" },
  { value: "35+", label: "Countries Reached" },
  { value: "4000+", label: "Ventures Impacted" },
];

const gainList = [
  "Clarity on what to build and why",
  "Alignment across teams and leadership",
  "Faster decisions and smarter experiments",
  "A scalable roadmap for growth",
  "Confidence in every innovation step",
];

function Button({
  children,
  href = "/contact",
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "dark" | "white" | "glass";
  className?: string;
}) {
  return (
    <a className={`hybr-button hybr-button--${variant} ${className}`} href={href}>
      {children}
    </a>
  );
}

function SectionLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`home-section-label text-sm font-semibold uppercase tracking-normal text-current md:text-[20px] ${className}`}>
      {children}
    </p>
  );
}

function ImagePanel({
  className = "",
  src = assets.whoImage,
  tint,
}: {
  className?: string;
  src?: string;
  tint?: string;
}) {
  return (
    <div
      className={`overflow-hidden bg-black ${className}`}
      style={{
        backgroundColor: tint,
        backgroundImage: `url(${src})`,
        backgroundBlendMode: tint ? "multiply" : undefined,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    />
  );
}

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <img
      alt=""
      aria-hidden="true"
      className={className}
      src={assets.caseStudyLogo}
    />
  );
}

function RiskCloseIcon() {
  return (
    <svg fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V26C4 26.5304 4.21071 27.0391 4.58579 27.4142C4.96086 27.7893 5.46957 28 6 28H26C26.5304 28 27.0391 27.7893 27.4142 27.4142C27.7893 27.0391 28 26.5304 28 26V6C28 5.46957 27.7893 4.96086 27.4142 4.58579C27.0391 4.21071 26.5304 4 26 4ZM22.7075 21.2925C22.8004 21.3854 22.8741 21.4957 22.9244 21.6171C22.9747 21.7385 23.0006 21.8686 23.0006 22C23.0006 22.1314 22.9747 22.2615 22.9244 22.3829C22.8741 22.5043 22.8004 22.6146 22.7075 22.7075C22.6146 22.8004 22.5043 22.8741 22.3829 22.9244C22.2615 22.9747 22.1314 23.0006 22 23.0006C21.8686 23.0006 21.7385 22.9747 21.6171 22.9244C21.4957 22.8741 21.3854 22.8004 21.2925 22.7075L16 17.4137L10.7075 22.7075C10.5199 22.8951 10.2654 23.0006 10 23.0006C9.73464 23.0006 9.48014 22.8951 9.2925 22.7075C9.10486 22.5199 8.99944 22.2654 8.99944 22C8.99944 21.7346 9.10486 21.4801 9.2925 21.2925L14.5863 16L9.2925 10.7075C9.10486 10.5199 8.99944 10.2654 8.99944 10C8.99944 9.73464 9.10486 9.48014 9.2925 9.2925C9.48014 9.10486 9.73464 8.99944 10 8.99944C10.2654 8.99944 10.5199 9.10486 10.7075 9.2925L16 14.5863L21.2925 9.2925C21.4801 9.10486 21.7346 8.99944 22 8.99944C22.2654 8.99944 22.5199 9.10486 22.7075 9.2925C22.8951 9.48014 23.0006 9.73464 23.0006 10C23.0006 10.2654 22.8951 10.5199 22.7075 10.7075L17.4137 16L22.7075 21.2925Z"
        fill="#8DC540"
      />
    </svg>
  );
}

function InfoBadge() {
  return (
    <span className="home-info-badge" aria-hidden="true">
      <MaterialIcon name="info" />
    </span>
  );
}

export default function Home() {
  return (
    <main className="homepage-live min-h-screen overflow-hidden bg-white text-black">
      <Header tone="dark" />

      <section
        className="homepage-hero home-hero-entrance relative min-h-[720px] px-6 pt-48 text-white md:min-h-[804px] md:pt-[205px]"
        style={{
          backgroundColor: "rgba(0,0,0,.6)",
          backgroundImage: `url(${assets.hero})`,
          backgroundBlendMode: "multiply",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[1196px]">
            <h1 className="home-hero-title font-display text-[48px] font-medium leading-[1.08] min-[390px]:text-[54px] sm:text-[72px] md:text-[80px]">
              Build{" "}
              <HeroWordRotator words={rotatingWords} />
              <br />
              faster, smarter
            </h1>
            <p className="homepage-hero-subtitle mt-4 max-w-[967px] text-lg font-medium leading-normal md:text-2xl">
              <span className="homepage-hero-subtitle__full">
                Whether you&apos;re launching something new, reimagining what exists, or
                scaling what works - we help you find clarity, test ideas, and build
                with purpose.
              </span>
              <span className="homepage-hero-subtitle__tablet">
                A Tribe of Dynamic Doers - Building What&apos;s Next.
              </span>
            </p>
          </div>
          <div className="trusted-by-block mt-24 md:mt-0">
            <p className="trusted-by-label text-xs font-semibold uppercase tracking-normal">
              Trusted By
            </p>
            <div className="trusted-marquee mt-9">
              <div className="trusted-marquee-track">
                {[0, 1, 2, 3].map((copyIndex) => (
                  <div
                    aria-hidden={copyIndex === 0 ? undefined : true}
                    className="trusted-partner-set"
                    key={copyIndex}
                  >
                    {trustedPartners.map((partner) => (
                      <span
                        className="trusted-partner"
                        key={`${partner.label}-${copyIndex}`}
                        title={partner.label}
                      >
                        <img
                          alt={partner.label}
                          className={`trusted-logo-${partner.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          height={partner.height}
                          loading="eager"
                          src={partner.src}
                          style={{
                            height: `${partner.height}px`,
                            width: `${partner.width}px`,
                            maxWidth: "none",
                            objectFit: "contain",
                          }}
                          width={partner.width}
                        />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="home-transition-wrap">
        <section className="home-video-section home-reveal relative px-6 py-16 md:py-24" data-reveal="scale">
          <video
            className="home-video-card"
            controls
            playsInline
            poster={assets.videoPoster}
            preload="metadata"
          >
            <source src={assets.mockVideo} type="video/mp4" />
          </video>
        </section>

        <img alt="" aria-hidden="true" className="home-green-inline" src="/green inline horizontal tab.svg" />

        <section className="home-risk-section home-reveal relative bg-black px-6 py-20 text-white md:py-28" data-reveal="up">
          <img
            alt=""
            aria-hidden="true"
            className="home-risk-pattern absolute inset-0"
            src="/background section 3.svg"
          />
          <div className="home-risk-grid mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-[1fr_667px] lg:items-center">
            <div className="lg:col-span-2 lg:mx-auto lg:max-w-[996px] lg:text-center">
              <h2 className="font-display text-4xl font-medium md:text-5xl">
                Innovation Is Slowed By Guesswork
              </h2>
              <p className="mt-4 text-xl leading-relaxed md:text-2xl">
                As a leader, you face one common enemy:{" "}
                <a className="home-risk-link" href="/resources/innovation-guide">
                  innovation by guesswork
                </a>
                .
                Fragmented insights, slow decisions, siloed teams, and no clear
                direction. Yet you&apos;re still expected to deliver the next big win,
                without a roadmap.
              </p>
            </div>
            <div>
              <h3 className="font-display text-4xl font-medium md:text-5xl">You Risk...</h3>
              <ul className="mt-8 space-y-5 text-xl md:text-2xl">
                {risks.map((risk) => (
                  <li key={risk} className="flex gap-4">
                    <span aria-hidden="true" className="risk-marker"><RiskCloseIcon /></span>
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ImagePanel
              className="home-droplet-right home-static-image h-[260px] sm:h-[336px]"
              src={assets.riskImage}
            />
          </div>
        </section>
      </div>

      <div className="home-connector-zone relative">
        <img
          alt=""
          aria-hidden="true"
          className="home-inline-connector"
          src="/home/inline-connector.svg"
        />

        <section id="who-we-are" className="home-band home-who-band home-reveal relative px-6 py-24" data-reveal="left">
          <div className="home-panel mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-black p-8 text-white md:p-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <SectionLabel className="home-who-label">Who We Are</SectionLabel>
                <h2 className="home-who-heading mt-3 font-display text-4xl font-medium md:text-5xl">
                  A Purpose-Led <br />
                  Innovation Agency
                </h2>
                <p className="mt-4 max-w-[420px] text-lg leading-relaxed md:text-xl">
                  At HYBR, we don&apos;t just advise - we help you navigate, build, and
                  scale. With proven frameworks and deep ecosystem access, we guide
                  teams to clarity and accelerate the work that unlocks your next big win.
                </p>
              </div>
              <div className="lg:pt-2">
                <h3 className="font-display text-2xl font-medium md:text-[30px]">
                  With HYBR, you get:
                </h3>
                <ul className="home-benefit-list mt-5 space-y-3 text-[15px] leading-[1.4] md:text-[20px]">
                  <li>
                    <span aria-hidden="true" className="text-[#8dc540]">&#10003;</span>
                    <span>A trusted guide who understands your innovation challenges</span>
                  </li>
                  <li>
                    <span aria-hidden="true" className="text-[#8dc540]">&#10003;</span>
                    <span>A partner who brings clarity, discipline, and purpose</span>
                  </li>
                  <li>
                    <span aria-hidden="true" className="text-[#8dc540]">&#10003;</span>
                    <span>A proven system to cut through the noise and deliver results faster</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative mt-8">
              <ImagePanel
                className="h-[220px] rounded-[18px] md:h-[245px]"
                src={assets.whoImage}
              />
              <div className="home-who-actions absolute bottom-4 right-4">
                <Button className="home-who-button home-who-button--desktop" href="/who-we-are/our-team" variant="glass">
                  Meet The Team
                </Button>
                <Button className="home-who-button home-who-button--mobile" href="/who-we-are/about-us" variant="glass">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="what-we-do" className="home-band home-what-band home-reveal relative px-6 py-32" data-reveal="right">
          <div className="home-services-wrap mx-auto">
            <div className="home-services-head">
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="home-section-title mt-2 max-w-[640px] font-display font-medium leading-tight">
                We Help You Build Innovation That Works - and Works Fast
              </h2>
            </div>
            <div className="home-services-grid mt-8 grid gap-5 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  aria-label={`${service.title} service details`}
                  className="home-service-card home-tilt-card rounded-3xl text-white"
                  data-home-service-card=""
                  role="button"
                  style={{
                    backgroundColor: "rgba(0,0,0,.48)",
                    backgroundImage: `url(${service.image})`,
                    backgroundBlendMode: "multiply",
                    backgroundPosition: service.bgPosition,
                    backgroundSize: "cover",
                  }}
                  tabIndex={0}
                >
                  <div className="home-service-face home-service-front">
                    <InfoBadge />
                    <span className="home-service-glyph">
                      <MaterialIcon name={service.icon} />
                    </span>
                    <div className="home-service-body">
                      <h3 className="font-display text-[32px] font-medium leading-none">
                        {service.title}
                      </h3>
                      <span className="home-service-pill">
                        {service.tag}
                      </span>
                    </div>
                  </div>
                  {/* Back as Figma "Property 1=Back": icon + title on one row, the items, and a back
                      icon top right. No Learn More (Ntukwasi, 18 Nov): "Explore Our Services" below the
                      cards is the one link. */}
                  <div className="home-service-face home-service-back" aria-hidden="true">
                    <span className="home-service-back-icon" aria-hidden="true">
                      <MaterialIcon name="arrow_circle_left" />
                    </span>
                    <div className="home-service-back-head">
                      <span className="home-service-back-glyph" aria-hidden="true">
                        <MaterialIcon name={service.icon} />
                      </span>
                      <h3 className="font-display font-medium">{service.title}</h3>
                    </div>
                    <ul className="home-service-back-items">
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <div className="home-services-cta mt-8 text-center">
              <Button href="/what-we-do/services" variant="outline">
                <span className="home-services-cta-full">Explore Our Services</span>
                <span className="home-services-cta-mobile">Explore Services</span>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <section className="home-band home-impact-section home-reveal px-6 py-24 text-center" data-reveal="up">
        <div className="home-impact-wrap mx-auto">
          <SectionLabel>Our Impact</SectionLabel>
          <h2 className="home-impact-headline mx-auto mt-2 font-display font-medium leading-tight">
            No jargon, no wasted experiments, no building in the dark - just
            clarity, alignment, and momentum.
          </h2>
          <div className="home-impact-grid mt-12 grid gap-6 md:grid-cols-3">
            {impact.map((item) => (
              <div key={item.label} className="home-impact-stat home-reveal" data-reveal="scale">
                <p className="home-impact-value font-extrabold">{item.value}</p>
                <p className="home-impact-label mt-2 text-sm font-semibold uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/what-we-do/our-impact" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="home-band home-work-section home-reveal px-6 py-28" data-reveal="left">
        <div className="home-work-wrap mx-auto grid">
          <div className="home-work-copy">
            <SectionLabel>Our Work</SectionLabel>
            <h2 className="home-work-title mt-2 font-display font-medium leading-tight">
              Trusted by Innovators Across Industries
            </h2>
            <p className="home-work-body mt-4 text-base leading-relaxed md:text-lg">
              We&apos;ve helped governments, corporations, startups, and ecosystem
              builders move from insight to impact - faster and more confidently.
            </p>
          </div>
          <div className="home-work-cta">
            <Button href="/what-we-do/our-work" variant="outline">
              More Case Studies
            </Button>
          </div>
          <article
            className="home-case-feature overflow-hidden rounded-[14px] text-white"
          >
            <img alt="" aria-hidden="true" className="home-case-bg home-case-bg--feature" src={assets.plasticWaste} />
            <BrandMark className="home-case-logo home-case-logo--feature" />
            <div className="home-case-content">
              <p className="home-case-kicker">CASE STUDY</p>
              <h3 className="text-[21px] font-medium leading-[1.1]">
                Eliminating Plastic Waste In Nigeria
              </h3>
              <p className="mt-3 max-w-[305px] text-[11px] font-semibold leading-[1.45] text-white/82">
                We delivered a holistic innovation programme to tackle a critical
                and urgent environmental problem which helps Coca Cola to
                radically eliminate plastic waste.
              </p>
              <div className="home-case-footer mt-5 flex items-end justify-between gap-4">
                <p className="home-case-company">Coca-Cola</p>
                <a className="home-inline-cta home-case-feature-cta" href="/case-studies/one-liner">
                  Read More
                  <MaterialIcon className="home-case-cta-arrow" name="arrow_forward" />
                </a>
              </div>
            </div>
          </article>
          <article
            className="home-case-tall overflow-hidden rounded-[14px] text-white"
          >
            <img alt="" aria-hidden="true" className="home-case-bg home-case-bg--tall" src={assets.ourWorkTall} />
            <div className="home-case-tall-top">
              <BrandMark className="home-case-logo home-case-logo--tall" />
              <a className="home-inline-cta home-inline-cta--light home-case-tall-cta" href="/case-studies/one-liner?case=alitheia">
                Read More
                <MaterialIcon className="home-case-cta-arrow" name="arrow_forward" />
              </a>
            </div>
            <div className="home-case-tall-content">
              <p className="home-case-kicker">CASE STUDY</p>
              <h3 className="text-[20px] font-medium leading-[1.12]">
                Beyond the Numbers
              </h3>
              <p className="mt-3 max-w-[315px] text-[11px] font-semibold leading-[1.4] text-white/82">
                How HYBR helped Alitheia Capital assess the operational and
                technical readiness of a prospective investment before it scaled.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="home-band home-testimonials-section home-reveal px-6 py-24" data-reveal="up">
        <div className="home-testimonials-wrap mx-auto text-center">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="home-testimonials-title mt-2 font-display font-medium">
            Hear from Our Clients.
          </h2>
          <p className="home-testimonials-copy mx-auto mt-4">
            Our clients trust HYBR to bring clarity to complex opportunities,
            build customer evidence, and turn innovation into practical growth.
            Hear what they have to say about working with us.
          </p>
          <TestimonialsCarousel />
          <div className="mt-5">
            <Button href="/contact" variant="outline">
              Book A Strategy Call
            </Button>
          </div>
        </div>
      </section>

      <section id="insights" className="home-band home-insights-section home-reveal px-6 py-24" data-reveal="right">
        <div className="home-insights-wrap mx-auto grid gap-4 lg:grid-cols-[289px_406px] lg:justify-center">
          <article
            className="home-news-card relative overflow-hidden rounded-[14px] bg-black p-5 text-white"
          >
            <img alt="" aria-hidden="true" className="home-news-bg" src={assets.news} />
            <span aria-hidden="true" className="home-news-card-overlay" />
            <div className="home-card-action flex justify-end">
              <Button href="/insights/news/specific-news" variant="white">
                Read More
              </Button>
            </div>
            <div className="home-news-card-copy absolute bottom-5 left-5 right-5">
              <SectionLabel>News</SectionLabel>
              <h3 className="home-news-card-title mt-3 text-[22px] font-medium leading-[1.05]">
                {spctaNewsFeature.title}
              </h3>
              <p className="home-news-card-summary mt-3 max-w-[215px] text-[11px] leading-[1.4]">
                {spctaNewsFeature.summary}
              </p>
            </div>
          </article>
          <div className="home-insights-stack">
            <a
              aria-label="View The Systems Mindset Masterclass"
              className="home-webinar-card relative block overflow-hidden rounded-[14px] bg-black p-5 text-white"
              href={homeWebinar.url}
            >
              <img alt="" aria-hidden="true" className="home-webinar-bg" src={assets.webinar} />
              <img alt="" className="home-webinar-play absolute right-5 top-5 size-8 rotate-90" src={assets.play} />
              <p className="home-webinar-duration absolute bottom-5 right-5 text-[11px] font-semibold">
                {homeWebinar.duration}
              </p>
              <div className="home-webinar-copy">
                <SectionLabel className="home-webinar-label">Masterclass</SectionLabel>
                <h3 className="home-webinar-title mt-18 max-w-[300px] text-[22px] font-medium leading-[1.06]">
                  The Systems Mindset: A Smarter Way To Solve Complex Problems
                </h3>
                <p className="home-webinar-speakers mt-3 text-[11px] font-semibold">
                  Adeyinka Aderombi - CIO, Rex Insurance
                </p>
                <p className="home-webinar-date text-[11px] font-semibold">
                  Soromfe Uzomah, Principal Program Manager, Microsoft
                </p>
              </div>
            </a>
            <article
              className="home-article-card relative overflow-hidden rounded-[14px] bg-black p-5 text-white"
              style={{
                backgroundColor: "rgba(0,0,0,.48)",
                backgroundImage: `url(${assets.ourWorkFeature})`,
                backgroundBlendMode: "multiply",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="home-card-action flex justify-end">
                <Button href="/insights/articles/specific-article" variant="white">
                  Read More
                </Button>
              </div>
              <div className="home-article-card-copy absolute bottom-5 left-5 right-5">
                <SectionLabel>Article</SectionLabel>
                <h3 className="mt-3 text-[22px] font-medium leading-[1.05]">
                  {innovationSweetSpotArticle.cardTitle}
                </h3>
                <p className="home-article-card-summary mt-3 max-w-[215px] text-[11px] leading-[1.4]">
                  {innovationSweetSpotArticle.summary}
                </p>
              </div>
            </article>
            <div className="home-insights-copy">
              <SectionLabel>Insights</SectionLabel>
              <h2 className="mt-2 font-display font-medium leading-tight">
                Connect with our latest thinking.
              </h2>
              <div className="mt-5">
                <Button href="/insights" variant="outline">
                  Our Insights
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-band home-gain-section home-reveal px-6 py-24" data-reveal="left">
        <div className="home-gain-wrap mx-auto grid gap-10 lg:grid-cols-[384px_1fr] lg:items-center">
          <ImagePanel
            className="home-droplet-left home-gain-image home-static-image h-[260px] sm:h-[336px]"
            src={assets.gainImage}
          />
          <div className="home-gain-copy">
            <h2 className="font-display text-[28px] font-medium leading-tight">
              With HYBR, You Gain...
            </h2>
            <ul className="home-gain-list mt-4 space-y-1">
              {gainList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden="true" className="home-gain-check">&#10003;</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="home-gain-close mt-5">
              You lead with vision.
              <br />
              We help you deliver with precision.
            </p>
          </div>
        </div>
      </section>

      <section className="home-band home-cta-section home-reveal px-6 py-16 text-center" data-reveal="scale">
        <div className="home-cta-wrap mx-auto">
          <h2 className="font-display text-[26px] font-medium md:text-[28px]">
            Ready to Build What&apos;s Next?
          </h2>
          <p className="home-cta-copy mt-2">
            Innovation deserves purpose, discipline, and momentum. We bring all three.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-4">
            <Button variant="outline">Book a Strategy Call</Button>
            <Button href="/resources/innovation-guide" variant="outline">
              <span className="home-cta-guide-full">Download Our Innovation Guide</span>
              <span className="home-cta-guide-mobile">Get Our Innovation Guide</span>
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="home-band home-contact-section home-reveal px-6 py-24" data-reveal="up">
        <div className="home-contact-shell mx-auto grid max-w-[1200px] overflow-hidden rounded-3xl bg-black text-white lg:grid-cols-2">
          <div
            className="min-h-[380px] bg-cover bg-center p-6 md:p-16 lg:min-h-0"
            style={{
              backgroundColor: "rgba(0,0,0,.28)",
              backgroundImage: `url(${assets.contact})`,
              backgroundBlendMode: "multiply",
            }}
          >
            <h2 className="font-display text-4xl font-medium md:text-5xl">
              Build Innovation that Works, with Us
            </h2>
            <p className="mt-6 max-w-[461px] font-medium text-xl leading-relaxed">
              Book a call to eliminate innovation by guesswork and unlock measurable
              growth.
            </p>
          </div>
          <HomeLeadForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
