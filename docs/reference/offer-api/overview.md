---
title: Overview
sidebar_label: Overview
---

# Overview

The Offer API is a REST API that returns the offers available to your app so you can display them in your own UI. It returns every available offer (single- and multi-reward) by default, along with goal data and a unique ID per offer, and is designed for **server-side polling** — not real-time client calls.

**Base URL**

```
https://offer-api.adgem.com
```

All endpoints are served under the current API version path, `/v1` — for example, `https://offer-api.adgem.com/v1/offers`. See [Versioning](/docs/reference/offer-api/versioning).

## When to use the Offer API

Choose the Offer API when you want to build a **custom offer experience** with full control over presentation through a straightforward REST integration. If you'd rather query offers over GraphQL, see [Prism](/docs/reference/prism/overview). For a no-code option, use a [pre-built SDK or the Web Offerwall](/docs/integrate/offer-delivery/pre-built).

## How it works

1. [Authenticate](/docs/reference/offer-api/authentication) with a bearer access token scoped to your app.
2. Call [`GET /v1/offers`](/docs/reference/offer-api/get-offers) to retrieve the current offers for your app.
3. Reward players when offers are completed, via [postbacks](/docs/integrate/reward-mechanism/postbacks-v3).

## Polling guidance

The Offer API is **not** intended for real-time, per-request client calls. Poll on a schedule and cache the results:

- Poll about **once every 5 minutes** to keep offers current.
- Polling far more frequently than recommended is rate-limited and rejected.
- Offers can re-enter the feed after being removed (for example, after day-capping or a temporary pause), so treat each response as the current full set rather than a one-time snapshot.

## Related

- [`GET /v1/offers` reference](/docs/reference/offer-api/get-offers)
- [Authentication](/docs/reference/offer-api/authentication) · [Pagination](/docs/reference/offer-api/pagination) · [Errors](/docs/reference/offer-api/errors) · [Versioning](/docs/reference/offer-api/versioning)
