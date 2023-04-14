// This is the schema for the content pages
export const content = {
    name: "content", // name of the schema
    title: "Content", // title that will be displayed in the CMS
    type: "document", // type of schema
    fields: [ // This is the title that will be displayed on the page
        {
            name: "title",
            title: "Title",
            type: "string",
            // Cannot create a document with an empty title
            validation: (Rule) => Rule.required(),
        },
        {   // This is the slug that will be used to generate the page
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        { // This is the content that will be displayed on the page
            type: "markdown",
            description: "A Github flavored markdown field with image uploading",
            name: "markdown",
        },
    ],
    }