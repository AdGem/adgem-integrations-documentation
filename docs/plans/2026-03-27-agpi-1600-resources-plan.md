# Resources Migration Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.
> **Shared rules:** See `2026-03-27-phase2-content-migration-design.md` for conversion rules, frontmatter format, and image handling.

**Goal:** Migrate resources content (branding, glossary, support, service status, roadmap) from MkDocs into `docs/resources/`.

**Ticket:** AGPI-1600
**Branch:** `ronco/agpi-1600-resources`

---

### File Mapping

| Source (MkDocs `publisher-support/docs/`) | Target (`docs/resources/`) | Notes |
|---|---|---|
| `branding-assets.md` | `branding-assets.mdx` | Logo variations and download |
| `terms-glossary.md` | `terms-glossary.mdx` | 75+ advertising/mobile industry terms |
| `player-support.md` | `player-support-overview.mdx` | Publisher-facing explanation of AdGem's player support process |
| `support-urls.md` | `support-urls.mdx` | API support link generation for publisher apps |
| `developer-support.md` | `developer-support.mdx` | Developer contact and support channels |
| `service-status.md` | `service-status.mdx` | Service status page reference |
| `product-roadmap.md` | `product-roadmap.mdx` | Product roadmap reference |

**Index:** Replace `docs/resources/index.mdx` stub with real overview linking to all sub-pages.

### Images

**Branding assets** → `docs/resources/img/`:

| Source | File |
|--------|------|
| `img/media/AdGem_Banner.png` | Header logo |
| `img/media/AdGem_Black.png` | Black square logo |
| `img/media/AdGem_Purple.png` | Purple square logo |
| `img/media/AdGem_Purple_White_Logo-1.png` | Purple/white variant |
| `img/media/AdGem_White.png` | White square logo |
| `img/media/mobileofferwallcreative.gif` | Mobile offerwall animation |

**Support screenshots** → `docs/resources/img/`:

| Source | File |
|--------|------|
| `img/support/support_portal.png` | Support portal main page |
| `img/support/support_portal_view.png` | Campaign view |
| `img/support/support_url.png` | Campaign-specific support page |
| `img/support/support_not_available_error_page.png` | Error page |

**Roadmap** → `docs/resources/img/`:

| Source | File |
|--------|------|
| `img/roadmap/roadmap02.28.png` | Roadmap screenshot |

### Cross-References

- Player support pages reference postback callbacks → link to `/docs/webhooks/postback-options`
- Support URLs page references Player Support FAQ → `<!-- TODO: Update to WordPress player support URL -->`

---

### Task 1: Create feature branch

```bash
git fetch origin
git checkout -b ronco/agpi-1600-resources origin/main
```

---

### Task 2: Copy images

```bash
mkdir -p docs/resources/img
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/media/AdGem_Banner.png docs/resources/img/
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/media/AdGem_Black.png docs/resources/img/
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/media/AdGem_Purple.png docs/resources/img/
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/media/AdGem_Purple_White_Logo-1.png docs/resources/img/
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/media/AdGem_White.png docs/resources/img/
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/media/mobileofferwallcreative.gif docs/resources/img/
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/support/* docs/resources/img/
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/roadmap/roadmap02.28.png docs/resources/img/
```

---

### Task 3: Migrate content files

Convert all 7 source files and write to `docs/resources/`.

**Sidebar positions:**
1. `index.mdx` (overview)
2. `developer-support.mdx`
3. `player-support-overview.mdx`
4. `support-urls.mdx`
5. `branding-assets.mdx`
6. `terms-glossary.mdx`
7. `service-status.mdx`
8. `product-roadmap.mdx`

---

### Task 4: Replace index stub

Replace `docs/resources/index.mdx` with a real overview page linking to all sub-pages.

---

### Task 5: Build verification

```bash
npm run build
```

---

### Task 6: Visual verification

Serve and verify with Playwright:
- Sidebar shows all resource pages
- Branding assets page renders logos
- Glossary page renders term definitions
- Support URLs page renders screenshots
- No broken images

---

### Task 7: Commit and PR

```bash
git add docs/resources/
git commit -m "feat(resources): migrate resources content from MkDocs

AGPI-1600"
```

Use `/pr` skill to create the PR.
