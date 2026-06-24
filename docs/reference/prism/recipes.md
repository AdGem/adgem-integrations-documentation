---
title: Recipes
sidebar_label: Recipes
---

# Recipes

Common Prism queries. Each is `POST`ed to `/v1/offers` with your `Authorization: Bearer <token>` and `Content-Type: application/json` — see the [Overview](/docs/reference/prism/overview) for the full request shape. Pass the player ID as a variable so the query is reusable.

## Fetch offers for a player

```graphql
query GetOffers($playerId: String!) {
  offers(player_id: $playerId) {
    id
    name
    total_payout_usd
  }
}
```

```json
{ "playerId": "user-123" }
```

## Include creative details

Select nested fields to render the offer in your UI:

```graphql
query GetOffersWithCreatives($playerId: String!) {
  offers(player_id: $playerId) {
    id
    name
    total_payout_usd
    creatives {
      name
      description
    }
  }
}
```

## Tracking links

Prism also exposes a `links` query for a player's tracking links. See the [schema reference](/docs/reference/prism/schema/queries) for its fields and the full set of queries.

---

GraphQL returns exactly the fields you request, so ask for only what you need. The [schema reference](/docs/reference/prism/schema/queries) lists every query, field, and type.
