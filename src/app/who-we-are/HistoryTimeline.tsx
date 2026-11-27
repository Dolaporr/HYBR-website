"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

export type HistoryItem = {
  year: string;
  text: string;
  icon: string;
  /** Mobile (390 frame): space above the card and the pin centre measured from the card top. */
  mobileGap: number;
  mobilePin: number;
  mobileHeight: number;
};

/**
 * "Our History" band. Tablet and desktop frames show one long horizontal track (cards alternate above and below
 * the line) that runs past the screen edge, with a "See The Whole Journey" pill on the band's top edge: the pill
 * scrolls the track to its end and back. The mobile frame stacks the same items on a vertical line.
 */
export function HistoryTimeline({ items }: { items: HistoryItem[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const toggle = () => {
    const el = scroller.current;
    if (!el) return;
    el.scrollTo({ left: atEnd ? 0 : el.scrollWidth, behavior: "smooth" });
  };

  return (
    <section className="wwa-history" id="history" aria-labelledby="wwa-history-title">
      <button
        aria-controls="wwa-history-track"
        className={`wwa-journey${atEnd ? " is-at-end" : ""}`}
        onClick={toggle}
        type="button"
      >
        <span>See The Whole Journey</span>
        <span className="sr-only">{atEnd ? " (back to the start)" : ""}</span>
        <svg aria-hidden="true" className="wwa-journey-icon" viewBox="0 0 256 256">
          <circle cx="128" cy="128" fill="none" r="96" stroke="currentColor" strokeWidth="16" />
          <polyline
            fill="none"
            points="88 112 128 152 168 112"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </svg>
      </button>

      <h2 className="wwa-label wwa-history-label" id="wwa-history-title">
        Our History
      </h2>

      <div
        aria-label="HYBR timeline, 2016 to 2025"
        className="wwa-history-scroller"
        id="wwa-history-track"
        ref={scroller}
        role="region"
        tabIndex={0}
      >
        <ol className="wwa-track">
          <li aria-hidden="true" className="wwa-track-year wwa-track-year--start">
            2016
          </li>
          {items.map((item, index) => (
            <li
              className={`wwa-event ${index % 2 === 0 ? "is-top" : "is-bottom"}${index === 0 ? " is-featured" : ""}`}
              key={`${item.year}-${index}`}
              style={
                {
                  "--i": index,
                  "--m-gap": `${item.mobileGap}px`,
                  "--m-pin": `${item.mobilePin}px`,
                  "--m-h": `${item.mobileHeight}px`,
                } as CSSProperties
              }
            >
              <span aria-hidden="true" className="wwa-event-pin">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" loading="lazy" src={item.icon} />
              </span>
              <span aria-hidden="true" className="wwa-event-link" />
              <div className="wwa-event-card">
                <p>{item.text}</p>
                <strong>{item.year}</strong>
              </div>
            </li>
          ))}
          <li aria-hidden="true" className="wwa-track-year wwa-track-year--end">
            2025
          </li>
        </ol>
      </div>
    </section>
  );
}
