# Jira Epic: Documentation Consolidation Migration

## Epic

**Title:** Consolidate adgem-static-documentation into adgem-integrations-documentation

**Description:**
Migrate all content from the MkDocs-based adgem-static-documentation project into the Docusaurus-based adgem-integrations-documentation project. This consolidation will:
- Unify all documentation under a single modern platform
- Reduce content redundancy through shared partials and tabs
- Improve maintainability for non-technical editors
- Enable eventual sunset of adgem-static-documentation

**Acceptance Criteria:**
- All content from adgem-static-documentation is accessible in the new site
- Navigation is intuitive with unified sidebar (Getting Started first)
- No duplicate content - shared content uses partials
- Site builds without errors
- All images display correctly
- All internal links work properly

**Labels:** documentation, migration, infrastructure

---

## Stories

### Story 1: Infrastructure Setup
**Title:** Set up project infrastructure for documentation migration

**Description:**
Create the foundational directory structure, reusable components, and configuration files needed for the migration.

**Acceptance Criteria:**
- [ ] New directory structure created (getting-started, integrations, webhooks, configuration, offers, monetization, api-reference, resources, legal, player-support, _partials)
- [ ] Centralized versions.js file created for SDK version management
- [ ] Reusable React components created (DeprecationNotice, SDKBadge)
- [ ] docusaurus.config.ts updated with new navbar and plugin paths
- [ ] sidebars.ts rewritten with unified navigation structure

**Story Points:** 3

---

### Story 2: Reorganize Existing API Documentation
**Title:** Move Offer API and Targeted API into /integrations/ directory

**Description:**
Reorganize the existing OpenAPI and GraphQL documentation into the new integrations folder structure.

**Acceptance Criteria:**
- [ ] Offer API moved from /docs/offer/ to /docs/integrations/offer-api/
- [ ] Targeted API moved to /docs/integrations/targeted-api/
- [ ] sidebar.ts paths updated for new location
- [ ] Plugin configurations updated in docusaurus.config.ts

**Story Points:** 2

---

### Story 3: Create Shared Content Partials
**Title:** Create reusable MDX partials for shared documentation content

**Description:**
Create partial files in /docs/_partials/ to eliminate content duplication across platform-specific documentation.

**Acceptance Criteria:**
- [ ] player-id-requirements.mdx - Player ID rules and structure requirements
- [ ] postback-macros-table.mdx - Complete postback macro reference table
- [ ] sdk-step0-create-app.mdx - "Create App Property" instructions
- [ ] security-code-samples.mdx - PHP/Node/Ruby/Python postback verification examples
- [ ] before-you-begin.mdx - Common SDK requirements checklist

**Story Points:** 3

---

### Story 4: Migrate Getting Started Section
**Title:** Migrate Getting Started content from adgem-static-documentation

**Description:**
Migrate and convert the essential onboarding content that helps new publishers get started.

**Source Files:**
- essentials-overview.md
- app-property-setup.md
- preflight-checks.md

**Acceptance Criteria:**
- [ ] Getting Started index page created
- [ ] essentials-overview.mdx migrated and converted
- [ ] app-property-setup.mdx migrated and converted
- [ ] preflight-checks.mdx migrated and converted
- [ ] All MkDocs syntax converted to Docusaurus format
- [ ] Images migrated and paths updated

**Story Points:** 3

---

### Story 5: Migrate iOS SDK Documentation
**Title:** Migrate iOS SDK integration guide and related content

**Description:**
Migrate iOS SDK documentation using shared partials to reduce redundancy.

**Source Files:**
- ios-sdk-integration-guide.md
- ios-optional-parameters.md
- ios-example-app.md
- ios-revenue-optimization.md
- ios-changelog.md

**Acceptance Criteria:**
- [ ] Create /docs/integrations/ios-sdk/ directory
- [ ] integration-guide.mdx created using shared partials
- [ ] optional-parameters.mdx migrated
- [ ] example-app.mdx migrated
- [ ] revenue-optimization.mdx migrated (consider consolidating with other platforms)
- [ ] changelog.mdx migrated
- [ ] DeprecationNotice component used instead of duplicated warning

**Story Points:** 5

---

### Story 6: Migrate Android SDK Documentation
**Title:** Migrate Android SDK integration guide and related content

**Description:**
Migrate Android SDK documentation using shared partials to reduce redundancy.

**Source Files:**
- android-sdk-integration-guide.md
- android-optional-parameters.md
- android-example-app.md
- android-revenue-optimization.md
- android-changelog.md

**Acceptance Criteria:**
- [ ] Create /docs/integrations/android-sdk/ directory
- [ ] integration-guide.mdx created using shared partials
- [ ] optional-parameters.mdx migrated
- [ ] example-app.mdx migrated
- [ ] revenue-optimization.mdx migrated
- [ ] changelog.mdx migrated
- [ ] DeprecationNotice component used instead of duplicated warning

**Story Points:** 5

---

### Story 7: Migrate Unity SDK Documentation
**Title:** Migrate Unity SDK integration guide and related content

**Description:**
Migrate Unity SDK documentation using shared partials to reduce redundancy.

**Source Files:**
- unity-integration-guide.md
- unity-optional-parameters.md
- unity-integration-examples.md
- unity-revenue-optimization.md
- unity-changelog.md

**Acceptance Criteria:**
- [ ] Create /docs/integrations/unity-sdk/ directory
- [ ] integration-guide.mdx created using shared partials
- [ ] optional-parameters.mdx migrated
- [ ] integration-examples.mdx migrated
- [ ] revenue-optimization.mdx migrated
- [ ] changelog.mdx migrated
- [ ] DeprecationNotice component used instead of duplicated warning

**Story Points:** 5

---

### Story 8: Migrate Web Offerwall Documentation
**Title:** Migrate Web Offerwall integration guide and related content

**Description:**
Migrate Web Offerwall documentation.

**Source Files:**
- web-offer-wall-integration-guide.md
- web-changelog.md

**Acceptance Criteria:**
- [ ] Create /docs/integrations/web-offerwall/ directory
- [ ] integration-guide.mdx migrated and converted
- [ ] changelog.mdx migrated

**Story Points:** 2

---

### Story 9: Create Consolidated Webhooks Section
**Title:** Create unified Webhooks section with consolidated postbacks page

**Description:**
Create the Webhooks section, consolidating 6 identical postback files into a single page with platform tabs.

**Source Files:**
- ios-postback-setup.md (identical content)
- android-postback-setup.md (identical content)
- unity-postback-setup.md (identical content)
- web-postback-setup.md (identical content)
- api-postback-setup.md (identical content)
- offer-api-postback-setup.md (identical content)
- postback-options.md
- offer-event-webhooks.md
- banned-player-webhooks.md

**Acceptance Criteria:**
- [ ] Webhooks index page created
- [ ] postbacks.mdx created as SINGLE page with platform tabs (consolidates 6 files)
- [ ] postback-options.mdx migrated
- [ ] offer-events.mdx migrated
- [ ] banned-players.mdx migrated
- [ ] Postback macros table uses shared partial

**Story Points:** 5

---

### Story 10: Migrate Configuration Section
**Title:** Migrate offer wall configuration documentation

**Description:**
Migrate configuration-related documentation for offer wall customization and ad units.

**Source Files:**
- offer-wall-customization.md
- ad-units.md
- featured-ad-placements.md
- offer-wall-promotions.md

**Acceptance Criteria:**
- [ ] offer-wall-customization.mdx migrated
- [ ] ad-units.mdx migrated
- [ ] featured-ad-placements.mdx migrated
- [ ] offer-wall-promotions.mdx migrated
- [ ] All images migrated and paths updated

**Story Points:** 3

---

### Story 11: Migrate Offers Section
**Title:** Migrate offers documentation (multi-reward, difficulty scale)

**Description:**
Migrate documentation about offer types and difficulty scaling.

**Source Files:**
- multi-reward-offers.md
- completion-difficulty-scale.md

**Acceptance Criteria:**
- [ ] multi-reward-offers.mdx migrated
- [ ] completion-difficulty-scale.mdx migrated

**Story Points:** 2

---

### Story 12: Migrate Monetization Section
**Title:** Migrate payment and monetization documentation

**Description:**
Migrate payment setup and monetization guide documentation.

**Source Files:**
- payment-guide.md
- payment-setup.md

**Acceptance Criteria:**
- [ ] payment-guide.mdx migrated
- [ ] payment-setup.mdx migrated
- [ ] Payment-related images migrated

**Story Points:** 2

---

### Story 13: Migrate API Reference Section
**Title:** Migrate Reporting API and Static API documentation

**Description:**
Migrate non-integration API documentation.

**Source Files:**
- api-reporting-api.md
- api-static-api.md

**Acceptance Criteria:**
- [ ] reporting-api.mdx migrated
- [ ] static-api.mdx migrated (marked as legacy)

**Story Points:** 2

---

### Story 14: Migrate Resources Section
**Title:** Migrate resource documentation (branding, glossary, support)

**Description:**
Migrate supporting resource documentation.

**Source Files:**
- branding-assets.md
- terms-glossary.md
- developer-support.md
- player-support.md (publisher integration guide)
- support-urls.md
- service-status.md
- product-roadmap.md

**Acceptance Criteria:**
- [ ] branding-assets.mdx migrated
- [ ] glossary.mdx migrated
- [ ] developer-support.mdx migrated
- [ ] player-support-integration.mdx migrated
- [ ] support-urls.mdx migrated
- [ ] service-status.mdx migrated
- [ ] product-roadmap.mdx migrated

**Story Points:** 3

---

### Story 15: Migrate Legal Section
**Title:** Migrate legal documentation (privacy, terms, license)

**Description:**
Migrate legal documents from adgem-static-documentation.

**Source Files:**
- privacy-policy.md
- pub-terms-and-conditions.md
- sdk-license-agreement.md

**Acceptance Criteria:**
- [ ] privacy-policy.mdx migrated
- [ ] publisher-terms.mdx migrated
- [ ] sdk-license.mdx migrated

**Story Points:** 2

---

### Story 16: Migrate Player Support Section
**Title:** Migrate player-facing support documentation

**Description:**
Migrate player support content (different audience from publisher docs).

**Source Files:**
- player-support/index.md
- player-support-faq.md
- player-terms-of-service.md
- ios26-users.md
- icloud.md

**Acceptance Criteria:**
- [ ] Player support index.mdx migrated
- [ ] faq.mdx migrated
- [ ] terms-of-service.mdx migrated
- [ ] ios-26-users.mdx migrated
- [ ] icloud-privacy.mdx migrated
- [ ] Player support images migrated

**Story Points:** 3

---

### Story 17: Migrate Static Assets (Images)
**Title:** Migrate all images from adgem-static-documentation

**Description:**
Copy and organize all images into the new project structure.

**Acceptance Criteria:**
- [ ] Player support images (~27) migrated to /static/img/player-support/
- [ ] Publisher integration images (~16) migrated to /static/img/publisher/integration/
- [ ] Postback images (~9) migrated to /static/img/publisher/postback/
- [ ] Payment images (~5) migrated to /static/img/publisher/payment/
- [ ] Media/logo images (~7) migrated to /static/img/publisher/media/
- [ ] Support images (~4) migrated to /static/img/publisher/support/
- [ ] All image paths in MDX files updated

**Story Points:** 3

---

### Story 18: Update Homepage
**Title:** Update homepage with new feature cards and navigation

**Description:**
Update the homepage to reflect the new documentation structure.

**Acceptance Criteria:**
- [ ] Feature cards updated for Getting Started, Integrations, Webhooks
- [ ] Quick links to key sections added
- [ ] Visual hierarchy improved
- [ ] Mobile responsive

**Story Points:** 2

---

### Story 19: Testing and Validation
**Title:** Test build and validate all content

**Description:**
Comprehensive testing of the migrated documentation site.

**Acceptance Criteria:**
- [ ] Site builds without errors (`npm run build`)
- [ ] All internal links work (no broken links)
- [ ] All images display correctly
- [ ] Search functionality works
- [ ] Mobile responsiveness verified
- [ ] Content compared against original for completeness
- [ ] Partials render correctly in all locations

**Story Points:** 3

---

### Story 20: Documentation and Cleanup
**Title:** Document conventions and clean up migration artifacts

**Description:**
Create documentation for maintainers and clean up any migration artifacts.

**Acceptance Criteria:**
- [ ] CONTRIBUTING.md updated with content structure conventions
- [ ] README.md updated with project overview
- [ ] _partials/ folder documented
- [ ] versions.js usage documented
- [ ] Migration plan file removed or archived
- [ ] Any unused files cleaned up

**Story Points:** 2

---

## Dependencies

### Dependency Diagram

```
Story 1 (Infrastructure) ──┬──► Story 2 (API Reorg)
                           │
                           ▼
                    Story 3 (Partials)
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
    Stories 5-8        Story 9         Story 4
    (SDK Guides)      (Webhooks)    (Getting Started)
          │                │                │
          └────────────────┼────────────────┘
                           ▼
                  Stories 10-16
              (Config, Offers, Monetization,
               API Ref, Resources, Legal,
                   Player Support)
                           │
                           ▼
                    Story 17 (Images)
                           │
                           ▼
                    Story 18 (Homepage)
                           │
                           ▼
                    Story 19 (Testing)
                           │
                           ▼
                    Story 20 (Cleanup)
```

### Dependency List

| Story | Blocked By | Blocks |
|-------|------------|--------|
| 1. Infrastructure | - | 2, 3, 4, 10-16, 18 |
| 2. API Reorg | 1 | 3 |
| 3. Partials | 1, 2 | 5, 6, 7, 8, 9 |
| 4. Getting Started | 1 | 19 |
| 5. iOS SDK | 3 | 17, 19 |
| 6. Android SDK | 3 | 17, 19 |
| 7. Unity SDK | 3 | 17, 19 |
| 8. Web Offerwall | 3 | 17, 19 |
| 9. Webhooks | 3 | 17, 19 |
| 10. Configuration | 1 | 17, 19 |
| 11. Offers | 1 | 19 |
| 12. Monetization | 1 | 17, 19 |
| 13. API Reference | 1 | 19 |
| 14. Resources | 1 | 19 |
| 15. Legal | 1 | 19 |
| 16. Player Support | 1 | 17, 19 |
| 17. Images | 5-10, 12, 16 | 19 |
| 18. Homepage | 1 | 19 |
| 19. Testing | 4-18 | 20 |
| 20. Cleanup | 19 | - |

### Critical Path

The critical path (longest dependency chain) is:

**Story 1 → 2 → 3 → 5-9 → 17 → 19 → 20**

This means Stories 3 (Partials) and 5-9 (SDK guides + Webhooks) are on the critical path and should be prioritized to avoid delays.

### Parallel Work Opportunities

These stories can be worked on in parallel once their dependencies are met:

- **After Story 3 (Partials):** Stories 4, 5, 6, 7, 8, 9 can all start
- **After Story 1 (Infrastructure):** Stories 10, 11, 12, 13, 14, 15, 16, 18 can start
- **Stories 4-16** can mostly be worked on in parallel by different team members

---

## Summary

| Category | Stories | Total Points |
|----------|---------|--------------|
| Infrastructure | 2 | 5 |
| Partials | 1 | 3 |
| Getting Started | 1 | 3 |
| SDK Integrations | 4 | 17 |
| Webhooks | 1 | 5 |
| Other Sections | 6 | 14 |
| Assets & Testing | 4 | 10 |
| **Total** | **20** | **57** |
