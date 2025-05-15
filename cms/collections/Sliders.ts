import type { CollectionConfig } from "payload/types"

const Sliders: CollectionConfig = {
  slug: "sliders",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "status"],
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
      name: "status",
      type: "select",
      options: [
        {
          label: "Active",
          value: "active",
        },
        {
          label: "Inactive",
          value: "inactive",
        },
      ],
      defaultValue: "active",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "slides",
      type: "array",
      required: true,
      minRows: 1,
      admin: {
        components: {
          RowLabel: ({ data }) => {
            return data?.badge || "Slide"
          },
        },
      },
      fields: [
        {
          name: "badge",
          type: "text",
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
          name: "backgroundColorFrom",
          type: "text",
          required: true,
          defaultValue: "green-50",
          admin: {
            description: "Tailwind color class for gradient start (e.g., green-50)",
          },
        },
        {
          name: "backgroundColorTo",
          type: "text",
          required: true,
          defaultValue: "blue-50",
          admin: {
            description: "Tailwind color class for gradient end (e.g., blue-50)",
          },
        },
        {
          name: "buttonText",
          type: "text",
          defaultValue: "Learn More",
        },
        {
          name: "buttonLink",
          type: "text",
          defaultValue: "/products",
        },
        {
          name: "imageUrl",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
}

export default Sliders
