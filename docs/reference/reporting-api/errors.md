---
title: Errors
sidebar_label: Errors
---

# Errors

The Reporting API uses standard HTTP status codes.

| Status | Meaning | Cause / fix |
|---|---|---|
| `200 OK` | Success | The response body contains the requested report rows. |
| `401 Unauthorized` | Authentication failed | Missing or invalid bearer token. See [Authentication](/docs/reference/reporting-api/authentication). |
| `422 Unprocessable Entity` | Validation error | A required parameter is missing or invalid. `group_by` and a `date_range` (`start_date` + `end_date`) are always required; and when `filter_by` includes a dimension, its values array is required too — e.g. `filter_by[]=app_id` requires `apps[]`. See the [Overview](/docs/reference/reporting-api/overview) for the full parameter list. |

## Polling guidance

The reporting data source refreshes on a **30-minute interval**, so frequent polling returns no new data. Query on a schedule (for example, hourly) and cache the results.
