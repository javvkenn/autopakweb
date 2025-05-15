import type { CollectionConfig } from "payload/types"

const ContactInfo: CollectionConfig = {
  slug: "contact-info",
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
      defaultValue: "Company Contact Information",
    },
    {
      name: "phones",
      type: "array",
      fields: [
        {
          name: "number",
          type: "text",
          required: true,
        },
        {
          name: "label",
          type: "text",
        },
      ],
    },
    {
      name: "emails",
      type: "array",
      fields: [
        {
          name: "address",
          type: "email",
          required: true,
        },
        {
          name: "label",
          type: "text",
        },
      ],
    },
    {
      name: "headquarters",
      type: "group",
      fields: [
        {
          name: "addressLine1",
          type: "text",
          required: true,
        },
        {
          name: "addressLine2",
          type: "text",
        },
        {
          name: "city",
          type: "text",
          required: true,
        },
        {
          name: "state",
          type: "text",
          required: true,
        },
        {
          name: "postalCode",
          type: "text",
          required: true,
        },
        {
          name: "country",
          type: "text",
          required: true,
        },
        {
          name: "mapEmbedUrl",
          type: "text",
          admin: {
            description: "Google Maps embed URL",
          },
        },
      ],
    },
    {
      name: "operatingHours",
      type: "array",
      fields: [
        {
          name: "days",
          type: "text",
          required: true,
          admin: {
            description: 'e.g., "Monday - Friday"',
          },
        },
        {
          name: "hours",
          type: "text",
          required: true,
          admin: {
            description: 'e.g., "8:00 AM - 6:00 PM"',
          },
        },
      ],
    },
    {
      name: "socialMedia",
      type: "array",
      fields: [
        {
          name: "platform",
          type: "select",
          required: true,
          options: [
            { label: "Facebook", value: "facebook" },
            { label: "Twitter", value: "twitter" },
            { label: "Instagram", value: "instagram" },
            { label: "LinkedIn", value: "linkedin" },
            { label: "YouTube", value: "youtube" },
          ],
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "globalOffices",
      type: "richText",
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Ensure only one contact info document exists
        return {
          ...data,
          _status: "published",
        }
      },
    ],
  },
}

export default ContactInfo
