// seo.js
export const seo = {
  name: 'seo',
  title: 'Search Engine Optimization',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title tag for the page. Useful for SEO and social sharing.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'The description for the page. Useful for SEO and social sharing.',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'A list of keywords for the page. Useful for SEO.',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'The image to be used for social sharing and previews.',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ogType',
      title: 'Open Graph Type',
      type: 'string',
      description: 'The type of the Open Graph object (e.g. "website" or "article").',
    },
    {
      name: 'twitterCard',
      title: 'Twitter Card Type',
      type: 'string',
      description: 'The type of the Twitter Card (e.g. "summary_large_image" or "summary").',
    },
    {
      name: 'ogUrl',
      title: 'Open Graph URL',
      type: 'url',
      description: 'The canonical URL of the page. Useful for Open Graph.',
    },
    {
      name: 'ogSiteName',
      title: 'Open Graph Site Name',
      type: 'string',
      description: 'The name of the website. Useful for Open Graph.',
    },
    {
      name: 'metaRobots',
      title: 'Meta Robots',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Index', value: 'index' },
          { title: 'No Index', value: 'noindex' },
          { title: 'Follow', value: 'follow' },
          { title: 'No Follow', value: 'nofollow' },
        ],
      },
      description: 'The meta robots directives for search engines.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      image: 'image',
    },
    prepare(selection) {
      const { title, description, image } = selection;
      return {
        title: title || 'No title set',
        subtitle: description || 'No description set',
        media: image,
      };
    },
  },
};
