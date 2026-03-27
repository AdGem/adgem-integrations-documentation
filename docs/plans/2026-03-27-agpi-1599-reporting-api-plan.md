# Reporting API Migration Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.
> **Shared rules:** See `2026-03-27-phase2-content-migration-design.md` for conversion rules, frontmatter format, and image handling.

**Goal:** Migrate Reporting API documentation from MkDocs into `docs/api-reference/`. Static API documentation is dropped (confirmed with Tawni).

**Ticket:** AGPI-1599
**Branch:** `ronco/agpi-1599-reporting-api`

---

### File Mapping

| Source (MkDocs `publisher-support/docs/`) | Target (`docs/api-reference/`) | Notes |
|---|---|---|
| `api-reporting-api.md` | `reporting-api.mdx` | REST API reference: endpoints, params, response fields, examples |

**Index:** Replace `docs/api-reference/index.mdx` stub with real overview content. Remove the "Static API (Legacy)" mention from the stub — static API is dropped.

### Images

None. This is a text-only API reference.

### Cross-References

- References to AdGem Dashboard → keep as external `dashboard.adgem.com` link
- Remove any references to the Static API

---

### Task 1: Create feature branch

```bash
git fetch origin
git checkout -b ronco/agpi-1599-reporting-api origin/main
```

---

### Task 2: Migrate content

Read `api-reporting-api.md`, convert to MDX, write to `docs/api-reference/reporting-api.mdx`.

**Sidebar positions:**
1. `index.mdx` (overview)
2. `reporting-api.mdx`

---

### Task 3: Replace index stub

Replace `docs/api-reference/index.mdx` with a real overview page. Remove the Static API mention.

---

### Task 4: Build verification

```bash
npm run build
```

---

### Task 5: Visual verification

Serve and verify with Playwright:
- Sidebar shows Reporting API section with the API reference page
- Page renders with code examples and parameter tables
- No broken links

---

### Task 6: Commit and PR

```bash
git add docs/api-reference/
git commit -m "feat(reporting-api): migrate reporting API docs from MkDocs

AGPI-1599"
```

Use `/pr` skill to create the PR.
