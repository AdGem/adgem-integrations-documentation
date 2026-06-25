# Integration narrative pages — design (PUB-191)

**Date:** 2026-06-25 · **Driver:** Micah · **Status:** approved, drafting

The marketing/product content gaps: 8 net-new narrative/positioning pages. Drafted by docs/eng, then routed to marketing/product for review.

## Framing spine

One axis: **how much do you want to build vs. let AdGem handle?** Presented as a spectrum, **by fit** — platform, control appetite, engineering capacity, time-to-revenue.

```
Consume ◄──────────────────────────────────────► Build
Web Offerwall / SDKs   →   Prism   →   Offer API
(we build the UI)        (our offers,    (raw catalog,
                          your UI)        your UI + logic)
```

### Source + firewall

The spine is the publisher-safe distillation of the internal **"Integration Model Selector — Which Model to Pitch"** sheet. That doc is **internal only**. Only the build-vs-consume mental model and the *neutral* comparison axes inform these pages. **Never published:** the internal push order ("lead with Iframe," "SDK to battle-test"), gaps/roadmap (SDK readiness, ANR, app-grouping rebuild, SDK-primary gate, Prism-in-SDK), and commercial strategy ("Prism is the moat," value-capture/stickiness, Offer-API-by-exception/SE-gating, RPC metric, L0–L5 tiers, names/meetings). Also **not** surfaced: the "powered by" plumbing (pre-built runs on Prism, Prism on Offer API) — implementation detail that doesn't help a publisher choose. "Iframe" = the **Web Offerwall** publisher-side; we don't introduce "Iframe" as a separate product name.

## Pages (mixed depth)

**Get Started — substantial (cluster A):**

1. **Decide your path** (`get-started/decide`) — the anchor: build-vs-consume spectrum + decision matrix (below) + routing by platform → control appetite → engineering capacity → time-to-revenue. Links each option to its guide.
2. **Core concepts** (`get-started/core-concepts`) — vocabulary: properties/apps, offers, multi-reward offers + goals, completion difficulty, conversions, postbacks, players. Grounded in legacy essentials-overview / offers pages.

**Integrate — thin connectors (cluster B):**

3. **Integrate / overview** — two independent axes (Offer Delivery × Reward Mechanism) + one-line build-vs-consume + "not sure? → Decide your path."
4. **Offer Delivery landing** — pre-built vs partner-built; route to the branches.
5. **Pre-built landing** — AdGem owns the UI; Web Offerwall (web) + iOS/Android/Unity SDKs (native), by platform fit.
6. **Partner-built landing** — you own the UI; Prism (recommended) vs Offer API, by fit.
7. **Prism narrative** — when/why Prism: personalization (sorting, suppression, geo/device) as an input you keep control over — additive, not a takeover; recommended for custom UIs. Links to Reference/Prism.
8. **Offer API narrative** — when/why Offer API: raw full catalog, you build ranking + UI; fits total-control / own-ranking / raw-data needs. Links to Reference/Offer API.

## Decide-your-path matrix (publisher-safe rows)

| | Pre-built (Web Offerwall / SDK) | Prism | Offer API |
|---|---|---|---|
| In a line | Our ready-made offerwall | Our personalized offers, your UI | Raw catalog, your UI + logic |
| You build | Little to nothing | Your UI | Your UI + ranking |
| UI owner | AdGem | You | You |
| Personalization | Built in | Built in | You build |
| Platform | Web + iOS/Android/Unity | Any | Any |
| Engineering lift | Lowest | Medium | Highest |
| Time to launch | Fastest | Medium | Slowest |
| Best for | Most publishers | Custom UI + our personalization | Total control / own ranking / raw-data needs |

## Sequencing

Two PRs off `main`: **(A)** Get Started (pages 1–2), then **(B)** the six Integrate connectors. Both routed to marketing/product for review.
