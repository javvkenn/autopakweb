import type { CollectionConfig } from "payload/types"

const CoreValues: CollectionConfig = {
  slug: "core-values",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "order"],
  },
  access: {
    read: () => true,
  },
  fields: [
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
      name: "icon",
      type: "select",
      required: true,
      options: [
        { label: "Leaf", value: "Leaf" },
        { label: "Award", value: "Award" },
        { label: "Factory", value: "Factory" },
        { label: "Users", value: "Users" },
        { label: "Shield", value: "Shield" },
        { label: "Recycle", value: "Recycle" },
        { label: "Package", value: "Package2" },
        { label: "Truck", value: "Truck" },
      ],
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: {
        position: "sidebar",
      },
    },
  ],
}

export default CoreValues
