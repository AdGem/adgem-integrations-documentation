---
title: Versioning
sidebar_label: Versioning
---

# Versioning

Prism is versioned in the URL path. The base URL — `https://targeted-api.adgem.com` — stays the same across versions; the version is the first path segment. The current version is **v1**:

```http
POST https://targeted-api.adgem.com/v1/offers
```

- **Additive, backward-compatible changes** (for example, new fields or queries) are made within the current version. Because a GraphQL client requests only the fields it names, new fields don't affect existing queries — select just what you use.
- **Breaking changes** would be introduced under a new version path (for example, `/v2`), with the current version remaining available during any migration window.

When changes ship, they're recorded in the [Changelog](/docs/resources/changelog). If you're moving from an older integration, see [Migrations](/docs/resources/migrations/overview).
