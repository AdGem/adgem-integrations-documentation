/**
 * Sidebar Configuration — Gus' five-surface IA (PUB-191)
 *
 * Source of truth: "AdGem Publisher Docs v2 — Proposed Architecture" (Gus, rev v5).
 * Five top-level surfaces, each with its own sidebar scoped to that surface only
 * (per §2 — cross-surface nav happens through the top nav, search, breadcrumbs,
 * and "what's next" footers, never through sidebar shortcuts):
 *   1. Get Started   2. Integrate   3. Configure   4. Reference   5. Resources
 *
 * This is the prototype skeleton: every page is a structure-only placeholder so the
 * team can validate the architecture before content authoring (Gus' prototype-first step).
 */

import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  // 1. Get Started — universal entry
  getStartedSidebar: [
    "get-started/index",
    "get-started/welcome",
    "get-started/core-concepts",
    "get-started/quickstart",
    "get-started/decide",
  ],

  // 2. Integrate — two-axis: Offer Delivery + Reward Mechanism
  integrateSidebar: [
    "integrate/overview",
    {
      type: "category",
      label: "Offer Delivery",
      link: { type: "doc", id: "integrate/offer-delivery/index" },
      items: [
        {
          type: "category",
          label: "Pre-built (Fastest)",
          link: { type: "doc", id: "integrate/offer-delivery/pre-built/index" },
          items: [
            "integrate/offer-delivery/pre-built/web-offerwall",
            "integrate/offer-delivery/pre-built/ios-sdk",
            "integrate/offer-delivery/pre-built/android-sdk",
            "integrate/offer-delivery/pre-built/unity-sdk",
          ],
        },
        {
          type: "category",
          label: "Partner-built (Custom Experience)",
          link: { type: "doc", id: "integrate/offer-delivery/partner-built/index" },
          items: [
            "integrate/offer-delivery/partner-built/prism",
            "integrate/offer-delivery/partner-built/offer-api",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Reward Mechanism",
      link: { type: "doc", id: "integrate/reward-mechanism/index" },
      items: [
        "integrate/reward-mechanism/postbacks-v3",
        "integrate/reward-mechanism/postbacks-v2",
        "integrate/reward-mechanism/client-polling",
        "integrate/reward-mechanism/third-party",
      ],
    },
  ],

  // 3. Configure — cross-cutting, tunable concerns
  configureSidebar: [
    "configure/index",
    "configure/webhooks",
    "configure/security",
    "configure/sandbox",
    "configure/customization",
    "configure/promotions",
  ],

  // 4. Reference — spec-driven lookup; Prism is the default landing
  referenceSidebar: [
    "reference/index",
    {
      type: "category",
      label: "Prism (GraphQL)",
      link: { type: "doc", id: "reference/prism/overview" },
      items: [
        "reference/prism/authentication",
        "reference/prism/tokens",
        "reference/prism/errors",
        "reference/prism/versioning",
        {
          type: "category",
          label: "Schema",
          items: [
            "reference/prism/schema/queries",
            "reference/prism/schema/mutations",
            "reference/prism/schema/types",
            "reference/prism/schema/enums",
            "reference/prism/schema/inputs",
          ],
        },
        "reference/prism/playground",
        "reference/prism/recipes",
      ],
    },
    {
      type: "category",
      label: "Offer API (REST)",
      link: { type: "doc", id: "reference/offer-api/overview" },
      items: [
        "reference/offer-api/authentication",
        "reference/offer-api/pagination",
        "reference/offer-api/errors",
        "reference/offer-api/versioning",
        {
          type: "category",
          label: "Resources",
          items: [
            "reference/offer-api/resources/offers",
            "reference/offer-api/resources/goals",
            "reference/offer-api/resources/clicks",
            "reference/offer-api/resources/tokens",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Reporting API (REST)",
      link: { type: "doc", id: "reference/reporting-api/overview" },
      items: [
        "reference/reporting-api/authentication",
        "reference/reporting-api/errors",
      ],
    },
    "reference/webhook-events",
    "reference/errors",
  ],

  // 5. Resources — episodic / definitional / auxiliary
  resourcesSidebar: [
    "resources/index",
    "resources/changelog",
    {
      type: "category",
      label: "Migrations",
      link: { type: "doc", id: "resources/migrations/overview" },
      items: [
        "resources/migrations/static-api-to-offer-api",
        "resources/migrations/postback-v2-to-v3",
      ],
    },
    "resources/glossary",
    "resources/branding-assets",
  ],
};

export default sidebars;
