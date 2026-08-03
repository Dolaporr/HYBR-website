import Link from "next/link";
import { Footer, Header } from "../../../_components/marketing";
import { businessModelsWebinar, publicPowerWebinar } from "@/content/insights";
import { figmaAssets } from "@/content/site";

type Masterclass = typeof publicPowerWebinar | typeof businessModelsWebinar;

type SpecificWebinarPageProps = {
  searchParams: Promise<{ masterclass?: string }>;
};

function SearchControl() {
  return (
    <div className="figma-search-control" role="search">
      <svg aria-hidden="true" fill="none" viewBox="0 0 40 40">
        <circle cx="18.5" cy="18.5" r="10.5" stroke="currentColor" strokeWidth="2.5" />
        <path d="M26 26L32 32" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
      <span>Search</span>
    </div>
  );
}

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <span className={`webinar-play ${className}`} aria-hidden="true">
      <svg fill="none" viewBox="0 0 104 104">
        <path d="M29 12L82 52L29 92V12Z" fill="currentColor" />
      </svg>
    </span>
  );
}

function WebinarVideo({
  webinar,
  compact = false,
  imageSrc = figmaAssets.figmaBuilding,
}: {
  webinar: Masterclass;
  compact?: boolean;
  imageSrc?: string;
}) {
  if (!compact) {
    return (
      <div className="webinar-video webinar-video--embed">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="webinar-video-embed"
          src={webinar.youtubeEmbed}
          title={webinar.title}
        />
      </div>
    );
  }

  return (
    <div className="webinar-video webinar-video--compact">
      <img alt="" src={imageSrc} />
      <PlayIcon />
      <span className="webinar-duration">{webinar.duration}</span>
    </div>
  );
}

function ActionIcon({ type }: { type: "like" | "share" }) {
  if (type === "like") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 48 48">
        <path d="M17 41H12C10.3431 41 9 39.6569 9 38V22C9 20.3431 10.3431 19 12 19H17V41Z" stroke="currentColor" strokeWidth="2.2" />
        <path d="M17 20L25 8C26.1046 8.5 28 10 28 13V19H36C38.7614 19 41 21.2386 41 24L38.5 36C37.9 39 35.5 41 32.5 41H17V20Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 48 48">
      <path d="M41 7L21 28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
      <path d="M41 7L29 41L21 28L7 20L41 7Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.2" />
    </svg>
  );
}

function DetailAction({ type, label }: { type: "like" | "share"; label: string }) {
  return (
    <button className="webinar-detail-action" type="button">
      <ActionIcon type={type} />
      <span>{label}</span>
    </button>
  );
}

function RelatedWebinarRow({
  webinar,
}: {
  webinar: Masterclass;
}) {
  return (
    <Link className="related-webinar-row" href={webinar.href}>
      <WebinarVideo webinar={webinar} compact imageSrc={figmaAssets.figmaBusinessPartners} />
      <div>
        <h3>{webinar.title}</h3>
        <p>{webinar.speakers}</p>
        <p>
          {webinar.date} | {webinar.duration}
        </p>
      </div>
    </Link>
  );
}

function RelatedTopics({ topics, className = "" }: { topics: string[]; className?: string }) {
  return (
    <section className={`webinar-topics ${className}`.trim()}>
      <h2>Related Topics</h2>
      <div>
        {topics.map((topic) => (
          <Link href="/insights/articles" key={topic}>
            {topic}
          </Link>
        ))}
      </div>
    </section>
  );
}

function SpeakerCard({ speaker }: { speaker: { name: string } }) {
  return (
    <details
      className="webinar-speaker-card"
      style={{
        backgroundColor: "rgba(0,0,0,.52)",
        backgroundImage: `url(${figmaAssets.figmaBusinessPartners})`,
        backgroundBlendMode: "multiply",
      }}
    >
      <summary className="webinar-speaker-summary">
        <div className="webinar-speaker-person">
          <span className="webinar-speaker-ring">
            <img alt="" src={figmaAssets.figmaTeamPortrait} />
          </span>
          <div>
            <h3>{speaker.name}</h3>
            <p>Masterclass speaker</p>
          </div>
        </div>
        <span className="webinar-speaker-more">
          <span>About Speaker</span>
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </span>
      </summary>
    </details>
  );
}

export default async function SpecificWebinarPage({ searchParams }: SpecificWebinarPageProps) {
  const { masterclass } = await searchParams;
  const webinar = masterclass === "business-models" ? businessModelsWebinar : publicPowerWebinar;
  const speakers = webinar.speakers.split(" & ").map((name) => ({ name }));
  const latestWebinars = webinar === publicPowerWebinar ? [businessModelsWebinar] : [publicPowerWebinar];

  return (
    <main className="webinar-detail-page bg-white text-black">
      <Header active="insights" />

      <section className="webinar-detail-frame">
        <div className="figma-container">
          <SearchControl />

          <div className="webinar-detail-grid">
            <article className="webinar-detail-main">
              <WebinarVideo webinar={webinar} />

              <div className="webinar-title-block">
                <h1>{webinar.title}</h1>
                <p>
                  {webinar.speakers} | {webinar.date} | {webinar.duration}
                </p>
              </div>

              <div className="webinar-detail-actions">
                <div className="webinar-detail-actions-left">
                  <DetailAction label="Like" type="like" />
                  <DetailAction label="Share" type="share" />
                </div>
                <Link className="webinar-transcript-link" href="#transcript">
                  Read Transcript
                </Link>
              </div>

              <div className="webinar-body-copy" id="transcript">
                <p>{webinar.summary}</p>
                <p>Watch the full conversation for practical lessons on building public-private partnerships that can move from promising ideas to durable results.</p>
              </div>

              <RelatedTopics className="webinar-topics--mobile" topics={webinar.topics} />

              <section className="webinar-speakers">
                <div className="webinar-speakers-head">
                  <h2>About The Speakers</h2>
                </div>
                <div className="webinar-speaker-list">
                  {speakers.map((speaker, index) => (
                    <SpeakerCard key={`${speaker.name}-${index}`} speaker={speaker} />
                  ))}
                </div>
              </section>
            </article>

            <aside className="webinar-detail-sidebar">
              <div
                className="webinar-ad-card"
                style={{
                  backgroundColor: "rgba(0,0,0,.4)",
                  backgroundImage: `url(${figmaAssets.figmaFieldHero})`,
                  backgroundBlendMode: "multiply",
                }}
              >
                HYBR Ad
              </div>

              <RelatedTopics topics={webinar.topics} />

              <section className="webinar-latest">
                <h2>Latest Masterclasses</h2>
                <div className="webinar-latest-list">
                  {latestWebinars.map((webinar, index) => (
                    <RelatedWebinarRow key={`${webinar.title}-${index}`} webinar={webinar} />
                  ))}
                </div>
                <Link className="news-detail-outline-button webinar-all-button" href="/insights/webinars">
                  All Masterclasses
                </Link>
              </section>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
