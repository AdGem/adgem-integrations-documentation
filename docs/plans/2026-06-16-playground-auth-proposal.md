# Public API Playground Auth — Proposal & Design

**Date:** 2026-06-16
**Status:** Proposal — pending review by the docs team + platform team (WS5 of the docs-v2 plan).
**Scope:** Interactive playgrounds in the public docs for **Prism (GraphQL)** and **Offer API (REST)** — auth model and supporting infra. The Prism *reference* (generated schema + conceptual pages) is separate and tracked in `2026-06-15-prism-graphql-reference-design.md`; the playground was deliberately out of that MVP.

---

## Part 1 — Shareable summary

### Problem
We want live, interactive playgrounds in the **public** docs so developers can explore Prism and the Offer API. Both authenticate via a Cognito **refresh token → short-lived access token**, and the access token carries an **`app_id`** that scopes which offers are returned. Four constraints follow:

1. **No secret in a public client** — a bearer token shipped in the docs JS would be lifted and abused.
2. **Access tokens are short-lived (~1h)** — anything baked into the static site expires mid-session.
3. **A real publisher's `app_id` would expose that publisher's offers** to anyone using the playground.
4. **Browser → production API is cross-origin** — needs CORS from the docs origin (likely the cause of the earlier broken sandbox).

### Alternatives considered (and why rejected)
- **Hardcoded/long-lived token in the client** — public bearer credential (leak/abuse) *and* expires anyway. ❌
- **CI refreshes a token into the build** — still expires between builds; still client-exposed. ❌
- **Separate mock/test Prism service** — schema/data drift + sync burden; diverges from the real API; blocks BYO. ❌
- **Integrated OAuth login in the playground** — smoothest personalized UX, but needs an OAuth/redirect integration + server-side refresh handling; heavy, and personalized data isn't the point of a docs playground. ❌ (revisit only if ever needed)
- **BYO-token only** (user pastes their own token) — secure, zero infra, but high friction (mint first, re-mint on expiry). ✅ *as a follow-up, not the default*

### Proposed solution
- Playgrounds hit the **real production** Prism/Offer API — no parallel service to keep in sync.
- A **thin server-side forwarding proxy** (AWS **Lambda Function URL**): `browser → proxy → production API`. The proxy holds the refresh token in **Secrets Manager**, attaches auth server-side, forwards the request, returns the result. → **No credential in the browser**; **CORS is moot** (browser↔proxy is same-origin).
- The proxy authenticates as a dedicated **"Documentation" publisher** with two test apps (one Offer API/untargeted, one Prism/targeted), seeded with **benign sample campaigns** → no real publisher data exposed; `app_id` is non-secret (safe in click URLs).
- **Infra as CDK in the docs repo** (Lambda + Secrets Manager + IAM) → playground infra owned by docs, version-controlled, not click-ops.
- **Bonus:** the same Documentation-app token feeds **build-time schema introspection** too — one piece of infra unblocks both the generated reference *and* the playgrounds.
- **MVP = proxy default** (frictionless, test data). **Follow-up = BYO-token "advanced" mode** (query as your own app).

### What I need
**Platform / infra**
- Approval to introduce **CDK (first IaC) in the docs AWS account**; account/region/permissions guidance (currently click-ops).
- **CI deploy credentials** for the docs repo to deploy the stack.
- A **Secrets Manager** secret for the Documentation apps' refresh token (provisioning + rotation).
- Confirm **CORS posture** — with the proxy the prod APIs only see server-side calls; confirm nothing else is needed (a later BYO-direct mode *would* need CORS for the docs origin).
- **Rate-limiting / abuse protection** for the public proxy endpoint.

**Product / data**
- Create the **"Documentation" publisher** (team/role email) + two apps; assign benign **sample campaigns** to both for consistent demo offers.
- **Mint the refresh token(s)**.

**Docs (me):** playground wiring, the CDK proxy, the reference/conceptual docs.

---

## Part 2 — Design details & rationale

**Should the playground return personalized offers?** No. A docs playground exists to help developers *learn the API* (query shapes, fields, response structure), not inspect production data (that's a dashboard job). Returning **sandbox/test offers** is the right goal and removes the cross-publisher exposure risk.

**Industry patterns considered.** (1) BYO-token via a headers panel — GitHub GraphQL Explorer, Apollo Sandbox. (2) Integrated OAuth — Stripe-style "connect," heavy. (3) Test credential via a server-side proxy — the Stripe "test mode" analog. We land on (3) for the default and (1) as a follow-up.

**Why the proxy *forwards* (vs. mint-and-return a token to the client):** forwarding means no token ever reaches the browser *and* CORS is fully sidestepped (browser↔proxy same-origin; proxy↔API server-side). This is very likely the real fix for the earlier broken sandbox. The same proxy serves both playgrounds: a GraphQL passthrough → Prism and a REST passthrough → Offer API. One Function URL, two routes, one secret.

**Why Lambda + CDK in the docs repo:** the proxy is tiny/bursty/low-traffic → Lambda Function URL (no API Gateway) + Secrets Manager + minimal IAM. The playground is a docs concern, so its IaC belonging to the docs repo keeps ownership clean; a token/IAM-handling component *should* be codified (not click-ops). Caveat: this is the **first IaC in the docs AWS account** (coordinate with platform on account/region/permissions); the docs CI needs deploy creds. (The org isn't IaC-averse — offer-api already uses `deploy-iac.yml` + Elastic Beanstalk.) A standalone CDK Lambda is preferred over an Amplify-hosted function (host-independent).

**Why a dedicated "Documentation" publisher (not the internal testing pub):** the data is publicly queryable, so it must be **isolated** (the internal testing pub churns and could break the playground or surface odd data), **clearly the docs sample** (the `app_id` shows up in click URLs), and **curated/benign**. Two apps under one Documentation publisher (Offer API + Prism); assign the **same sample campaigns** to both so the two playgrounds show consistent offers. `app_id` is a non-secret identifier (safe to expose); a recognizable/"pretty" id is a minor nicety — do it if easy, otherwise label whatever id is assigned as the sample app.

**Build-time synergy:** the Documentation Prism app's token can also drive `graphql-to-doc` schema introspection, so standing up the test app + token mechanism unblocks both the generated Prism reference and the playground.

**Sequencing:** MVP = proxy + Documentation apps (frictionless, test data). Follow-up = BYO-token advanced mode. The Prism *reference* (schema + conceptual pages) can proceed independently of the playground.
