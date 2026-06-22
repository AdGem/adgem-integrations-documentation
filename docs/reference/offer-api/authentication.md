---
title: Offer API — Authentication
sidebar_label: Authentication
---

# Offer API — Authentication

The Offer API uses **OAuth 2.0 bearer access tokens**. Every request must include a valid access token in the `Authorization` header:

```http
GET /v1/offers HTTP/1.1
Host: offer-api.adgem.com
Authorization: Bearer <access_token>
```

## Getting an access token

Authentication uses a **refresh-token → access-token** exchange:

1. Get your **refresh token** for the app from the [AdGem Publisher Dashboard](https://dashboard.adgem.com/publisher/apps).
2. Exchange it for a **short-lived access token**.
3. Send that access token as a bearer token on every request, and exchange again for a new one when it expires.

Access tokens are:

- **Short-lived** — they expire, so refresh them rather than caching one indefinitely.
- **Scoped to a single app** — a token only returns offers for the app it was issued for. Use the correct token per app.

:::warning Keep tokens server-side
Treat refresh and access tokens as secrets. Call the Offer API from your server, not from client apps where a token could be extracted. See [Configure › Security](/docs/configure/security) for credential- and postback-handling guidance.
:::

## Unauthorized requests

A missing, expired, or invalid token returns **`401 Unauthorized`**. See [Errors](/docs/reference/offer-api/errors).
