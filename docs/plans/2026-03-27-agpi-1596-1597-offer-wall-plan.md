# Offer Wall Migration Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.
> **Shared rules:** See `2026-03-27-phase2-content-migration-design.md` for conversion rules, frontmatter format, and image handling.

**Goal:** Migrate offer wall content (configuration + offers) from MkDocs into `docs/configuration/` and `docs/offers/`.

**Tickets:** AGPI-1596 + AGPI-1597 (merged)
**Branch:** `ronco/agpi-1596-1597-offer-wall`

---

### File Mapping

**Configuration** (`docs/configuration/`):

| Source (MkDocs `publisher-support/docs/`) | Target | Notes |
|---|---|---|
| `offer-wall-customization.md` | `docs/configuration/offer-wall-customization.mdx` | Virtual currency, icons, multipliers |
| `offer-wall-promotions.md` | `docs/configuration/offer-wall-promotions.mdx` | Currency sales, scheduling, banners |
| `ad-units.md` | `docs/configuration/ad-units.mdx` | Ad unit setup and linking |
| `featured-ad-placements.md` | `docs/configuration/featured-ad-placements.mdx` | Featured placement configuration |

**Offers** (`docs/offers/`):

| Source (MkDocs `publisher-support/docs/`) | Target | Notes |
|---|---|---|
| `multi-reward-offers.md` | `docs/offers/multi-reward-offers.mdx` | Multi-reward interstitial and modal |
| `completion-difficulty-scale.md` | `docs/offers/completion-difficulty-scale.mdx` | Offer difficulty ratings |

**Index files:** Replace both `docs/configuration/index.mdx` and `docs/offers/index.mdx` stubs with real overview content.

### Images

Copy from MkDocs `img/` to section-local `img/` directories:

**Configuration images** → `docs/configuration/img/`:

| Source | File |
|--------|------|
| `img/integration/OW_Customization.png` | Customization options screenshot |
| `img/integration/iframe_design.png` | iFrame design example |
| `img/media/promo-offerwall-example.png` | Promotion display |
| `img/media/new-promotion-modal.png` | Promotion creation dialog |
| `img/integration/offerwall_link_adunits.png` | Ad unit linking |
| `img/integration/dashboardOWlinks04.17.23.png` | Dashboard offerwall links |

**Offers images** → `docs/offers/img/`:

| Source | File |
|--------|------|
| `img/multi-reward/Multi-Reward-Interstitial.png` | Multi-reward interstitial |
| `img/multi-reward/Multi-Reward-Modal-OW.png` | Multi-reward modal |

### Cross-References

- Links to Postback Options → `/docs/webhooks/postback-options`
- Links to Player Support FAQ → `<!-- TODO: Update to WordPress player support URL -->`

---

### Task 1: Create feature branch

```bash
git fetch origin
git checkout -b ronco/agpi-1596-1597-offer-wall origin/main
```

---

### Task 2: Copy images

```bash
mkdir -p docs/configuration/img docs/offers/img
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/integration/OW_Customization.png docs/configuration/img/
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/integration/iframe_design.png docs/configuration/img/
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/media/promo-offerwall-example.png docs/configuration/img/
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/media/new-promotion-modal.png docs/configuration/img/
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/integration/offerwall_link_adunits.png docs/configuration/img/
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/integration/dashboardOWlinks04.17.23.png docs/configuration/img/
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/multi-reward/Multi-Reward-Interstitial.png docs/offers/img/
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/multi-reward/Multi-Reward-Modal-OW.png docs/offers/img/
```

---

### Task 3: Migrate configuration files

For each source file, follow the shared conversion rules. Write to `docs/configuration/`.

**Sidebar positions:**
1. `index.mdx` (overview)
2. `offer-wall-customization.mdx`
3. `offer-wall-promotions.mdx`
4. `ad-units.mdx`
5. `featured-ad-placements.mdx`

---

### Task 4: Migrate offers files

For each source file, follow the shared conversion rules. Write to `docs/offers/`.

**Sidebar positions:**
1. `index.mdx` (overview)
2. `multi-reward-offers.mdx`
3. `completion-difficulty-scale.mdx`

---

### Task 5: Replace index stubs

Replace both `docs/configuration/index.mdx` and `docs/offers/index.mdx` with real overview pages that introduce their sub-pages.

---

### Task 6: Build verification

```bash
npm run build
```

Expected: Build succeeds, no broken links.

---

### Task 7: Visual verification

Serve the site and use Playwright to verify:
- Sidebar shows Configuration and Offers nested under Offer Wall
- All pages render with images and correct formatting
- Tabbed code samples (if any) render correctly

---

### Task 8: Commit and PR

```bash
git add docs/configuration/ docs/offers/
git commit -m "feat(offer-wall): migrate offer wall content from MkDocs

AGPI-1596 AGPI-1597"
```

Use `/pr` skill to create the PR.
