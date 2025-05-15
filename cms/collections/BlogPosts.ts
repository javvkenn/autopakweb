import type { CollectionConfig } from "payload/types"

const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "author", "publishedDate", "status"],
  },
  access: {
    read: ({ req }) => {
      // If there's no user, only published posts are accessible
      if (!req.user) {
        return {
          status: {
            equals: "published",
          },
        }
      }
      // If there is a user, all posts are accessible
      return true
    },
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
        description: "URL-friendly version of the title (e.g., sustainable-industrial-packaging)",
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "authors",
      required: true,
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      required: true,
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
    },
    {
      name: "publishedDate",
      type: "date",
      required: true,
    },
    {
      name: "readTime",
      type: "number",
      required: true,
      admin: {
        description: "Estimated read time in minutes",
      },
    },
    {
      name: "status",
      type: "select",
      options: [
        {
          label: "Draft",
          value: "draft",
        },
        {
          label: "Published",
          value: "published",
        },
      ],
      defaultValue: "draft",
      required: true,
    },
    {
      name: "relatedPosts",
      type: "relationship",
      relationTo: "blog-posts",
      hasMany: true,
      filterOptions: ({ id }) => {
        // Can't relate to itself
        return {
          id: {
            not_equals: id,
          },
        }
      },
    },
  ],
}

export default BlogPosts
