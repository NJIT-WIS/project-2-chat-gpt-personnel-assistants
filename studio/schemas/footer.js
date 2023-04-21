// footer.js
export const footer = {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'links',
        title: 'Links',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Text',
                type: 'string',
              },
              {
                name: 'url',
                title: 'URL',
                type: 'url',
              },
            ],
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  };
  