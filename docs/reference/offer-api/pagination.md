---
title: Offer API — Pagination
sidebar_label: Pagination
---

# Offer API — Pagination

Pagination on [`GET /v1/offers`](/docs/reference/offer-api/get-offers) is **optional**. By default the endpoint returns **all** available offers in a single response. To page through results, add the `per_page` query parameter.

## Parameters

| Parameter | Type | Notes |
|---|---|---|
| `per_page` | integer | Number of offers per page, **1–100**. Providing it enables a paginated response. |
| `page` | integer | Page number to retrieve, 1-indexed. Defaults to `1` when `per_page` is set. **Cannot be used without `per_page`.** |

:::caution
Passing `page` without `per_page` returns **`422`** (validation error). Always send `per_page` to paginate. See [Errors](/docs/reference/offer-api/errors).
:::

## Paginated response

When `per_page` is provided, the response `data` includes a `pagination` object:

```json
{
  "status": "success",
  "data": {
    "offers": [ /* ... */ ],
    "pagination": {
      "current_page": 1,
      "per_page": 25,
      "has_more_pages": true,
      "next_page": 2
    }
  }
}
```

| Field | Type | Description |
|---|---|---|
| `current_page` | integer | The current page number. |
| `per_page` | integer | Offers per page. |
| `has_more_pages` | boolean | Whether more pages are available. |
| `next_page` | integer \| null | The next page number, or `null` on the last page. |

## Iterating

Start at `page=1` and increment while `has_more_pages` is `true` (equivalently, until `next_page` is `null`). When `per_page` is omitted, all offers are returned at once and no `pagination` object is present.
