# Legal Migration Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.
> **Shared rules:** See `2026-03-27-phase2-content-migration-design.md` for conversion rules, frontmatter format, and image handling.

**Goal:** Migrate legal documents from MkDocs into `docs/legal/`.

**Ticket:** AGPI-1601
**Branch:** `ronco/agpi-1601-legal`

---

### File Mapping

| Source (MkDocs `publisher-support/docs/`) | Target (`docs/legal/`) | Notes |
|---|---|---|
| `privacy-policy.md` | `privacy-policy.mdx` | Data handling practices, user rights |
| `pub-terms-and-conditions.md` | `terms-and-conditions.mdx` | Publisher agreement |
| `sdk-license-agreement.md` | `sdk-license-agreement.mdx` | SDK licensing terms |
| `legal-resources.md` | Used as basis for `index.mdx` | Index page linking to the three docs |

**Index:** Replace `docs/legal/index.mdx` stub with content based on `legal-resources.md` (which is already just an index page with links).

### Images

None. Legal documents are text-only.

### Cross-References

- Privacy Policy, Terms, and SDK License all cross-reference each other — use relative paths within `docs/legal/`
- External links to `adgem.com` terms pages → keep as-is (these are the canonical legal URLs)

### Special Considerations

- These are legal documents — migrate content faithfully without edits to substance
- Preserve all section numbering, definitions, and formatting
- Only convert markdown syntax, not legal wording

---

### Task 1: Create feature branch

```bash
git fetch origin
git checkout -b ronco/agpi-1601-legal origin/main
```

---

### Task 2: Migrate content files

Convert all 3 legal documents and write to `docs/legal/`.

**Sidebar positions:**
1. `index.mdx` (overview/links)
2. `privacy-policy.mdx`
3. `terms-and-conditions.mdx`
4. `sdk-license-agreement.mdx`

---

### Task 3: Replace index stub

Replace `docs/legal/index.mdx` with content from `legal-resources.md`, updated to link to the new Docusaurus paths.

---

### Task 4: Build verification

```bash
npm run build
```

---

### Task 5: Visual verification

Serve and verify with Playwright:
- Sidebar shows all legal pages
- Each legal document renders with proper heading structure and section numbering
- Cross-references between legal docs resolve correctly

---

### Task 6: Commit and PR

```bash
git add docs/legal/
git commit -m "feat(legal): migrate legal documents from MkDocs

AGPI-1601"
```

Use `/pr` skill to create the PR.
