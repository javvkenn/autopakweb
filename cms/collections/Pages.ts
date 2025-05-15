import type { CollectionConfig } from "payload/types"

const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
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
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "URL-friendly version of the title (e.g., about-us)",
      },
    },
    {
      name: "metaDescription",
      type: "textarea",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "sections",
      type: "blocks",
      blocks: [
        {
          slug: "hero",
          fields: [
            {
              name: "heading",
              type: "text",
              required: true,
            },
            {
              name: "subheading",
              type: "text",
            },
            {
              name: "image",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "ctaText",
              type: "text",
            },
            {
              name: "ctaLink",
              type: "text",
            },
          ],
        },
        {
          slug: "content",
          fields: [
            {
              name: "heading",
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
            },
            {
              name: "imagePosition",
              type: "select",
              options: [
                { label: "Left", value: "left" },
                { label: "Right", value: "right" },
              ],
              defaultValue: "right",
            },
          ],
        },
        {
          slug: "features",
          fields: [
            {
              name: "heading",
              type: "text",
              required: true,
            },
            {
              name: "subheading",
              type: "text",
            },
            {
              name: "features",
              type: "array",
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
                  type: "text",
                  admin: {
                    description: "Icon name from Lucide React (e.g., Package2, Recycle)",
                  },
                },
              ],
            },
          ],
        },
        {
          slug: "cta",
          fields: [
            {
              name: "heading",
              type: "text",
              required: true,
            },
            {
              name: "subheading",
              type: "text",
            },
            {
              name: "ctaText",
              type: "text",
              required: true,
            },
            {
              name: "ctaLink",
              type: "text",
              required: true,
            },
            {
              name: "backgroundColor",
              type: "select",
              options: [
                { label: "Green", value: "green" },
                { label: "White", value: "white" },
                { label: "Gray", value: "gray" },
              ],
              defaultValue: "green",
            },
          ],
        },
      ],
    },
  ],
}

export default Pages
