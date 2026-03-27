# Player Support Removal Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove the Player Support section from the Docusaurus site. Player support lives on a separate WordPress instance managed by Illiana.

**Ticket:** AGPI-1602
**Branch:** `ronco/agpi-1602-player-support-removal`

---

### What to Remove

| Path | Action |
|------|--------|
| `docs/player-support/` (entire directory) | Delete |
| `docusaurus.config.ts` navbar TODO comment | Remove the `// TODO: AGPI-1602` comment from the Resources dropdown |

### What NOT to Touch

- `sidebars.ts` — Player Support was already removed from the sidebar in AGPI-1683
- `docs/resources/player-support-overview.mdx` — This is the publisher-facing explanation of how AdGem handles player support (migrated in AGPI-1600). It stays.

### Cross-Reference Cleanup

After removal, grep the codebase for any remaining links to `/docs/player-support/` and replace with `<!-- TODO: Update to WordPress player support URL -->`.

---

### Task 1: Create feature branch

```bash
git fetch origin
git checkout -b ronco/agpi-1602-player-support-removal origin/main
```

---

### Task 2: Delete player-support directory

```bash
rm -rf docs/player-support/
```

---

### Task 3: Clean up navbar TODO

In `docusaurus.config.ts`, remove the `// TODO: AGPI-1602 - Add Player Support external link once WordPress URL is finalized` comment from the Resources dropdown items array.

---

### Task 4: Clean up cross-references

```bash
grep -r "player-support" docs/ src/ --include="*.mdx" --include="*.tsx" --include="*.ts" --include="*.js"
```

Replace any remaining internal links to the deleted section with TODO comments.

---

### Task 5: Build verification

```bash
npm run build
```

Expected: Build succeeds. No broken links to `/docs/player-support/`.

---

### Task 6: Commit and PR

```bash
git add -A
git commit -m "chore(player-support): remove player support section

Player support lives on a separate WordPress instance.

AGPI-1602"
```

Use `/pr` skill to create the PR.
