"use client";

import {
  type MouseEvent,
  type PointerEvent,
  type TouchEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const testimonials = [
  {
    quote:
      "The curated innovation retreat for AFEX's 40-exco team was truly world class and highly impactful, shaping our strategic plans going forward.",
    name: "Ayo Balogun",
    title:
      "CEO, AFEX Commodities | 2022 Financial Times Fastest Growing Venture in Africa",
    image: "/home/edit-flags/ayo-balogun.png",
  },
  {
    quote:
      "HYBR helped Coca-Cola turn a critical plastic waste challenge into a scalable innovation program with strong environmental and employment impact. Their work combined ecosystem insight, innovation sourcing and practical execution.",
    name: "Peter Ekunkoya",
    title: "Former Commercial Director, Coca-Cola",
    image: "/home/edit-flags/peter-ekunkoya-avatar.png",
  },
  {
    quote:
      "HYBR has been a reliable and trusted partner, bringing clarity, structure, and execution discipline to complex innovation and growth work. Their practical, collaborative approach makes them a valuable partner.",
    name: "Yewande Adewusi",
    title: "COO, Alitheia Capital",
    image: "/home/edit-flags/yewande-adewusi.png",
  },
];

const AUTO_DELAY = 5000;
const DOT_COUNT = 3;
const SWIPE_MIN_DISTANCE = 44;
const SWIPE_AXIS_LOCK = 1.2;

type HomeTestimonial = (typeof testimonials)[number];
type SwipeState = {
  pointerId: number | null;
  startX: number;
  startY: number;
};
type TouchState = {
  startX: number;
  startY: number;
};

function TestimonialArrowIcon({ direction }: { direction: "left" | "right" }) {
  const path =
    direction === "left"
      ? "M41.415 50.5851C41.6008 50.771 41.7482 50.9916 41.8488 51.2343C41.9494 51.4771 42.0011 51.7373 42.0011 52.0001C42.0011 52.2629 41.9494 52.5231 41.8488 52.7659C41.7482 53.0087 41.6008 53.2293 41.415 53.4151C41.2292 53.601 41.0086 53.7484 40.7658 53.8489C40.523 53.9495 40.2628 54.0013 40 54.0013C39.7372 54.0013 39.477 53.9495 39.2342 53.8489C38.9914 53.7484 38.7708 53.601 38.585 53.4151L18.585 33.4151C18.399 33.2294 18.2515 33.0088 18.1509 32.766C18.0502 32.5232 17.9984 32.263 17.9984 32.0001C17.9984 31.7373 18.0502 31.4771 18.1509 31.2343C18.2515 30.9915 18.399 30.7709 18.585 30.5851L38.585 10.5851C38.9603 10.2099 39.4693 9.99902 40 9.99902C40.5307 9.99902 41.0397 10.2099 41.415 10.5851C41.7903 10.9604 42.0011 11.4694 42.0011 12.0001C42.0011 12.5309 41.7903 13.0399 41.415 13.4151L22.8275 32.0001L41.415 50.5851Z"
      : "M45.415 33.4151L25.415 53.4151C25.2292 53.601 25.0086 53.7484 24.7658 53.8489C24.523 53.9495 24.2628 54.0013 24 54.0013C23.7372 54.0013 23.477 53.9495 23.2342 53.8489C22.9914 53.7484 22.7708 53.601 22.585 53.4151C22.3992 53.2293 22.2518 53.0087 22.1512 52.7659C22.0507 52.5231 21.9989 52.2629 21.9989 52.0001C21.9989 51.7373 22.0507 51.4771 22.1512 51.2343C22.2518 50.9916 22.3992 50.771 22.585 50.5851L41.1725 32.0001L22.585 13.4151C22.2097 13.0399 21.9989 12.5309 21.9989 12.0001C21.9989 11.4694 22.2097 10.9604 22.585 10.5851C22.9603 10.2099 23.4693 9.99902 24 9.99902C24.5307 9.99902 25.0397 10.2099 25.415 10.5851L45.415 30.5851C45.601 30.7709 45.7485 30.9915 45.8491 31.2343C45.9498 31.4771 46.0016 31.7373 46.0016 32.0001C46.0016 32.263 45.9498 32.5232 45.8491 32.766C45.7485 33.0088 45.601 33.2294 45.415 33.4151Z";

  return (
    <svg aria-hidden="true" fill="none" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
      <path d={path} fill="currentColor" />
    </svg>
  );
}

function capturePointer(element: HTMLDivElement, pointerId: number) {
  try {
    element.setPointerCapture(pointerId);
  } catch {
    return;
  }
}

function releasePointer(element: HTMLDivElement, pointerId: number) {
  if (!element.hasPointerCapture(pointerId)) return;

  try {
    element.releasePointerCapture(pointerId);
  } catch {
    return;
  }
}

function TestimonialCard({
  className,
  testimonial,
}: {
  className?: string;
  testimonial: HomeTestimonial;
}) {
  return (
    <div className={`home-testimonial-card grid gap-10 text-left text-white md:grid-cols-[116px_1fr] ${className ?? ""}`}>
      <div className="home-testimonial-avatar relative flex size-[116px] items-center justify-center rounded-full">
        <span className="absolute inset-0 rounded-full border-4 border-[#8dc540]" />
        <img
          alt={testimonial.name}
          className="home-testimonial-avatar-image absolute bottom-1 left-1/2 size-[88px] rounded-full border-[3px] border-[#8dc540] object-cover"
          draggable={false}
          src={testimonial.image}
        />
      </div>
      <div>
        <blockquote className="home-testimonial-quote">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <p className="mt-8 font-display text-[16px] font-semibold">
          {testimonial.name}
        </p>
        <p className="font-display text-[16px] font-semibold text-white/86">
          {testimonial.title}
        </p>
      </div>
    </div>
  );
}

export function TestimonialsCarousel({
  className = "",
  variant = "black",
}: {
  className?: string;
  variant?: "black";
}) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastSwipeAtRef = useRef(0);
  const swipeRef = useRef<SwipeState>({
    pointerId: null,
    startX: 0,
    startY: 0,
  });
  const touchRef = useRef<TouchState | null>(null);

  const scheduleNext = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, AUTO_DELAY);
  }, []);

  useEffect(() => {
    scheduleNext();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, scheduleNext]);

  const go = useCallback((idx: number) => {
    setActive((idx + testimonials.length) % testimonials.length);
  }, []);

  const goBy = useCallback((step: number) => {
    setActive((idx) => (idx + step + testimonials.length) % testimonials.length);
  }, []);

  const finishSwipe = useCallback(
    (deltaX: number, deltaY: number) => {
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (absX < SWIPE_MIN_DISTANCE || absX <= absY * SWIPE_AXIS_LOCK) {
        return false;
      }

      lastSwipeAtRef.current = Date.now();
      goBy(deltaX < 0 ? 1 : -1);
      return true;
    },
    [goBy],
  );

  const handlePointerDown = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    if (event.pointerType === "mouse" && event.button !== 0) return;

    swipeRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
    };
    capturePointer(event.currentTarget, event.pointerId);
  }, []);

  const handlePointerEnd = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (event.pointerType === "touch") return;

      const swipe = swipeRef.current;

      if (swipe.pointerId !== event.pointerId) return;

      const deltaX = event.clientX - swipe.startX;
      const deltaY = event.clientY - swipe.startY;

      releasePointer(event.currentTarget, event.pointerId);
      swipeRef.current.pointerId = null;

      finishSwipe(deltaX, deltaY);
    },
    [finishSwipe],
  );

  const handlePointerCancel = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (swipeRef.current.pointerId !== event.pointerId) return;

    releasePointer(event.currentTarget, event.pointerId);
    swipeRef.current.pointerId = null;
  }, []);

  const handleTouchStart = useCallback((event: TouchEvent<HTMLDivElement>) => {
    if (event.touches.length !== 1) {
      touchRef.current = null;
      return;
    }

    const touch = event.touches[0];
    touchRef.current = {
      startX: touch.clientX,
      startY: touch.clientY,
    };
  }, []);

  const handleTouchEnd = useCallback(
    (event: TouchEvent<HTMLDivElement>) => {
      const touchStart = touchRef.current;
      const touch = event.changedTouches[0];

      touchRef.current = null;
      if (!touchStart || !touch) return;

      finishSwipe(touch.clientX - touchStart.startX, touch.clientY - touchStart.startY);
    },
    [finishSwipe],
  );

  const handleStageClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (Date.now() - lastSwipeAtRef.current < 350) return;

      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      goBy(x < rect.width / 2 ? -1 : 1);
    },
    [goBy],
  );

  const t = testimonials[active];
  const activeDot = active % DOT_COUNT;

  return (
    <>
      <div className={`home-testimonial-shell home-testimonial-shell--${variant} mt-10 ${className}`}>
        <button
          aria-label="Previous testimonial"
          className="home-testimonial-arrow home-testimonial-arrow--left"
          onClick={() => go(active - 1)}
          type="button"
        >
          <TestimonialArrowIcon direction="left" />
        </button>
        <div
          className="home-testimonial-stage"
          onClick={handleStageClick}
          onPointerCancel={handlePointerCancel}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerEnd}
          onTouchEnd={handleTouchEnd}
          onTouchStart={handleTouchStart}
        >
          <TestimonialCard
            className="home-testimonial-animate is-active"
            key={active}
            testimonial={t}
          />
        </div>
        <button
          aria-label="Next testimonial"
          className="home-testimonial-arrow home-testimonial-arrow--right"
          onClick={() => go(active + 1)}
          type="button"
        >
          <TestimonialArrowIcon direction="right" />
        </button>
      </div>
      <div className="home-testimonial-dots mt-5">
        {Array.from({ length: DOT_COUNT }).map((_, i) => (
          <span
            aria-label={`Go to testimonial set ${i + 1}`}
            className={i === activeDot ? "is-active" : ""}
            key={i}
            onClick={() => go(i)}
            role="button"
            tabIndex={0}
          />
        ))}
      </div>
    </>
  );
}
