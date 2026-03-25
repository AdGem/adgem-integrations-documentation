# Iliana Style Corrections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply Iliana's design feedback — typography sizing, navbar centering, dropdown restyle, sidebar adjustments — to align the docs site with adgem.com's visual language.

**Architecture:** All changes are CSS-only, touching `src/css/custom.css` for global styles and three component CSS modules for homepage-specific tweaks. No HTML/JS changes needed. The Hero title font size comes from global H1 rules, so the Hero module override just needs removal.

**Tech Stack:** CSS (Infima framework variables + custom overrides), Docusaurus 3, Playwright for visual verification.

**Key reference:** Iliana's style guide PDF at `~/Downloads/Documentation Page - Font size and color updates.pdf` and screenshots at `~/Downloads/Screenshot 2026-03-13 at *.png`.

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `src/css/custom.css` | Modify | Global typography tokens, navbar, dropdown, sidebar styles |
| `src/components/Hero/styles.module.css` | Modify | Remove explicit title font-size (now handled by global H1) |
| `src/components/IntegrationCards/styles.module.css` | Modify | Adjust card title/description sizes for new type scale |
| `src/components/QuickLinks/styles.module.css` | Modify | Ensure equal card sizing after type scale change |

---

### Task 1: Global Typography Tokens

Update the CSS custom properties and heading rules in `custom.css` to match Iliana's style guide.

**Files:**
- Modify: `src/css/custom.css:33-36` (`:root` font-size variables)
- Modify: `src/css/custom.css:105-115` (heading size rules)

- [ ] **Step 1: Update `:root` base font size**

In `src/css/custom.css`, change `--ifm-font-size-base` from `18px` to `16px` (`1rem`):

```css
--ifm-font-size-base: 16px;
```

- [ ] **Step 2: Update heading sizes**

Replace the heading size rules (lines 105-115) with Iliana's sizes:

```css
h1, .markdown h1 {
  font-size: 1.5625rem; /* 25px */
}

h2, .markdown h2 {
  font-size: 1.375rem; /* 22px */
}

h3, .markdown h3 {
  font-size: 1.375rem; /* 22px */
}
```

- [ ] **Step 3: Add content link typography rule**

After the body text rule (line 120), add link styling per Iliana's spec — content links use Red Hat Display Bold at 16px. **Scope to `.markdown a` only** to avoid overriding navbar, sidebar, footer, and card link styles which have their own typography:

```css
/* Content links - Red Hat Display Bold per Iliana's style guide */
.markdown a {
  font-family: var(--ifm-heading-font-family);
  font-weight: 700;
  font-size: 1rem; /* 16px */
}
```

Note: Link *colors* are already handled by existing `--ifm-link-color` variables. Keep the current dark-mode link colors as-is (cyan base `#82E7F6`, blue hover `#3BB3FD`) — the PDF says "Accent Blue" for dark bg links but the existing cyan/blue pairing already matches the intent and provides good contrast.

- [ ] **Step 4: Update button font size**

In the `.button--primary, .button--secondary` rule (line ~136), ensure font-size is `1rem` (16px). It already is, so just verify — no change needed.

- [ ] **Step 5: Build and verify**

Run: `npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 6: Commit**

```bash
git add src/css/custom.css
git commit -m "style: update typography to match Iliana's style guide

H1 25px, H2/H3 22px, body 16px, links Red Hat Display Bold."
```

---

### Task 2: Navbar Centering and Font Size

Center-align nav items and set font to 16px.

**Files:**
- Modify: `src/css/custom.css:183-185` (`.navbar__inner` rule)
- Modify: `src/css/custom.css:193-196` (`.navbar__link` rule)

- [ ] **Step 1: Center the navbar**

Update `.navbar__inner` to center items with equal spacing:

```css
.navbar__inner {
  padding: 0 0.5rem;
  justify-content: center;
}
```

Note: Docusaurus navbar uses flexbox. The logo has `margin-right: auto` by default, pushing items left. We override this to distribute space evenly so nav links sit between the logo and the GitHub link. Add these rules (desktop only — mobile hamburger layout should not be affected):

```css
@media (min-width: 997px) {
  .navbar__brand {
    margin-right: 0;
  }

  .navbar__items {
    flex: 1;
    justify-content: center;
  }

  .navbar__items--right {
    flex: 0;
  }
}
```

This centers the nav links in the space between logo and right-side items. On mobile (<997px), Docusaurus collapses to a hamburger menu and the default layout is preserved.

- [ ] **Step 2: Set navbar link font size to 16px**

Update `.navbar__link`:

```css
.navbar__link {
  color: white;
  font-weight: 500;
  font-size: 1rem; /* 16px - was inheriting 18px base */
}
```

- [ ] **Step 3: Build and verify**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/css/custom.css
git commit -m "style: center navbar items and set font to 16px"
```

---

### Task 3: Dropdown Menu Restyle

Restyle dropdowns to match adgem.com: white bg, black text, purple hover with blue text, square corners, no border, wider width.

**Files:**
- Modify: `src/css/custom.css:59-63` (`:root` dropdown variables)
- Modify: `src/css/custom.css:88-92` (dark mode dropdown variables)
- Modify: `src/css/custom.css:207-211` (`.dropdown__menu` rule)
- Modify: `src/css/custom.css:367-372` (`.dropdown__link:hover` rule)
- Modify: `src/css/custom.css:374-389` (`.dropdown-header` rule)

- [ ] **Step 1: Update dropdown CSS variables in `:root`**

Replace the dropdown variables:

```css
/* Dropdown menus - white bg, matching adgem.com */
--ifm-dropdown-background-color: #ffffff;
--ifm-dropdown-link-color: #000000;
--ifm-dropdown-hover-background-color: var(--adgem-secondary-purple);
```

- [ ] **Step 2: Update dropdown CSS variables in dark mode**

In `[data-theme='dark']`, set the same dropdown overrides (dropdowns stay white even in dark mode, matching adgem.com):

```css
/* Dropdown menus - white bg even in dark mode (matches adgem.com) */
--ifm-dropdown-background-color: #ffffff;
--ifm-dropdown-link-color: #000000;
--ifm-dropdown-hover-background-color: var(--adgem-secondary-purple);
```

- [ ] **Step 3: Update `.dropdown__menu` rule**

Replace the existing `.dropdown__menu` styles — remove purple border, remove border-radius, add min-width:

```css
.dropdown__menu {
  border: none;
  border-radius: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 280px;
}
```

- [ ] **Step 4: Update dropdown link hover styles**

Replace the `.dropdown__link:hover, .dropdown__link--active` rule:

```css
.dropdown__link:hover,
.dropdown__link--active {
  background-color: var(--ifm-dropdown-hover-background-color);
  color: var(--adgem-accent-blue);
  text-decoration: none;
}
```

- [ ] **Step 5: Update dropdown header styles**

Update `.navbar .dropdown-header` — font size to 10px (0.625rem), adjust colors for white bg:

```css
.navbar .dropdown-header {
  padding: 4px 10px;
  font-size: 0.625rem; /* 10px */
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--adgem-secondary-purple);
  pointer-events: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 4px;
}

.navbar .dropdown-header:first-child {
  border-top: none;
  margin-top: 0;
}
```

- [ ] **Step 6: Build and verify**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 7: Commit**

```bash
git add src/css/custom.css
git commit -m "style: restyle dropdowns to white bg with purple hover

Match adgem.com pattern: white bg, black text, purple hover,
accent blue hover text, square corners, no border."
```

---

### Task 4: Sidebar Adjustments

Set sidebar text to 16px and reduce chevron size. The smaller font size should naturally prevent most items from wrapping; do NOT add `white-space: nowrap` as it would cause horizontal overflow on longer items like "Partner-built (Custom Experience)".

**Files:**
- Modify: `src/css/custom.css:246-248` (`.menu__link` rule)

- [ ] **Step 1: Update sidebar menu link styles**

Replace `.menu__link` and add a new rule for the chevron size:

```css
.menu__link {
  font-family: var(--ifm-font-family-base);
  font-size: 1rem; /* 16px */
}

/* Reduce sidebar chevron/arrow size */
.menu__link--sublist-caret::after,
.menu__caret::before {
  background-size: 1.2rem 1.2rem; /* smaller than default 2rem */
  width: 1.2rem;
  height: 1.2rem;
}
```

- [ ] **Step 2: Build and verify**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/css/custom.css
git commit -m "style: set sidebar text to 16px with smaller chevrons"
```

---

### Task 5: Hero Component Cleanup

Remove the explicit title font-size from the Hero module — the global H1 rule (25px) now handles it.

**Files:**
- Modify: `src/components/Hero/styles.module.css:9-12` (`.title` rule)
- Modify: `src/components/Hero/styles.module.css:25-27` (`.title` mobile override)

- [ ] **Step 1: Remove explicit title font-size**

In `src/components/Hero/styles.module.css`, make two edits:

**Edit A:** Remove `font-size: 3rem;` from the `.title` rule (line 10). The rule should become:

```css
.title {
  margin-bottom: 0.5rem;
}
```

**Edit B:** Remove the `.title` block (lines 25-27) from inside the media query, keeping the `.hero` block. The media query should become:

```css
@media screen and (max-width: 996px) {
  .hero {
    padding: 2rem 1rem;
  }
}
```

The global H1 size (25px) is already small enough that a mobile override isn't needed.

- [ ] **Step 2: Build and verify**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero/styles.module.css
git commit -m "style(hero): remove explicit title font-size, use global H1"
```

---

### Task 6: Integration Cards Sizing Adjustments

Adjust card typography to fit the new type scale. The cards had their own font sizes that may now look out of proportion.

**Files:**
- Modify: `src/components/IntegrationCards/styles.module.css`

- [ ] **Step 1: Remove explicit `.groupTitle` font-size**

`.sectionTitle` has no explicit font-size (it inherits the global H2 at 22px) — no change needed. `.groupTitle` has an explicit `font-size: 1.5rem` (line 25) that needs to be removed so the global H3 at 1.375rem/22px applies.

In `styles.module.css`, update `.groupTitle`:

```css
.groupTitle {
  margin-bottom: 0.25rem;
  color: var(--adgem-secondary-purple);
}
```

(Remove the explicit `font-size: 1.5rem` — the global H3 at 1.375rem/22px now applies.)

- [ ] **Step 2: Build and verify**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/IntegrationCards/styles.module.css
git commit -m "style(cards): remove explicit group title size, use global H3"
```

---

### Task 7: QuickLinks Equal Sizing

Ensure the two QuickLinks cards render at equal width and height after the typography changes.

**Files:**
- Modify: `src/components/QuickLinks/styles.module.css`

- [ ] **Step 1: Force equal card sizing in grid**

The grid already uses `repeat(2, 1fr)` which gives equal widths. For equal heights, add `align-items: stretch` (already the grid default). The cards should be fine, but let's ensure the card fills its grid cell:

```css
.card {
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--ifm-color-emphasis-200);
  background: var(--ifm-card-background-color, var(--ifm-background-surface-color));
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}
```

Add `display: flex; flex-direction: column; height: 100%;` to ensure cards stretch equally and content aligns consistently.

- [ ] **Step 2: Build and verify**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/QuickLinks/styles.module.css
git commit -m "style(quicklinks): ensure equal card sizing with flex layout"
```

---

### Task 8: Visual Verification with Playwright

Serve the built site and use Playwright to snapshot key pages and verify the changes.

**Files:**
- None created; Playwright runs against the built site.

- [ ] **Step 1: Build the site**

Run: `npm run build`
Expected: Clean build, no errors.

- [ ] **Step 2: Serve the built site**

Run in background: `npm run serve -- --port 4000`

- [ ] **Step 3: Snapshot the homepage**

Use Playwright to navigate to `http://localhost:4000/adgem-integrations-documentation/` and take a full-page screenshot. Verify:
- Hero title is visibly smaller (25px, not 44px)
- Navbar items are centered
- Font sizes look proportional

- [ ] **Step 4: Snapshot a dropdown**

Use Playwright to hover over "Integrations" in the navbar and screenshot. Verify:
- White background
- Black text
- No border radius (square corners)
- No purple border
- "Partner-built (Custom Experience)" fits on one line
- Category headers are small (10px)

- [ ] **Step 5: Snapshot the sidebar**

Navigate to any docs page (e.g., Getting Started). Verify:
- Text is 16px
- Chevrons are smaller
- Items don't wrap

- [ ] **Step 6: Snapshot the dropdown hover state**

Use Playwright to hover over a dropdown item. Verify:
- Purple background on hover
- Accent blue text on hover

- [ ] **Step 7: Stop the server and report**

Kill the background serve process. Share screenshots with user for final approval.

- [ ] **Step 8: Final commit (if any fixes needed)**

If visual verification reveals issues, fix them and commit.
