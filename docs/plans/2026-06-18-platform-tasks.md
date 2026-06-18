# Platform tasks — docs hosting/domain (now) + playground proxy IaC (fast-follow)

**Date:** 2026-06-18 · For: platform team. Two sections — **Section A is needed for the June 30 launch**; **Section B is the fast-follow** (prep your side so we can drop in the Lambda without waiting).

Note: confirm the **docs AWS account + region** with Ron (recorded outside this public repo).

---

## Section A — Hosting + domain (needed for June 30)

**Amplify app**
- [ ] Create an Amplify app connected to this repo (`adgem-integrations-documentation`), tracking `main`, in the docs AWS account/region.
- [ ] Enable **PR previews** (we'll then retire the existing GH Pages `pr-preview/pr-{n}` workflow after cutover).

**Build config** (`amplify.yml` — we can add it; values for your awareness)
- [ ] Build: `npm ci` → `npm run gen-api-docs` (Offer API; generates from the local `examples/offer.yaml`, **no token/network needed**) → `npm run build`. Artifacts: `build/`.
- [ ] **No `graphql-to-doc` at build, no Cognito token needed in Amplify** — the Prism reference is generated commit-time and committed.

**Env vars**
- [ ] `DOCUSAURUS_BASE_URL=/` — **for Amplify only** (Amplify, including its default domain, serves at root; this also fixes the broken-on-GH-Pages asset paths). **Per-host base path:** the **GH Pages fallback keeps its existing subpath base-url** (`/adgem-integrations-documentation/`, the repo default) — do **not** set `/` there.
- [ ] `DOCUSAURUS_URL` = the live origin (Amplify default domain first, then `https://docs.adgem.com`).
- [ ] `PRISM_SCHEMA_URL` = `https://targeted-api.adgem.com/v1/offers` (non-secret; exposed to the client playground). **No `PRISM_ACCESS_TOKEN` needed in Amplify.**

**Custom domain `docs.adgem.com`** (longest lead — start ASAP)
- [ ] Confirm who controls `docs.adgem.com` DNS (platform? Iliana/WP Engine?) and that they can act now.
- [ ] Add `docs.adgem.com` as a custom domain in Amplify; create the DNS record(s) (CNAME/ANAME) it requires.
- [ ] Provision/verify the TLS cert (Amplify-managed ACM).
- [ ] Once live: set `DOCUSAURUS_URL=https://docs.adgem.com`; confirm canonical URLs + sitemap.
- **Fallback if DNS/cert slips past June 30:** launch on the **Amplify default domain** (root, `BASE_URL=/`) — or **keep GH Pages** (uses its existing subpath base-url, *not* `/`) — and cut over to `docs.adgem.com` as a fast-follow. Don't let DNS block the date.

**Cutover**
- [ ] After the domain is live and verified, retire GH Pages + its PR-preview workflow.

---

## Section B — Playground proxy + test apps (fast-follow; prep now)

The frictionless playground default needs a thin **forwarding Lambda** (`browser → Lambda → production Prism/Offer API`, auth injected server-side) authenticating as a dedicated **"Documentation" publisher's test apps**. We (docs) will build the Lambda via **CDK in the docs repo**; the items below are the platform/data side so it's ready.

**Platform / infra**
- [ ] Confirm the AWS account/region for the proxy (same docs account is fine).
- [ ] **Bootstrap CDK** in that account (`cdk bootstrap`) — this is the **first IaC in the account**; agree the approach/permissions.
- [ ] IAM: a **deploy role** for the docs CI to deploy the CDK stack; the **Lambda execution role** (read the Secrets Manager secret + outbound HTTPS).
- [ ] **Secrets Manager**: create a secret to hold the Documentation app's **Cognito refresh token**; define a rotation policy.
- [ ] **Rate-limiting / WAF** on the public Lambda Function URL (it's a public, forwarding endpoint).
- [ ] **Cognito**: confirm the Documentation app's client can perform the refresh→access exchange server-side (the proxy will mint short-lived access tokens), and the token endpoint/client config to use.

**Data / product**
- [ ] Create a **"Documentation" publisher** (team/role email) with **two apps** — one Offer API (untargeted) integration, one Prism (targeted) integration.
- [ ] **Whitelist** both apps for offers and **seed a small set of benign sample campaigns** assigned to both (so the two playgrounds show consistent demo data). `app_id` is non-secret (it appears in click URLs) — a recognizable id is a nice-to-have, not required.
- [ ] **Mint the Documentation app's refresh token** and store it in the Secrets Manager secret above.

**Docs (us)**
- [ ] Build the CDK forwarding-proxy Lambda (GraphQL→Prism, REST→Offer API routes) and wire the playground to it; keep BYO as the advanced mode.
