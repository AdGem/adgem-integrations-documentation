# Nav Restructure Design

**Original Author:** Ron White
**Date:** 2026-03-09
**Ticket:** AGPI-1683
**Status:** Approved

## Context

Phase 1, Step 1 of the documentation overhaul (AGPI-1586). Rewrites navigation to use Pre-built / Partner-built framing, renames sections to match the master plan, and removes Player Support from the sidebar.

This is a nav-config-only PR. No file moves, no content changes, no homepage work.

## Sidebar Structure

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
├── Configuration
└── Offers
Monetization
Reporting API
Resources
Legal
```

### Changes from current sidebar

| Current | New | Notes |
|---------|-----|-------|
| Integrations (flat list) | Integrations > Pre-built / Partner-built | Sub-grouped by UI ownership |
| Webhooks | Webhooks & Postbacks | Renamed |
| Configuration (top-level) | Offer Wall > Configuration | Nested under new parent |
| Offers (top-level) | Offer Wall > Offers | Nested under new parent |
| API Reference | Reporting API | Renamed, same directory |
| Player Support | (removed) | Separate WordPress instance |

- No directory moves. Labels change, paths stay the same.
- "Offer Wall" parent uses `generated-index` (no new index.mdx needed).
- Web Offerwall gets "(Recommended)" appended to its label.

## Navbar Structure

```
[AdGem Logo] Getting Started | Integrations v | Webhooks & Postbacks | Resources v | [GitHub]
```

### Integrations dropdown

Uses Docusaurus `html` type items as group headers (non-clickable labels):

```
-- Pre-built (Fastest) --
   Web Offerwall (Recommended)
   iOS SDK
   Android SDK
   Unity SDK
-- Partner-built (Custom Experience) --
   Offer API (REST)
   Targeted API (GraphQL)
```

### Resources dropdown

```
Offer Wall
Monetization
Reporting API
Resources & Support
Legal
```

A `// TODO: AGPI-1602` comment marks where the Player Support external link goes once the WordPress URL is finalized.

## Files Changed

| File | Change |
|------|--------|
| `sidebars.ts` | Full rewrite: Pre-built/Partner-built grouping, renames, Offer Wall parent, Player Support removed |
| `docusaurus.config.ts` | Navbar items updated: grouped Integrations dropdown, renamed Webhooks, condensed Resources dropdown |

## Out of Scope

- No file or directory moves/renames
- No homepage changes (AGPI-1604)
- No content changes to .mdx files
- No new .mdx files (Offer Wall uses generated-index)

## Acceptance Criteria

- [ ] Sidebar shows Pre-built (Fastest) / Partner-built (Custom Experience) sub-groups under Integrations
- [ ] Web Offerwall labeled "(Recommended)" in sidebar
- [ ] Webhooks renamed to "Webhooks & Postbacks"
- [ ] Configuration and Offers nested under "Offer Wall" parent
- [ ] API Reference renamed to "Reporting API"
- [ ] Player Support removed from sidebar
- [ ] Navbar Integrations dropdown shows grouped items with section headers
- [ ] Navbar Resources dropdown contains Offer Wall, Monetization, Reporting API, Resources & Support, Legal
- [ ] TODO comment for Player Support external link (AGPI-1602)
- [ ] Site builds without errors
- [ ] All existing doc links still resolve (no broken links)
