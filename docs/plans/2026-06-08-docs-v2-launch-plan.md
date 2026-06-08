# AdGem Publisher Docs v2 — Launch Plan (Handoff to Micah)

**Owner:** Micah (owns the entire remaining effort: content, IA, hosting, domain, sandbox)
**Date:** 2026-06-08
**Branch:** `rwhite/pub-191-docs-restructure-docs-ianav-to-gus-five-surface-model`
**IA source of truth:** "AdGem Publisher Docs v2 — Proposed Architecture" (Gus de Angelis, rev v5)
**Status of skeleton:** Built and committed at `592a1f1`. `npm run build` passes. 60 structure-only placeholder pages, five scoped sidebars, navbar rewired, homepage rebuilt, `/for-decision-makers` placeholder, footer chrome.

This is a single handoff plan, not a ticket set. It does not create Linear tickets. Existing tickets need reconciliation against this plan — see the appendix.

---

## What "v2" is (one screen)

Five top-level surfaces, each with its own sidebar scoped to that surface. Cross-surface movement happens through top nav, search, breadcrumbs, and "what's next" footers, never sidebar shortcuts.

1. **Get Started** — welcome, core-concepts, quickstart, decide-your-path
2. **Integrate** — two axes:
   - *Offer Delivery:* Pre-built (Web Offerwall `[Recommended]`, iOS SDK, Android SDK, Unity SDK) / Partner-built (Prism `[Recommended]`, Offer API)
   - *Reward Mechanism* (flat): Server-to-Server Postbacks v3 `[Recommended]`, Postbacks v2 `[Deprecated]`, Client-side Polling `[Deprecated]`, Third-party Integrations
   - Postbacks live in **Integrate**, not Configure.
3. **Configure** — webhooks, security, sandbox & test mode, customization, promotions
4. **Reference** — Prism-first: Prism (GraphQL), Offer API (REST), Reporting API (REST), Webhook Events, Error Codes
5. **Resources** — changelog, migrations, glossary, branding-assets

Naming: **Prism** replaces "Targeted API" everywhere (Prism = GraphQL surface; Offer API = REST surface). Sales-engineering page lives at `/for-decision-makers/`, **outside** `/docs/` (home rail + footer, not top nav). Badges are minimal: `[Recommended]` and `[Deprecated]` only.

---

## Phasing and critical path

```
WS1  Finalize IA skeleton ─┐
WS4  Component library ─────┼─► WS2  Content migration ─┐
WS3  Auto-gen Reference ────┘                           │
                                                        ├─► WS8  Redirects ─► WS10 Validation & launch
WS6  Amplify hosting ──► WS7 Custom domain ─────────────┤
WS5  Sandbox vetting ───────────────────────────────────┘
WS9  Search + chrome (parallel; NO global version selector — see WS9)
```

- **Unblock authoring first:** WS1 (lock structure), WS4 (lock component library with Iliana), WS3 (regenerate Reference) all gate WS2. Do them before bulk content work.
- **Hosting can run in parallel:** WS5/WS6/WS7 do not block content and should start early, because the sandbox diagnosis (WS5) is best done on Amplify and the redirect mechanism choice (WS8) depends on whether Amplify is live.
- **Redirects depend on final URLs** (WS1 + WS2) and on the hosting decision (WS6).
- **Validation/launch (WS10) is last** and gates go-live.

Suggested order: WS1 → (WS4 + WS3 in parallel) → WS2 → WS8 → WS10, with WS5/WS6/WS7/WS9 running alongside from the start.

---

## WS1 — Finalize the IA skeleton

**Goal:** Lock the five-surface structure so content authoring can begin without rework.

**Key tasks:**
- [ ] Resolve the Reference landing nit: `reference/index` should route to / default to the Prism overview (`reference/prism/overview`). Decision is LOCKED to keep per-surface landing pages; confirm the Reference landing either redirects or renders a Prism-first overview rather than a generic index.
- [ ] Postback slug: skeleton uses `postbacks-v3`; Gus' prototype used `server-postbacks-v3`; doc §3 says `postbacks-v3`. Keep `postbacks-v3`; confirm with Gus and lock it (this is a URL that the redirect map in WS8 depends on).
- [ ] Legal: **LOCKED — link out to `adgem.com/legal`. Legal copy does not live in this repo.** The skeleton already does this (footer link). Action is to confirm no legal `.mdx` pages get migrated into `docs/` (see WS2) and that PUB-205 is repointed/closed accordingly.
- [ ] Confirm `sidebars.ts` five scoped sidebars match the locked structure; confirm navbar `to:` targets in `docusaurus.config.ts` resolve after any landing-route change.
- [ ] Re-run `npm run build` after each structural change (`onBrokenLinks: "throw"` will catch dangling sidebar IDs).

**Dependencies:** None. This is the first task.

**Acceptance criteria:**
- `npm run build` passes with zero broken-link errors.
- Reference top-nav entry lands on Prism overview.
- Postback slug decision written down and reflected in `sidebars.ts`. Legal confirmed link-out (no legal pages in `docs/`).

**Open questions / risks:**
- None blocking. (Legal placement is settled: link out.)

**Linear:** PUB-191.

---

## WS2 — Content migration & reconciliation

**Goal:** Get real content into all five surfaces. Most of it already exists on `origin/main`; the first task is reconciliation, not fresh writing.

**Inventory (verified 2026-06-08):**
- **Already migrated on `origin/main`:** 85 content files under `docs/` (excludes `docs/plans/` and `docs/_partials/`). This count includes the auto-generated Offer API and Targeted API trees (see WS3 — those regenerate, they are not hand-migrated). Authored/hand-written prose pages number roughly 40 once the generated API trees are set aside.
- **Static-only (never migrated), backstop = `~/dev/adgem-static-documentation/publisher-support/docs/`:** the static set is 49 pages and is ~95% already represented on main. The genuine content gaps are:
  - `ad-units.md` — no equivalent on main.
  - `featured-ad-placements.md` — no equivalent on main (revenue ad unit; ~30% revenue-lift claim — verify before publishing).
  - Per-platform postback-setup pages (`android-`, `ios-`, `unity-`, `web-`, `api-postback-setup`) exist in static but were consolidated on main under `docs/webhooks/` (`postback-options`, `offer-api-postback-setup`). Confirm nothing platform-specific was dropped in the consolidation before relying on main alone.
  - Per-platform `*-changelog` and `*-integration-guide` pages in static map to the per-SDK `index.mdx` + `changelog.mdx` dirs on main — confirm parity, not re-migrate.
- **Player-support (separate audience, do NOT fold into publisher docs):** 6 pages in `~/dev/adgem-static-documentation/player-support/docs/` (`index`, `player-support-faq`, `player-terms-of-service`, `icloud`, `ios26-users`, `example-screenshots`). These belong to a separate instance per PUB-204/PUB-192. On main there is one bridge page (`docs/resources/player-support-overview.mdx`) that should link out, not host player content.

**Key tasks:**
- [ ] Produce a definitive remap table: every `origin/main` page (use `git ls-tree -r --name-only origin/main -- docs/`) → its new five-surface path. Save the table in this plan or alongside it; the redirect map (WS8) is derived from it.
- [ ] Migrate the static-only gaps (`ad-units`, `featured-ad-placements`) into the right surfaces (likely Configure or a Pre-built offer-wall page) or explicitly decide to drop them.
- [ ] Move migrated prose from old dirs (`getting-started/`, `integrations/`, `webhooks/`, `monetization/`, `offers/`, `configuration/`, `resources/`, `api-reference/`) into the new surfaces, filling the placeholder pages. **Exclude `legal/`** — legal links out to `adgem.com/legal` and is not migrated into this repo.
- [ ] Apply Prism naming globally: replace "Targeted API" with "Prism" in prose, titles, links, and frontmatter.
- [ ] Enforce postbacks-in-Integrate: webhook *configuration* stays in Configure; postback *integration* (v2/v3, polling, third-party) lives in Integrate.
- [ ] Rewrite every cross-link to the new URLs (these are the same links the redirect map protects externally).
- [ ] Confirm player-support stays out of the publisher instance; keep only the bridge/overview link.

**Dependencies:** WS1 (locked structure), WS4 (locked components so authored pages use final admonitions/badges/cards), WS3 (Reference trees regenerated so Reference cross-links resolve).

**Acceptance criteria:**
- No placeholder pages remain in any surface (or remaining stubs are explicitly tracked).
- Zero occurrences of "Targeted API" in authored content.
- `npm run build` passes; internal link check clean (WS10).
- Remap table exists and is the input to WS8.

**Open questions / risks:**
- "Already in QA" (PUB-205–209) means migration happened against the OLD structure on main. v2 re-homes those pages, so QA sign-off does not transfer — re-verify after remap.
- `featured-ad-placements` revenue claims need verification before publishing.

**Linear:** PUB-205 (legal — now link-out, repoint/close, see appendix), PUB-206 (resources/branding/glossary), PUB-207 (reporting API), PUB-208 (payment/monetization), PUB-209 (offer types/offer wall), PUB-204 (player-support separation).

---

## WS3 — Auto-generated Reference (OpenAPI + GraphQL)

**Goal:** Regenerate the API reference trees into their new Reference locations and rebrand the GraphQL surface to Prism. These trees were removed with the old content on this branch and must be regenerated.

**Current generator config (`docusaurus.config.ts`):**
- OpenAPI: `docusaurus-plugin-openapi-docs`, spec `examples/offer.yaml`, `outputDir: docs/integrations/offer-api`.
- GraphQL: `@graphql-markdown/docusaurus`, schema from `TARGETED_API_SCHEMA_URL` (+ `TARGETED_API_TOKEN`), `baseURL: integrations/targeted-api`, homepage `static/targeted-api.md`.

**Key tasks:**
- [ ] Re-point OpenAPI `outputDir` to `docs/reference/offer-api` and align the generated `sidebar.ts`/category structure with `referenceSidebar`.
- [ ] Re-point GraphQL `baseURL` to `reference/prism` and rename the homepage template (`static/targeted-api.md` → a Prism-branded file); update `homePage` accordingly.
- [ ] Rebrand all generated GraphQL output from "Targeted API" to "Prism" (titles, headings, intro copy in the template; confirm generated frontmatter).
- [ ] Run `npm run gen-api-docs` and `npm run graphql-to-doc`; wire the regenerated trees into `referenceSidebar` (the skeleton currently has hand-written placeholder schema pages under `reference/prism/schema/*` and `reference/offer-api/resources/*` — reconcile generated output against these placeholders).
- [ ] Decide how generated schema pages coexist with the hand-written Reference landing/overview pages that WS1 locked (overview pages stay; generated detail pages slot under them).
- [ ] Verify `TARGETED_API_SCHEMA_URL` / `TARGETED_API_TOKEN` are present in the build environment (and later in Amplify env vars — WS6).

**Dependencies:** WS1 (Reference landing route locked). Feeds WS2 (cross-links into Reference).

**Acceptance criteria:**
- `npm run gen-api-docs` and `npm run graphql-to-doc` succeed and output under `docs/reference/`.
- Reference sidebar shows Prism (GraphQL) and Offer API (REST) with generated detail pages; no "Targeted API" strings remain.
- `npm run build` passes.

**Open questions / risks:**
- GraphQL generation needs live schema-endpoint access + a valid token at build time. If Amplify can't reach the endpoint, generation must happen pre-build or be committed. Decide build-time vs commit-time generation (affects WS6 `amplify.yml`).
- The skeleton's hand-written schema placeholders may diverge from generator output naming — reconcile, don't duplicate.

**Linear:** maps loosely to PUB-207 (Reporting API) plus the Reference portions of PUB-191; no clean 1:1 ticket — flag in appendix.

---

## WS4 — Component library lock (with Iliana)

**Goal:** Freeze the doc component set so authored content (WS2) uses final building blocks and doesn't need a second pass.

**Key tasks:**
- [ ] Lock the component set with Iliana: admonitions (note/tip/warning/danger), `[Recommended]` / `[Deprecated]` badges (minimal set only — no other badges), card grids (used on homepage rails + chooser), code blocks with language tabs, and a page-summary callout.
- [ ] Confirm badge rendering: how `[Recommended]`/`[Deprecated]` appear in sidebar labels vs in-page headings (sidebar labels are plain strings in `sidebars.ts`, so badges in the sidebar need a CSS/swizzle approach — decide).
- [ ] Confirm the `languageTabs` set in `docusaurus.config.ts` matches what content actually needs (it currently lists ~19 languages; trim to the real set to reduce noise).
- [ ] Document conventions (voice, headings, when to use each admonition, badge rules) so authoring is consistent — this is the PUB-201 deliverable.

**Dependencies:** None hard, but must complete before bulk WS2 authoring to avoid rework. Coordinate with Iliana's design feedback.

**Acceptance criteria:**
- A short conventions/component doc exists and is approved by Iliana.
- Badge and admonition components render correctly in a sample page.
- `languageTabs` reflects the real language set.

**Open questions / risks:**
- Sidebar badge rendering in Docusaurus is non-trivial (labels are strings); may need a theme swizzle. Scope this early.

**Linear:** PUB-201.

---

## WS5 — Sandbox / interactive vetting

**Goal:** Make the existing interactive piece work, then plan the `/configure/sandbox` page + chrome-level Test-mode toggle.

**Background:** Ron tried the interactive sandbox (likely the GraphiQL playground and/or OpenAPI try-it) on GitHub Pages and it did NOT work. Root cause unknown — candidates: environmental, `baseUrl`, CORS to the API endpoint, or the GH Pages host itself.

**Key tasks:**
- [ ] Reproduce the failure on the current GH Pages deploy; capture the exact error (console, network).
- [ ] Diagnose against the candidate causes: `baseUrl`/asset path under the GH Pages subpath, CORS from the docs origin to the Prism/Offer API endpoints, mixed content, or auth/token injection.
- [ ] Re-test the same interactive piece on Amplify (WS6) — a different host/origin may resolve CORS or path issues. This is the preferred environment to vet on.
- [ ] Confirm the playground page (`reference/prism/playground`) and any OpenAPI try-it render and execute against a reachable endpoint.
- [ ] Plan (not necessarily build now) the `/configure/sandbox` page and the Stripe-style Test-mode toggle that swaps code samples to test credentials site-wide. Treat as the eventual target; immediate task is "make the existing thing work."

**Dependencies:** Best done on Amplify (WS6) for a clean origin. Can start diagnosis on GH Pages immediately.

**Acceptance criteria:**
- Root cause of the GH Pages failure is identified and documented.
- The interactive sandbox executes a real request successfully on at least one vetted host (ideally Amplify).
- A written proposal exists for `/configure/sandbox` + Test-mode toggle.

**Open questions / risks:**
- CORS may require a change on the API side (not just docs) — may need backend coordination.
- Test-mode toggle is a larger build (global chrome state + sample swapping); keep scoped separately from the immediate fix.

**Linear:** no dedicated ticket exists — flag in appendix to create one (or fold into PUB-191).

---

## WS6 — Hosting on AWS Amplify

**Goal:** Move hosting off GitHub Pages to AWS Amplify with PR previews.

**Infra facts from Ron's notes — VERIFY before relying on them:**
- AWS account `172122050326` (verify)
- Region `us-east-2` (verify)
- The AWS account is all click-ops — **NO CDK/IaC** (verify)

**Key tasks:**
- [ ] Set up the Amplify app via click-ops (no IaC), connected to this repo.
- [ ] Add an `amplify.yml` build config to the repo (`npm ci` → `gen-api-docs` + `graphql-to-doc` if generating at build time per WS3 → `npm run build`; artifacts from `build/`).
- [ ] Set Amplify env vars: `DOCUSAURUS_URL`, `DOCUSAURUS_BASE_URL` (Amplify serves at root, so `baseUrl` becomes `/` — this differs from the GH Pages subpath and is a likely WS5 fix), `TARGETED_API_SCHEMA_URL`, `TARGETED_API_TOKEN`.
- [ ] Enable Amplify PR previews; plan to retire the existing GitHub Pages `pr-preview/pr-{number}/` workflow once Amplify previews are confirmed working.
- [ ] Decide build-time vs commit-time API doc generation (depends on whether Amplify can reach the schema endpoint — see WS3).

**Dependencies:** Feeds WS5 (vet sandbox here), WS7 (domain points at Amplify), WS8 (Amplify redirects are one of the two mechanisms).

**Acceptance criteria:**
- Amplify builds and serves the site at the default Amplify domain.
- `baseUrl` is correct for root serving (no broken assets).
- PR preview deploys on a test PR.
- GH Pages workflow retirement is planned (not necessarily removed until cutover).

**Open questions / risks:**
- `baseUrl` change from `/adgem-integrations-documentation/` to `/` must be handled via env var, not hardcoded — confirm both hosts can coexist during transition.
- Click-ops means no reproducible infra — document the console steps in a runbook.

**Linear:** PUB-199.

---

## WS7 — Custom domain (docs.adgem.com)

**Goal:** Serve the site at `docs.adgem.com` with TLS.

**Infra facts from Ron's notes — VERIFY:** domain `docs.adgem.com` (verify ownership/DNS control).

**Key tasks:**
- [ ] Add `docs.adgem.com` as a custom domain in Amplify.
- [ ] Create the DNS records (CNAME/ANAME) — note adgem.com is managed on WP Engine/WordPress per project history; coordinate with whoever controls DNS (Iliana's side).
- [ ] Provision/verify the TLS certificate (Amplify-managed ACM).
- [ ] Update `DOCUSAURUS_URL` to `https://docs.adgem.com` once live; confirm canonical URLs and sitemap reflect the new domain.

**Dependencies:** WS6 (Amplify app must exist).

**Acceptance criteria:**
- `https://docs.adgem.com` serves the site with a valid cert.
- Canonical/sitemap URLs use the custom domain.

**Open questions / risks:**
- DNS is controlled outside this team (WordPress/WP Engine side) — lead time on records.

**Linear:** PUB-199 (same ticket as hosting).

---

## WS8 — Redirects (old → new)

**Goal:** Every URL changes in v2. Protect inbound links and SEO with a complete old→new redirect map.

**Key tasks:**
- [ ] Build the full explicit redirect map from the enumerated CURRENT production URLs. Source the old URL list from `git ls-tree -r --name-only origin/main -- docs/` (the structure still live on main). Derive the new targets from the WS2 remap table.
- [ ] Cover at minimum (Gus' high-level mapping):
  - old API paths → `/docs/reference/`
  - old Targeted API (`/docs/integrations/targeted-api/*`) → `/docs/reference/prism/*` and `/docs/integrate/offer-delivery/partner-built/prism`
  - old postback pages (`/docs/webhooks/*postback*`) → `/docs/integrate/reward-mechanism/postbacks-v3`
  - old glossary/changelog/branding (`/docs/resources/*`, `/docs/offers/*`) → `/docs/resources/*`
  - old `/docs/getting-started` → `/docs/get-started/*`
  - old `/docs/integrations/web-offerwall` → `/docs/integrate/offer-delivery/pre-built/web-offerwall`
  - old `/docs/monetization`, `/docs/configuration` → their v2 homes
  - old `/docs/legal/*` → external `https://adgem.com/legal` (legal is link-out, not a v2 page)
- [ ] Evaluate the two mechanisms and pick (or combine):
  - **Docusaurus client redirects** (`@docusaurus/plugin-client-redirects`) — versioned in-repo, works on any host, but client-side (a flash + weaker SEO signal than a 301).
  - **Amplify rewrites/redirects** — true 301s, host-level, better for SEO, but click-ops config tied to Amplify (WS6).
- [ ] Recommended: Amplify 301s for SEO-critical top-level paths + Docusaurus client redirects as a portable fallback. Confirm with whoever owns SEO.

**Dependencies:** WS1 + WS2 (final URLs), WS6 (if using Amplify redirects).

**Acceptance criteria:**
- Every old production URL resolves (200 or 301) to a live v2 page — no 404s for known old paths.
- Redirect QA passes in WS10.

**Open questions / risks:**
- Mixed mechanism can double-redirect — test the interaction.
- Trailing-slash behavior (`trailingSlash: false` today) must match between Docusaurus and Amplify rules.

**Linear:** no dedicated ticket — flag in appendix (tie to PUB-199 or new).

---

## WS9 — Search + chrome

**Goal:** Add the chrome present in Gus' prototype but missing from the skeleton.

**Key tasks:**
- [ ] **Algolia DocSearch** — apply for/configure DocSearch; add the `themeConfig.algolia` block; verify crawl scope covers `docs.adgem.com`.
- [ ] **Dashboard link** — add to navbar (right side), pointing at the publisher dashboard URL (verify the URL).
- [ ] **Status indicator dot** — small status component in chrome wired to `status.adgem.com` (footer already links it; prototype shows a live dot).
- [ ] **NOT DOING: a global version selector.** Decision (Ron, locked): there is no single global "version" axis to toggle, so we are not shipping a navbar version selector. Rationale: Docusaurus's native selector versions the *whole* docs instance as one unit, but AdGem's versioning is local to independent axes — SDKs version on their own cadences, the APIs (Offer/Prism/Reporting) are a single live surface with no v1/v2 today, postback v2/v3 already coexist as sibling pages with `[Recommended]`/`[Deprecated]` + a migration guide, and Configure is unversioned. A global toggle would map to nothing real and would wrongly hide current content. Handle each axis where it lives instead:
  - APIs: nothing now; when a breaking v2 ships, version by URL path (`/reference/offer-api/v2/…`, per Gus §10) with a selector scoped to that API only.
  - Postbacks: keep the sibling-page model. No selector.
  - "What changed" surface: the site-wide Changelog at `/resources/changelog` (WS2/Resources).
  - SDKs: ship "latest + per-SDK Changelog" (the per-platform changelogs already exist in source). A *scoped* per-SDK version dropdown is a possible future, not a launch item, and only if partners need to read docs for pinned older versions.
  - The "v2" pill in Gus' prototype reads as docs-generation v2 (this relaunch) vs the current site as v1; we are not maintaining a live v1 site after launch (WS8 redirects cover old URLs), so there is no v1/v2 site toggle to keep.
  - If Gus wants to revisit, he takes it up with Ron.

**Dependencies:** Search needs the production domain (WS7) for crawl scope.

**Acceptance criteria:**
- DocSearch returns results across all five surfaces.
- Dashboard link and status dot render in chrome.
- No global version selector ships. SDK docs render "latest" with a per-SDK changelog.

**Open questions / risks:**
- DocSearch crawl needs the site publicly reachable at the final domain first.

**Linear:** no dedicated ticket — flag search/chrome in appendix.

---

## WS10 — Validation & launch

**Goal:** Verify the site end-to-end and execute go-live.

**Key tasks:**
- [ ] **Link check** — full internal link crawl; `onBrokenLinks: "throw"` covers build-time, add a runtime crawl for external links.
- [ ] **Playwright visual QA** (team practice — required before PR/launch): serve the built site and snapshot each surface's sidebar, navbar, dropdowns, homepage rails/chooser, Reference generated pages, and the sandbox. Do not rely on `npm run build` alone.
- [ ] **Redirect QA** — script the old→new map (WS8) and assert every old URL returns 200/301 to the correct target.
- [ ] **Analytics** — confirm analytics/tracking is wired for the new domain.
- [ ] **Go-live checklist:** DNS cutover to Amplify, retire GH Pages + its PR-preview workflow, confirm `DOCUSAURUS_URL` = custom domain, smoke-test sandbox on production, announce.

**Dependencies:** Everything. This is the last workstream.

**Acceptance criteria:**
- Zero broken internal links; external link report reviewed.
- Playwright snapshots reviewed across all five surfaces, no layout regressions.
- 100% of mapped old URLs resolve correctly.
- Site live at `docs.adgem.com`; GH Pages retired.

**Open questions / risks:**
- Sandbox must pass on production, not just a preview (WS5).

**Linear:** validation portions of PUB-191; no dedicated validation ticket.

---

## Appendix — Linear cleanup / reconciliation

Many tickets carry titles/scopes from the OLD "Essentials + Platform" direction. Reconcile each against this v2 plan.

| Ticket | Current state | Reconciliation needed |
|---|---|---|
| **PUB-191** — nav/IA restructure | In Progress (skeleton) | Keep as the tracking ticket for v2 IA. Re-scope description from Essentials+Platform to Gus' five-surface model. Owns WS1, parts of WS3/WS10. |
| **PUB-199** — Host on Amplify + domain | Backlog | Still valid. Expand to cover `amplify.yml`, PR-preview replacement, env vars, and (recommended) Amplify-side redirects (WS6, WS7, part of WS8). |
| **PUB-192** — Elevate Player Support to its own section | Backlog | Reconcile with v2: player-support is a SEPARATE instance, not a section. Align with PUB-204. May be redundant — confirm vs PUB-204 and close one. |
| **PUB-201** — Document conventions + clean up migration artifacts | Backlog | Maps to WS4 (component/conventions lock with Iliana). Pull forward — it gates WS2 authoring. |
| **PUB-204** — Migrate player-facing support docs to a SEPARATE instance | QA | Re-verify under v2. Confirm publisher instance only keeps the bridge/overview link (the 6 player pages stay out). |
| **PUB-205** — Legal migration | QA | **Repoint or close.** Decision: legal links out to `adgem.com/legal` and is NOT hosted in this repo. No migration work remains; ensure any legal pages added under the old structure are removed and the redirect points external. |
| **PUB-206** — Resources/branding/glossary migration | QA | Re-home into v2 Resources surface; re-verify. |
| **PUB-207** — Reporting API migration | QA | Re-home under Reference (WS3); re-verify generated/auth pages. |
| **PUB-208** — Payment/monetization migration | QA | Re-home into v2 (likely Configure/Resources); re-verify. |
| **PUB-209** — Offer types/offer wall migration | QA | Re-home into Integrate/Configure; re-verify. Also pick up static-only `ad-units` + `featured-ad-placements` gaps here. |
| **PUB-122** — Consolidate static docs | CANCELLED | Leave cancelled. The static repo is now a backstop reference only (WS2). |

**Tickets that do NOT exist yet and likely should (flag, do not create here):**
- **Sandbox vetting + `/configure/sandbox` + Test-mode toggle** (WS5) — no ticket today.
- **Redirect map build** (WS8) — could fold into PUB-199 or stand alone.
- **Search + chrome** (WS9) — DocSearch, dashboard link, status dot.
- **Global version selector** (WS9) — explicitly NOT being built (decision locked by Ron). No ticket needed. Per-axis versioning (path-based APIs when needed, per-SDK changelogs, site-wide changelog) is folded into WS2/WS3.
- **Auto-generated Reference re-point/regenerate** (WS3) — only loosely covered by PUB-207; consider a dedicated ticket.

---

## Verification appendix (grounding)

- `sidebars.ts` and `docusaurus.config.ts` read on this branch; five scoped sidebars and five-surface navbar confirmed present.
- OpenAPI generator `outputDir` is `docs/integrations/offer-api`; GraphQL generator `baseURL` is `integrations/targeted-api` — both must move under `reference/` (WS3).
- Footer links Legal out to `adgem.com/legal` (locked: legal is link-out, not hosted in this repo).
- Inventory counts computed 2026-06-08 from `git ls-tree -r --name-only origin/main -- docs/` and `find ~/dev/adgem-static-documentation -name '*.md'`.
