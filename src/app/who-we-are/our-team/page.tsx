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

const teamMembers = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: "Oluwatobi Agbana",
  role: "Marketing & Communications Analyst",
  skills: ["Growth Strategy", "Business Development", "Corporate Systems"],
}));

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

function TierDrop() {
  return (
    <aside aria-label="Team tiers" className="team-tier-drop">
      <p>TIERS</p>
      <nav>
        {networkTiers.map((tier) => (
          <a href="#team" key={tier.label}>
            {tier.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

function TeamCard({ member }: { member: (typeof teamMembers)[number] }) {
  return (
    <article className="team-member-card">
      <span
        aria-hidden="true"
        className="team-member-photo"
        style={{ backgroundImage: `url(${figmaAssets.figmaTeamPortrait})` }}
      />
      <HybrMark className="team-member-mark" />
      <div className="team-member-copy">
        <div>
          <div className="team-member-name-row">
            <h3>{member.name}</h3>
            <svg aria-hidden="true" className="team-member-linkedin" fill="none" viewBox="0 0 32 32">
              <rect height="20" rx="3" stroke="currentColor" strokeWidth="2.2" width="20" x="6" y="6" />
              <path d="M11 14V22" stroke="currentColor" strokeWidth="2.4" />
              <path d="M16 22V17.5C16 15.84 17.34 14.5 19 14.5C20.66 14.5 22 15.84 22 17.5V22" stroke="currentColor" strokeWidth="2.4" />
              <circle cx="11" cy="10.5" fill="currentColor" r="1.5" />
            </svg>
          </div>
          <p>{member.role}</p>
          <Link className="team-member-more" href="/who-we-are/our-team">
            Learn More
          </Link>
        </div>
        <div className="team-member-tags">
          {member.skills.map((skill) => (
            <span key={`${member.id}-${skill}`}>{skill}</span>
          ))}
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
          <Link href="#team">View as Single Page</Link>
        </section>

        <TeamTierBrowser
          members={teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
          tierDrop={<TierDrop />}
          tiers={networkTiers}
        />

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
      </div>

      <Footer />
    </main>
  );
}
