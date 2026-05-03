# Project progress

Running log of what’s done, what’s in flight, and what’s next for the React website.

## Current status

**Phase:** HS resources page — brochure-aligned content

**Summary:** `/hs-resources` reflects the thank-you pamphlet: Navigating HS hero, both brochure PNGs in `web/public/hs-resources/`, What is HS, toolkit pills, myths/facts panel, research impact, Skin Deep contact block, and four partner resource cards (Papaya, AHSID, HS Connect, HS Foundation). Org **logo images** on cards are still initials until branded assets are supplied.

## Completed

| Date | Item | Notes |
|------|------|-------|
| 2026-04-01 | `docs/GOAL.md` & `docs/PROGRESS.md` | Goals updated for HS resources + pamphlet alignment |
| 2026-04-01 | `/hs-resources` page | `web/src/pages/HSResources.tsx` — two sections, TOC, org cards with text logo placeholders |
| 2026-04-01 | Routing & nav | `App.tsx` route; `Layout.tsx` nav label “HS resources”; home page link from HS blurb |
| 2026-04-01 | Styles | `index.css` — resource grid + org cards |
| 2026-04-01 | Pamphlet sync | Brochure copy, toolkit pills, myths/facts, Skin Deep block, four orgs; PNGs copied to `web/public/hs-resources/` |

## In progress

- Verify **@HSGenetics** social profile URLs and swap in **org logos** when approved.

## Blocked / waiting

- Optional: **QR asset** or landing URL for “Finding clarity, care and community” if that should live on the site (currently points users to the printed pamphlet QR).

## Next steps

1. Replace org-card initials with **official logos** (`<img>` per org) under `web/public/hs-resources/logos/`.
2. Proofread with clinical/lab leads (especially **product names** in the toolkit section).
3. Run `npm run build` in `web/` before deploy; confirm hosting path for the site.

## Decisions log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-01 | Route slug `/hs-resources` | Short, descriptive URL; matches page title |
| 2026-04-01 | Placeholder “logos” as initials in a box | PDF could not be read as text here; avoids shipping unlicensed raster art |
| 2026-04-01 | External org links | Matches pamphlet partners (Papaya, AHSID, HS Connect, HS Foundation) |
| 2026-04-01 | Brochure PNGs in-repo | User-supplied spreads copied into `web/public/hs-resources/` for faithful visuals |

## Notes & links

- Brochure reference: `HS Thank-You Pamphlet FINAL.pdf` (e.g. under `Downloads/` on stakeholder machines).
- HS Foundation patient organizations hub (for cross-checking links): https://www.hs-foundation.org/patient-organizations
- App entry: `web/src/main.tsx`, routes in `web/src/App.tsx`.

---

*Last updated: 2026-04-01*
