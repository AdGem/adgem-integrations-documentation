---
title: Offer API — Versioning
sidebar_label: Versioning
---

# Offer API — Versioning

The Offer API is versioned in the URL path. The current version is **v1**:

```
https://offer-api.adgem.com/v1
```

- **Additive, backward-compatible changes** (for example, new fields on a response) are made within the current version without bumping it. Build your integration to **ignore unrecognized fields** so these additions don't break it.
- **Breaking changes** would be introduced under a new version path (for example, `/v2`), with the current version remaining available during any migration window.

When changes ship, they're recorded in the [Changelog](/docs/resources/changelog). If you're moving from an older integration, see [Migrations](/docs/resources/migrations/overview).
