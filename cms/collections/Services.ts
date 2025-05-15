import type { CollectionConfig } from "payload/types"

const Services: CollectionConfig = {
  slug: "services",
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
        { label: "Package", value: "Package2" },
        { label: "Recycle", value: "Recycle" },
        { label: "Factory", value: "Factory" },
        { label: "Shield", value: "Shield" },
        { label: "Truck", value: "Truck" },
        { label: "Leaf", value: "Leaf" },
        { label: "Award", value: "Award" },
        { label: "Users", value: "Users" },
        { label: "CheckCircle", value: "CheckCircle2" },
      ],
    },
    {
      name: "order",
      type: "number",
      required: true,
      defaultValue: 0,
      admin: {
        position: "sidebar",
      },
    },
  ],
}

export default Services
