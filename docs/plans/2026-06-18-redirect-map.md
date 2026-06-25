# Redirect map (old → new) + cleanliness assessment

**Date:** 2026-06-18 · Derived from the WS2 remap table. **Purpose:** map current production URLs to the v2 IA so we can assess how cleanly it maps (and where it won't) before committing to redirects (WS8).

**Two global changes apply to every URL:**
- Base path: GH Pages `/adgem-integrations-documentation/...` → (Amplify) root `/...`.
- `trailingSlash: false` — keep consistent between Docusaurus client redirects and any host-level (Amplify) rules.

Cleanliness: **clean** = 1:1 · **split** = one old page → multiple new (pick a primary target) · **external** = link out · **no target** = unresolved gap.

| Old URL (current prod) | New target | Clean? |
|---|---|---|
| `/docs/getting-started` | `/docs/get-started` | clean |
| `/docs/getting-started/essentials-overview` | `/docs/get-started/welcome` | clean |
| `/docs/getting-started/app-property-setup` | `/docs/get-started/quickstart` | clean |
| `/docs/getting-started/preflight-checks` | `/docs/get-started/quickstart` | clean |
| `/docs/integrations/web-offerwall` | `/docs/integrate/offer-delivery/pre-built/web-offerwall` | clean |
| `/docs/integrations/{ios,android,unity}-sdk` | `/docs/integrate/offer-delivery/pre-built/{ios,android,unity}-sdk` | clean |
| `/docs/integrations/web-offerwall/customization` | `/docs/configure/customization` (+ best-practices → web-offerwall page) | split |
| `/docs/integrations/offer-api/*` (OpenAPI) | `/docs/reference/offer-api/*` | clean (finalize per-page slugs) |
| `/docs/integrations/targeted-api/*` (GraphQL) | `/docs/reference/prism/*` | clean (finalize after Prism gen) |
| `/docs/webhooks` | `/docs/integrate/reward-mechanism` (+ `/docs/configure/webhooks`) | split |
| `/docs/webhooks/postback-options`, `/offer-api-postback-setup` | `/docs/integrate/reward-mechanism/postbacks-v3` | clean |
| `/docs/webhooks/offer-event-webhooks`, `/suspended-player-webhooks` | `/docs/configure/webhooks` (or `/docs/reference/webhook-events`) | split |
| `/docs/configuration` | `/docs/configure` | clean |
| `/docs/configuration/offer-wall-customization` | `/docs/configure/customization` | clean |
| `/docs/configuration/offer-wall-promotions` | `/docs/configure/promotions` | clean |
| `/docs/monetization`, `/monetization/payment-*` | `/docs/get-started/quickstart#payments-and-monetization` (decided 2026-06-24) | split |
| `/docs/offers` | `/docs/get-started/core-concepts` | split |
| `/docs/offers/multi-reward-offers`, `/completion-difficulty-scale` | `/docs/get-started/core-concepts` (or Resources/Reference) | split |
| `/docs/api-reference` | `/docs/reference/reporting-api/overview` | clean |
| `/docs/resources` (+ glossary, branding-assets) | `/docs/resources/*` | clean |
| `/docs/resources/developer-support` | `/docs/resources/developer-support` | clean |
| `/docs/resources/support-urls` | `/docs/resources/player-support-links` | clean |
| `/docs/resources/product-roadmap` | **drop** (decided 2026-06-24 — not migrated; no roadmap in v2 IA) | drop |
| `/docs/resources/service-status` | `https://status.adgem.com` | external |
| `/docs/legal/privacy-policy` | `https://adgem.com/privacy-policy/` | external |
| `/docs/legal/terms-and-conditions` | `https://adgem.com/terms-and-conditions/` | external |
| `/docs/legal/sdk-license-agreement` | **(no external URL found)** | **no target** |
| `/docs/legal`, `/docs/legal/index` | `https://adgem.com/` (no `/legal` index exists) | external |

## How clean is it?
- **Most surface moves are clean 1:1** (getting-started, configuration, integrations SDKs/APIs, api-reference, resources).
- **A handful are "split"** — one old page fans out to two v2 homes (webhooks → Integrate + Configure; offers → core-concepts; web-offerwall customization). For redirects, pick the **primary** target per old URL.
- **The former gaps are now resolved** (decided 2026-06-24): `monetization/*` → `get-started/quickstart#payments-and-monetization` (split); `developer-support` and `support-urls` → Resources pages (clean); `product-roadmap` → dropped. The only remaining no-target is `legal/sdk-license-agreement` (no external URL found).

**Verdict:** ~80% maps cleanly; the rest is blocked on the same gap decisions as content. So the redirect map is mostly mechanical *once the gaps are resolved*. Mechanism (Docusaurus client redirects vs. Amplify 301s) is a WS8/hosting decision — see the platform handoff.
