# Content status — migrate vs. author-fresh vs. gap (for June 30)

**Date:** 2026-06-18 · Derived from the WS2 remap table (`2026-06-09-ws2-remap-table.md`).
**Purpose:** tell the team exactly which new-architecture pages **already have source content to migrate** vs. which are **net-new (will lack content unless authored)** vs. **gaps (need a decision first)**. The **✍️ Author-fresh** and **❓ Gap** rows are the work to hand out.

Legend: ✅ **Migrate** (source exists on `main@653b3f3`, just re-home + Prism-rename) · ✍️ **Author-fresh** (no old source) · ❓ **Gap** (needs a decision, then content).

## Get Started
- ✅ index, welcome (`essentials-overview`), quickstart (`app-property-setup` + `preflight-checks`)
- ✍️ **core-concepts** (partly from old `offers/*`), **decide**

## Integrate
- ✅ pre-built/web-offerwall, ios-sdk, android-sdk, unity-sdk (SDK index pages); reward-mechanism/postbacks-v3 + postbacks-v2 (from `webhooks/postback-options` + `offer-api-postback-setup`)
- ✍️ **overview**, **offer-delivery/index**, **pre-built/index**, **partner-built/index**, **partner-built/prism** (integration narrative), **partner-built/offer-api** (narrative), **reward-mechanism/index**, **reward-mechanism/client-polling** (new — document the SDK polling mechanism), **reward-mechanism/third-party**

## Configure
- ✅ index, customization (`configuration/offer-wall-customization` + `web-offerwall/customization`), promotions, webhooks (`offer-event-webhooks` + `suspended-player-webhooks`)
- ✍️ **security**, **sandbox**

## Reference
- **Offer API (REST):** generated operation + schema pages ✅ done. Conceptual pages ✍️ **overview, authentication, pagination, errors, versioning** (net-new — no old source)
- **Prism (GraphQL):** schema pages = **generated** (needs the Cognito token). ✅ authentication, tokens, faq (migrate from old `targeted-api`). ✍️ **overview, errors, versioning, recipes**
- **Reporting API:** ✅ overview (`api-reference/index`). ✍️ **authentication, errors**
- ✍️ **webhook-events**, **errors** (top-level)

## Resources
- ✅ index, glossary (`terms-glossary`), branding-assets, player-support-overview (bridge → link out)
- ✍️ **changelog** (aggregate), **migrations/overview**, **migrations/static-api-to-offer-api**, **migrations/postback-v2-to-v3**
- ❓ **developer-support**, **product-roadmap**, **support-urls** (keep / externalize / drop — decision then content)

## Gaps needing a decision before content (from the remap table)
- ❓ **Payments / monetization** — no home in the IA yet (old `monetization/*`: payment-guide, payment-setup). Needs a surface decision (Configure? Resources?).
- ❓ Per-SDK changelog/example-app/optional-parameters pages (subpages vs. merge).
- ❓ Prism FAQ home (folded into recipes vs. its own page) — *resolved: own page (`faq`)*.

## Summary for the team
**Pages that will lack content unless authored = every ✍️ and ❓ above.** The ✅ rows have existing copy to migrate (lower effort). Suggest splitting the ✍️ list by surface across the team and resolving the ❓ gaps first (esp. payments).
