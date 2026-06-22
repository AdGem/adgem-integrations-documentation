---
title: Offer API — Errors
sidebar_label: Errors
---

# Offer API — Errors

The Offer API uses standard HTTP status codes.

| Status | Meaning | Cause / fix |
|---|---|---|
| `200 OK` | Success | The response body contains the `offers` array (and a `pagination` object when paginating). |
| `401 Unauthorized` | Authentication failed | Missing, expired, or invalid bearer token. Send a valid token — see [Authentication](/docs/reference/offer-api/authentication). |
| `422 Unprocessable Entity` | Validation error | Invalid query parameters — for example `page` without `per_page`, `per_page` outside 1–100, or an unsupported value for a filter or `sort` parameter. See [`GET /v1/offers`](/docs/reference/offer-api/get-offers) for accepted parameters and values, and [Pagination](/docs/reference/offer-api/pagination). |

## Rate limiting

The Offer API is built for periodic polling, not real-time calls. Requests above **60 per minute** for an app are rate-limited and rejected. Poll about once every 5 minutes and cache results — see [Polling guidance](/docs/reference/offer-api/overview#polling-guidance).
