# June 30 Launch — Critical Path & MVP Cut Line

**Date:** 2026-06-18 · **Target:** "usable" docs by **June 30** (~9 working days) · **Owner:** Micah

## Honest framing
The playground (BYO vs proxy) is **not** the long pole. The date is won or lost on **content (WS2)** and **hosting + domain (WS6/WS7)**. Plan accordingly: keep the playground cheap (BYO), and front-load the things with the longest lead times and external owners.

## MVP definition — what "usable by June 30" means
**IN (MVP):**
- Five-surface IA, navigable (done).
- **Offer API (REST) reference** (done, PR #44).
- **Prism (GraphQL) reference** — *if* a Cognito token lands in time (generate + wire per the approved design).
- **Priority content** migrated: Get Started (all), Integrate primary paths (Web Offerwall, Prism, Offer API, Postbacks v3), Configure essentials, the Reference conceptual pages, Resources essentials. Cognito-only auth.
- **BYO playground** (paste access token) for Prism + the REST "try-it."
- **Hosted** — Amplify + `docs.adgem.com` preferred; **fallback = GH Pages / Amplify default domain** if domain/DNS slip.
- Build passes + one Playwright visual pass.

**FAST-FOLLOW (post-June 30):**
- **Proxy + Documentation-apps playground** (the frictionless default).
- **Algolia search** (needs the live domain to crawl).
- **Full content depth** on remaining/lower-priority pages + the deferred gap pages (payments, etc.).
- **Redirects** (full map) + `docs.adgem.com` **cutover** if it slips.
- **Component-library formal lock** with Iliana (WS4) + content polish.
- offer-api → docs **automated spec sync** + the **AI PR-check** guardrail.

## Parallel tracks
| Track | Work | Owner | Notes / dependency |
|---|---|---|---|
| **A — Content (long pole)** | Migrate priority content from `origin/main@653b3f3` into the surfaces; Prism naming; cross-links | Docs (Micah + team) | Start **now**; needs the 6 gap decisions (esp. payments home) |
| **B — Hosting + domain** | Amplify app + `amplify.yml` + env (`baseUrl=/`); `docs.adgem.com` DNS + ACM cert | Platform/Ron; DNS owner (Iliana/WP Engine) | **Longest external lead — start now**; fallback to GH Pages |
| **C — Prism reference** | One-time Cognito access token → `graphql-to-doc` → wire sidebar (design done) | You (token) + Micah | Blocked on a **one-time token**; SDL fallback is noisy, avoid |
| **D — Playground (BYO)** | Paste-access-token mode + auth guide; REST try-it | Micah | Cheap, no external deps; offers endpoints already CORS-`*` |
| **E — Validation/launch** | Link check, visual QA, analytics, go-live | Micah | End of window; gates "usable" |

## Critical path (ordered)
1. **Now:** kick off the external dependencies (Track B hosting+DNS, Track C token, content gap decisions) — these have the longest lead and gate everything downstream.
2. **Days 1–6:** Track A content (bulk) in parallel with B (hosting stand-up) and C (Prism generate+wire) and D (BYO playground).
3. **Days 6–8:** content finishing + cross-links; hosting live (Amplify or GH Pages fallback); Prism wired; playground in.
4. **Days 8–9:** Track E validation (build, visual QA), analytics, go-live on the available host.

## Risks & mitigations
- **Domain/DNS lead time** (could push `docs.adgem.com` past June 30) → **launch on GH Pages / Amplify default domain; cut over later.** Don't let DNS block the date.
- **Content volume** (WS2 is large for 9 days) → **prioritize; ship "usable, not complete."** Depth on lower-priority pages is fast-follow.
- **Prism token slips** → ship **Offer API complete + Prism pages as "coming soon"/placeholders**; add Prism when the token lands.
- **Redirects** → only MVP-critical **if a live production docs site is being replaced** (old URLs with traffic/SEO). Otherwise fast-follow. *(See open question.)*

## Open questions that decide the date
1. **Is there a live production docs site whose URLs need redirect protection at launch?** (Determines whether WS8 is MVP or fast-follow.)
2. **Who owns `docs.adgem.com` DNS, and can they start now?** (Longest pole — if it can't start today, plan the GH-Pages-fallback launch.)
3. **Can you mint a one-time Cognito access token for Prism generation now?** (Decides whether Prism is in the MVP.)
4. **Priority order of content/surfaces** for the MVP cut — which pages are must-have vs. fast-follow?
