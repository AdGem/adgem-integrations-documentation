---
title: Offer API
sidebar_label: Offer API
description: When and why to choose the Offer API — AdGem's REST API for the raw offer catalog, ranked and presented by you.
---

# Offer API

The Offer API is AdGem's REST API for retrieving the raw offer catalog and building your own UI on top of it. You control everything: the ranking, the filtering, and the presentation.

## Why the Offer API

The Offer API returns the full set of available offers with rich metadata, and leaves the logic to you. Nothing is pre-ranked or personalized — you decide how offers are ordered and shown. That's the most work of any integration, and the most control.

## When to choose it

- You need **total control** over ranking and presentation.
- You have your own ranking or personalization system you want to feed with raw catalog data.
- You have a hard requirement for raw data access (for example, data-residency or compliance needs).

If you want a custom UI but would rather build on AdGem's personalization than your own ranking, [Prism](/docs/integrate/offer-delivery/partner-built/prism) is the recommended option. If you don't need to build a UI, see [Pre-built](/docs/integrate/offer-delivery/pre-built).

## Build with the Offer API

See the **[Offer API reference](/docs/reference/offer-api/overview)** for the endpoint, authentication, pagination, and examples.
