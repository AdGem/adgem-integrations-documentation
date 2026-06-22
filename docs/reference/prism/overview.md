---
title: Overview
sidebar_label: Overview
---

# Overview

The `/v1/offers` endpoint is the GraphQL entry point for retrieving targeted offers with Prism. All GraphQL queries are sent as POST requests to this single endpoint.

## Endpoint

```http
POST https://targeted-api.adgem.com/v1/offers
```

## Request

### Headers

| Header | Value | Required | Description |
|--------|-------|----------|-------------|
| `Authorization` | `Bearer <your-jwt-token>` | Yes | JWT access token obtained from the [Tokens endpoint](/docs/reference/prism/tokens) |
| `Content-Type` | `application/json` | Yes | Request body format |

### Body

The request body must contain a valid GraphQL query in JSON format:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `query` | `string` | Yes | The GraphQL query string |
| `variables` | `object` | No | Variables referenced in the query |

### Example Request

```bash
curl -X POST https://targeted-api.adgem.com/v1/offers \
  -H "Authorization: Bearer <your-jwt-token>" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "query GetOffers($playerId: String!) { offers(player_id: $playerId) { id name total_payout_usd creatives { name description } } }",
    "variables": {
      "playerId": "user-123"
    }
  }'
```

### Example Response (200 OK)

```json
{
  "data": {
    "offers": [
      {
        "id": "123456789",
        "name": "Example Offer",
        "total_payout_usd": 1.50,
        "creatives": {
          "name": "Example Offer Creative",
          "description": "Complete this offer to earn rewards."
        }
      }
    ]
  }
}
```

## Error Responses

### 401 Unauthorized

Returned when the JWT token is missing or invalid.

```json
{
  "message": "Invalid or missing token."
}
```

### 403 Forbidden

Returned when the token is valid but lacks the required scopes.

```json
{
  "message": "Forbidden operation."
}
```

## Available Queries

- [**offers**](/docs/reference/prism/schema/queries) -- Retrieve all targeted offers for a player
- [**links**](/docs/reference/prism/schema/queries) -- Retrieve tracking links for a player

## See Also

- [Authentication Guide](/docs/reference/prism/authentication) - How to obtain a JWT access token
- [Tokens Endpoint](/docs/reference/prism/tokens) - Token acquisition endpoint reference
- [Playground](/docs/reference/prism/playground) - Interactive GraphQL playground to test queries
