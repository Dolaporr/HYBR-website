import Link from "next/link";
import { Footer, Header } from "../../_components/marketing";
import { absaDiscoveryEditorial } from "@/content/caseStudies";
import { figmaAssets } from "@/content/site";
import styles from "./page.module.css";

export default function AbsaCaseStudyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Header active="what" tone="dark" />
        <img alt="" className={styles.heroImage} src={figmaAssets.figmaBusinessPartners} />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <p>CLIENT CASE STUDY / DISCOVER</p>
          <h1>{absaDiscoveryEditorial.title}</h1>
          <span>{absaDiscoveryEditorial.subtitle}</span>
        </div>
      </section>

      <section className={styles.facts} aria-label="Case study details">
        {absaDiscoveryEditorial.facts.map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </section>

      <article className={styles.article}>
        <p className={styles.intro}>
          How does a major financial institution find the external innovations that genuinely matter to its business? From 2021 to 2024, HYBR supported Absa&apos;s Digital Partnerships Ecosystem across Africa, connecting a wide field of market possibility with defined areas of strategic interest.
        </p>
        {absaDiscoveryEditorial.sections.map((section, index) => (
          <section className={styles.section} key={section.title}>
            <span>0{index + 1}</span>
            <div>
              <h2>{section.title}</h2>
              {section.copy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </article>

      <section className={styles.cta}>
        <p>DISCOVER WHAT OTHERS MAY BE MISSING</p>
        <h2>What opportunity is outside your field of view?</h2>
        <span>HYBR helps organisations navigate unfamiliar markets, emerging technologies and innovation ecosystems to find the opportunities worth developing.</span>
        <Link href="/contact">Book a Discovery Conversation</Link>
      </section>
      <Footer />
    </main>
  );
}
