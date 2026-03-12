# Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the default Docusaurus homepage with a purpose-built landing page that steers publishers toward Pre-built integrations and provides clear navigation to all doc sections.

**Architecture:** Component-based React page using Docusaurus Layout and Link primitives. One new component per visual section (Hero, IntegrationCards, QuickLinks), each with its own CSS module. All styles use existing AdGem CSS variables from `src/css/custom.css`.

**Tech Stack:** React 18, Docusaurus 3, CSS Modules, Infima utility classes

**Design Doc:** `docs/plans/2026-03-04-homepage-nav-redesign.md` (retrieved from commit `ae8c9da`)

**Intentional deviations from wireframe:**
- **Separate Partner-built cards** — The wireframe shows a single "APIs" container with both links inside. This plan uses individual cards for Offer API and Targeted API, consistent with the Pre-built card pattern and giving each API its own description space.
- **No emoji icons on cards** — The wireframe includes decorative emoji (globe, phone, robot, etc.). Omitted for now; can be added later when Illiana provides design feedback.

---

## File Structure

| File | Responsibility |
|------|---------------|
| `src/pages/index.js` | **Modify** — Rewrite to compose Hero + IntegrationCards + QuickLinks |
| `src/pages/index.module.css` | **Delete** — Styles moved to component modules, nothing imports this file |
| `src/components/HomepageFeatures/index.js` | **Delete** — Replaced by new components |
| `src/components/HomepageFeatures/styles.module.css` | **Delete** — No longer needed |
| `src/components/Hero/index.js` | **Create** — Hero banner with title, tagline |
| `src/components/Hero/styles.module.css` | **Create** — Hero-specific styles |
| `src/components/IntegrationCards/index.js` | **Create** — Pre-built and Partner-built card sections |
| `src/components/IntegrationCards/styles.module.css` | **Create** — Card grid layout, card styles |
| `src/components/QuickLinks/index.js` | **Create** — Getting Started + Webhooks quick-link cards |
| `src/components/QuickLinks/styles.module.css` | **Create** — Two-column quick-link layout |

## Link Targets

All links derived from the merged nav structure in `docusaurus.config.ts` and `sidebars.ts`:

| Card | Path |
|------|------|
| Web Offerwall | `/docs/integrations/web-offerwall` |
| iOS SDK | `/docs/integrations/ios-sdk` |
| Android SDK | `/docs/integrations/android-sdk` |
| Unity SDK | `/docs/integrations/unity-sdk` |
| Offer API (REST) | `/docs/integrations/offer-api` |
| Targeted API (GraphQL) | `/docs/integrations/targeted-api` |
| Getting Started | `/docs/getting-started` |
| Webhooks & Postbacks | `/docs/webhooks` |

---

## Chunk 1: Hero Component

### Task 1: Create Hero component

**Files:**
- Create: `src/components/Hero/index.js`
- Create: `src/components/Hero/styles.module.css`

- [ ] **Step 1: Create Hero component file**

```jsx
// src/components/Hero/index.js
import React from 'react';
import styles from './styles.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>AdGem Integration Docs</h1>
        <p className={styles.tagline}>Monetize your app with rewarded offers</p>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Create Hero styles**

```css
/* src/components/Hero/styles.module.css */
.hero {
  padding: 4rem 0;
  text-align: center;
  background: linear-gradient(135deg, var(--adgem-primary) 0%, var(--adgem-secondary-purple) 100%);
  color: white;
}

.title {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.tagline {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 0;
}

@media screen and (max-width: 996px) {
  .hero {
    padding: 2rem 1rem;
  }

  .title {
    font-size: 2rem;
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero/
git commit -m "feat(homepage): add Hero component with gradient banner"
```

---

### Task 2: Create IntegrationCards component

**Files:**
- Create: `src/components/IntegrationCards/index.js`
- Create: `src/components/IntegrationCards/styles.module.css`

- [ ] **Step 1: Create IntegrationCards component file**

```jsx
// src/components/IntegrationCards/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const preBuilt = [
  {
    title: 'Web Offerwall',
    badge: 'Recommended',
    description: 'Fastest integration — works on any platform with a webview. iOS, Android, Web.',
    to: '/docs/integrations/web-offerwall',
    featured: true,
  },
  {
    title: 'iOS SDK',
    description: 'Native iOS offerwall for iPhone and iPad apps.',
    to: '/docs/integrations/ios-sdk',
  },
  {
    title: 'Android SDK',
    description: 'Native Android offerwall for mobile apps.',
    to: '/docs/integrations/android-sdk',
  },
  {
    title: 'Unity SDK',
    description: 'Cross-platform offerwall for Unity games.',
    to: '/docs/integrations/unity-sdk',
  },
];

const partnerBuilt = [
  {
    title: 'Offer API',
    label: 'REST',
    description: 'Retrieve untargeted offers and build your own offer experience.',
    to: '/docs/integrations/offer-api',
  },
  {
    title: 'Targeted API',
    label: 'GraphQL',
    description: 'Retrieve targeted, high-performing offers via GraphQL.',
    to: '/docs/integrations/targeted-api',
  },
];

function Card({ title, badge, label, description, to, featured }) {
  return (
    <Link to={to} className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>
          {title}
          {label && <span className={styles.label}>{label}</span>}
        </h3>
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>
      <p className={styles.cardDescription}>{description}</p>
      <span className={styles.cardLink}>Get Started →</span>
    </Link>
  );
}

export default function IntegrationCards() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Choose Your Integration Method</h2>

        <div className={styles.groupHeader}>
          <h3 className={styles.groupTitle}>Pre-built (Fastest)</h3>
          <p className={styles.groupDescription}>
            Launch quickly with AdGem's proven, high-performing offerwall.
          </p>
        </div>

        <div className={styles.featuredRow}>
          <Card {...preBuilt[0]} />
        </div>

        <div className={styles.cardGrid}>
          {preBuilt.slice(1).map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>

        <div className={styles.groupHeader}>
          <h3 className={styles.groupTitle}>Partner-built (Custom Experience)</h3>
          <p className={styles.groupDescription}>
            Full control over layout, design, and offer presentation.
            Higher engineering lift — choose when you need bespoke UX or deep product integration.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {partnerBuilt.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>

        <div className={styles.callout}>
          <p>
            Most partners start with the <strong>Pre-built Offerwall</strong>, then
            graduate to a <strong>Partner-built Experience</strong> once they've validated engagement.
          </p>
          <Link to="/docs/getting-started" className={styles.calloutLink}>
            Learn more in Getting Started →
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create IntegrationCards styles**

```css
/* src/components/IntegrationCards/styles.module.css */
.section {
  padding: 3rem 0;
}

.sectionTitle {
  text-align: center;
  margin-bottom: 2rem;
}

.groupHeader {
  margin-bottom: 1.5rem;
  margin-top: 2.5rem;
  border-bottom: 2px solid var(--adgem-secondary-purple);
  padding-bottom: 0.75rem;
}

.sectionTitle + .groupHeader {
  margin-top: 0;
}

.groupTitle {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
  color: var(--adgem-secondary-purple);
}

[data-theme='dark'] .groupTitle {
  color: var(--adgem-accent-cyan);
}

[data-theme='dark'] .groupHeader {
  border-bottom-color: var(--adgem-accent-cyan);
}

.groupDescription {
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 0;
}

.featuredRow {
  margin-bottom: 1rem;
}

.cardGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--ifm-color-emphasis-200);
  background: var(--ifm-card-background-color, var(--ifm-background-surface-color));
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

.card:hover {
  text-decoration: none;
  color: inherit;
  border-color: var(--adgem-secondary-purple);
  box-shadow: 0 4px 12px rgba(87, 62, 242, 0.15);
}

[data-theme='dark'] .card:hover {
  border-color: var(--adgem-accent-cyan);
  box-shadow: 0 4px 12px rgba(130, 231, 246, 0.15);
}

.featured {
  border-color: var(--adgem-secondary-purple);
  border-width: 2px;
}

[data-theme='dark'] .featured {
  border-color: var(--adgem-accent-cyan);
}

.cardHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.cardTitle {
  font-size: 1.15rem;
  margin-bottom: 0;
}

.label {
  font-size: 0.75rem;
  font-weight: 600;
  background: var(--ifm-color-emphasis-100);
  padding: 2px 8px;
  border-radius: 4px;
  margin-left: 0.5rem;
  vertical-align: middle;
}

.badge {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: linear-gradient(135deg, var(--adgem-secondary-purple) 0%, var(--adgem-accent-magenta) 100%);
  color: white;
  padding: 2px 10px;
  border-radius: 50px;
  white-space: nowrap;
}

.cardDescription {
  font-size: 0.9rem;
  flex: 1;
  opacity: 0.85;
}

.cardLink {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--adgem-secondary-purple);
}

[data-theme='dark'] .cardLink {
  color: var(--adgem-accent-cyan);
}

.callout {
  margin-top: 2rem;
  padding: 1.25rem 1.5rem;
  border-radius: 8px;
  background: rgba(87, 62, 242, 0.06);
  border-left: 4px solid var(--adgem-secondary-purple);
}

[data-theme='dark'] .callout {
  background: rgba(130, 231, 246, 0.06);
  border-left-color: var(--adgem-accent-cyan);
}

.callout p {
  margin-bottom: 0.5rem;
}

.calloutLink {
  font-weight: 600;
}

@media screen and (max-width: 996px) {
  .cardGrid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/IntegrationCards/
git commit -m "feat(homepage): add IntegrationCards component with Pre-built/Partner-built sections"
```

---

### Task 3: Create QuickLinks component

**Files:**
- Create: `src/components/QuickLinks/index.js`
- Create: `src/components/QuickLinks/styles.module.css`

- [ ] **Step 1: Create QuickLinks component file**

```jsx
// src/components/QuickLinks/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const links = [
  {
    title: 'New to AdGem?',
    description: 'Understand key concepts before you integrate.',
    to: '/docs/getting-started',
    cta: 'Getting Started',
  },
  {
    title: 'Webhooks & Postbacks',
    description: 'Receive real-time reward notifications.',
    to: '/docs/webhooks',
    cta: 'Set Up Postbacks',
  },
];

export default function QuickLinks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {links.map((link) => (
            <Link key={link.title} to={link.to} className={styles.card}>
              <h3 className={styles.cardTitle}>{link.title}</h3>
              <p className={styles.cardDescription}>{link.description}</p>
              <span className={styles.cardLink}>{link.cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create QuickLinks styles**

```css
/* src/components/QuickLinks/styles.module.css */
.section {
  padding: 2rem 0 3rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.card {
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--ifm-color-emphasis-200);
  background: var(--ifm-card-background-color, var(--ifm-background-surface-color));
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

.card:hover {
  text-decoration: none;
  color: inherit;
  border-color: var(--adgem-secondary-purple);
  box-shadow: 0 4px 12px rgba(87, 62, 242, 0.15);
}

[data-theme='dark'] .card:hover {
  border-color: var(--adgem-accent-cyan);
  box-shadow: 0 4px 12px rgba(130, 231, 246, 0.15);
}

.cardTitle {
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
}

.cardDescription {
  font-size: 0.9rem;
  opacity: 0.85;
  margin-bottom: 0.75rem;
}

.cardLink {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--adgem-secondary-purple);
}

[data-theme='dark'] .cardLink {
  color: var(--adgem-accent-cyan);
}

@media screen and (max-width: 996px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/QuickLinks/
git commit -m "feat(homepage): add QuickLinks component for Getting Started and Webhooks"
```

---

## Chunk 2: Wire Up Homepage and Clean Up

### Task 4: Rewrite index page and remove old components

**Files:**
- Modify: `src/pages/index.js`
- Delete: `src/pages/index.module.css`
- Delete: `src/components/HomepageFeatures/index.js`
- Delete: `src/components/HomepageFeatures/styles.module.css`

- [ ] **Step 1: Rewrite `src/pages/index.js`**

```jsx
import React from 'react';
import Layout from '@theme/Layout';
import Hero from '@site/src/components/Hero';
import IntegrationCards from '@site/src/components/IntegrationCards';
import QuickLinks from '@site/src/components/QuickLinks';

export default function Home() {
  return (
    <Layout
      title="Integration Docs"
      description="AdGem integration documentation — monetize your app with rewarded offers">
      <Hero />
      <main>
        <IntegrationCards />
        <QuickLinks />
      </main>
    </Layout>
  );
}
```

- [ ] **Step 2: Delete `src/pages/index.module.css` and old HomepageFeatures component**

```bash
rm src/pages/index.module.css
rm -rf src/components/HomepageFeatures/
```

- [ ] **Step 3: Verify build passes**

```bash
npm run build
```

Expected: Build succeeds with no broken link errors.

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.js
git add -u src/pages/index.module.css src/components/HomepageFeatures/
git commit -m "feat(homepage): rewrite landing page with new component layout

Remove default Docusaurus feature cards. Compose Hero,
IntegrationCards, and QuickLinks into the homepage."
```

---

### Task 5: Delete unused placeholder SVGs

**Files:**
- Delete: `static/img/undraw_docusaurus_mountain.svg`
- Delete: `static/img/undraw_docusaurus_tree.svg`
- Delete: `static/img/undraw_docusaurus_react.svg`

- [ ] **Step 1: Verify nothing else references these SVGs**

```bash
grep -r "undraw_docusaurus" src/ docs/ --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx" --include="*.md" --include="*.mdx"
```

Expected: No results (the only consumer was `HomepageFeatures/index.js` which is now deleted).

- [ ] **Step 2: Delete the files**

```bash
rm static/img/undraw_docusaurus_mountain.svg
rm static/img/undraw_docusaurus_tree.svg
rm static/img/undraw_docusaurus_react.svg
```

- [ ] **Step 3: Verify build still passes**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add -u static/img/
git commit -m "chore: remove unused Docusaurus placeholder SVGs"
```

---

## Chunk 3: Visual Verification

### Task 6: Playwright visual verification

- [ ] **Step 1: Build and serve the site**

```bash
npm run build && npm run serve &
```

Wait for "Serving!" message on port 3000.

- [ ] **Step 2: Snapshot the homepage (light mode)**

Use Playwright to navigate to `http://localhost:3000/adgem-integrations-documentation/` and take a full-page screenshot. Verify:
- Hero gradient banner with "AdGem Integration Docs" title and tagline
- "Choose Your Integration Method" heading
- Pre-built section header with purple/cyan border
- Web Offerwall featured card (thicker border, "Recommended" badge)
- 3 SDK cards in a row (iOS, Android, Unity)
- Partner-built section header
- Offer API and Targeted API cards with REST/GraphQL labels
- Graduation callout with left border accent
- Quick links row: "New to AdGem?" and "Webhooks & Postbacks"

- [ ] **Step 3: Snapshot mobile viewport (375px)**

Resize to 375x812 and screenshot. Verify:
- Cards stack to single column
- Text remains readable
- No horizontal overflow

- [ ] **Step 4: Snapshot dark mode**

Navigate with `?docusaurus-theme=dark` or toggle. Verify:
- Hero gradient still visible
- Cards have appropriate dark background
- Accent colors switch to cyan
- Text is readable against dark background

- [ ] **Step 5: Verify card links navigate correctly**

Click each card and confirm it navigates to the expected doc page without 404.

- [ ] **Step 6: Stop the server**

```bash
kill %1
```
