import Link from "next/link";
import { Footer, Header } from "../../../_components/marketing";
import { businessModelsWebinar, publicPowerWebinar } from "@/content/insights";
import { figmaAssets } from "@/content/site";
import { Glyph, PlayMark, PlayPolygon } from "../_parts/icons";
import { VideoPlayer } from "../_parts/VideoPlayer";
import "./figma.css";

/* Figma: Desktop 1:15187 (1440), Tablet Horizontal 1:15316 (1280), Tablet Vertical 1:15420 (800),
   Mobile 1:15523 (390). Layout and type live in ./figma.css, scoped under .sw-page. */

type Masterclass = typeof publicPowerWebinar | typeof businessModelsWebinar;

type SpecificWebinarPageProps = {
  searchParams: Promise<{ masterclass?: string }>;
};

/* Phosphor-style outline icons the frames use (ThumbsUp, PaperPlaneTilt, CaretDown). */
function ThumbsUpIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 48 48">
      <path d="M15 21H7.5A1.5 1.5 0 0 0 6 22.5v16A1.5 1.5 0 0 0 7.5 40H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
      <path
        d="M15 21l7.5-15a6 6 0 0 1 6 6v4.5h11.6a3 3 0 0 1 3 3.4l-2.25 18A3 3 0 0 1 37.85 40H15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
      <path d="M15 21v19" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
    </svg>
  );
}

function PaperPlaneIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 48 48">
      <path d="M41.5 6.5 4.8 17.4a.75.75 0 0 0-.1 1.4l16.5 7.9a.75.75 0 0 1 .35.35l7.9 16.5a.75.75 0 0 0 1.4-.1L41.5 6.5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.5" />
      <path d="m21.3 26.7 9.2-9.2" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
    </svg>
  );
}

function CaretDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path d="M19.5 9 12 16.5 4.5 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function RelatedTopics({ topics, className }: { topics: string[]; className: string }) {
  return (
    <section className={`sw-topics ${className}`} aria-label="Related topics">
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

function SpeakerCard({ name, webinarTitle }: { name: string; webinarTitle: string }) {
  return (
    <details className="sw-speaker">
      <summary>
        <img alt="" className="sw-speaker-bg" src={figmaAssets.figmaBusinessPartners} />
        <span className="sw-speaker-shade" />
        <span className="sw-speaker-ring">
          <img alt="" src={figmaAssets.figmaTeamPortrait} />
        </span>
        <span className="sw-speaker-text">
          <span className="sw-speaker-name">{name}</span>
          <span className="sw-speaker-role">Masterclass speaker</span>
        </span>
        <span className="sw-speaker-more">
          <span>About Speaker</span>
          <CaretDownIcon className="sw-speaker-caret" />
        </span>
        <Glyph className="sw-speaker-info" name="info" />
      </summary>
      <p className="sw-speaker-detail">
        {name} spoke at the HYBR masterclass &ldquo;{webinarTitle}&rdquo;.
      </p>
    </details>
  );
}

function LatestItem({ webinar }: { webinar: Masterclass }) {
  return (
    <Link className="sw-latest-item" href={webinar.href}>
      <span className="sw-latest-thumb">
        <img alt="" className="sw-cover" src={figmaAssets.figmaBusinessPartners} />
        <span className="sw-shade" />
        <PlayMark className="sw-latest-play" />
        <PlayPolygon className="sw-latest-play-mobile" />
        <span className="sw-latest-time">{webinar.duration}</span>
      </span>
      <span className="sw-latest-copy">
        <span className="sw-latest-kind">MASTERCLASS</span>
        <span className="sw-latest-title">{webinar.title}</span>
        <span className="sw-latest-meta">{webinar.speakers}</span>
        <span className="sw-latest-meta">{webinar.date}</span>
      </span>
      <Glyph className="sw-latest-info" name="info" />
    </Link>
  );
}

export default async function SpecificWebinarPage({ searchParams }: SpecificWebinarPageProps) {
  const { masterclass } = await searchParams;
  const webinar = masterclass === "business-models" ? businessModelsWebinar : publicPowerWebinar;
  const speakers = webinar.speakers.split(" & ");
  const latestWebinars = webinar === publicPowerWebinar ? [businessModelsWebinar] : [publicPowerWebinar];

  return (
    <main className="sw-page">
      <Header active="insights" />

      <div className="sw-wrap">
        <div className="sw-search" role="search">
          <Glyph className="sw-search-icon" name="search" />
          <span>Search</span>
        </div>

        <div className="sw-layout">
          <div className="sw-main">
            <VideoPlayer
              duration={webinar.duration}
              embedUrl={webinar.youtubeEmbed}
              poster={figmaAssets.figmaBuilding}
              title={webinar.title}
            />

            <div className="sw-title">
              <h1>{webinar.title}</h1>
              <p>
                {webinar.speakers}&nbsp;&nbsp;|&nbsp;&nbsp;{webinar.date}&nbsp;&nbsp;|&nbsp;&nbsp;{webinar.duration}
              </p>
            </div>

            <div className="sw-actions">
              <div className="sw-actions-left">
                <button className="sw-action" type="button">
                  <ThumbsUpIcon className="sw-action-icon" />
                  <span>Like</span>
                </button>
                <span aria-hidden="true" className="sw-action-divider">
                  |
                </span>
                <button className="sw-action" type="button">
                  <PaperPlaneIcon className="sw-action-icon" />
                  <span>Share</span>
                </button>
              </div>
              <Link className="sw-transcript" href="#transcript">
                Read Transcript
              </Link>
            </div>

            <div className="sw-body" id="transcript">
              <p>{webinar.summary}</p>
              <p>
                Watch the full conversation for practical lessons on building public-private partnerships that can move
                from promising ideas to durable results.
              </p>
            </div>

            <RelatedTopics className="sw-topics--main" topics={webinar.topics} />

            <section className="sw-speakers" aria-labelledby="sw-speakers-title">
              <h2 className="sw-label" id="sw-speakers-title">
                ABOUT THE SPEAKERS
              </h2>
              <div className="sw-speaker-list">
                {speakers.map((name) => (
                  <SpeakerCard key={name} name={name} webinarTitle={webinar.title} />
                ))}
              </div>
            </section>
          </div>

          <aside className="sw-side">
            <div className="sw-ad">
              <img alt="" className="sw-cover" src={figmaAssets.figmaFieldHero} />
              <span className="sw-shade" />
              <span className="sw-ad-label">HYBR Ad</span>
            </div>

            <RelatedTopics className="sw-topics--side" topics={webinar.topics} />

            <section className="sw-latest" aria-labelledby="sw-latest-title">
              <h2 className="sw-label" id="sw-latest-title">
                LATEST MASTERCLASSES
              </h2>
              <div className="sw-latest-list">
                {latestWebinars.map((item) => (
                  <LatestItem key={item.title} webinar={item} />
                ))}
              </div>
              <Link className="sw-all" href="/insights/webinars">
                All Masterclasses
              </Link>
            </section>
          </aside>
        </div>
      </div>

      <Footer />
    </main>
  );
}
