---
title: Test Mode
sidebar_label: Test Mode
---

# Test Mode

Before you go live, validate your integration end-to-end with a **test offer**. AdGem adds a Postback Test Offer to your app so you can confirm that completing an offer produces a successful postback to your server.

## Set up a test offer

Ask your Publisher Support Advocate to add a **Postback Test Offer** to your app — they'll share the offer's name and ID. The test offer is available on Android, iOS, and Desktop.

:::warning Use Chrome
The test offer only works in **Google Chrome** — other browsers have introduced blocks that stop it from completing. This restriction is specific to the test offer; your regular offers are unaffected.
:::

## Run a test

1. **Set the player ID.** Where you set it depends on your integration:
   - **SDK** (iOS / Android / Unity) and **Direct Link / iFrame** (Web Offerwall): the player ID is supplied at the point the offerwall loads.
   - **API** (Prism, Offer API): the player ID is interpolated into the offer's **click URL** — replace the `{playerid}` placeholder with the player's ID before the player clicks.

   Use a **unique player ID for each test run** — for example, `test-player-001`, then `test-player-002`, and so on.
2. **Complete the test offer** in Chrome.
3. **Confirm the postback.** For every conversion recorded in the AdGem dashboard, your server should receive a **successful postback**. If a conversion doesn't produce one (or your endpoint doesn't return a `2xx`), re-check your [postback setup](/docs/integrate/reward-mechanism/postbacks-v3) and [signature verification](/docs/configure/security).

## Go-live checklist

Your app is ready to serve live offers when all of the following are complete:

- [ ] Your app is approved and offers are enabled (confirm with your advocate).
- [ ] Your **postback URL and secret** are configured in the dashboard.
- [ ] You **verify the postback `Signature`** (HMAC-SHA256), and optionally whitelist AdGem's IP — see [Security](/docs/configure/security).
- [ ] A test conversion produced a successful postback **and** your server credited the player.
- [ ] Player IDs are **persistent, unique, and lowercase-alphanumeric** (max 256 characters).
- [ ] **Notify your advocate before going live** so they can remove the test offer from your integration.

### By integration type

| Integration | Where the player ID goes | Also confirm |
|---|---|---|
| SDK (iOS / Android / Unity) | Set via the SDK as the offerwall loads | The reward callback fires, or your server postback — see [Client-side Polling](/docs/integrate/reward-mechanism/client-polling) |
| Direct Link / iFrame (Web Offerwall) | `playerid` in the offerwall URL | The URL carries both your `appid` and `playerid` |
| API (Prism / Offer API) | Interpolated into the offer's click URL | Authenticate with a bearer token. (Offer API: poll on a schedule and cache. Prism: query per request.) |
