---
title: Postback v2 → v3
sidebar_label: Postback v2 → v3
---

# Postback v2 → v3

Postback **v2** delivers conversions as a **GET** request with query-string parameters; **v3** delivers them as a signed **POST** with a JSON body. v2 is still supported, but v3 is recommended for new integrations. See [Postbacks (v3)](/docs/integrate/reward-mechanism/postbacks-v3) and [Postbacks (v2)](/docs/integrate/reward-mechanism/postbacks-v2) for full details.

## Side by side

| | v2 | v3 |
|---|---|---|
| Method | `GET` | `POST` |
| Payload | query-string parameters | JSON body |
| Body shape | flat parameters | `request_id` and `timestamp` at the top level; all other fields under `data` |
| Signature | `verifier` query parameter (HMAC-SHA256 over the URL) | `Signature` request header (HMAC-SHA256 over the raw JSON body) |
| Booleans | strings (`1`/`0` or `true`/`false`) | native JSON booleans |

## Migrate

1. **Accept `POST`** with a JSON body instead of parsing GET query parameters.
2. **Read fields from the new shape.** `request_id` and `timestamp` are top-level; the conversion fields (`player_id`, `amount`, `payout`, `conversion_id`, …) are nested under `data`.
3. **Verify the `Signature` header** instead of the `verifier` query parameter: compute an HMAC-SHA256 hash of the raw request body, keyed with your secret, and compare it. (v2 hashes the URL; v3 hashes the JSON body.) See [Postbacks (v3)](/docs/integrate/reward-mechanism/postbacks-v3).
4. **Expect native JSON types** — booleans arrive as `true`/`false`, not `"1"`/`"0"`.
5. **Switch the postback version** in the AdGem Dashboard (or ask your Publisher Support Advocate), and test against your new endpoint before cutting over.

Both versions carry the same conversion data — only the transport, structure, and signature location change.
