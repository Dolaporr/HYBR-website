import Script from "next/script";

const CAROUSEL_DELAY_MS = 5500;

export type ServiceTestimonial = {
  avatar: string;
  background: string;
  id: string;
  name: string;
  quote: string;
  role: string;
};

function ArrowButton({
  direction,
}: {
  direction: "left" | "right";
}) {
  return (
    <button
      aria-label={`${direction === "left" ? "Previous" : "Next"} testimonial`}
      className={`services-carousel-arrow is-${direction}`}
      data-carousel-action={direction === "left" ? "previous" : "next"}
      type="button"
    >
      <svg aria-hidden="true" fill="none" viewBox="0 0 64 64">
        {direction === "left" ? (
          <path
            d="M39 18L25 32L39 46"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        ) : (
          <path
            d="M25 18L39 32L25 46"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        )}
      </svg>
    </button>
  );
}

export function ServicesTestimonials({
  testimonials,
}: {
  testimonials: ServiceTestimonial[];
}) {
  const active = testimonials[0];
  const next = testimonials[1] ?? active;
  const serializedTestimonials = JSON.stringify(testimonials).replace(/</g, "\\u003c");

  if (!active) {
    return null;
  }

  return (
    <section
      aria-label="Client testimonial carousel"
      className="services-testimonial-card"
      data-services-testimonials=""
    >
      <span
        aria-hidden="true"
        className="services-testimonial-bg"
        style={{ backgroundImage: `url(${active.background})` }}
      />
      <span
        aria-hidden="true"
        className="services-testimonial-preview"
        style={{ backgroundImage: `url(${next.background})` }}
      />
      <div
        aria-live="polite"
        className="services-testimonial-inner"
      >
        <div className="services-testimonial-avatar">
          <span />
          <img alt="" src={active.avatar} />
        </div>
        <div className="services-testimonial-copy">
          <p>&ldquo;{active.quote}&rdquo;</p>
          <div>
            <strong>{active.name}</strong>
            <span>{active.role}</span>
          </div>
        </div>
      </div>
      <ArrowButton direction="left" />
      <ArrowButton direction="right" />
      <div className="services-carousel-dots" role="tablist">
        {testimonials.map((testimonial, index) => (
          <button
            aria-label={`Show testimonial ${index + 1}`}
            aria-selected={index === 0}
            className={index === 0 ? "is-active" : ""}
            data-carousel-index={index}
            key={testimonial.id}
            role="tab"
            type="button"
          />
        ))}
      </div>
      <Script id="services-testimonials-carousel" strategy="afterInteractive">
        {`
(() => {
  const testimonials = ${serializedTestimonials};
  const total = testimonials.length;
  if (!total) return;

  document.querySelectorAll('[data-services-testimonials]').forEach((root) => {
    if (root.dataset.carouselReady === 'true') return;
    root.dataset.carouselReady = 'true';

    const bg = root.querySelector('.services-testimonial-bg');
    const avatar = root.querySelector('.services-testimonial-avatar img');
    const quote = root.querySelector('.services-testimonial-copy p');
    const name = root.querySelector('.services-testimonial-copy strong');
    const role = root.querySelector('.services-testimonial-copy span');
    const preview = root.querySelector('.services-testimonial-preview');
    const dots = Array.from(root.querySelectorAll('.services-carousel-dots button'));
    let activeIndex = 0;
    let timerId = null;
    let swipeStart = null;
    let lastSwipeAt = 0;

    const render = (nextIndex) => {
      activeIndex = (nextIndex + total) % total;
      const item = testimonials[activeIndex];
      const nextItem = testimonials[(activeIndex + 1) % total];
      if (!item) return;

      if (bg) bg.style.backgroundImage = 'url(' + item.background + ')';
      if (preview && nextItem) preview.style.backgroundImage = 'url(' + nextItem.background + ')';
      if (avatar) avatar.src = item.avatar;
      if (quote) quote.textContent = '\\u201c' + item.quote + '\\u201d';
      if (name) name.textContent = item.name;
      if (role) role.textContent = item.role;

      dots.forEach((dot, index) => {
        const selected = index === activeIndex;
        dot.classList.toggle('is-active', selected);
        dot.setAttribute('aria-selected', String(selected));
      });
    };

    const restartTimer = () => {
      if (timerId) window.clearInterval(timerId);
      if (total < 2) return;
      timerId = window.setInterval(() => render(activeIndex + 1), ${CAROUSEL_DELAY_MS});
    };

    root.addEventListener('click', (event) => {
      const target = event.target instanceof Element
        ? event.target.closest('[data-carousel-action], [data-carousel-index]')
        : null;

      if (!target || !root.contains(target)) return;

      event.preventDefault();
      event.stopPropagation();

      if (target.dataset.carouselAction === 'previous') {
        render(activeIndex - 1);
      } else if (target.dataset.carouselAction === 'next') {
        render(activeIndex + 1);
      } else if (target.dataset.carouselIndex) {
        render(Number(target.dataset.carouselIndex));
      }

      restartTimer();
    });

    root.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse' || !event.isPrimary) return;
      swipeStart = { x: event.clientX, y: event.clientY };
    }, { passive: true });

    root.addEventListener('pointerup', (event) => {
      if (event.pointerType === 'mouse' || !event.isPrimary || !swipeStart) return;

      const now = Date.now();
      const deltaX = event.clientX - swipeStart.x;
      const deltaY = event.clientY - swipeStart.y;
      swipeStart = null;

      if (now - lastSwipeAt < 250 || Math.abs(deltaX) < 44 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) {
        return;
      }

      lastSwipeAt = now;
      render(deltaX < 0 ? activeIndex + 1 : activeIndex - 1);
      restartTimer();
    }, { passive: true });

    render(0);
    restartTimer();
  });
})();
        `}
      </Script>
    </section>
  );
}
