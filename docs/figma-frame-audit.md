# HYBR Figma Frame Audit

Source file: `Developer Docs - HYBR 2.2 (Copy)`
File key: `irwoOsI5lJ29SCm4Srz8Ye`
Page inspected: `Mockups`
Audit date: 2026-05-10

## Live File Status

- Live Figma access is working through the Figma MCP tools.
- The file has 1 page named `Mockups`.
- There are 75 top-level frames on that page.
- Visible node totals across those frames:
  - 19,462 descendants
  - 5,761 text nodes
  - 654 image-fill nodes
  - 5,260 vector-like nodes
  - 1,455 component/component-instance nodes

## Design Foundations

- Target widths in the file are 1440 desktop, 1280 tablet horizontal, 800 tablet vertical, and 390 mobile.
- These targets are design canvases, not just breakpoint examples. On screens wider than a target, the site should preserve the intended Figma composition instead of stretching the layout endlessly.
- Main fonts are Montserrat, Raleway, and Inter.
- Most common text styles include:
  - Montserrat Medium 16
  - Montserrat SemiBold 16 and 20
  - Raleway Medium 32 and 40
  - Montserrat Medium 20 and 24
- Dominant colors:
  - `#ffffff`
  - `#000000`
  - `#196ab4`
  - `#648c2d`
  - `#8dc540`
  - `#858688`
  - `#cbe4a7`
  - `#343330`
  - `#4fc2f0`
- Common radii are 0, 100, 16, 24, 1000, and 8.
- The inspected file has no local paint styles, no local text styles, and no local variable collections. The implementation needs to derive tokens from actual node values.
- Subscribed libraries include Material 3 Design Kit, Simple Design System, and Apple UI kits, but the HYBR site UI is primarily custom frames/components rather than a clean local design-token library.

## Repeated Component Families

Important repeated Figma component/instance names:

- Header/footer variants: `Light//Header Test`, `Mobile Light//Header Test`, `Tablet, Horizontal: Light Header`, `Tablet, Vertical: Light Header`, `Footer Test Component`, `Footer Test - Mobile`.
- Navigation/action components: `Button Test`, `Sharp Button Test`, `Black Button Test (Sections)`, `Section Navigation`.
- Content cards: `News Card - V2`, `Webinar Card - Default`, `Case Study Card - Feature V2/V3`, `Discover Mini Card`, `Develop Mini Card`, `Deploy Mini Card`.
- Team components: `Employee info card`, `Tablet, Vertical: Employee info card`.
- Utility/logo components: social logos, `Sliding Animation`, `search`, `keyboard_arrow_down`, arrows, service icons.

## Frame Inventory

### Homepage

| Frame ID | Name | Size | Notes |
| --- | --- | --- | --- |
| `1:11298` | Desktop - Homepage Mockup | 1440x11130 | Main desktop homepage. |
| `1:15653` | Tablet, Horizontal - Homepage | 1280x10631 | Horizontal tablet homepage. |
| `1:16485` | Tablet, Vertical - Homepage | 800x12504 | Vertical tablet homepage. |
| `1:11082` | Mobile - Webinars, Mockup | 390x12562 | Actually the mobile homepage, despite the misleading frame name. |

### Who We Are

| Frame ID | Name | Size |
| --- | --- | --- |
| `1:5284` | Desktop - Who We Are Mockup | 1440x5661 |
| `1:7893` | Tablet, Horizontal - Who We Are | 1280x5070 |
| `1:9555` | Tablet, Vertical - Who We Are | 800x5963 |
| `1:5939` | Mobile - Who We Are, Mockup | 390x7918 |

### About Us

| Frame ID | Name | Size |
| --- | --- | --- |
| `1:4412` | Desktop - About Us | 1440x7757 |
| `1:9463` | Tablet, Horizontal - About Us | 1280x7341 |
| `1:10989` | Tablet, Vertical - About Us | 800x8228 |
| `1:6745` | Mobile - About Us, Mockup | 390x8568 |

### Our Team

| Frame ID | Name | Size | Notes |
| --- | --- | --- | --- |
| `1:5708` | Desktop - Our Team Mockup | 1440x6601 | Shorter desktop team page. |
| `1:5792` | Desktop - Our Team Mockup | 1440x15739 | Expanded desktop team page with many employee cards. |
| `1:9390` | Tablet, Horizontal - Our Team | 1280x6091 | Tablet horizontal. |
| `1:10917` | Tablet, Vertical - Our Team | 800x6237 | Tablet vertical. |
| `1:7611` | Mobile - Our Team, Mockup | 390x8893 | Mobile team page. |

### Careers

| Frame ID | Name | Size |
| --- | --- | --- |
| `1:3353` | Desktop - Careers, Animation Tests | 1440x8350 |
| `1:9171` | Tablet, Horizontal - Careers | 1280x7645 |
| `1:10699` | Tablet, Vertical - Careers | 800x9098 |
| `1:7383` | Mobile - Careers, Mockup | 390x10545 |

### What We Do

| Frame ID | Name | Size |
| --- | --- | --- |
| `1:3587` | Desktop - What We Do Mockup | 1440x6692 |
| `1:8253` | Tablet, Horizontal - What We Do | 1280x6601 |
| `1:9771` | Tablet, Vertical - What We Do | 800x7975 |
| `1:6096` | Mobile - What We Do, Mockup | 390x9032 |

### Our Services

| Frame ID | Name | Size |
| --- | --- | --- |
| `1:4535` | Desktop - Our Services Mockup | 1440x4581 |
| `1:8373` | Tablet, Horizontal - Our Services | 1280x4318 |
| `1:9900` | Tablet, Vertical - Our Services | 800x5347 |
| `1:6568` | Mobile - Our Services, Mockup | 390x5420 |

### Our Work Listing

| Frame ID | Name | Size |
| --- | --- | --- |
| `1:4686` | Desktop - Our Work Mockup | 1440x3302 |
| `1:8506` | Tablet, Horizontal - Our Work | 1280x2991 |
| `1:10033` | Tablet, Vertical - Our Work | 800x3500 |
| `1:6950` | Mobile - Our Work, Mockup | 390x3681 |

### Case Study Detail

| Frame ID | Name | Size | Notes |
| --- | --- | --- | --- |
| `1:4835` | Desktop - Case Study Template Mockup | 1440x3402 | Cover/section navigation view with "View as Single Page Report". |
| `1:4973` | Desktop - Case Study Template Mockup | 1440x5855 | Longer reading view with sections. |
| `1:8869` | Tablet, Horizontal - Case Study Template | 1280x3402 | Tablet horizontal variant. |
| `1:8936` | Tablet, Horizontal - Case Study Template | 1280x5145 | Tablet horizontal long variant. |
| `1:10397` | Tablet, Vertical - Case Study Template | 800x3552 | Tablet vertical variant. |
| `1:10465` | Tablet, Vertical - Case Study Template | 800x5731 | Tablet vertical long variant. |
| `1:7123` | Mobile - Specific Case Study, Mockup | 390x5584 | Mobile case-study detail. |
| `1:7034` | Mobile - Our Work, Mockup | 390x3688 | Actually a mobile case-study section/report view, despite the misleading frame name. |

### Our Impact

| Frame ID | Name | Size |
| --- | --- | --- |
| `1:14161` | Desktop - Our Impact Mockup | 1440x5213 |
| `1:14409` | Tablet, Horizontal - Our Impact | 1280x4910 |
| `1:14523` | Tablet, Vertical - Our Impact | 800x6524 |
| `1:14285` | Mobile - Our Impact, Mockup | 390x6063 |

### Insights Hub

| Frame ID | Name | Size |
| --- | --- | --- |
| `1:14637` | Desktop - Insights Mockup | 1440x6124 |
| `1:14928` | Tablet, Horizontal - Insights | 1280x5830 |
| `1:15057` | Tablet, Vertical - Insights | 800x7720 |
| `1:14775` | Mobile - Insights, Mockup | 390x5996 |

### Articles Listing

| Frame ID | Name | Size |
| --- | --- | --- |
| `1:4009` | Desktop - Articles | 1440x4893 |
| `1:8684` | Tablet, Horizontal - Articles | 1280x4399 |
| `1:10211` | Tablet, Vertical - Articles | 800x5254 |
| `1:6364` | Mobile -Articles, Mockup | 390x4521 |

### Article Detail

| Frame ID | Name | Size |
| --- | --- | --- |
| `1:4122` | Desktop - Articles Template | 1440x5187 |
| `1:9014` | Tablet, Horizontal - Articles Template | 1280x6013 |
| `1:10542` | Tablet, Vertical - Articles Template | 800x6286 |
| `1:7219` | Mobile - Specific Article Template, Mockup | 390x5194 |

### News Listing

| Frame ID | Name | Size |
| --- | --- | --- |
| `1:4293` | Desktop - News | 1440x4743 |
| `1:8775` | Tablet, Horizontal - News | 1280x4399 |
| `1:10302` | Tablet, Vertical - News | 800x5410 |
| `1:6465` | Mobile -News, Mockup | 390x4742 |

### News Detail

| Frame ID | Name | Size |
| --- | --- | --- |
| `1:4209` | Desktop - News Template | 1440x5187 |
| `1:9095` | Tablet, Horizontal - News Template | 1280x5621 |
| `1:10623` | Tablet, Vertical - News Template | 800x6000 |
| `1:7300` | Mobile - Specific News Template, Mockup | 390x5303 |

### Webinars Listing

| Frame ID | Name | Size |
| --- | --- | --- |
| `1:3727` | Desktop - Webinars | 1440x4233 |
| `1:8575` | Tablet, Horizontal - Webinars | 1280x4287 |
| `1:10102` | Tablet, Vertical - Webinars | 800x5660 |
| `1:6235` | Mobile - Webinars, Mockup | 390x6102 |

### Webinar Detail

| Frame ID | Name | Size |
| --- | --- | --- |
| `1:15187` | Desktop - Webinars | 1440x2359 |
| `1:15316` | Tablet, Horizontal - Webinars | 1280x4005 |
| `1:15420` | Tablet, Vertical - Webinars | 800x4775 |
| `1:15523` | Mobile - Webinars, Mockup | 390x3987 |

### Standalone Frames

| Frame ID | Name | Size | Notes |
| --- | --- | --- | --- |
| `1:3710` | Light//Header Test 6 | 1440x152 | Standalone header test frame. |
| `8:8720` | Sitemap Overview | 1774x1024 | Contains table/connectors for sitemap overview. |

## Website Coverage Observed

The Next.js app currently has these routes:

- `/`
- `/who-we-are`
- `/who-we-are/about-us`
- `/who-we-are/our-team`
- `/who-we-are/careers`
- `/what-we-do`
- `/what-we-do/services`
- `/what-we-do/products`
- `/what-we-do/our-work`
- `/what-we-do/our-impact`
- `/case-studies/one-liner`
- `/insights`
- `/insights/articles`
- `/insights/articles/specific-article`
- `/insights/news`
- `/insights/news/specific-news`
- `/insights/webinars`
- `/contact`
- `/resources/innovation-guide`

Build status:

- `npm.cmd run build` passes when network access is available for Next font fetching.
- The first sandboxed build failed only because Google font files could not be fetched.

## Structural Gaps To Resolve

- Figma has a webinar-detail design set, but the app currently has no matching route such as `/insights/webinars/specific-webinar`.
- The app has `/what-we-do/products`, `/contact`, and `/resources/innovation-guide`, but the inspected Figma top-level frames do not include dedicated full-page designs for those pages. The products frame is pending from design, so `/what-we-do/products` should remain provisional until that frame arrives.
- The mobile homepage frame is mislabeled as `Mobile - Webinars, Mockup` (`1:11082`).
- One mobile case-study detail/report frame is mislabeled as `Mobile - Our Work, Mockup` (`1:7034`).
- The team page has two desktop variants. The longer one (`1:5792`) appears to be the fuller implementation target because it includes expanded employee card sections.
- The case-study detail page has alternate section/single-page views across desktop, tablet, and mobile. Implementation should decide whether both views are interactive states or separate layouts.
- WordPress is not wired yet. `src/lib/cms.ts` currently returns local content and only contains a placeholder branch for `WORDPRESS_API_URL`.
- Current inner pages use shared React components and broadly match the route structure, but they should be audited frame-by-frame before considering them complete.

## Implementation Order Recommendation

1. Extract shared components from Figma: header, footer, buttons, content drop menu, listing controls, search, cards, service cards, impact stats, and team cards.
2. Lock the responsive breakpoints to the Figma widths: 390, 800, 1280, and 1440.
3. Finish the homepage parity first because it already has the most complete implementation and asset coverage.
4. Implement route families in this order: Who We Are, What We Do, Insights, listing pages, detail templates, careers/team.
5. Add the missing webinar-detail route if the Figma detail frames are in scope.
6. Confirm what to do with products, contact, and innovation guide because they do not have dedicated inspected Figma frames.
7. Move editable copy/media into a WordPress-ready content model after the layout is stable.
