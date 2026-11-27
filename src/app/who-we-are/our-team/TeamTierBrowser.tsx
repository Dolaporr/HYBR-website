"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import styles from "./page.module.css";

type NetworkTier = {
  label: string;
  text: string;
};

type TeamTierBrowserProps = {
  afterRoster: ReactNode;
  membersByTier: Record<string, ReactNode>;
  tiers: NetworkTier[];
};

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 32 32">
      {direction === "left" ? (
        <path
          d="M19 9L12 16L19 23"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
        />
      ) : (
        <path
          d="M13 9L20 16L13 23"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
        />
      )}
    </svg>
  );
}

export function TeamTierBrowser({
  afterRoster,
  membersByTier,
  tiers,
}: TeamTierBrowserProps) {
  const [activeTierIndex, setActiveTierIndex] = useState(0);
  const activeTier = tiers[activeTierIndex];

  const changeTier = (step: number) => {
    setActiveTierIndex((currentIndex) => {
      return (currentIndex + step + tiers.length) % tiers.length;
    });
  };

  const selectTier = (index: number) => {
    setActiveTierIndex(index);
    document
      .getElementById("team")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className={styles.roster}>
        <aside
          aria-label="Team tiers"
          className={`team-tier-drop ${styles.drop} ${styles.tierDrop}`}
        >
          <p className={styles.dropLabel}>TIERS</p>
          <nav className={styles.dropNav}>
            {tiers.map((tier, index) => {
              const isActive = index === activeTierIndex;

              return (
                <a
                  aria-current={isActive ? "page" : undefined}
                  href="#team"
                  key={tier.label}
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    selectTier(index);
                  }}
                  className={isActive ? styles.tierActive : undefined}
                >
                  {tier.label}
                </a>
              );
            })}
          </nav>
        </aside>

        <div className={styles.wrap}>
          <section
            aria-labelledby="team-tier-title"
            className={styles.core}
            id="team"
          >
            <h2 className={styles.h2} id="team-tier-title">
              {activeTier.label}
            </h2>
            <p className={styles.body}>{activeTier.text}</p>
          </section>

          <div
            aria-label={`${activeTier.label} team members`}
            className={styles.grid}
            key={activeTier.label}
          >
            {membersByTier[activeTier.label]}
          </div>

          <div
            aria-label="Team tier navigation"
            className={styles.tierNav}
            role="group"
          >
            <button
              aria-label={`Show previous tier before ${activeTier.label}`}
              onClick={() => changeTier(-1)}
              type="button"
            >
              <ArrowIcon direction="left" />
            </button>
            <span aria-live="polite">{activeTier.label.toUpperCase()}</span>
            <button
              aria-label={`Show next tier after ${activeTier.label}`}
              onClick={() => changeTier(1)}
              type="button"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>
      </div>

      {afterRoster}
    </>
  );
}
