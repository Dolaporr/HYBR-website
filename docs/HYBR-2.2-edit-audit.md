# HYBR 2.2 internal edit audit

## Scope reviewed

Source: **Developer Docs: HYBR 2.2 | Internal Edit Doc**, from the Careers form note on page 18 through the final mobile review pages. The document contains a repeated desktop reference section; duplicate notes were consolidated in this audit.

## Implemented and ready to deploy

### Careers

- Updated the careers form treatment so the fields and submit button use the requested Montserrat-based styling.
- Reworked responsive Careers spacing and alignment: the **Why Join** cards now align their icons, headings, and copy to the left; benefit cards have more consistent centering and spacing; and the desktop/mobile layouts no longer rely on the earlier overlapping positions.
- Kept the approved Ntukwasi A. testimonial copy and made the testimonial layout responsive. On narrow screens the portrait is kept at the top-centre; desktop retains the wider testimonial treatment.
- The temporary **Open Roles** section is already hidden in the deployed codebase until roles are ready.

### Our Team

- Removed the **View as Single Page** CTA, as requested.
- Removed the raised white backgrounds from the Core/Affiliates network description blocks.
- Made every item in the **Tiers** drawer select the relevant tier description, not merely scroll to the team section. The active tier is visibly marked and announced to assistive technology. The existing previous/next controls continue to cycle through the same four tiers.

### What We Do and Products

- Refined the What We Do content drawer geometry, responsive widths, centring, and dark image overlay.
- Tightened product-card layout and form actions so the email field, CTA, and form-status area stay readable at tablet and desktop widths.
- Product lead forms now collect an optional **Company** field alongside the existing product, lead-type, and email values. This field is registered in Netlify’s static form definitions for INDX, Flywheel, and Alpha.

### Our Work

- Restored the Figma case-study card details on desktop and mobile: each card now renders its client name at the lower-left and the white HYBR case-study mark at the upper-right. The content and responsive layout already matched the supplied Our Work reference frames; this closes the missing visual treatment without substituting coloured client logos for the HYBR mark.

### Insights, articles, news, and shared testimonials

- Adjusted mobile insight, article, news, and webinar card copy so it has a reserved action area and does not collide with the **Read More** button.
- Reduced text sizes where the two-column mobile article cards have substantially less room than full-width cards, while preserving title and summary readability.
- Restored the full-width mobile Spotlight and News cards to their 280px design height, reflowed the following sections, and reserved a fixed action area for **Read More**. This removes the long-card button collision and the unnecessary white gap before the footer.
- **Masterclass** is the approved product term. It remains unchanged across Insights; Figma's use of “Webinar” is not a copy-change instruction.
- Aligned Contact and Services shared testimonials to the established desktop carousel format and placed the mobile portrait correctly at the ring’s top-centre.

### Lead-capture payloads

- Added optional Company fields to the contact, homepage enquiry, Alpha access, INDX waitlist, and Flywheel waitlist forms.
- Updated `public/__forms.html` so Netlify detects those fields during deployment. This keeps submissions compatible with the automation/webhook setup.

## Verification completed

- `npm run build` completed successfully after Google Fonts could be reached.
- `npx tsc --noEmit --incremental false` completed successfully after the Team tier interaction change.
- `npm run lint` completed with **0 errors**. It reports 78 pre-existing Next.js `<img>` optimisation warnings; they do not block the build.

## Still needs a decision, asset, or source data

These items are intentionally not guessed from the PDF:

1. **Replacement imagery**: several notes say an image will come from Charles or refer to a Figma frame (About/Team imagery, specific case-study assets, and the product-page redesign). Those source assets are needed before an accurate implementation.
2. **Team roster data**: the tier labels now switch their explanatory copy, but the real Core, Associates, Affiliates, and Advisors member lists/bios/photos are not yet supplied. The current cards remain placeholder content.
3. **Search and filter rules**: the visual filter controls exist, but there is no agreed filter taxonomy, sorting order, or expected results dataset. Those controls should be wired once that behaviour is specified.
4. **Insights newsletter**: this form is visual only at present. It needs a destination/form name if it should become another automation trigger.
5. **Detailed Figma-only geometry**: several remaining page notes require exact Figma reference frames rather than a written dimensional instruction. Providing the relevant frame links will let us finish those without approximating the design.

## Deployment note

The Insights mobile spacing repair was committed as `481476d6` and pushed to `main`; Netlify can deploy it from that commit.
