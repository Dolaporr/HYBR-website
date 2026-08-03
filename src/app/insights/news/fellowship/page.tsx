import Link from "next/link";
import { Footer, Header } from "../../../_components/marketing";
import { innovationFellowshipNews } from "@/content/insights";
import { figmaAssets } from "@/content/site";

export default function FellowshipNewsPage() {
  return (
    <main className="news-detail-page">
      <section className="news-detail-hero">
        <Header active="insights" tone="dark" />
        <div className="news-detail-hero-image">
          <img alt="" src={figmaAssets.figmaBusinessPartners} />
        </div>
        <div className="news-detail-hero-copy">
          <h1>{innovationFellowshipNews.title}</h1>
          <p className="news-detail-summary">{innovationFellowshipNews.summary}</p>
          <p className="news-detail-author">HYBR Editorial</p>
          <div className="news-detail-topics">
            <p>Topics</p>
            <span>Innovation Fellowship, Talent Development, Venture Building</span>
          </div>
        </div>
      </section>
      <section className="news-detail-body">
        <div className="figma-container news-detail-shell">
          <section className="news-detail-article-section news-detail-article-section--main">
            <h2>Real responsibility changes what people believe they can do.</h2>
            <p className="news-detail-kicker">A year of learning through the work that matters.</p>
            <div className="news-detail-copy">
              <p>{innovationFellowshipNews.summary}</p>
              <p>HYBR&apos;s Innovation Fellowship creates room for graduates to work on meaningful challenges, learn alongside experienced practitioners and build the confidence that comes from contributing to real work.</p>
              <p>The fellowship is not designed around observation. It gives emerging innovators the space to ask better questions, test their thinking and discover where their capability can create the most value.</p>
            </div>
          </section>
          <section className="news-detail-services" aria-label="Work with HYBR">
            <h2>Interested in building the next generation of innovators?</h2>
            <Link className="news-detail-outline-button" href="/contact">
              Let&apos;s Talk
            </Link>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
