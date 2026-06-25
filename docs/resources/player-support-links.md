---
title: Player Support Links
sidebar_label: Player Support Links
description: The player-support URLs returned by the AdGem APIs — support_portal and support_url.
---

# Player Support Links

AdGem provides [player support](/docs/resources/player-support-overview) for players who have trouble receiving a reward. The APIs return two support links you can surface to players. Both are scoped to the individual player, so pass the player's ID when you use them.

## `support_portal` — all campaigns

Returned at the root of the response, inside the `links` object. The portal lists every campaign the player can request support for, so it's best placed where the player has access to all of your AdGem offers. From there, a player selects a campaign and submits a support request.

Replace `{appid}` with your app ID and `{playerid}` with the player's ID:

```text
https://adunits.adgem.com/support/player?appid={appid}&playerid={playerid}
```

## `support_url` — a single campaign

Returned with each offer in the response. Each `support_url` is unique per player and per campaign, so it's best placed alongside the specific offer it belongs to.

```text
https://adunits.adgem.com/support-single-offer?appid={appid}&playerid={playerid}&campaignid={campaignid}
```

:::note
If a player hasn't interacted with a campaign (for example, they never clicked the offer), opening its `support_url` redirects to a "Support Unavailable" page.
:::

## Where each link appears

| Field | Location in response | Scope |
|---|---|---|
| `support_portal` | root `links` object | all campaigns, per player |
| `support_url` | each offer object | one campaign, per player |

For the full response shape, see the [Offer API reference](/docs/reference/offer-api/overview).
