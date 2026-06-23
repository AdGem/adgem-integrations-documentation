---
title: Client-side Polling
sidebar_label: Client-side Polling
---

# Client-side Polling

When you integrate with a **pre-built SDK** (iOS, Android, or Unity), the SDK handles reward delivery on the device: it polls AdGem for the player's completed conversions and surfaces them through its **reward callback**. This lets you credit players **without hosting a server-side postback endpoint**.

Use client-side polling when you can't run a server-to-server postback receiver. For production, **[server postbacks (v3)](/docs/integrate/reward-mechanism/postbacks-v3) are recommended** — they're signed and delivered server-to-server, so they can't be tampered with on the device.

## How it works

1. Integrate a pre-built SDK: [iOS](/docs/integrate/offer-delivery/pre-built/ios-sdk), [Android](/docs/integrate/offer-delivery/pre-built/android-sdk), or [Unity](/docs/integrate/offer-delivery/pre-built/unity-sdk).
2. Register the SDK's offerwall reward callback (see the SDK page for the exact method).
3. When the callback reports a completed reward, credit the player in your app.

:::warning Validate rewards
Because the signal originates on the device, treat client-side rewards as less tamper-resistant than server postbacks. Where possible, reconcile against the [Offer API](/docs/reference/offer-api/overview), or enable [postbacks](/docs/integrate/reward-mechanism/postbacks-v3) as the system of record.
:::
