---
title: Reward Mechanism
sidebar_label: Overview
---

# Reward Mechanism

When a player completes an offer, AdGem needs to tell your system so you can credit the player with their reward. **Postbacks** are server-to-server notifications that deliver these conversion events to your servers in real time, making them essential for tracking conversions and rewarding players accurately.

## How postbacks reward players

AdGem sends a postback to your server whenever a player completes an offer. The postback carries the details you need to credit the player — the player ID, the reward amount, and metadata about the conversion. Your server validates the postback and grants the in-game currency or reward.

By default, AdGem sends postbacks on payable conversion events. AdGem can also send **install postbacks** for tracking purposes when a player installs an app from an offer. If you would like to enable install postbacks, reach out to your dedicated Publisher Support Advocate.

You can set up your Postback URL in the <a href="https://dashboard.adgem.com/publisher/apps" target="_blank">AdGem Dashboard</a>.

## Choose a reward mechanism

AdGem can deliver conversion events to you in several ways. Pick **Server-to-Server Postbacks (v3)** unless you have a constraint that requires an alternative.

- **[Server-to-Server Postbacks (v3)](./postbacks-v3.mdx)** — POST-based, signed, production-grade. The reward path nearly every publisher uses.
- **[Server-to-Server Postbacks (v2)](./postbacks-v2.mdx)** — GET-based postbacks. Still supported; v3 is recommended for new integrations.
- **[Client-side Polling](./client-polling.md)** — reward players from the client when a server postback endpoint is not available.
- **[Third-party Integrations](./third-party.md)** — receive rewards through a supported mediation platform.

For real-time notifications about offer-level changes and player suspension events, see [Webhooks](/docs/configure/webhooks) in the Configure section.
