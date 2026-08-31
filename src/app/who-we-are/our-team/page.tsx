import Link from "next/link";
import { figmaAssets } from "@/content/site";
import { Footer, Header } from "../../_components/marketing";
import { TeamTierBrowser } from "./TeamTierBrowser";
import styles from "./page.module.css";

const contentLinks = [
  { label: "Our Network", href: "#network" },
  { label: "Meet The Team", href: "#team" },
  { label: "More About Us", href: "#more-about-us" },
];

const networkTiers = [
  {
    label: "Core",
    text: "Responsible for the operation and function of the business across strategy, operations, commercial, finance, and communications.",
  },
  {
    label: "Associates",
    text: "Subject matter authorities and/ or niche experts with distinctive highly specialised skills sets. Supplement the Core team with in-depth proficiencies.",
  },
  {
    label: "Affiliates",
    text: "Networked organisations and / or individuals offer a broad range of services that complement the Core team.",
  },
  {
    label: "Advisors",
    text: "World authorities and renowned experts in their fields who provide the critique necessary for improvement and progression.",
  },
];

type TeamTier = (typeof networkTiers)[number]["label"];

type TeamMember = {
  name: string;
  role?: string;
  linkedinUrl: string;
  portrait?: string;
  tier: TeamTier;
};

const teamMembers: TeamMember[] = [
  {
    name: "Carlman Moyo",
    role: "Chairman",
    linkedinUrl: "https://www.linkedin.com/in/carlmanmoyo/",
    portrait: "/team/bw/carlman-moyo.png",
    tier: "Core",
  },
  {
    name: "Charles Ojei",
    role: "Founder",
    linkedinUrl: "https://www.linkedin.com/in/charlesojei/",
    portrait: "/team/bw/charles-ojei.png",
    tier: "Core",
  },
  {
    name: "Adeyinka Aderombi",
    role: "Partner",
    linkedinUrl: "https://www.linkedin.com/in/adeyinkaaderombi/",
    portrait: "/team/bw/adeyinka-aderombi.png",
    tier: "Core",
  },
  {
    name: "Ameh Loko",
    role: "Venture Partner",
    linkedinUrl: "https://www.linkedin.com/in/ameh-idoko-3090b347/",
    portrait: "/team/bw/ameh-idoko.jpg",
    tier: "Core",
  },
  {
    name: "Mbayilan Aondo-Akaa",
    role: "Senior Fellow",
    linkedinUrl: "https://www.linkedin.com/in/mbayilan-aondo-akaa-62988113/",
    portrait: "/team/bw/mbayilan-aondo-akaa.png",
    tier: "Core",
  },
  {
    name: "Stephen Ojonugwa",
    role: "Project Delivery",
    linkedinUrl: "https://www.linkedin.com/in/ojonugwa-stephen-agipm-cpm-550a7849/",
    portrait: "/team/bw/stephen-ojonugwa.png",
    tier: "Core",
  },
  {
    name: "Tina Nyamache",
    role: "Partnerships Consultant",
    linkedinUrl: "https://www.linkedin.com/in/tinanyamache/",
    portrait: "/team/bw/tina-nyamache.png",
    tier: "Core",
  },
  {
    name: "Francis Enakele",
    role: "Corporate Finance Consultant",
    linkedinUrl: "https://www.linkedin.com/in/francis-enakele-msc-mba-b9074529/",
    portrait: "/team/bw/francis-enakele.png",
    tier: "Core",
  },
  {
    name: "Ntukwasi Agu",
    role: "Experience Designer",
    linkedinUrl: "https://www.linkedin.com/in/ntukwasi-agu/",
    portrait: "/team/bw/ntukwasi-agu.png",
    tier: "Core",
  },
  {
    name: "Oluwatobi Agbana",
    role: "Marketing-to-Sales AI Engineer",
    linkedinUrl: "https://www.linkedin.com/in/tobi-a-a97067230/",
    portrait: "/team/bw/oluwatobi-agbana.png",
    tier: "Core",
  },
  {
    name: "Tiambi Simms",
    role: "Venture Builder | CEO, Shefarms",
    linkedinUrl: "https://www.linkedin.com/in/tiambirsimms/",
    portrait: "/team/bw/tiambi-simms.png",
    tier: "Associates",
  },
  {
    name: "Tania Sime Kouamou",
    role: "Operations Expert | CEO, KoheLabs",
    linkedinUrl: "https://www.linkedin.com/in/tania-sime/",
    portrait: "/team/bw/tania-sime-kouamou.png",
    tier: "Associates",
  },
  {
    name: "Siphesihle Kala",
    role: "Strategy | Ex-McKinsey",
    linkedinUrl: "https://www.linkedin.com/in/siphekala/",
    portrait: "/team/bw/siphesihle-kala.png",
    tier: "Associates",
  },
  {
    name: "Emmanuel Oluwatosin",
    role: "AI Product Management | Ex-Microsoft",
    linkedinUrl: "https://www.linkedin.com/in/emmanuel-oluwatosin/details/experience/",
    portrait: "/team/bw/emmanuel-oluwatosin.png",
    tier: "Associates",
  },
  {
    name: "Olawale Jagunmolu",
    role: "Route-to-Market Expert",
    linkedinUrl: "https://www.linkedin.com/in/olawale-jagunmolu-61579218/",
    portrait: "/team/bw/olawale-jagunmolu.png",
    tier: "Associates",
  },
  {
    name: "Jeff Wallace",
    role: "President, Global Kinetics Inc",
    linkedinUrl: "https://www.linkedin.com/in/jeffwallace913/",
    portrait: "/team/bw/jeff-wallace.png",
    tier: "Affiliates",
  },
  {
    name: "Camille Park",
    role: "Chief Executive Officer, NABU",
    linkedinUrl: "https://www.linkedin.com/in/camille-park-04468762/",
    portrait: "/team/bw/camille-park.png",
    tier: "Affiliates",
  },
  {
    name: "Kal Deutsch",
    role: "Adjunct Professor, UC Berkeley",
    linkedinUrl: "https://www.linkedin.com/in/kaldeutsch/",
    portrait: "/team/bw/kal-deutsch.png",
    tier: "Affiliates",
  },
  {
    name: "Paul Kallmes",
    role: "Partner, Silicon Valley In Your Pocket",
    linkedinUrl: "https://www.linkedin.com/in/paulkallmes/",
    portrait: "/team/bw/paul-kallmes.png",
    tier: "Affiliates",
  },
  {
    name: "Harald Friedl",
    role: "Circular Economist",
    linkedinUrl: "https://www.linkedin.com/in/harald-friedl/",
    portrait: "/team/bw/harald-friedl.png",
    tier: "Affiliates",
  },
  {
    name: "Ademola Okunoga",
    role: "GROWTH EQUITY, GENERAL ATLANTIC",
    linkedinUrl: "https://www.linkedin.com/in/ademola-okuwoga-550a1675/",
    portrait: "/team/bw/ademola-okunoga.png",
    tier: "Advisors",
  },
  {
    name: "Samantha Yarwood",
    role: "Chief Innovation Officer, SHIFT Toronto",
    linkedinUrl: "https://www.linkedin.com/in/samanthayarwood/",
    portrait: "/team/bw/samantha-yarwood.jpg",
    tier: "Advisors",
  },
  {
    name: "Hayat Chedid",
    role: "Managing Partner, UpSpot",
    linkedinUrl: "https://www.linkedin.com/in/hayat-chedid-480abb4/",
    portrait: "/team/bw/hayat-chedid.png",
    tier: "Advisors",
  },
  {
    name: "Jubril Enakele",
    role: "CEO, Iron Capital",
    linkedinUrl: "https://www.linkedin.com/in/jubrilenakele/",
    portrait: "/team/bw/jubril-enakele.png",
    tier: "Advisors",
  },
];

function HybrMark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 56 56">
      <circle cx="28" cy="43.2" r="10.28" stroke="currentColor" strokeWidth="4.54" />
      <circle cx="28" cy="35.1" r="18.33" stroke="currentColor" strokeWidth="4.54" />
      <circle cx="28" cy="27.88" r="25.54" stroke="currentColor" strokeWidth="4.54" />
    </svg>
  );
}

function ContentDrop() {
  return (
    <aside aria-label="Page contents" className="team-content-drop">
      <span
        aria-hidden="true"
        className="team-content-drop-media"
        style={{ backgroundImage: `url(${figmaAssets.figmaBusinessPartners})` }}
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

function NetworkMap() {
  return (
    <section aria-labelledby="team-network-title" className="team-network" id="network">
      <h2 id="team-network-title">OUR NETWORK</h2>
      <div className="team-network-card">
        <span aria-hidden="true" className="team-network-rings" />
        {networkTiers.map((tier) => (
          <div className={`team-network-tier is-${tier.label.toLowerCase()}`} key={tier.label}>
            <h3>{tier.label}</h3>
            <p>{tier.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  const portraitStyle = member.portrait
    ? { backgroundImage: `url(${member.portrait})` }
    : undefined;

  return (
    <article className="team-member-card">
      <span
        aria-hidden="true"
        className={`team-member-photo${member.portrait ? "" : " is-placeholder"}`}
        style={portraitStyle}
      />
      <HybrMark className="team-member-mark" />
      <div className="team-member-copy">
        <div>
          <div className="team-member-name-row">
            <h3>{member.name}</h3>
            <a
              aria-label={`Open ${member.name}'s LinkedIn profile`}
              className="team-member-linkedin"
              href={member.linkedinUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg aria-hidden="true" fill="none" viewBox="0 0 32 32">
                <rect height="20" rx="3" stroke="currentColor" strokeWidth="2.2" width="20" x="6" y="6" />
                <path d="M11 14V22" stroke="currentColor" strokeWidth="2.4" />
                <path d="M16 22V17.5C16 15.84 17.34 14.5 19 14.5C20.66 14.5 22 15.84 22 17.5V22" stroke="currentColor" strokeWidth="2.4" />
                <circle cx="11" cy="10.5" fill="currentColor" r="1.5" />
              </svg>
            </a>
          </div>
          {member.role ? <p>{member.role}</p> : null}
        </div>
      </div>
    </article>
  );
}

export default function OurTeamPage() {
  return (
    <main className={`${styles.teamScope} team-page`}>
      <div className="team-frame">
        <Header active="who" />

        <section aria-labelledby="team-title" className="team-hero">
          <h1 id="team-title">Our Team</h1>
          <p>The people powering HYBR: innovators obsessed with building what&apos;s next.</p>
        </section>

        <ContentDrop />
        <NetworkMap />

        <section aria-labelledby="team-meet-title" className="team-meet">
          <h2 id="team-meet-title">Meet the Team</h2>
          <p>
            Our network model enables us to go further faster, be radically original,
            achieve greater lasting impact, and do so with ruthless efficiency
          </p>
        </section>

        <TeamTierBrowser
          afterRoster={(
            <section aria-labelledby="team-more-title" className="team-more" id="more-about-us">
              <h2 id="team-more-title">
                Empowering organizations to unlock new value, create impact, and shape tomorrow.
              </h2>
              <p>
                Build what&apos;s next &mdash; collaborate, experiment, and create change
                with HYBR. Join a team where curiosity, creativity, and impact drive
                everything we do.
              </p>
              <div>
                <Link href="/who-we-are/careers">Join Us</Link>
                <Link href="/what-we-do">What We Do</Link>
              </div>
            </section>
          )}
          membersByTier={Object.fromEntries(
            networkTiers.map((tier) => [
              tier.label,
              teamMembers
                .filter((member) => member.tier === tier.label)
                .map((member) => <TeamCard key={member.name} member={member} />),
            ]),
          )}
          tiers={networkTiers}
        />
      </div>

      <Footer />
    </main>
  );
}
