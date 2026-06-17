# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AdGem Integrations Documentation - a Docusaurus 3 static documentation site for two APIs:
- **Untargeted Offers API** (REST/OpenAPI) - docs generated from `examples/offer.yaml`
- **Targeted Offers API** (GraphQL) - docs generated from remote schema endpoint

Deployed to GitHub Pages: https://adgem.github.io/adgem-integrations-documentation

## Commands

```bash
# Development
npm start                  # Start local dev server with hot-reload
npm run build              # Build static site to /build
npm run serve              # Serve built site locally
npm run clear              # Clear Docusaurus cache

# API Documentation Generation
npm run gen-api-docs       # Generate OpenAPI docs from examples/offer.yaml
npm run clean-api-docs     # Clean generated OpenAPI docs
npm run graphql-to-doc     # Generate GraphQL docs from schema endpoint
```

## Environment Setup

Copy `.env.example` to `.env` and configure:
- `PRISM_SCHEMA_URL` - Prism (GraphQL) schema endpoint URL (also exposed to the client-side playground via `docusaurus.config.ts` customFields)
- `PRISM_ACCESS_TOKEN` - short-lived Cognito access token (Bearer) for schema introspection at generation time

## Architecture

```
docs/
├── offer/                 # OpenAPI docs (auto-generated from examples/offer.yaml)
│   └── sidebar.ts         # Generated sidebar config
└── targeted-api/          # GraphQL docs (auto-generated from schema)
    ├── faq.mdx            # Manually maintained FAQ
    ├── playground.mdx     # GraphiQL playground
    ├── operations/        # Generated queries/directives
    └── types/             # Generated objects/scalars/inputs

examples/
└── offer.yaml             # OpenAPI specification (source of truth for REST API)

src/
├── pages/index.js         # Homepage
└── css/custom.css         # AdGem theme overrides

static/
└── targeted-api.md        # GraphQL docs homepage template
```

## Key Files

- `docusaurus.config.ts` - Main config including OpenAPI and GraphQL plugin setup
- `sidebars.ts` - Navigation structure for both API docs
- `examples/offer.yaml` - Edit this to update REST API documentation

## Workflow

1. **REST API changes**: Edit `examples/offer.yaml`, then run `npm run clean-api-docs && npm run gen-api-docs`. **Note:** `gen-api-docs` will NOT overwrite already-generated `*.api.mdx` / `*.schema.mdx` files, so a bare `gen-api-docs` silently ignores edits to existing schemas — always `clean-api-docs` first when changing the spec. Generated output lives under `docs/reference/offer-api/` (hand-written conceptual pages there — overview/authentication/etc. — are preserved by clean).
2. **GraphQL docs refresh**: Run `npm run graphql-to-doc` (requires valid env vars)
3. **Manual docs**: Edit `.mdx` files directly in `docs/reference/prism/` for FAQ, playground, etc.

## PR Template

PRs should reference Jira tickets: `Ticket AGPI-[number]`
