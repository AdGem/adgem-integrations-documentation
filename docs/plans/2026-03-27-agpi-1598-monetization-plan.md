# Monetization Migration Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.
> **Shared rules:** See `2026-03-27-phase2-content-migration-design.md` for conversion rules, frontmatter format, and image handling.

**Goal:** Migrate payment/monetization content from MkDocs into `docs/monetization/`.

**Ticket:** AGPI-1598
**Branch:** `ronco/agpi-1598-monetization`

---

### File Mapping

| Source (MkDocs `publisher-support/docs/`) | Target (`docs/monetization/`) | Notes |
|---|---|---|
| `payment-guide.md` | `payment-guide.mdx` | Payment terms, methods, thresholds |
| `payment-setup.md` | `payment-setup.mdx` | Dashboard configuration walkthrough |

**Index:** Replace `docs/monetization/index.mdx` stub with real overview content.

### Images

Copy from MkDocs `img/payment-example/` to `docs/monetization/img/`:

| Source | File |
|--------|------|
| `img/payment-example/paymentdetails.png` | Payment details page |
| `img/payment-example/paymentinformationpage.png` | Address form |
| `img/payment-example/paymentmethod.png` | Payment method form |
| `img/payment-example/taxforms.png` | Tax forms UI |
| `img/payment-example/historytab.png` | Payment history |

### Cross-References

- Links between payment guide and payment setup — use relative paths within `docs/monetization/`

---

### Task 1: Create feature branch

```bash
git fetch origin
git checkout -b ronco/agpi-1598-monetization origin/main
```

---

### Task 2: Copy images

```bash
mkdir -p docs/monetization/img
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/payment-example/* docs/monetization/img/
```

---

### Task 3: Migrate content files

Convert and write both files to `docs/monetization/`.

**Sidebar positions:**
1. `index.mdx` (overview)
2. `payment-guide.mdx`
3. `payment-setup.mdx`

---

### Task 4: Replace index stub

Replace `docs/monetization/index.mdx` with a real overview that introduces payment terms and setup, linking to both sub-pages.

---

### Task 5: Build verification

```bash
npm run build
```

---

### Task 6: Visual verification

Serve and verify with Playwright:
- Sidebar shows both pages under Monetization
- Payment setup page renders with all 5 screenshots
- No broken images

---

### Task 7: Commit and PR

```bash
git add docs/monetization/
git commit -m "feat(monetization): migrate payment content from MkDocs

AGPI-1598"
```

Use `/pr` skill to create the PR.
