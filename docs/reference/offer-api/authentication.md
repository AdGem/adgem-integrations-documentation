---
title: Authentication
sidebar_label: Authentication
---

# Authentication

The Offer API uses **OAuth 2.0 bearer access tokens**. Every request must include a valid access token in the `Authorization` header.

## Getting an access token

Exchange a **refresh token** — issued from your [AdGem Publisher Dashboard](https://dashboard.adgem.com/publisher/apps) — for a short-lived access token at the `/v1/users/token` endpoint. This follows the [OAuth 2.0 specification (RFC 6749)](https://datatracker.ietf.org/doc/html/rfc6749) and requires a form-encoded body:

```bash
curl -X POST https://offer-api.adgem.com/v1/users/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=refresh_token&refresh_token=<your_refresh_token>"
```

A successful request returns `201 Created` with your access token:

```json
{
  "message": "Authorized",
  "access_token": "<access_token>",
  "expires_in": 3600
}
```

## Using the access token

Send the access token as a bearer token on every Offer API request:

```bash
curl https://offer-api.adgem.com/v1/offers \
  -H "Authorization: Bearer <access_token>"
```

Access tokens are:

- **Short-lived** — `expires_in` is in seconds (typically one hour). Exchange your refresh token again for a new access token when the current one expires; don't cache a single token indefinitely.
- **Scoped to a single app** — a token only returns offers for the app its refresh token belongs to. Use the correct token per app.

:::warning Keep tokens server-side
Treat refresh and access tokens as secrets. Perform the token exchange and Offer API calls from your server, not from client apps where a token could be extracted. See [Configure › Security](/docs/configure/security) for credential- and postback-handling guidance.
:::

## Unauthorized requests

A missing, expired, or invalid token returns **`401 Unauthorized`**. See [Errors](/docs/reference/offer-api/errors).
