# Phase 2 — Outstanding Content Questions

**Date:** 2026-04-01
**Status:** Resolved
**Context:** These came up during CodeRabbit review of the Phase 2 content migration PRs. All pre-existed in the legacy MkDocs site.

---

### 1. Rewarded video contradiction

- `docs/configuration/ad-units.mdx` says rewarded/non-rewarded video is no longer supported (correct)
- `docs/integrations/unity-sdk/revenue-optimization.mdx` still recommends it as an active strategy
- **Resolution (Tawni):** Removed. Ancient legacy content. All three SDK revenue-optimization pages and the ad-units page deleted.

### 2. "At least 30%" revenue claim

- `docs/configuration/featured-ad-placements.mdx` line 20
- States featured placements are "proven to increase monthly revenue by at least 30%"
- **Resolution (Tawni):** Removed. Legacy info that can't be validated, not dev-facing. Both featured-ad-placements and ad-units pages deleted.

### 3. `support_portal` URL mismatch

- `docs/resources/support-urls.mdx` shows `https://api.adgem.com/support/player?...`
- `docs/integrations/offer-api/get-offers.api.mdx` (auto-generated from OpenAPI spec) shows `https://adunits.adgem.com/support/player?...`
- **Resolution (Tawni):** Updated to `adunits.adgem.com`. The `api.adgem.com` references were an oversight.

### 4. `support_url` response path

- `docs/resources/support-urls.mdx` shows `support_url` inside an `Offer` object (`data.107.Offer.support_url`)
- Offer API docs describe it under a `links` object
- **Resolution (Tawni):** Updated to show `support_url` under `links`. Oversight from the static-api to offer-api migration.

### 5. Player Support FAQ URL

- Several pages link to "Player Support FAQ" with `<!-- TODO: Update to WordPress player support URL -->` placeholders
- Affected files: `docs/configuration/offer-wall-customization.mdx`, `docs/resources/developer-support.mdx`
- **Resolution (Iliana):** URL is `https://adgem.com/player-support-faq/`. All TODO placeholders replaced.

### 6. Stale timeline in player support overview

- `docs/resources/player-support-overview.mdx` line 43
- Mentions a new in-house support platform launching "in the next couple of months"
- **Resolution (Tawni):** Removed. The Support Portal has been live for a long time; this was an oversight.
