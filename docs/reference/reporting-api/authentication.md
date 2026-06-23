---
title: Authentication
sidebar_label: Authentication
---

# Authentication

The Reporting API authenticates with a **bearer token**. Generate the token from the AdGem Publisher Dashboard, then send it on every request in the `Authorization` header along with `Accept: application/json`.

## Get a token

1. In the [AdGem Publisher Dashboard](https://dashboard.adgem.com/publisher/dashboard), open the **Reporting API** settings.
2. Generate an API token and **copy it immediately — it is shown only once.** If you lose it, generate a new one (which invalidates the old one).

If the Reporting API option isn't in your dashboard, contact your AdGem account manager to request access.

## Authenticate requests

Send the token as a bearer token and request JSON:

```bash
curl -G https://dashboard.adgem.com/v1/report \
  -H "Accept: application/json" \
  -H "Authorization: Bearer <YOUR_ACCESS_TOKEN>" \
  --data-urlencode "group_by[]=date" \
  --data-urlencode "date_range[start_date]=2024-01-01 00:00:00" \
  --data-urlencode "date_range[end_date]=2024-01-31 00:00:00"
```

A missing or invalid token returns **`401 Unauthorized`** — see [Errors](/docs/reference/reporting-api/errors). For the full set of parameters and the response shape, see the [Overview](/docs/reference/reporting-api/overview).

:::warning Keep your token secret
Make Reporting API calls from your server, not from client apps where the token could be extracted.
:::
