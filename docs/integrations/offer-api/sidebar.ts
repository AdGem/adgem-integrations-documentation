import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "integrations/offer-api/offer-api",
    },
    {
      type: "category",
      label: "Offers",
      link: {
        type: "doc",
        id: "integrations/offer-api/offer",
      },
      items: [
        {
          type: "doc",
          id: "integrations/offer-api/schemas/category",
          label: "Category",
          className: "schema",
        },
        {
          type: "doc",
          id: "integrations/offer-api/schemas/city",
          label: "City",
          className: "schema",
        },
        {
          type: "doc",
          id: "integrations/offer-api/schemas/country",
          label: "Country",
          className: "schema",
        },
        {
          type: "doc",
          id: "integrations/offer-api/schemas/device",
          label: "Device",
          className: "schema",
        },
        {
          type: "doc",
          id: "integrations/offer-api/schemas/goal",
          label: "Goal",
          className: "schema",
        },
        {
          type: "doc",
          id: "integrations/offer-api/schemas/os",
          label: "Os",
          className: "schema",
        },
        {
          type: "doc",
          id: "integrations/offer-api/schemas/state",
          label: "State",
          className: "schema",
        },
        {
          type: "doc",
          id: "integrations/offer-api/schemas/sticker",
          label: "Sticker",
          className: "schema",
        },
        {
          type: "doc",
          id: "integrations/offer-api/schemas/basic-requirements",
          label: "Basic Requirements",
          className: "schema",
        },
        {
          type: "doc",
          id: "integrations/offer-api/get-offers",
          label: "Retrieve untargeted offers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "integrations/offer-api/new-offer",
          label: "New offer",
          className: "api-method event",
        },
        {
          type: "doc",
          id: "integrations/offer-api/updated-offer",
          label: "Updated offer",
          className: "api-method event",
        },
        {
          type: "doc",
          id: "integrations/offer-api/deleted-offer",
          label: "Deleted offer",
          className: "api-method event",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
