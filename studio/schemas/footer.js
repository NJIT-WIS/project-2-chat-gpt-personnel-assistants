// footer.js
export const footer = {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "websiteTitle",
      title: "Website Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "logo",
      title: "logo",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Section Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "items",
              title: "Items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Item Title",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: "link",
                      title: "Item Link",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
