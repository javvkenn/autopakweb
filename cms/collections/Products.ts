import type { CollectionConfig } from "payload/types"

const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "type", "updatedAt"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "URL-friendly version of the product name (e.g., standard-wpp-bags)",
      },
    },
    {
      name: "type",
      type: "select",
      options: [
        { label: "Standard WPP Bags", value: "standard" },
        { label: "Laminated WPP Bags", value: "laminated" },
        { label: "BOPP Printed Bags", value: "bopp" },
        { label: "Custom WPP Solutions", value: "custom" },
      ],
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "content",
      type: "textarea",
      required: true,
    },
    {
      name: "features",
      type: "array",
      fields: [
        {
          name: "feature",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "specifications",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "value",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "applications",
      type: "array",
      fields: [
        {
          name: "industry",
          type: "text",
          required: true,
        },
        {
          name: "uses",
          type: "array",
          fields: [
            {
              name: "use",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    {
      name: "variants",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
}

export default Products
