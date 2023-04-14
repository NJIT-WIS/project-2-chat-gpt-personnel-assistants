export const page = {
    name: "page",
    title: "Page",
    type: "document",
    fields: [
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
        name: "menu",
        title: "Menu",
        type: "reference",
        to: [{ type: "menu" }],
        description: "Select a menu to be displayed on this page",
      },
      {
        name: "hero",
        title: "Hero",
        type: "reference",
        to: [{ type: "hero" }],
        description: "Select a hero post to be displayed on this page",
      },
     
      {
        name: "posts",
        title: "Posts",
        type: "array",
        of: [{ type: "reference", to: [{ type: "post" }] }],
        description: "Select the posts to be displayed on this page",
      },
      // Add other fields if needed
      {
        name: 'seo',
        title: 'SEO',
        type: 'seo', // Change this from 'reference' to 'seo'
        description: 'Search engine optimization settings for this page',
      },
      {
        name: 'footer',
        title: 'Footer',
        type: 'reference',
        to: [{ type: "footer" }],
        description: 'Select a footer to be displayed on this page',
      },
    ],
    preview: {
        select: {
            title: "title",
            hero: "hero.title",
            menu: "menu.title",
            seoTitle: 'seo.title',
            footer: 'footer.title',
          },
      prepare(selection) {
        const { hero, menu, seoTitle, footer } = selection;
        return {
          title: selection.title,
          subtitle: `Hero: ${hero || 'None'}, Menu: ${menu || 'None'}, SEO: ${seoTitle || 'None'}, Footer: ${footer || 'None'}`,
        };
      },
    },
  };
  