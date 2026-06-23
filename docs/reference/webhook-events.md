---
title: Webhook Events
sidebar_label: Webhook Events
---

# Webhook Events

Webhook events are real-time, server-to-server `POST` notifications AdGem sends to your endpoint when something changes — distinct from [postbacks](/docs/integrate/reward-mechanism/postbacks-v3), which fire when a player completes an offer. Set your webhook URL and secret in the [Apps/Properties](https://dashboard.adgem.com/publisher/apps) tab of the dashboard; see [Configure › Webhooks](/docs/configure/webhooks) for setup.

## Offer events

Notify you when an offer's availability changes (API integrations only):

| Event | Fires when |
|---|---|
| `offer.created` | A net-new campaign is enabled for your app, or an offer `id` supersedes one on an existing campaign. |
| `offer.updated` | Campaign metadata or ad copy changes. |
| `offer.removed` | An offer is removed and should no longer be shown to new players. It may later reappear (e.g. after capping); if it returns in your API response, it's available again. |

Payload reference per event: [New offer](/docs/reference/offer-api/new-offer) · [Updated offer](/docs/reference/offer-api/updated-offer) · [Removed offer](/docs/reference/offer-api/deleted-offer).

## Player events

Notify you when a player's eligibility changes, so you can stop (or resume) showing offers and rewards:

| Event | Fires when |
|---|---|
| `player.banned` | A player is suspended from AdGem. |
| `player.unbanned` | A player's suspension is lifted. |

```json
{
  "type": "player.banned",
  "timestamp": "2025-01-01T00:00:00.000000Z",
  "data": {
    "player_id": "player123",
    "app_id": 1,
    "ban_reason": "events from 3 or more countries in 2 days",
    "created_at": "2025-01-01T00:00:00.000000Z"
  }
}
```

| Field | Description |
|---|---|
| `player_id` | The player's unique ID in your system. |
| `app_id` | The AdGem App ID associated with the event. |
| `ban_reason` | Why the player was suspended (or that the ban was removed). |
| `created_at` | When the event occurred in AdGem (ISO-8601 UTC). |

## Verifying webhooks

Every request includes a `Signature` header — an HMAC-SHA256 hash of the **raw request body** using your webhook secret key. Recompute it and compare to confirm the request came from AdGem. See [Configure › Webhooks](/docs/configure/webhooks) for PHP and Node verification examples.

## Delivery & retries

AdGem expects a `2xx` response. Any other status is retried up to three times (player events use exponential backoff: 1s, 2s, 4s). Process events **idempotently** so retries don't double-apply.
