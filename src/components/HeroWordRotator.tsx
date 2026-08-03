"use client";

import { useEffect, useState } from "react";

const ROTATE_DELAY = 2200;
const FADE_DURATION = 520;

export function HeroWordRotator({ words }: { words: string[] }) {
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);

  useEffect(() => {
    if (words.length < 2) return;

    const interval = window.setInterval(() => {
      setActive((current) => {
        setLeaving(current);
        return (current + 1) % words.length;
      });
    }, ROTATE_DELAY);

    return () => window.clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    if (leaving === null) return;

    const timeout = window.setTimeout(() => setLeaving(null), FADE_DURATION);
    return () => window.clearTimeout(timeout);
  }, [leaving]);

  return (
    <span className="hero-rotator" aria-live="polite" aria-label={words.join(" ")}>
      {words.map((word, index) => (
        <span
          aria-hidden={index !== active}
          className={[
            index === active ? "is-active" : "",
            index === leaving ? "is-leaving" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          key={word}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
