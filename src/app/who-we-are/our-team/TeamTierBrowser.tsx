"use client";

import type { ReactNode } from "react";
import { useState } from "react";

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

export function TeamTierBrowser({ afterRoster, membersByTier, tiers }: TeamTierBrowserProps) {
  const [activeTierIndex, setActiveTierIndex] = useState(0);
  const activeTier = tiers[activeTierIndex];

  const changeTier = (step: number) => {
    setActiveTierIndex((currentIndex) => {
      return (currentIndex + step + tiers.length) % tiers.length;
    });
  };

  const selectTier = (index: number) => {
    setActiveTierIndex(index);
    document.getElementById("team")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <aside aria-label="Team tiers" className="team-tier-drop">
        <p>TIERS</p>
        <nav>
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
                style={{ fontWeight: isActive ? 700 : 500, opacity: isActive ? 1 : 0.72 }}
              >
                {tier.label}
              </a>
            );
          })}
        </nav>
      </aside>

      <div className="team-roster-layout">
        <section aria-labelledby="team-tier-title" className="team-core" id="team">
          <h2 id="team-tier-title">{activeTier.label}</h2>
          <p>{activeTier.text}</p>
        </section>

        <div
          aria-label={`${activeTier.label} team members`}
          className="team-member-grid"
          key={activeTier.label}
        >
          {membersByTier[activeTier.label]}
        </div>

        <div aria-label="Team tier navigation" className="team-tier-nav" role="group">
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

        {afterRoster}
      </div>
    </>
  );
}
