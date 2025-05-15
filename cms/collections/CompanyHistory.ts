import type { CollectionConfig } from "payload/types"

const CompanyHistory: CollectionConfig = {
  slug: "company-history",
  admin: {
    useAsTitle: "title",
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
      name: "subtitle",
      type: "text",
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "yearFounded",
      type: "number",
      required: true,
    },
    {
      name: "founderName",
      type: "text",
    },
    {
      name: "milestones",
      type: "array",
      fields: [
        {
          name: "year",
          type: "number",
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
        },
      ],
    },
  ],
}

export default CompanyHistory
