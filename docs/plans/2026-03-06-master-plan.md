# Documentation Overhaul Master Plan

**Original Author:** Ron White
**Date:** 2026-03-06
**EPIC:** AGPI-1586
**Status:** Approved

## Context

AGPI-1586 consolidates all AdGem documentation from the MkDocs-based `adgem-static-documentation` into the Docusaurus-based `adgem-integrations-documentation`. This master plan defines the execution order, PR structure, and phasing for the remaining work.

### Key Decisions

- **Pre-built / Partner-built framing** replaces the original "SDKs / APIs" split. Integration methods are grouped by who owns the UI (AdGem vs partner), not by technology.
- **Static API docs are dropped.** Confirmed with Tawni — no migration needed despite ~50 req/hr still hitting the endpoint.
- **Player Support is a separate instance** (not in this site's nav). Illiana manages player support on WordPress.
- **Hosting moves to AWS Amplify** (account 172122050326, us-east-2) via click-ops, not CDK. The account is currently all click-ops and bootstrapping CDK for a single docs site isn't worth the overhead.
- **Images are bundled per content PR** rather than a standalone migration.

## Navigation Structure

```
Getting Started
Integrations
├── Pre-built (Fastest)
│   ├── Web Offerwall (Recommended)
│   ├── iOS SDK
│   ├── Android SDK
│   └── Unity SDK
└── Partner-built (Custom Experience)
    ├── Offer API (REST)
    └── Targeted API (GraphQL)
Webhooks & Postbacks
Offer Wall
Monetization
Reporting API
Resources
Legal
```

### Terminology

- **Pre-built (Fastest)** — AdGem provides the UI. Web Offerwall, iOS SDK, Android SDK, Unity SDK.
- **Partner-built (Custom Experience)** — Publisher builds their own UI. Offer API, Targeted API.
- **"Native" is eliminated** from all navigation, routing, and category labels.
- Steering language: "Recommended", "Fastest", "Proven", "Higher engineering lift".

## Phases

### Phase 1 — Foundation

Sets the skeleton. Nav ships first, then homepage.

| Order | Story | PR Scope |
|-------|-------|----------|
| 1 | AGPI-1683 | Nav restructure: `sidebars.ts` rewrite with Pre-built / Partner-built grouping |
| 2 | AGPI-1604 | Homepage redesign: `src/pages/index.js`, new components, CSS |

These are sequential — homepage links depend on nav structure being in place.

### Phase 2 — Content Migration

Fills in the skeleton. PRs are parallelizable. Images included per PR (no standalone image migration).

| Story | PR Scope |
|-------|----------|
| AGPI-1595 | Webhooks & Postbacks section |
| AGPI-1596 + AGPI-1597 | Offer Wall section (merged from Configuration + Offers) |
| AGPI-1598 | Monetization section |
| AGPI-1599 | Reporting API (Static API dropped) |
| AGPI-1600 | Resources (branding, glossary, support) |
| AGPI-1601 | Legal (privacy, terms, license) |
| AGPI-1602 | Player Support separation (separate instance) |

### Phase 3 — Hosting

Replaces GitHub Pages with AWS Amplify.

| Story | PR Scope |
|-------|----------|
| AGPI-1770 | `amplify.yml` build config, runbook doc, remove GH Pages workflows. Console setup (click-ops) in account 172122050326, us-east-2. PR previews enabled. Custom domain: docs.adgem.com. |

### Phase 4 — Validation & Cleanup

Final gate before launch.

| Story | PR Scope |
|-------|----------|
| AGPI-1605 | Test build, link validation, cross-browser check |
| AGPI-1606 | Document conventions, clean up migration artifacts |

## PR Summary

~12 PRs total:

- Phase 1: 2 PRs (sequential)
- Phase 2: 7 PRs (parallelizable)
- Phase 3: 1 PR + click-ops
- Phase 4: 1-2 PRs

## Jira Changes

| Ticket | Change |
|--------|--------|
| AGPI-1683 | Updated description: Pre-built / Partner-built framing (replaces SDKs/APIs split) |
| AGPI-1599 | Updated scope: Reporting API only (Static API dropped) |
| AGPI-1603 | Closed — images folded into content PRs |
| AGPI-1770 (new) | AWS Amplify hosting: click-ops + amplify.yml + runbook |

## Sub-Plans

Each phase will have its own implementation plan:

- `2026-03-04-homepage-nav-redesign.md` — Existing design doc, covers Phase 1 (AGPI-1683 + AGPI-1604)
- Phase 2-4 plans will be created as those phases begin

## Design Principles

- **Pre-built is the default path.** Featured first, recommended explicitly, lowest friction.
- **Partner-built is the exception.** Positioned as advanced, honest about higher lift.
- **Graduation is encouraged.** Brief callout on landing page, full explanation in Getting Started.
- **Benefits alongside titles.** "(Fastest)" and "(Custom Experience)" make the decision instant.
- **Sidebar is terse, landing page is richer.** Same structure, different levels of supporting context.
