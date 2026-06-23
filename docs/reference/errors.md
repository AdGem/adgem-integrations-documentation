---
title: Error Codes
sidebar_label: Error Codes
---

# Error Codes

AdGem's APIs use standard HTTP status codes. In general: `2xx` is success; `4xx` means a problem with the request (don't retry unchanged); `5xx` is a server-side error (safe to retry with backoff).

| Status | Meaning |
|---|---|
| `200 OK` / `201 Created` | Success. |
| `400 Bad Request` | Malformed request. |
| `401 Unauthorized` | Missing, invalid, or expired credentials. |
| `403 Forbidden` | Authenticated, but not permitted to access the resource. |
| `415 Unsupported Media Type` | Wrong `Content-Type` — e.g. a token request that isn't `application/x-www-form-urlencoded`. |
| `422 Unprocessable Entity` | Validation error — a parameter is missing or invalid. |
| `429 Too Many Requests` | Rate limit exceeded — slow down and retry later. |
| `5xx` | Server error — retry with exponential backoff. |

## Per-API specifics

Each API documents the codes it returns and their specific causes:

- [Offer API errors](/docs/reference/offer-api/errors)
- [Prism errors](/docs/reference/prism/errors)
- [Reporting API errors](/docs/reference/reporting-api/errors)

## Webhooks

For inbound webhook events, AdGem expects a `2xx` response from your endpoint; any other status is retried. See [Webhook Events](/docs/reference/webhook-events).
