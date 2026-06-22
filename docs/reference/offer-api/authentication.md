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

Exchange a **refresh token** — issued from your [AdGem Publisher Dashboard](https://dashboard.adgem.com/publisher/apps) — for a short-lived access token at the token endpoint:

```http
POST /v1/users/token HTTP/1.1
Host: offer-api.adgem.com
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token&refresh_token=<your_refresh_token>
```

**Response — `201 Created`:**

```json
{
  "message": "Authorized",
  "access_token": "<access_token>",
  "expires_in": 3600
}
```

Then send the access token as a bearer token on every Offer API request (see the `Authorization` header above).

Access tokens are:

- **Short-lived** — `expires_in` is in seconds (typically one hour). Exchange your refresh token again for a new access token when the current one expires; don't cache a single token indefinitely.
- **Scoped to a single app** — a token only returns offers for the app its refresh token belongs to. Use the correct token per app.

:::warning Keep tokens server-side
Treat refresh and access tokens as secrets. Perform the token exchange and Offer API calls from your server, not from client apps where a token could be extracted. See [Configure › Security](/docs/configure/security) for credential- and postback-handling guidance.
:::

## Unauthorized requests

A missing, expired, or invalid token returns **`401 Unauthorized`**. See [Errors](/docs/reference/offer-api/errors).
