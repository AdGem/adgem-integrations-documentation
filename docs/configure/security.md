---
title: Security
sidebar_label: Security
---

# Security

Protect your AdGem integration on three fronts: keep your **credentials** safe, **verify** that incoming postbacks and webhooks really came from AdGem, and **act on player-suspension** signals.

## Credentials

| Integration | Credential | Details |
|---|---|---|
| Offer API | Bearer access token (exchanged from a refresh token) | [Offer API › Authentication](/docs/reference/offer-api/authentication) |
| Prism | JWT access token (exchanged from a refresh token) | [Prism › Authentication](/docs/reference/prism/authentication) |
| Reporting API | Dashboard-generated bearer token | [Reporting API › Authentication](/docs/reference/reporting-api/authentication) |

Keep your **refresh token** and your **postback/webhook secret** server-side — never ship them in client apps or commit them to source control. Then:

- Exchange the refresh token for a **short-lived access token on your server**.
- For **client-side offer delivery** (such as Prism), pass that short-lived access token to your client to request offers — this is expected, since offers are tailored to the end user's device and location. Only the access token reaches the client; the refresh token and the exchange stay on your server.
- Always call AdGem over HTTPS.

## Verify incoming postbacks

AdGem offers two complementary checks for [postbacks](/docs/integrate/reward-mechanism/postbacks-v3) — we strongly recommend using both:

- **Signature (HMAC-SHA256)** — AdGem signs each postback with your secret key. Recompute the hash and compare it before crediting a reward.
- **IP whitelisting** — postbacks come from a static AdGem IP address. Restrict your endpoint to it (contact your Publisher Support Advocate for the production address).

Together these stop a third party who discovers your postback URL from sending forged conversions.

## Verify incoming webhooks

[Webhook events](/docs/reference/webhook-events) include a `Signature` header — an HMAC-SHA256 hash of the raw request body using your webhook secret. Verify it the same way before acting on the event. See [Configure › Webhooks](/docs/configure/webhooks).

## Act on player suspension

AdGem suspends players it detects as fraudulent. Subscribe to the `player.banned` / `player.unbanned` [webhook events](/docs/reference/webhook-events), and stop showing offers to — and withhold rewards from — suspended players to protect your economy.
