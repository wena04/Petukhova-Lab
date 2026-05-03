# Website goal

This document describes what we intend to build. Update it as requirements become clear.

## Vision

The Petukhova Lab site supports **research communication** and **patient-facing information** about hidradenitis suppurativa (HS), including how to participate in studies and where to find trusted education and advocacy resources.

## Stack

- **Framework:** React (Vite + TypeScript + React Router in `web/`)
- **Other tools / hosting:** *(TBD)*

## Core features

- Lab home, publications, people, contact, and **Participate** (SkinDeep study) pages.
- **HS resources** (`/hs-resources`): patient guide aligned with the **NYU Grossman HS thank-you pamphlet**, including:
  - **Navigating HS** hero (“A patient guide to HS,” AHSID / HS Connect attribution) and brochure imagery in `public/hs-resources/`.
  - **What is HS?** — definition (auto-inflammatory / acne inversa), specialist finder link (`HS-Foundation.org/hs-specialty-clinics`).
  - **Your HS toolkit** — washes, topicals, wound care (HidraWear + `HidraWear.com`), with clinician disclaimer.
  - **HS facts & myths** — “NOT” list, “You are not alone,” HS fast facts, closing line.
  - **Research impact** — “Your skin. Your story. Your impact.” saliva-sample bullets and thank-you line.
  - **Skin Deep survey** block — `SkinDeep@nyulangone.org`, `917-244-2595`, @HSGenetics social links + link to Participate.
  - **HS resources** grid — HS Papaya, AHSID, HS Connect, HS Foundation with brochure copy; “Finding clarity, care and community” callout (QR referenced on print piece).

## Nice-to-have / later

- Replace **logo placeholders** on HS resources with official artwork from the pamphlet (with permission), stored under `web/public/hs-resources/` or similar.
- Match pamphlet **wording and layout** exactly once PDF copy is available in an editable form.
- Optional: printable or PDF version of the same resource list.

## Content & structure

| Route | Purpose |
|-------|---------|
| `/` | Lab overview, links to participate and HS resources |
| `/publications` | Publications |
| `/people` | Team |
| `/hs-resources` | Patient HS education + org logos/links + toolkit-style content |
| `/contact` | Contact including study coordinator |
| `/participate` | SkinDeep study details |

**Reference brochure:** `HS Thank-You Pamphlet FINAL.pdf` (local path on stakeholder machines) — use as the source of truth for toolkit text, org list, and logos.

## Design & UX

- Follow existing NYU-aligned styling in `web/src/index.css` (purple/mint palette, Outfit + Source Sans 3).
- Clear on-page navigation (jump links) for long patient pages.
- Accessible external links (`rel="noopener noreferrer"`), plain-language medical disclaimer where appropriate.

## Success criteria

- Patients can find **two clear sections** on HS resources: learning about HS (including toolkit-style content) and **connecting with organizations** (and the lab when needed).
- Navigation includes **HS resources** without burying it only in body copy.

## Open questions

- Confirm **@HSGenetics** Instagram/Facebook URLs if handles differ from `instagram.com/hsgenetics` and `facebook.com/hsgenetics`.
- Optional: add a **hosted QR** image for “Finding clarity, care and community” if a web destination is chosen.
- Whether partner orgs require **separate logo approvals** for the web (placeholders remain until assets are provided).

---

*Last updated: 2026-04-01*
