# Homepage & Nav Redesign Design

**Original Author:** Ron White
**Date:** 2026-03-04
**Ticket:** AGPI-1604 (Story 18)
**Status:** Approved

## Context

The integration docs landing page and sidebar needed a redesign to:

1. Eliminate ambiguous use of the word "native" (flagged by Brogan, head of publisher sales)
2. Steer publishers toward the pre-built offerwall as the recommended starting point
3. Establish a clear "graduation path" from pre-built to partner-built
4. Make the integration decision instant by pairing benefits with labels

Key input came from a ChatGPT session with Nick that proposed framing integrations as "who owns the UI" (AdGem vs partner) rather than using "native" as a routing term.

## Terminology Decisions

- **"Native" is eliminated** from all navigation, routing, and category labels
- Two tiers based on UI ownership:
  - **Pre-built (Fastest)** -- AdGem provides the UI (Web Offerwall, iOS SDK, Android SDK, Unity SDK)
  - **Partner-built (Custom Experience)** -- publisher builds their own UI (Offer API, Targeted API)
- Benefits sit alongside labels for instant scanning
- Steering language: "Recommended", "Fastest", "Proven", "Higher engineering lift"

## Sidebar Nav Structure

```
Integrations
├── Pre-built (Fastest)
│   ├── Web Offerwall (Recommended)
│   ├── iOS SDK
│   ├── Android SDK
│   └── Unity SDK
└── Partner-built (Custom Experience)
    ├── Offer API (REST)
    └── Targeted API (GraphQL)
```

Sidebar uses terse labels. Landing page adds a sentence of context under each section header.

## Landing Page Wireframe

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                   │
│                    AdGem Integration Docs                         │
│            Monetize your app with rewarded offers                │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │              Choose Your Integration Method                  │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ── Pre-built (Fastest) ───────────────────────────────────────  │
│  Launch quickly with AdGem's proven, high-performing offerwall.  │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │  🌐 Web Offerwall (Recommended)                              │ │
│  │                                                               │ │
│  │  Fastest integration — works on any platform with a          │ │
│  │  webview. iOS, Android, Web.                                 │ │
│  │                                                  [Get Started]│ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐                   │
│  │  📱 iOS    │ │ 🤖 Android │ │ 🎮 Unity   │                   │
│  │    SDK     │ │    SDK     │ │    SDK     │                   │
│  │  iOS apps  │ │Android apps│ │Cross-plat. │                   │
│  │            │ │            │ │   games    │                   │
│  │[Get Started]│ │[Get Started]│ │[Get Started]│                  │
│  └────────────┘ └────────────┘ └────────────┘                   │
│                                                                   │
│  ── Partner-built (Custom Experience) ─────────────────────────  │
│  Full control over layout, design, and offer presentation.       │
│  Higher engineering lift — choose when you need bespoke UX       │
│  or deep product integration.                                    │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │  🔧 APIs                                                     │ │
│  │                                                               │ │
│  │  Build your own offer experience with direct API access.     │ │
│  │                                                               │ │
│  │  [Offer API (REST)]          [Targeted API (GraphQL)]        │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │  💡 Most partners start with the Pre-built Offerwall, then   │ │
│  │  graduate to a Partner-built Experience once they've          │ │
│  │  validated engagement. → Learn more in Getting Started        │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌──────────────────────────┐ ┌──────────────────────────────┐  │
│  │ 📚 New to AdGem?         │ │ 🔔 Webhooks & Postbacks      │  │
│  │                          │ │                               │  │
│  │ Understand key concepts  │ │ Receive real-time reward     │  │
│  │ before you integrate     │ │ notifications                 │  │
│  │                          │ │                               │  │
│  │ [Getting Started →]      │ │ [Set Up Postbacks →]         │  │
│  └──────────────────────────┘ └──────────────────────────────┘  │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

## Design Principles

- **Pre-built is the default path.** Featured first, recommended explicitly, lowest friction.
- **Partner-built is the exception.** Positioned as advanced, honest about higher lift.
- **Graduation is encouraged.** Brief callout on landing page, full explanation in Getting Started.
- **Benefits alongside titles.** "(Fastest)" and "(Custom Experience)" make the decision instant.
- **Sidebar is terse, landing page is richer.** Same structure, different levels of supporting context.

## Acceptance Criteria

- [ ] Hero section with title and tagline
- [ ] "Pre-built (Fastest)" section with Web Offerwall elevated as "(Recommended)"
- [ ] Platform SDK cards for iOS, Android, Unity within the Pre-built section
- [ ] "Partner-built (Custom Experience)" section with Offer API and Targeted API
- [ ] Graduation path callout with link to Getting Started
- [ ] Quick links to Getting Started and Webhooks
- [ ] Sidebar restructured into two sub-groups matching landing page
- [ ] Mobile responsive layout
- [ ] Cards link to correct documentation sections
- [ ] Remove default Docusaurus feature cards

## Technical Notes

- Update `src/pages/index.js`
- Update `src/components/HomepageFeatures/index.js`
- Update `sidebars.ts` for two-tier Integrations structure
- Create new CSS in `src/css/custom.css` or component styles
- Consider using Docusaurus Infima card components
