import type { CollectionConfig } from "payload/types"

const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name",
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
        description: "URL-friendly version of the name (e.g., sustainability)",
      },
    },
    {
      name: "description",
      type: "textarea",
    },
  ],
}

export default Categories
