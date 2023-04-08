// schemas/hero.js

export const hero = {
    name: 'hero',
    title: 'Hero',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
      },
      {
        name: 'backgroundImage',
        title: 'Background Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'ctaText',
        title: 'Call to Action Text',
        type: 'string',
      },
      {
        name: 'ctaLink',
        title: 'Call to Action Link',
        type: 'string',
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'subtitle',
        media: 'backgroundImage',
      },
      prepare(selection) {
        const { title, subtitle } = selection;
        return {
          ...selection,
          subtitle: subtitle,
        };
      },
    },
  };
  