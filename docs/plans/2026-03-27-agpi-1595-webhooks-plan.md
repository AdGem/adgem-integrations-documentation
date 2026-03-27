# Webhooks & Postbacks Migration Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.
> **Shared rules:** See `2026-03-27-phase2-content-migration-design.md` for conversion rules, frontmatter format, and image handling.

**Goal:** Migrate webhook and postback content from MkDocs into `docs/webhooks/`.

**Ticket:** AGPI-1595
**Branch:** `ronco/agpi-1595-webhooks-postbacks`

---

### File Mapping

| Source (MkDocs `publisher-support/docs/`) | Target (`docs/webhooks/`) | Notes |
|---|---|---|
| `offer-event-webhooks.md` | `offer-event-webhooks.mdx` | Has PHP/Node tabbed code samples — convert to `<Tabs>` |
| `banned-player-webhooks.md` | `banned-player-webhooks.mdx` | Has PHP/Node tabbed code samples |
| `postback-options.md` | `postback-options.mdx` | Overview page — references postback macros table |
| `offer-api-postback-setup.md` | `offer-api-postback-setup.mdx` | Postback setup for API integrations |

**Index:** Replace `docs/webhooks/index.mdx` stub with a real overview that introduces the section and links to the sub-pages.

### Images

Copy from MkDocs `img/` to `docs/webhooks/img/`:

| Source | File |
|--------|------|
| `img/integration/offereventwebhook.png` | Webhook URL input field screenshot |
| `img/integration/banned_player_webhook_url.png` | Banned player webhook URL field |
| `img/postback/` (all files) | Postback configuration screenshots |

### Partials to Reuse

- Import `_partials/postback-macros-table.mdx` in `postback-options.mdx` instead of duplicating the macro table
- Import `_partials/security-code-samples.mdx` where postback verification code appears

### Cross-References

- Links to Offer API Response → update to relative path `/docs/integrations/offer-api/...`
- Links to Player Support FAQ → replace with `<!-- TODO: Update to WordPress player support URL -->`

---

### Task 1: Create feature branch

```bash
git fetch origin
git checkout -b ronco/agpi-1595-webhooks-postbacks origin/main
```

Verify: `git status` shows clean working tree.

---

### Task 2: Copy images

```bash
mkdir -p docs/webhooks/img
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/integration/offereventwebhook.png docs/webhooks/img/
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/integration/banned_player_webhook_url.png docs/webhooks/img/
cp /Users/ronco/dev/adgem-static-documentation/publisher-support/docs/img/postback/* docs/webhooks/img/
```

---

### Task 3: Migrate content files

For each source file:

1. Read the MkDocs source
2. Convert pymdownx syntax to Docusaurus equivalents (see shared design doc)
3. Add frontmatter (`sidebar_position`, `title`, `description`)
4. Update image paths to `./img/filename.png`
5. Replace hardcoded `docs.adgem.com` URLs with relative paths
6. Import partials where content overlaps with `_partials/`
7. Write as `.mdx` to target path

**Sidebar positions:**
1. `index.mdx` (overview)
2. `postback-options.mdx`
3. `offer-api-postback-setup.mdx`
4. `offer-event-webhooks.mdx`
5. `banned-player-webhooks.mdx`

---

### Task 4: Replace index stub

Replace `docs/webhooks/index.mdx` with a real overview page that:
- Introduces webhooks and postbacks
- Briefly describes each sub-page
- Links to the sub-pages

---

### Task 5: Build verification

```bash
npm run build
```

Expected: Build succeeds, no broken links.

---

### Task 6: Visual verification

Serve the site and use Playwright to screenshot the Webhooks & Postbacks section:

```bash
npm run serve &
```

Verify:
- Sidebar shows all webhook/postback pages under "Webhooks & Postbacks"
- Index page renders with links to sub-pages
- At least one sub-page renders with images and code samples
- No broken images or layout issues

---

### Task 7: Commit and PR

Stage all new/modified files and commit:

```bash
git add docs/webhooks/
git commit -m "feat(webhooks): migrate webhooks & postbacks content from MkDocs

AGPI-1595"
```

Use `/pr` skill to create the PR.
