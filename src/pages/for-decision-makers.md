---
title: For Decision Makers
description: The technical read for CTOs, CPOs, and product/engineering leads — what you integrate, the engineering lift, how rewards and revenue are protected, and what to hand security and procurement.
---

# For Decision Makers

This page is for the people who own the build: CTOs, CPOs, and product and engineering leads. If you have already seen the business case, this is the technical read. What you are integrating, how much work it is for your team, how rewards and revenue are protected, and what to hand your security and procurement reviewers.

One commercial note before the technical detail: there is no platform fee, revenue is funded by advertiser spend, and AdGem runs alongside your current setup as an added yield source. You can test it on live traffic instead of migrating.

## At a glance

| | |
|---|---|
| **Ad units** | Arcade Ad Unit (gaming catalog) and Rewards Ad Unit (gaming and non-gaming) |
| **Platforms** | Web, iOS, Android, Unity |
| **Integration paths** | Pre-built drop-in Ad Unit (SDK, iFrame, WebView), or Prism (build your own UI on our personalization) |
| **Engineering lift** | Pre-built is lowest: embed the unit and pass a player ID. Prism is medium: you build the UI, we return ranked offers. |
| **Authentication** | Credentials stay server-side. You exchange a long-lived refresh token for short-lived access tokens. |
| **Reward delivery** | Signed server-to-server postbacks (v3), or a supported third-party loyalty platform |
| **Observability** | Reporting API and real-time dashboard, plus offer and player webhooks |
| **Data handling** | Device- and event-level data (device and advertising identifiers, IP, engagement events). No account PII such as names or emails. Encrypted in transit. |
| **Coverage** | Global, with availability and demand varying by region. Offers localized by geo, device, and language. |
| **Platform cost** | None. Revenue share funded by advertiser spend. |

## How it works

The reward loop, end to end:

1. Your app requests offers, either through the pre-built Ad Unit or through your own UI on Prism.
2. The user selects an offer and completes the required action with the advertiser.
3. The advertiser confirms the completion to AdGem.
4. AdGem sends your server a signed server-to-server postback (HMAC-SHA256).
5. Your server verifies the signature and grants the reward in your in-app currency.

Offer and player webhooks notify you of offer-availability and player-suspension changes in real time, so you do not have to poll for them.

Every integration is two independent choices: how offers are delivered (the pre-built Ad Unit or Prism) and how rewards flow back (server postbacks or a third-party loyalty platform). Any delivery method pairs with any reward path.

## Choose your integration path

The decision comes down to how much you want to build versus consume.

### Pre-built Ad Unit (fastest)

Drop our Ad Unit into your app with the SDK, an iFrame, or a WebView. We handle the catalog, ranking, personalization, and the UI. Your team embeds the unit and passes a player ID. This is the least to build and the least to maintain.

- **Best for:** most publishers, and any team that wants revenue live quickly without owning a frontend.
- **Your team builds:** the embed, plus a reward-granting endpoint that receives postbacks.
- **Platforms:** Web (iFrame or WebView) and native iOS, Android, and Unity SDKs.

### Prism, the Offer Personalization API (your UI, our intelligence)

Build your own UI and call Prism for offers ranked, filtered, and suppressed per user by geo, device, and language. You keep full control of the frontend and the final presentation. We supply the personalization as an input. There is no ranking or suppression engine for your team to build or maintain.

- **Best for:** teams with strong brand or UX requirements who want a custom interface without building personalization.
- **Your team builds:** the UI that renders Prism's response, plus a reward-granting endpoint.
- **How it works:** GraphQL, so you request only the fields you need. Offers come back sorted by monetization impact, with suppression and geo and device filtering already applied, and localization built in (automatic translation fallback, defaults to English).

| | Pre-built Ad Unit | Prism |
|---|---|---|
| In a line | Our ready-made Ad Unit | Our personalized offers, your UI |
| You build | The embed | Your UI |
| UI owner | AdGem | You |
| Personalization | Built in | Built in |
| Engineering lift | Lowest | Medium |
| Time to launch | Fastest | Medium |
| Platforms | Web, iOS, Android, Unity | Any |

You are not locked in. Publishers can move along this spectrum later, taking on more control or handing work back to AdGem as needs change.

## What your team actually builds

The lift is concrete and small:

- **A reward-granting endpoint.** It receives the signed postback, verifies it, and credits the player. This is the one piece every integration needs.
- **For pre-built:** the embed. A few lines for web, or the SDK for native apps.
- **For Prism:** the UI that renders the offer list, plus server-side token handling. You exchange your refresh token for a short-lived access token, attach it to requests, and refresh it on expiry.

Credentials stay on your server. You never ship secrets to clients.

## How rewards and revenue are protected

- **Reliable rewards.** Signed server-to-server postbacks (v3) confirm every completion, so users get paid and your support load stays low. Third-party loyalty platform delivery is also supported.
- **Fraud kept out of your payouts.** Signature-verified postbacks, player-suspension webhooks, and IP whitelisting keep invalid activity out of what you pay for.
- **Better matching, higher completion.** Through the pre-built Ad Unit or Prism, offers are ranked, filtered, and suppressed per user, so people see offers they are more likely to finish.

## Security and data

What we can tell your security team today:

- All API traffic runs over HTTPS, and credentials stay server-side. Short-lived access tokens mean no long-lived secrets ship to clients.
- Postbacks and webhooks are signed with HMAC-SHA256, so you can verify every message before acting on it. You can also restrict your endpoint to AdGem's static IP address.
- AdGem detects and suspends fraudulent players and notifies you through player-suspension webhooks, so you can withhold rewards from suspended users.
- AdGem processes device- and event-level data only (click, install, and device identifiers, plus the engagement events tied to an advertiser), retained only as long as needed. There is no account PII such as names or emails.
- AdGem runs on AWS.

Additional infrastructure and access controls are detailed in the security and compliance packet, available on request through your Publisher Support Advocate. The packet also includes current certification status, completed security questionnaires, a DPA, and a mutual NDA.

## Observability

- A Reporting API and a real-time dashboard for performance and reconciliation.
- Offer webhooks for offer-availability changes and player webhooks for suspensions, pushed in real time so you do not poll.

## Add it without risking what you have

AdGem runs as an additional yield source alongside your current setup, so you can test it against live traffic instead of migrating. Start with one surface, measure, and expand.

## Regional support

AdGem delivers offers across many markets, targeted and localized by geo, device, and language. Availability and demand vary by region. Your Publisher Support Advocate can confirm coverage and expected demand for your primary markets.

## Where to go next

For your engineers:

- [Decide your path](/docs/get-started/decide)
- [Pre-built setup: SDK, iFrame, and WebView](/docs/integrate/offer-delivery/pre-built)
- [Prism: API-first integration and personalization](/docs/integrate/offer-delivery/partner-built/prism)
- [Server-to-server postbacks and signature verification](/docs/integrate/reward-mechanism/postbacks-v3)
- [Security](/docs/configure/security)

For procurement and security review:

- Request the security and compliance packet through your Publisher Support Advocate. It covers certification status, completed questionnaires, a DPA, and a mutual NDA.

## Get help

Your Publisher Support Advocate is your main contact.

Need the security and compliance packet for a procurement or security review? Request it through your PSA.
