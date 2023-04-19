// This is the schema for the content pages
export const content = {
    name: "content",
    title: "Content",
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
        },
        {
            name: "portableText",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "block",
                },
            ],
            description: "An array of Portable Text blocks",
        },
    ],
};
