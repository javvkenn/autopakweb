import type { CollectionConfig } from "payload/types"

const ProcessSteps: CollectionConfig = {
  slug: "process-steps",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "step"],
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
      name: "step",
      type: "number",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
}

export default ProcessSteps
