import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "reference/offer-api/offer-api",
    },
    {
      type: "category",
      label: "Offers",
      link: {
        type: "doc",
        id: "reference/offer-api/offer",
      },
      items: [
        {
          type: "doc",
          id: "reference/offer-api/schemas/offer",
          label: "Offer",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/offer-api/schemas/city",
          label: "City",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/offer-api/schemas/country",
          label: "Country",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/offer-api/schemas/goal",
          label: "Goal",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/offer-api/schemas/os",
          label: "OS",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/offer-api/schemas/state",
          label: "State",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/offer-api/schemas/sticker",
          label: "Sticker",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/offer-api/schemas/basic-requirements",
          label: "Basic Requirements",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/offer-api/get-offers",
          label: "Retrieve untargeted offers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/offer-api/new-offer",
          label: "New offer",
          className: "api-method event",
        },
        {
          type: "doc",
          id: "reference/offer-api/updated-offer",
          label: "Updated offer",
          className: "api-method event",
        },
        {
          type: "doc",
          id: "reference/offer-api/deleted-offer",
          label: "Deleted offer",
          className: "api-method event",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
