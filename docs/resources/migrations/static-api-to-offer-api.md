---
title: Static API → Offer API
sidebar_label: Static API → Offer API
---

# Static API → Offer API

The **Static API** (`GET https://api.adgem.com/v1/all/campaigns`) is AdGem's legacy offer feed. The **[Offer API](/docs/reference/offer-api/overview)** replaces it with OAuth 2.0 authentication, a consistent offers array, optional pagination, and richer offer data (goals, multi-reward, targeting). Both accept the same filters, so migrating is mostly a matter of swapping the endpoint, the auth, and how you parse the response.

## Side by side

| | Static API | Offer API |
|---|---|---|
| Endpoint | `GET https://api.adgem.com/v1/all/campaigns` | `GET https://offer-api.adgem.com/v1/offers` |
| Auth | `appid` + `token` query parameters | `Authorization: Bearer <access_token>` ([OAuth 2.0](/docs/reference/offer-api/authentication)) |
| Offers shape | object keyed by campaign ID | array under `data.offers` |
| Pagination | none (full list) | optional (`per_page` / `page`) |
| Filters | `country_codes`, `categories`, `reward_type`, `platform`, `tracking_types` | the same, as query parameters |
| Envelope | `{ status, data, links }` | `{ status, data: { offers, pagination }, links }` |

## Migrate

1. **Switch auth.** Replace the `appid`/`token` query parameters with a bearer access token — get a refresh token from the dashboard and exchange it per [Offer API › Authentication](/docs/reference/offer-api/authentication).
2. **Switch the endpoint** to `https://offer-api.adgem.com/v1/offers`. Your existing filters (`country_codes`, `categories`, `reward_type`, `platform`, `tracking_types`) carry over and work the same way — see the [`GET /v1/offers` reference](/docs/reference/offer-api/get-offers).
3. **Update response parsing.** Iterate `data.offers` (an array) instead of the campaign-ID-keyed object. The Offer API also returns additional data (goals, multi-reward, targeting).
4. **Adopt pagination** if you want paged responses — add `per_page` (and `page`). See [Pagination](/docs/reference/offer-api/pagination).
5. **Poll on a schedule** (about every 5 minutes) and cache results, rather than calling in real time. See the [Overview](/docs/reference/offer-api/overview).
