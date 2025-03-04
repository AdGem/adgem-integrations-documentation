/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {type: "doc", id: "intro"},
    { type: "autogenerated", dirName: "tutorial-basics" },
    { type: "autogenerated", dirName: "tutorial-extras" },
  ],
  openApiSidebar: [
    // {
    //   type: "category",
    //   label: "Petstore",
    //   link: {
    //     type: "generated-index",
    //     title: "Petstore API",
    //     description:
    //       "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
    //     slug: "/category/petstore-api"
    //   },
    //   items: require("./docs/petstore/sidebar.js")
    // },
    {
      type: "category",
      label: "Offer",
      link: {
        type: "generated-index",
        title: "Offer API",
        description:
          "This is a sample server Offer server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/category/offer-api"
      },
      items: [
        {
          type: "doc",
          id: "offer/offer-api",
        },
        {
          type: "category",
          label: "Offers",
          link: {
            type: "doc",
            id: "offer/offer",
          },
          items: [
            {
              type: "doc",
              id: "offer/get-offers",
              label: "Retrieve untargeted offers",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "offer/new-offer",
              label: "New offer",
              className: "api-method event",
            },
            {
              type: "doc",
              id: "offer/updated-offer",
              label: "Updated offer",
              className: "api-method event",
            },
            {
              type: "doc",
              id: "offer/deleted-offer",
              label: "Deleted offer",
              className: "api-method event",
            },
          ],
        },
      ],
    }
  ]
};

export default sidebars;