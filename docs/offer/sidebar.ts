import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
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
          id: "offer/schemas/category",
          label: "Category",
          className: "schema",
        },
        {
          type: "doc",
          id: "offer/schemas/city",
          label: "City",
          className: "schema",
        },
        {
          type: "doc",
          id: "offer/schemas/country",
          label: "Country",
          className: "schema",
        },
        {
          type: "doc",
          id: "offer/schemas/device",
          label: "Device",
          className: "schema",
        },
        {
          type: "doc",
          id: "offer/schemas/goal",
          label: "Goal",
          className: "schema",
        },
        {
          type: "doc",
          id: "offer/schemas/os",
          label: "Os",
          className: "schema",
        },
        {
          type: "doc",
          id: "offer/schemas/state",
          label: "State",
          className: "schema",
        },
        {
          type: "doc",
          id: "offer/schemas/sticker",
          label: "Sticker",
          className: "schema",
        },
        {
          type: "doc",
          id: "offer/schemas/basic-requirements",
          label: "Basic Requirements",
          className: "schema",
        },
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
};

export default sidebar.apisidebar;
