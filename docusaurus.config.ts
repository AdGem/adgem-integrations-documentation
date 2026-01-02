// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import 'dotenv/config';

const config: Config = {
  title: "AdGem",
  tagline: "AdGem Integrations Documentation",
  url: 'https://adgem.github.io',
  baseUrl: '/adgem-integrations-documentation',
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'adgem', // Usually your GitHub org/user name.
  projectName: 'adgem-integrations-documentation', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    {
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "AdGem Integrations",
        logo: {
          alt: "My Site Logo",
          src: "img/adgem_logo_small2.png",
        },
        items: [
          {
            label: "Getting Started",
            position: "left",
            to: "/docs/getting-started",
          },
          {
            label: "Integrations",
            position: "left",
            type: "dropdown",
            items: [
              {
                label: "Offer API (REST)",
                to: "/docs/category/offer-api",
              },
              {
                label: "Targeted API (GraphQL)",
                to: "/docs/category/targeted-api",
              },
              {
                label: "iOS SDK",
                to: "/docs/integrations/ios-sdk",
              },
              {
                label: "Android SDK",
                to: "/docs/integrations/android-sdk",
              },
              {
                label: "Unity SDK",
                to: "/docs/integrations/unity-sdk",
              },
              {
                label: "Web Offerwall",
                to: "/docs/integrations/web-offerwall",
              },
            ],
          },
          {
            label: "Webhooks",
            position: "left",
            to: "/docs/webhooks",
          },
          {
            label: "Resources",
            position: "left",
            type: "dropdown",
            items: [
              {
                label: "Configuration",
                to: "/docs/configuration",
              },
              {
                label: "Offers",
                to: "/docs/offers",
              },
              {
                label: "Monetization",
                to: "/docs/monetization",
              },
              {
                label: "API Reference",
                to: "/docs/api-reference",
              },
              {
                label: "Branding & Support",
                to: "/docs/resources",
              },
              {
                label: "Legal",
                to: "/docs/legal",
              },
            ],
          },
          {
            href: "https://github.com/AdGem/adgem-integrations-documentation",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://adgem.com">AdGem</a>.`,
      },
      prism: {
        additionalLanguages: [
          "ruby",
          "csharp",
          "php",
          "java",
          "powershell",
          "json",
          "bash",
          "dart",
          "objectivec",
          "r",
        ],
      },
      languageTabs: [
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
        },
        {
          highlight: "bash",
          language: "curl",
          logoClass: "curl",
        },
        {
          highlight: "csharp",
          language: "csharp",
          logoClass: "csharp",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
        },
        {
          highlight: "ruby",
          language: "ruby",
          logoClass: "ruby",
        },
        {
          highlight: "php",
          language: "php",
          logoClass: "php",
        },
        {
          highlight: "java",
          language: "java",
          logoClass: "java",
          variant: "unirest",
        },
        {
          highlight: "powershell",
          language: "powershell",
          logoClass: "powershell",
        },
        {
          highlight: "dart",
          language: "dart",
          logoClass: "dart",
        },
        {
          highlight: "javascript",
          language: "javascript",
          logoClass: "javascript",
        },
        {
          highlight: "c",
          language: "c",
          logoClass: "c",
        },
        {
          highlight: "objective-c",
          language: "objective-c",
          logoClass: "objective-c",
        },
        {
          highlight: "ocaml",
          language: "ocaml",
          logoClass: "ocaml",
        },
        {
          highlight: "r",
          language: "r",
          logoClass: "r",
        },
        {
          highlight: "swift",
          language: "swift",
          logoClass: "swift",
        },
        {
          highlight: "kotlin",
          language: "kotlin",
          logoClass: "kotlin",
        },
        {
          highlight: "rust",
          language: "rust",
          logoClass: "rust",
        },
      ],
    } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          offer: {
            specPath: "examples/offer.yaml",
            outputDir: "docs/offer",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: false,
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "@graphql-markdown/docusaurus",
      /** @type {import('@graphql-markdown/types').ConfigOptions} */
      {
        schema: process.env.TARGETED_API_SCHEMA_URL,
        rootPath: './docs',
        baseURL: "targeted-api",
        homePage: "./static/targeted-api.md",
        // ... other options
        loaders: {
          UrlLoader: {
            module: "@graphql-tools/url-loader",
            options: {
              headers: {
                Authorization: 'Bearer ' + process.env.TARGETED_API_TOKEN,
              }
            }
          }
        }
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
  customFields: {
    'TARGETED_API_SCHEMA_URL': process.env.TARGETED_API_SCHEMA_URL ?? 'https://targeted-api.adgem.com/v1/offers',
    'TARGETED_API_TOKEN': process.env.TARGETED_API_TOKEN ?? '2|EIsVDEhAFMJUKvIWsmj9BBFUzjaJlwpd3sRlRvLd3c057761',
  },
};

export default async function createConfig() {
  return config;
}
