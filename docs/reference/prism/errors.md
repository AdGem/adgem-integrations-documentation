---
title: Errors
sidebar_label: Errors
---

# Errors

Prism is a GraphQL API, so errors arrive two ways: **HTTP status codes** for transport- and auth-level problems, and a GraphQL **`errors` array** (inside an otherwise-`200` response) for problems with the query itself.

## HTTP errors

| Status | Meaning | Cause / fix |
|---|---|---|
| `401 Unauthorized` | Invalid or missing token | Send a valid `Authorization: Bearer <token>`. Get one from the [Tokens endpoint](/docs/reference/prism/tokens); see [Authentication](/docs/reference/prism/authentication). |
| `403 Forbidden` | Token is valid but lacks the required scopes | Confirm the token is for the right account; contact your advocate if it persists. |

The [token endpoint](/docs/reference/prism/tokens) (`POST /v1/users/token`) can also return `415 Unsupported Media Type` (the `Content-Type` isn't `application/x-www-form-urlencoded`) and `422 Unprocessable Entity` (a required field is missing).

## GraphQL errors

A request that authenticates but has a problem with the query returns **`200 OK`** with an `errors` array, per the GraphQL spec — so **check `errors` even on a `200` response**:

```json
{
  "errors": [
    { "message": "Cannot query field \"foo\" on type \"Offer\"." }
  ],
  "data": null
}
```

Common causes: requesting a field that doesn't exist, omitting a required argument (such as `player_id`), or a malformed query. See the [schema reference](/docs/reference/prism/schema/queries) for valid queries and fields.
