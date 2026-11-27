"use client";

import { useState } from "react";
import { PlayPolygon } from "./icons";

/** 16:9 player with a poster: the YouTube iframe only loads (and autoplays) after the visitor presses play,
    so the page never shows the embed's black letterbox or its loading frame. */
export function VideoPlayer({
  className = "",
  duration,
  embedUrl,
  poster,
  title,
}: {
  className?: string;
  duration: string;
  embedUrl: string;
  poster: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);
  const src = `${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1&rel=0`;

  return (
    <div className={`sw-player ${className}`}>
      {playing ? (
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="sw-player-frame"
          src={src}
          title={title}
        />
      ) : (
        <button aria-label={`Play: ${title}`} className="sw-player-poster" onClick={() => setPlaying(true)} type="button">
          <img alt="" className="sw-player-image" src={poster} />
          <span className="sw-player-shade" />
          <PlayPolygon className="sw-player-play" />
          <span className="sw-player-time">{duration}</span>
        </button>
      )}
    </div>
  );
}
