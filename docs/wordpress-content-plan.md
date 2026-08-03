# WordPress Content Plan

The Next.js app owns the visual UI, routing, animations, and responsive behavior.
WordPress should own the editable content that nontechnical team members need to change.

## Editable In WordPress

- Global navigation labels and footer links
- Homepage hero copy, trusted-by logos, services, impact stats, case studies, testimonials, insights, and CTA text
- Who We Are timeline entries, about copy, team teaser, and careers teaser
- What We Do services, products, work/case-study teasers, impact stats, and team CTA
- About Us, Our Team, Careers, Services, Products, Our Work, Our Impact page content
- Articles, news updates, webinars, case studies, authors, dates, durations, and featured images
- Contact details, lead forms, downloadable resources, and newsletter copy

## Locked In Next.js

- Page layouts and section composition
- Header/footer UI behavior
- Typography scale, colors, spacing, buttons, cards, and responsive rules
- Scroll animations and interactive UI
- Route structure and SEO rendering

## Integration Shape

The current local content lives in `src/content/site.ts`.
The bridge lives in `src/lib/cms.ts`.

When WordPress is ready, set `WORDPRESS_API_URL` and replace the local fallback in `getSiteContent()` with REST or GraphQL fetches.
