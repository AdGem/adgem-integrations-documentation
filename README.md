# Template

This template is built for [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

### Usage

```bash
npx create-docusaurus@3.5.2 my-website --package-manager yarn
```

> When prompted to select a template choose `Git repository`.

Template Repository URL:

```bash
https://github.com/PaloAltoNetworks/docusaurus-template-openapi-docs.git
```

> When asked how the template repo should be cloned choose "copy" (unless you know better).

```bash
cd my-website
yarn
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Testing the Prism playground locally

The Prism GraphQL playground (`/docs/reference/prism/playground`) is a bring-your-own-token GraphiQL embed. To run live queries against it on a local dev server:

1. **Get a Prism access token** — exchange your refresh token for a short-lived (~1 hour) access token:

   ```bash
   curl -X POST https://targeted-api.adgem.com/v1/users/token \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=refresh_token&refresh_token=<your-refresh-token>"
   ```

2. **Add it to the playground's Headers tab:**

   ```json
   { "Authorization": "Bearer <access_token>" }
   ```

3. **Work around CORS for local testing.** The Prism API does not currently return CORS headers for the docs/`localhost` origin, so a normal browser blocks the request with "Failed to fetch". Launch a throwaway Chrome with web security disabled (macOS):

   ```bash
   open -na "Google Chrome" --args --user-data-dir="/tmp/chrome-cors-test" --disable-web-security
   ```

   Open the playground in **that** window and run your query. ⚠️ Use this window for local testing only — never for normal browsing.

> Once the Prism API returns CORS headers for the docs origin (and `localhost` in non-production) with a `204` preflight, this Chrome workaround won't be needed — you'll be able to test directly.

To isolate API behavior from the browser (no CORS involved), run a query server-side with `curl`:

```bash
curl -X POST https://targeted-api.adgem.com/v1/offers \
  -H "Authorization: Bearer <access_token>" \
  -H "Content-Type: application/json" \
  -d '{"query":"{ offers(player_id:\"<player-id>\") { id name } }"}'
```
