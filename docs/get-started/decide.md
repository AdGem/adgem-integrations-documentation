---
title: Decide Your Path
sidebar_label: Decide Your Path
description: Choose how to deliver AdGem offers — from a ready-made offerwall to a fully custom build.
---

# Decide Your Path

Every AdGem integration comes down to one question: **how much do you want to build yourself, and how much do you want AdGem to handle?**

Offer delivery sits on a spectrum. At one end, AdGem gives you a ready-made offerwall to embed. At the other, we hand you the raw offer catalog and you build the experience and the logic. Prism sits in the middle: our personalized offers, your UI.

<div className="delivery-spectrum">
<div className="delivery-spectrum__track">
<span>Consume more</span>
<span>Build more</span>
</div>
<div className="delivery-spectrum__tiers">
<div className="delivery-spectrum__tier">
<strong>Web Offerwall / SDKs</strong>
<span>We build the UI. You embed it and pass a player ID.</span>
</div>
<div className="delivery-spectrum__tier">
<strong>Prism</strong>
<span>Our personalized offers, your UI.</span>
</div>
<div className="delivery-spectrum__tier">
<strong>Offer API</strong>
<span>The raw catalog. Your UI and logic.</span>
</div>
</div>
</div>

## Two questions

**1. Do you want to use AdGem's ready-made offerwall, or build your own UI?**

- **Use our offerwall** → a [pre-built option](/docs/integrate/offer-delivery/pre-built). AdGem owns the UI and the offer presentation; you embed it and pass us a player ID. This is the fastest path and the right fit for most publishers.
- **Build your own UI** → a [partner-built option](/docs/integrate/offer-delivery/partner-built). You own the front end; AdGem hands you the offers. Continue to question 2.

**2. (Building your own UI) Do you want AdGem's personalization, or full control of the logic?**

- **Keep your UI and gain our personalization** → **[Prism](/docs/integrate/offer-delivery/partner-built/prism)** (recommended), AdGem's Offer Personalization API (GraphQL). It returns a sorted, suppressed, geo- and device-filtered list of offers. You still own the UI, so you keep final control over how offers are presented — the personalization is an input, not a takeover.
- **Build your own ranking and logic** → **[Offer API](/docs/integrate/offer-delivery/partner-built/offer-api)**. You get the raw offer catalog and build everything on top of it. Best when you need total control, have your own ranking system, or have a hard requirement for raw data access.

## Compare the options

| | Pre-built (Web Offerwall / SDK) | Prism | Offer API |
|---|---|---|---|
| In a line | Our ready-made offerwall | Our personalized offers, your UI | Raw catalog, your UI and logic |
| You build | Little to nothing | Your UI | Your UI and ranking |
| UI owner | AdGem | You | You |
| Personalization | Built in | Built in | You build it |
| Platform | Web, plus iOS / Android / Unity | Any | Any |
| Engineering lift | Lowest | Medium | Highest |
| Time to launch | Fastest | Medium | Slowest |
| Best for | Most publishers | A custom UI with our personalization | Total control, your own ranking, or raw-data needs |

## What else to weigh

- **Platform** — for the ready-made offerwall, choose the [Web Offerwall](/docs/integrate/offer-delivery/pre-built/web-offerwall) for web and in-app web views, or a native [iOS](/docs/integrate/offer-delivery/pre-built/ios-sdk), [Android](/docs/integrate/offer-delivery/pre-built/android-sdk), or [Unity](/docs/integrate/offer-delivery/pre-built/unity-sdk) SDK for native apps. Prism and the Offer API work anywhere.
- **Engineering capacity** — less to invest favors pre-built; the more you want to build, the further down the spectrum you can go.
- **Time to revenue** — pre-built is fastest to launch; Prism is in the middle; the Offer API takes the most build time.
- **Control** — if brand and UX control matter but you don't want to build a ranking engine, Prism is the sweet spot.

You're not locked in. Publishers can move along the spectrum later — taking on more control, or offloading work back to AdGem — as their needs change.

## Then: how rewards flow back

Offer delivery is one axis; the other is how conversions return to you so you can reward players. Most integrations use **[server postbacks](/docs/integrate/reward-mechanism/postbacks-v3)** (recommended). Pre-built SDKs can also deliver rewards through an on-device callback. See [Reward Mechanism](/docs/integrate/reward-mechanism) for the details — you choose it independently of your delivery path.

## Next steps

- Ready to set up? Start with the [Quickstart](/docs/get-started/quickstart).
- New to the terminology? See [Core concepts](/docs/get-started/core-concepts).
- Want the full API specs? See the [Reference](/docs/reference).
